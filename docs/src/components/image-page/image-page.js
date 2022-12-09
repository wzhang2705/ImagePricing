import './image-page.css';
import React from "react";
import HomeCarousel from './home-carousel/home-carousel';
import MyForm from './my-form/my-form';

const ImagePage = (props) => {
  return (
    <div className="wrapper pb-5">
      <h2 className="pb-5"><span role="img" aria-label="palette">🎨</span> Here are the pieces: </h2>
      <div className = "image">
        <HomeCarousel/>        
      </div>
      <MyForm basePath={props.basePath}/>
    </div>
  );
}

export default ImagePage;