import React from 'react';
import PropTypes from 'prop-types';
import './info-popup.css';

const InfoPopup = ({imageId, closeHandler}) => {

  const images = require('./images.json');

  console.log(imageId)

  const getImageProp = (prop) => {
    return (images ? images[imageId][prop] : null);
  }

  return (
    <div className="overlay">
        <div className="popup">
          <h2>Title/Description of Piece:</h2>
          <p>{getImageProp("description")}</p>
          <p><b>Value: </b>${getImageProp("value")}</p>
          <h2>About the Artist:</h2>
          <p>{getImageProp("artist")}</p>
          <button className="closeBtn" onClick={closeHandler}>X</button>
        </div>
    </div>
  )
};

InfoPopup.propTypes = {};

InfoPopup.defaultProps = {};

export default InfoPopup;
