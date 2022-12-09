import React, { useEffect, useState } from 'react';
import './graph-page.css';
import { useNavigate } from 'react-router-dom';
import settings from "../../config"
import descriptions from "../../images/images"
import CanvasJSReact from './canvasjs.react'
import Modal from 'react-bootstrap/Modal'
import { BsArrowRight } from 'react-icons/bs';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const NUMIMAGES = 24;
const NUMLIKERTQS = 4;

const image_pairs = [
  [15, 1], [18, 2], [3, 14], [13, 4],
  [12, 5], [23, 6], [7, 20], [16, 8],
  [17, 9], [21, 10], [22, 11], [24, 19]
]

const generatedImages = [1, 2, 4, 5, 6, 8, 9, 10, 11, 14, 19, 20];

const likertLabels = [
  "I can tell the difference between artist pieces and AI-generated content.",
  "AI-generated content and original artist pieces should be given equal value.",
  "I prefer original artist pieces over AI-generated content.",
  "I am invested in the art world.",
]

const likertLegend = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
]

const likertColours = [
  "#03045E",
  "#0077B6",
  "#00B4D8",
  "#90E0EF",
  "#CAF0F8",
]

const GraphPage = (props) => { 
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  const [averageValuations, setAverageValuations] = useState(null) // for individual average valuation graphs
  const [averageAccuracy, setAverageAccuracy] = useState(null) // accuracy
  const [coptions, setCoptions] = useState({})
  const [show, setShow] = useState(false)
  const [activeImage, setActiveImage] = useState(1)
  const [overallValuation, setOverallValuation] = useState(null) // [original, generated]
  const [participantAccuracy, setParticipantAccuracy] = useState(null)
  const [confidence, setConfidence] = useState(null)
  const [likertData, setLikertData] = useState(null)
  const [userValuations, setUserValuations] = useState(null)
  const [userAccuracy, setUserAccuracy] = useState(null)
  const [perceivedValuation, setPerceivedValuation] = useState(null)

  let handleOnClick = () => {
    navigate(props.basePath + '/end')
  }

  let images = []
  for (let id = 1; id <= NUMIMAGES; id++) {
    images.push(
    {
      img: require('../../images/pieces/' + id + '.jpg'),
      key: id
    }
    );
  }

  let getPreferenceData = function(valuations, preferences) {
    let overall = [0, 0]
    for (let i = 0; i < valuations.length; i++) {
      for (let j = 0; j < NUMIMAGES; j++) {
        overall[preferences[i].includes(j + 1) ? 1 : 0] += valuations[i][j]
      }
    }
    setPerceivedValuation(overall)
  }

  let calculateLOBF = function(values_x, values_y) { // basic linear regression
    var x_sum = 0;
    var y_sum = 0;
    var xy_sum = 0;
    var xx_sum = 0;
    var count = 0;
    var x = 0;
    var y = 0;
    var values_length = values_x.length;
    if (values_length === 0) {
        return [ [], [] ];
    }
    for (let i = 0; i< values_length; i++) {
        x = values_x[i];
        y = values_y[i];
        x_sum+= x;
        y_sum+= y;
        xx_sum += x*x;
        xy_sum += x*y;
        count++;
    }
    var m = (count*xy_sum - x_sum*y_sum) / (count*xx_sum - x_sum*x_sum);
    var b = (y_sum/count) - (m*x_sum)/count;
    var result_values_x = [];
    var result_values_y = [];

    for (let i = 0; i < values_length; i++) {
        x = values_x[i];
        y = x * m + b;
        result_values_x.push(x);
        result_values_y.push(y);
    }

    return [result_values_x, result_values_y];
  }

  let generateGraphs = function() {
    let chart_options = []
    let lobf = calculateLOBF(participantAccuracy, confidence)
    console.log(lobf)
    for (let pair of image_pairs) { // individual valuation graphs
      chart_options[pair[0]] = { // original
        title: {
          text: "Average Valuation Compared to Generated Image",
          fontFamily: "Raleway",
          fontSize: 20,
        },
        axisX: {
          title: "",
          reversed: true, 
          labelFontFamily: "Raleway" 
        },
        axisY: {
          title: "Average Valuation (normalized out of $10 million)",
          minimum: 0,
          titleFontFamily: "Raleway",
          titleFontWeight: "normal",
          labelFontFamily: "Raleway" 
        },
        toolTip: {
          contentFormatter: (e) => `$${e.entries[0].dataPoint.y.toFixed(2)}`
        },
        data: [{
          type: "bar",
          dataPoints: [
            { label: "This Image", y: averageValuations[pair[0] - 1], color: likertColours[1] },
            { label: `Generated Image (#${pair[1]})`, y: averageValuations[pair[1] - 1], color: likertColours[3]}
        ]}]
      }
      chart_options[pair[1]] = { // generated
        title: {
          text: "Average Valuation Compared to Original Image",
          fontFamily: "Raleway",
          fontSize: 20,
        },
        axisX: {
          title: "",
          reversed: true, 
          labelFontFamily: "Raleway" 
        },
        axisY: {
          title: "Average Valuation (normalized out of $10 million)",
          minimum: 0,
          titleFontFamily: "Raleway",
          titleFontWeight: "normal",
          labelFontFamily: "Raleway" 
        },
        toolTip: {
          contentFormatter: (e) => `$${e.entries[0].dataPoint.y.toFixed(2)}`
        },
        data: [{
          type: "bar",
          dataPoints: [
            { label: `Original Image (#${pair[0]})`, y: averageValuations[pair[0] - 1], color: likertColours[1] },
            { label: "This Image", y: averageValuations[pair[1] - 1], color: likertColours[3]}
        ]}]
      }
    }
    chart_options[0] = { // overall
      title: {
        text: "Overall Average Valuation: Original vs. Generated",
        fontFamily: "Raleway",
        fontSize: 20,
      },
      axisX: {
        title: "",
        reversed: true, 
        labelFontFamily: "Raleway" 
      },
      axisY: {
        title: "Average Valuation (normalized out of $10 million)",
        minimum: 0,
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway" 
      },
      toolTip: {
        contentFormatter: (e) => `$${e.entries[0].dataPoint.y.toFixed(2)}`
      },
      data: [{
        type: "bar",
        dataPoints: [
          { label: "Original", y: overallValuation[0], color: likertColours[1] },
          { label: "Generated", y: overallValuation[1], color: likertColours[3]}
      ]}]
    }
    chart_options[25] = { // accuracy
      title: {
        text: `Accuracy on Identifying AI-Generated Images (Average Accuracy: ${(participantAccuracy.reduce((a, b) => a + b) / participantAccuracy.length * 100).toFixed(2)}%)`,
        fontFamily: "Raleway",
        fontSize: 20,
      },
      axisX: {
        title: "Participant #",
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway" 
      },
      axisY: {
        title: "Accuracy (%)",
        minimum: 0,
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway" 
      },
      toolTip: {
        contentFormatter: (e) => `${(e.entries[0].dataPoint.y * 100).toFixed(2)}%`
      },
      data: [{
        type: "line",
        color: likertColours[2],
        dataPoints: participantAccuracy.map((item, i) => {return { label: i + 1, y: item}})
      }]
    }
    chart_options[26] = { // likert
      title: {
        text: "Likert Scale Ratings of Perceptions Towards AI-Generated Art",
        fontFamily: "Raleway",
        fontSize: 20,
      },
      legend: {
        verticalAlign: "top"
      },
      axisX: {
        reversed: true,
        labelFontFamily: "Raleway",
        labelFormatter: (e) => `Q${e.value + 1}: ${likertLabels[e.value]}`
      },
      axisY: {
        title: "Frequency of Rating",
        minimum: 0,
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway" 
      },
      toolTip: {
        contentFormatter: (e) => `${e.entries[0].dataPoint.y}`
      },
      data: likertData.map((item, j) => {
        return {
          type: "stackedBar",
          showInLegend: true,
          legendText: likertLegend[j],
          color: likertColours[j],
          dataPoints: item.map((value, i) => {
            return {
              x: i,
              y: value
            }
          })
        }
      })
    }
    chart_options[27] = { // accuracy vs confidence
      title: {
        text: "Accuracy vs. Perceived Ability to Tell the Difference between Original and Generated Images",
        fontFamily: "Raleway",
        fontSize: 20,
      },
      axisX: {
        title: "Accuracy",
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway",
        minimum: 0,
        maximum: 1,
      },
      axisY: {
        title: "Q1 Response",
        minimum: 0,
        maximum: 6,
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway" ,
      },
      data: [
        {
          type: "scatter",
          dataPoints: participantAccuracy.map((item, i) => {
            return {
              x: item, 
              y: confidence[i], 
              color: likertColours[confidence[i] - 1]
            }
          })
        },
        {
          type: "line",
          dataPoints: lobf[0].map((item, i) => {
            return {
              x: item, 
              y: lobf[1][i],
              markerType: "none",
              lineColor: likertColours[2]
            }
          })
        }
      ]
    }
    chart_options[28] = { // perceived valuation
      title: {
        text: "Overall Valuation: Perceived as Original vs. Generated",
        fontFamily: "Raleway",
        fontSize: 20,
      },
      axisX: {
        title: "Perception",
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        reversed: true, 
        labelFontFamily: "Raleway" 
      },
      axisY: {
        title: "Total Valuation (normalized out of $10 million)",
        minimum: 0,
        titleFontFamily: "Raleway",
        titleFontWeight: "normal",
        labelFontFamily: "Raleway" 
      },
      toolTip: {
        contentFormatter: (e) => `$${e.entries[0].dataPoint.y.toFixed(2)}`
      },
      data: [{
        type: "bar",
        dataPoints: [
          { label: "Original", y: perceivedValuation[0], color: likertColours[1] },
          { label: "Generated", y: perceivedValuation[1], color: likertColours[3]}
      ]}]
    }
    setCoptions(chart_options)
  }

  let getLikertData = function(data) {
    let counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < NUMLIKERTQS; j++) {
        counts[data[i][j] - 1][j] += 1
      }
    }
    setConfidence(data.map(item => item[0]))
    setLikertData(counts)
  }

  let getAccuracyData = function(data) {
    let accuracy = new Array(24).fill(0);
    let individual_accuracy = []
    for (let entry of data) {
      let curr_accuracy = 0
      for (let i = 0; i < NUMIMAGES / 2; i++) {
        accuracy[entry[i] - 1] += 1 // how many people identified this as generated, regardless of correctness
        curr_accuracy += generatedImages.includes(entry[i]) ? 1 : 0
      }
      individual_accuracy.push(curr_accuracy / (NUMIMAGES / 2))
    }
    accuracy = accuracy.map((item, i) => generatedImages.includes(i + 1) ? item / data.length : 1 - item / data.length)
    setAverageAccuracy(accuracy)
    setParticipantAccuracy(individual_accuracy)
  }

  let getChartData = function(data) {
    let sums = new Array(24).fill(0); // sum of valuations of each image
    for (let entry of data) {
      for (let i = 0; i < 24; i++) {
        sums[i] += entry[i]
      }
    }
    let avg = sums.map((item) => item / data.length); // average valuation per image
    setAverageValuations(avg)
    let overall = [0, 0]
    for (let i = 0; i < NUMIMAGES; i++) {
      overall[generatedImages.includes(i + 1) ? 1 : 0] += avg[i]
    }
    overall = overall.map(item => item / (NUMIMAGES / 2))
    setOverallValuation(overall)
  }

  let onLoad = (data, error) => {
    if (data) {
      let user_data = JSON.parse(localStorage.getItem("valuation_data"))
      user_data.push(localStorage.getItem("multiselect_data"))
      user_data = user_data.concat([
        parseInt(localStorage.getItem("q1")), 
        parseInt(localStorage.getItem("q2")), 
        parseInt(localStorage.getItem("q3")), 
        parseInt(localStorage.getItem("q4"))
      ])
      data.push(user_data)
      processData(data)
    } else {
      console.log(error)
    }
  }

  let processData = function(raw_data) {
    const intended_total_valuation = 10000000;
    let total_valuations = []; // how much each person spent
    for (const entry of raw_data) {
      let current_sum = 0;
      for (let i = 0; i < 24; i++) {
        current_sum += parseInt(entry[i]);
      }
      total_valuations.push(current_sum)
    }    
    let processed_data = raw_data.map(function(entry, j) {
      let ret = []
      ret.push(entry.slice(0, 24).map(item => item / total_valuations[j] * intended_total_valuation))
      ret.push(entry[24].split(', ').map(num => parseInt(num)))
      ret.push(entry.slice(25, 29).map(num => parseInt(num)))
      return ret
    })
    setData(processed_data)

    // get user data
    setUserValuations(JSON.parse(localStorage.getItem("valuation_data")))
    setUserAccuracy(JSON.parse(localStorage.getItem("user_multiselect")))
  }

  let load = function(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: settings.spreadsheetId,
        range: "Form responses 1!B2:AD" // don't care about the datetime of submission
      }).then((response) => {
        let data = response.result.values;
        callback(data)
      }, response => {
        callback(false, response.result.error)
      })
    })
  }

  let initClient = () => {
    window.gapi.client.init({
      apiKey: settings.apiKey,
      discoveryDocs: settings.discoveryDocs
    }).then(() => {
      load(onLoad)
    })
  }

  useEffect(() => {
    if (averageValuations && overallValuation && participantAccuracy && likertData && perceivedValuation) {
      generateGraphs()
    }
  }, [averageValuations, overallValuation, participantAccuracy, likertData, perceivedValuation])

  useEffect(() => {
    if (data !== null) {
      getChartData(data.map(entry => entry[0]))
      getAccuracyData(data.map(entry => entry[1]))
      getLikertData(data.map(entry => entry[2]))
      getPreferenceData(data.map(entry => entry[0]), data.map(entry => entry[1]))
    }
  }, [data])

  useEffect(() => {
    if (window.gapi) {
      window.gapi.load("client", initClient);
    }
  }, [])

  return (
    <div className="">
      <h1 className="graph-title">Let's take a look at the results.</h1>
      <p>Click an image to see more information!</p>
      <div className="images-container">
          {images.map((image, i) => {
            return (<img
                className="d-block image-sizing rounded mb-3"
                src={image.img}
                alt={image.key}
                key={image.key}
                onClick={() => {
                  setActiveImage(image.key)
                  setShow(true)
                }}
              />)
          })}
      </div>
      <Modal show={show} onHide={() => setShow(false)} contentClassName="graph-modal">
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: "Raleway"}}>{descriptions[activeImage - 1].title} by {descriptions[activeImage - 1].artist} - {generatedImages.includes(activeImage) ? "Generated" : "Original"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={require(`../../images/pieces/${activeImage}.jpg`)}
            alt={activeImage}
          />
          <h3>{" "}</h3>
          <br></br>
          <h3 className="graph-title">Image Description</h3>
          <p>{descriptions[activeImage - 1].description}</p>
          <br></br>
          <h3 className="graph-title">Artist Description</h3>
          <p>{descriptions[activeImage - 1].artist_description}</p>
          <br></br>
          <h3 className="graph-title">Valuation</h3>
          <p>The original valuation of this piece was <span className="fw-bold">${descriptions[activeImage - 1].value}.</span></p>
          {userValuations && <p>You valued this piece at <span className="fw-bold text-primary">${userValuations[activeImage - 1].toFixed(2)}.</span></p>}
          {averageValuations && <p>Average valuation: <span className="fw-bold">${averageValuations[activeImage - 1].toFixed(2)}</span></p>}
          {coptions && coptions[activeImage] && <CanvasJSChart options={coptions[activeImage]} />}
          <br></br>
          <h3 className="graph-title">Accuracy</h3>
          {userAccuracy && <p>You {userAccuracy[activeImage - 1] === 0? <span className="fw-bold text-danger">did not </span> : <span className="fw-bold text-success">did </span> }correctly identify this piece as {generatedImages.includes(activeImage) ? "generated" : "original"}.</p>}
          {averageAccuracy && <p>Average accuracy for this image: <span className="fw-bold">{(averageAccuracy[activeImage - 1] * 100).toFixed(2)}%</span></p>}
        </Modal.Body>
      </Modal>
      <br></br>
      <p className="fw-bold fst-italic p-3">First, we were mainly curious about the average valuation between 
      original artist pieces and AI generated pieces.</p>
      <br></br>
      {coptions && coptions[0] && <CanvasJSChart options={coptions[0]} />}
      <p className="fw-bold fst-italic p-3">Initial results had indicated that original content was favoured equally to AI-generated content.
      With more recent results, it appears that AI generated content was valued much higher than original artist pieces, which was quite surprising.
      To further explain why that might be, we wanted to explore
      <span className="text-primary"> whether or not users can actually tell the difference between AI-generated and original human-made works.</span></p>
      <br></br>
      {coptions && coptions[25] && <CanvasJSChart options={coptions[25]} />}
      <p className="fw-bold fst-italic p-3">With the overall average accuracy being only about 50%, we can conclude that most people cannot tell the difference
      between AI-generated content and original artist pieces. This shows the great advancements that these generative models have made in recent years.
      </p>
      <br></br>
      <p className="fw-bold fst-italic p-3">
      Finally, we wanted to collect some final question data to assess general user sentiments towards to the topic of art and AI.
      </p>
      {coptions && coptions[26] && <CanvasJSChart options={coptions[26]} />}
      <p className="fw-bold fst-italic p-3">
      Overall, it appears that our general demographic of surveyors are not very invested in the art world, which could have greatly impacted
      our results of the accuracy of identifying AI vs humanmade works. From the next two questions, it appears that most people claim to prefer
      original pieces over AI generated pieces, and believed they shouldn't be valued equally, suggesting that they would value original pieces more. This appears contrary to
      our overall result of people valuing AI-generated pieces more. Ultimately, it comes back to the notion that people cannot tell the difference between AI and original
      pieces. Finally, while our results show that people have low accuracies on detecting AI-generated images, <span className="text-primary">it appears that almost a quarter of people still believe that they
      in fact CAN tell the difference.</span></p>
      <p className="fw-bold fst-italic p-3">
        We tried to find a correlation between how able a participant thought they were at differentiating between original and AI-generated images and their actual accuracy, and found that there was a fairly weak correlation between the two.
      </p>
      {coptions && coptions[27] && <CanvasJSChart options={coptions[27]} />}
      <p className="fw-bold fst-italic p-3">
        We also explored participants' valuation behaviour based on the images that they thought were generated, and we found that regardless of whether or not they were correct, they valued pieces that they thought were original <span className="text-primary">much higher</span> than those that they thought were 
        AI-generated. This makes sense alongside our Likert Scale data, where most participants stated that they enjoyed original artist pieces over AI-generated content.
      </p>
      {coptions && coptions[28] && <CanvasJSChart options={coptions[28]} />}
      <div className="continue" onClick={handleOnClick}>
        <div className="italicize">
          The End
        </div>
        <div className="arrow">
          <div>
            <BsArrowRight size={70}/>
          </div>
        </div>
        </div>
    </div>
  );
}

export default GraphPage;