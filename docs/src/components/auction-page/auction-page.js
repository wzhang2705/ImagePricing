import './auction-page.css';
import Artist from '../../images/101892-artist.gif';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const AuctionPage = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(props.basePath + '/image');
  }

  return (
    <div className = "landing">
        <div className="block">
          <img src={Artist} alt="artist" />
        </div>
        <div className="block">
          <p>Imagine you are at an art auction. You’ve been given a total of $10M. 
            You have to spend it all over the following 24 pieces.</p>
          <div className="begin" onClick={handleOnClick}>
            <div className="italicize">
              How will you allocate your money?
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

export default AuctionPage;