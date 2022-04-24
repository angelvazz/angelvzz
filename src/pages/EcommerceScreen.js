import React from 'react';
import CategoriasEcommerce from '../components/Ecommerce/components/CategoriasEcommerce';
import NavBar from '../components/Ecommerce/components/NavBar';
import OfertasEcommerce from '../components/Ecommerce/components/OfertasEcommerce';
import SliderEcommerce from '../components/Ecommerce/components/SliderEcommerce';
import './css/ecommerceScreen.css';

const EcommerceScreen = () => {
  return (
    <div className="ecommerce-cont-maestro">
      <NavBar />
      <SliderEcommerce />
      <OfertasEcommerce />
      <CategoriasEcommerce />
    </div>
  );
};

export default EcommerceScreen;
