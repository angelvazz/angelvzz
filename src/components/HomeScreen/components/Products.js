import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/products.css';
import Ecommerce from './Ecommerce';
import Social from './Social';
import Landing from './Landing';
import Management from './Management';
import StreamingCarrousel from './StreamingCarrousel';

const Products = () => {
  const settings = {
    className: 'carousel',
    infinite: true,
    dots: false,
    autoplay: false,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    initialSlide: 4,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          initialSlide: 4,
          centerPadding: 0,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          initialSlide: 4,
          centerPadding: 0,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="product-h1">Products</h1>
      <p className="p-products">
        You can interact with the "phones" so you see the full funtionality of
        our products
      </p>
      <div className="contenedor-madre-pro">
        <div>
          <Slider {...settings}>
            <div className="carousel-cont">
              <StreamingCarrousel />
            </div>
            <div>
              <Management />
            </div>
            <div>
              <Ecommerce />
            </div>
            <div>
              <Social />
            </div>
            <div>
              <Landing />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Products;
