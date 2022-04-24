import React from 'react';
import About from '../components/HomeScreen/components/About';
import Contact from '../components/HomeScreen/components/Contact';
import Goals from '../components/HomeScreen/components/Goals';
import Products from '../components/HomeScreen/components/Products';
import WellCome from '../components/HomeScreen/components/WellCome';
import { CssBaseline } from '@mui/material';
import NavBarComponent from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const HomeScreen = () => {
  return (
    <div>
      <CssBaseline />
      <NavBarComponent />
      <WellCome />
      <Goals />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeScreen;
