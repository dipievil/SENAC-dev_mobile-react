import React from 'react';
import slide1 from '../res/slide1.webp';
import slide2 from '../res/slide2.webp';
import slide3 from '../res/slide3.webp';
import { useState  } from 'react';

function Carousel(props){

  const [slideIndex, setSlideIndex] = useState(1);
  const length = 3;

  function setSlide(n){
    let index = slideIndex+n;
    if(index>length) {index = 1;}
    if(index<1) {index = length}
    setSlideIndex(index);
  }

    return (    
        <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className={"carousel-item  " + ((slideIndex === 1) ? 'active' : '')} >
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </div>
          <div className={"carousel-item " + ((slideIndex === 2) ? 'active' : '')} >
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </div>
          <div className={"carousel-item " + ((slideIndex === 3) ? 'active' : '')} >
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </div>
        </div>
        <a onClick={() => setSlide(-1)} className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a onClick={() => setSlide(+1)} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>
    )
}

export default Carousel;