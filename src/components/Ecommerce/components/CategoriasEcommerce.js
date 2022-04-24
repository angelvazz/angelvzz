import React from 'react';
import '../Css/categorias.css';

//Icons
import { Avatar } from '@mui/material';
import BungalowIcon from '@mui/icons-material/Bungalow';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const CategoriasEcommerce = () => {
  return (
    <div>
      <h1 className="h1-categorias">Categories</h1>
      <div className="avatar-categorias">
        <div>
          <Avatar sx={{ width: 90, height: 90 }}>
            <BungalowIcon fontSize="large" />
          </Avatar>
          <p className="p-categorias">HOME</p>
        </div>
        <div>
          <Avatar sx={{ width: 90, height: 90 }}>
            <SportsEsportsIcon fontSize="large" />
          </Avatar>
          <p className="p-categorias">GAMES</p>
        </div>
        <div>
          <Avatar sx={{ width: 90, height: 90 }}>
            <ManIcon fontSize="large" />
          </Avatar>
          <p className="p-categorias">MENS</p>
        </div>
        <div>
          <Avatar sx={{ width: 90, height: 90 }}>
            <WomanIcon fontSize="large" />
          </Avatar>
          <p className="p-categorias">WOMENS</p>
        </div>
        <div>
          <Avatar sx={{ width: 90, height: 90 }}>
            <SportsSoccerIcon fontSize="large" />
          </Avatar>
          <p className="p-categorias">SPORTS</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriasEcommerce;
