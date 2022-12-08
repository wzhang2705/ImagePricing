import './graph-page.css';
// import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import settings from "./config"
import CanvasJSReact from './canvasjs.react'
import Carousel from 'react-bootstrap/Carousel'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const image_pairs = [
  [15, 1], [18, 2], [3, 14], [13, 4],
  [12, 5], [23, 6], [7, 20], [16, 8],
  [17, 9], [21, 10], [22, 11], [24, 19]
]

const GraphPage = (props) => { 
  // const navigate = useNavigate();
  const [data, setData] = useState(null)
  const [averageValuations, setAverageValuations] = useState(null) // for individual average valuation graphs
  const [coptions, setCoptions] = useState(null)

  let generateGraphs = function() {
    let chart_options = []
    for (let pair of image_pairs) {
      chart_options.push({
        title: {
          text: "Average Valuation of ______",
          fontFamily: "Raleway"
        },
        axisX: {
          title: "Image",
          reversed: true, 
          titleFontFamily: "Raleway",
          titleFontWeight: "normal",
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
            { label: "Original", y: averageValuations[pair[0] - 1] },
            { label: "Generated", y: averageValuations[pair[1] - 1]}
          ]
        }]
      })
    }
    setCoptions(chart_options)
  }

  let getChartData = function(data) {
    let sums = new Array(24).fill(0); // sum of valuations of each image
    for (let entry of data) {
      for (let i = 0; i < 24; i++) {
        sums[i] += entry[0][i]
      }
    }
    let avg = sums.map((item) => item / data.length);
    setAverageValuations(avg)
    // for (const pair of image_pairs) {
    //   console.log(pair)
    // }
  }

  let onLoad = (data, error) => {
    if (data) { 
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
    if (averageValuations) {
      generateGraphs()
    }
  }, [averageValuations])

  useEffect(() => {
    if (data !== null) {
      getChartData(data)
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
      {/* <Carousel variant="dark">
        { coptions && coptions.map((option, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="chart">
                <CanvasJSChart options={option} />
              </div>
              <br></br>
              <Carousel.Caption>
                <p>Title for graph {i}</p>
                <p> hello??? </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel> */}

      <div className="graph-container">
        { coptions && coptions.map((option, i) => { 
          return <div key={i}><CanvasJSChart options={option} /></div>
        })
        }
      </div>
      
    </div>
  );
}

export default GraphPage;