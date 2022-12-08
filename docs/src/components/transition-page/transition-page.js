import './transition-page.css';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const TransitionPage = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
      navigate(props.basePath + '/allimages');
  } 
  return (
    <div className="transition-container">
        <h1>Surprise!</h1>
        <h1>this was <span className="fw-bold fst-italic">not</span> an ordinary auction
        </h1>
        <br/>
        <h1>
            half of the images you just saw were 
            <span className="fw-bold fst-italic"> AI-generated </span>by
            <span className="fw-bold fst-italic"> Midjourney</span>
        </h1>
        <div className="begin-centered" onClick={handleOnClick}>
            <div className="italicize">
                Can you guess which ones?
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

export default TransitionPage;