import React from 'react';
import '../Css/ofertas.css';
import img12 from '../images/juguetes.jpg';

const OfertasEcommerce = () => {
  return (
    <>
      <div className="cont-madre-ofertas">
        <div className="cont-ofertas-eco">
          <h1>Productos</h1>
          <img className="juguetes-img" src={img12} alt="juguetes" />
          <p>Los mejores juguetes para esta navidad</p>
          <p>Descubre todas las ofertas</p>
        </div>
        <div className="cont-ofertas-eco">
          <h1>Productos</h1>
          <img className="juguetes-img" src={img12} alt="juguetes" />
          <p>Los mejores juguetes para esta navidad</p>
          <p>Descubre todas las ofertas</p>
        </div>
        <div className="cont-ofertas-eco">
          <h1>Productos</h1>
          <img className="juguetes-img" src={img12} alt="juguetes" />
          <p>Los mejores juguetes para esta navidad</p>
          <p>Descubre todas las ofertas</p>
        </div>
        <div className="cont-ofertas-eco">
          <h1>Productos</h1>
          <img className="juguetes-img" src={img12} alt="juguetes" />
          <p>Los mejores juguetes para esta navidad</p>
          <p>Descubre todas las ofertas</p>
        </div>
      </div>
    </>
  );
};

export default OfertasEcommerce;
