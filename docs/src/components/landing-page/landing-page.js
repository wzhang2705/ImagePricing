import './landing-page.css';
import Rocket from "../../images/rocket-1.svg";
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import InfoPopup from '../info-popup/info-popup';
import React from 'react';

const LandingPage = (props) => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = React.useState(true);
  const [popupData, setPopupData] = React.useState(0);

  const handlePopupOpen = () => {
    setPopupData(1); //set image index here
    setShowPopup(true)
  } 

  const handlePopupClose = () => {
    setPopupData(-1);
    setShowPopup(false)
  }


  return (
    <div className = "landing">
      { showPopup ? <InfoPopup imageId={popupData} closeHandler={handlePopupClose}/> : null }
      <div className="block">
        <img src={Rocket} alt="Rocket Image" />
      </div>
      <div className="block">
        <h1>Welcome!</h1>
        <p>Let us take you on an amazing adventure.
          Throughout this interactive game, we’ll be analyzing current perceptions 
          of art and the value that people assign to different art styles</p>
        <div className="begin" onClick={handlePopupOpen}>
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
