import Image1 from '../../../images/pieces/1.jpg';
import Image2 from '../../../images/pieces/2.jpg';
import Image3 from '../../../images/pieces/3.jpg';
import Image4 from '../../../images/pieces/4.jpg';
import Image5 from '../../../images/pieces/5.jpg';
import Image6 from '../../../images/pieces/6.jpg';
import Image7 from '../../../images/pieces/7.jpg';
import Image8 from '../../../images/pieces/8.jpg';
import Image9 from '../../../images/pieces/9.jpg';
import Image10 from '../../../images/pieces/10.jpg';
import Image11 from '../../../images/pieces/11.jpg';
import Image12 from '../../../images/pieces/12.jpg';
import Image13 from '../../../images/pieces/13.jpg';
import Image14 from '../../../images/pieces/14.jpg';
import Image15 from '../../../images/pieces/15.jpg';
import Image16 from '../../../images/pieces/16.jpg';
import Image17 from '../../../images/pieces/17.jpg';
import Image18 from '../../../images/pieces/18.jpg';
import Image19 from '../../../images/pieces/19.jpg';
import Image20 from '../../../images/pieces/20.jpg';
import Image21 from '../../../images/pieces/21.jpg';
import Image22 from '../../../images/pieces/22.jpg';
import Image23 from '../../../images/pieces/23.jpg';
import Image24 from '../../../images/pieces/24.jpg';
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24
  ]
  
  const HomeCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel className= "mh-50" activeIndex={index} onSelect={handleSelect}>
         {images.map((image, i) => {
          return (
            <Carousel.Item>        
          <div className="piece">
            <img
              className="d-block"
              src={image}
              alt="slider image"
            />
          </div>
          <Carousel.Caption>
            <p>Image #{i+1}</p>
          </Carousel.Caption>
          </Carousel.Item>
          
          )
        })}
        
        </Carousel>
    );
  }
  
  export default HomeCarousel;