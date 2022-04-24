import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoardScreen from '../pages/DashBoardScreen';
import EcommerceScreen from '../pages/EcommerceScreen';
import HomeScreen from '../pages/HomeScreen';
import ManagemnetScreen from '../pages/ManagemnetScreen';
import NotFoundScren from '../pages/NotFoundScren';
import SignInScreen from '../pages/SignInScreen';
import SocialScreen from '../pages/SocialScreen';
import Streaming from '../pages/Streaming';

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/ecommerce" exact element={<EcommerceScreen />} />
        <Route path="/management" exact element={<ManagemnetScreen />} />
        <Route path="/streaming" exact element={<Streaming />} />
        <Route path="/social" exact element={<SocialScreen />} />
        <Route path="/signin" exact element={<SignInScreen />} />
        <Route path="/dashboard" exact element={<DashBoardScreen />} />
        <Route path="*" element={<NotFoundScren />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
