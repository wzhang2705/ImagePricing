import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

  const NUMIMAGES = 24;
  
  const HomeCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    var images = []
    for (let id = 1; id <= NUMIMAGES; id++) {
        images.push(
        {
            img: require('../../../images/pieces/' + id + '.jpg')
        }
        );
    }
  
    return (
        <Carousel className= "mh-50" activeIndex={index} onSelect={handleSelect}>
         {images.map((image, i) => {
          return (
            <Carousel.Item>        
          <div className="piece">
            <img
              className="d-block"
              src={image.img}
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