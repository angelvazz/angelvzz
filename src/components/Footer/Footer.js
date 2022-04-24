import { Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before the competition?
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <Link to="/signin">
        <p>Request Early Access</p>
      </Link>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <DataObjectIcon color="primary" />
        <Typography color="Menu" variant="h6">
          <Link to="/">SBT</Link>{' '}
        </Typography>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Work with us</p>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Parvada Cowork & Co.</p>
        <p>
          Rio Missouri 600, Zona Valle de Santa Engracia, 66267 San Pedro Garza
          García, N.L.
        </p>
        <p>info@sbt.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 SBT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
