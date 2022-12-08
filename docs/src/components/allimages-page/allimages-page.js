import "./allimages-page.css";
import React, { useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const NUMIMAGES = 24;
const correctImages = [1, 2, 4, 5, 6, 8, 9, 10, 11, 14, 19, 20];

const AllImagesPage = (props) => {
    var [selected, setSelected] = useState(0);
    var [show, setShow] = useState(false);
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
        if (selected === 12) {
            navigate(props.basePath + '/end');
        } else {
            setShow(true);
        }
    }

    const handleOnClickImage = (event) => {
        setShow(false);
        console.log(event);
        if (event.target.style.border === "3px solid rgb(39, 118, 230)") {
            setSelected(selected - 1);
            event.target.style.border = "none";
        } else {
            setSelected(selected + 1);
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
                alt="slider image"
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