import React from 'react';
import Slider from 'react-slick';
import '../Css/slider.css';
import im21 from '../images/mujer-sale.jpg';
import im22 from '../images/ropa-sale.jpg';
import im23 from '../images/sale.jpg';

const SliderEcommerce = () => {
  const settings = {
    className: 'carousel-ecom',
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-ecommerce">
      <Slider {...settings}>
        <div>
          <img className="slider-img" src={im21} alt="juguetes" />
        </div>
        <div>
          <img className="slider-img" src={im22} alt="juguetes" />
        </div>
        <div>
          <img className="slider-img" src={im23} alt="juguetes" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderEcommerce;
