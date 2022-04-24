import React from 'react';
import img1 from '../images/tech.svg';
import '../Css/wellcome.css';
import { Button } from '@mui/material';

const WellCome = () => {
  return (
    <>
      <div className="contenedor-well">
        <div className="cont-text">
          <h1 className="titulo-hm">
            We build your app web or mobile on an amazing price.
          </h1>
          <p className="texto-h2">
            We take your business or idea to the next level, we build high
            quality software, we always seek the cost benefit for the good of
            your operations.
          </p>
          <Button sx={{ mr: 1 }} variant="contained">
            request info
          </Button>
          <Button variant="outlined">see projects</Button>
        </div>
        <img className="tech-img" src={img1} alt="phone" />
      </div>
    </>
  );
};

export default WellCome;
