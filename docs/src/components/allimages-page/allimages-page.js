import "./allimages-page.css";
import React, { useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NUMIMAGES = 24;
const correctImages = [1, 2, 4, 5, 6, 8, 9, 10, 11, 14, 19, 20];

const AllImagesPage = (props) => {
    var [selected, setSelected] = useState(0);
    var [show, setShow] = useState(false);
    var [showAccuracy, setShowAccuracy] = useState(false);
    var [accuracy, setAccuracy] = useState(0);
    var images = []

    for (let id = 1; id <= NUMIMAGES; id++) {
        images.push(
        {
            img: require('../../images/pieces/' + id + '.jpg')
        }
        );
    }

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(props.basePath + '/results');
    }

    const handleSubmit = () => {
        if (selected === 12) {
            setShowAccuracy(true);
        } else {
            setShow(true);
        }
    }

    const handleOnClickImage = (event) => {
        setShow(false);
        setShowAccuracy(false);
        console.log(event);
        if (event.target.style.border === "3px solid rgb(39, 118, 230)") {
            setSelected(selected - 1);
            if (correctImages.includes(parseInt(event.target.id))) {
                setAccuracy(accuracy - 1);
            }
            event.target.style.border = "none";
        } else {
            setSelected(selected + 1);
            if (correctImages.includes(parseInt(event.target.id))) {
                setAccuracy(accuracy + 1);
            }
            event.target.style.border = "3px solid rgb(39, 118, 230)";
        }
    }

    return (
        <div>
          <h1 className="pb-1">Take another look at all the pieces</h1>
          <h1 className="pb-5">Which ones do you think are AI-generated?</h1>
        <div className="images-container">
          {images.map((image, i) => {
            return (<img
                className="d-block image-sizing rounded mb-3"
                src={image.img}
                alt={`slider ${i}`}
                id={i+1}
                onClick={handleOnClickImage}
              />)
          })}
        </div>
          <p>You've selected
            <span className="fw-bold"> {selected} </span>
            pieces so far.</p>
          {show && (
            <p className="mx-auto text-danger">You must select 12 pieces</p>
          )}
          {showAccuracy && (
            <p>{Math.round(accuracy / 12 * 100)}%</p>
          )}
          <Button variant="success" onClick={handleSubmit}>Check Accuracy</Button>{' '}
          <br/>
          <div className="begin float-end" onClick={handleOnClick}>
            <div className="italicize">
              Go next
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

export default AllImagesPage;