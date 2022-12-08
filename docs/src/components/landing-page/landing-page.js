import './landing-page.css';
import Rocket from "../../images/rocket-1.svg";
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const LandingPage = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
      navigate(props.basePath + '/begin');
  } 
  return (
    <div className = "landing">
        <div className="block">
          <img src={Rocket} alt="Rocket Image" />
        </div>
        <div className="block">
          <h1>Welcome!</h1>
          <p>Let us take you on an amazing adventure.
            Throughout this interactive game, we’ll be analyzing current perceptions 
            of art and the value that people assign to different art styles</p>
          <div className="begin" onClick={handleOnClick}>
            <div className="italicize">
              Let's begin!
            </div>
            <div className="arrow">
              <div>
                <BsArrowRight size={70}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;