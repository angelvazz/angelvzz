import React from 'react';

//Imports
import '../Css/about.css';

//Icons
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ConstructionIcon from '@mui/icons-material/Construction';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const About = () => {
  return (
    <>
      <h1 className="about-us">Goals</h1>
      <p className="about-p">
        Learn about how we operate so you can succed with you app.
      </p>

      <div className="cont-madre">
        <div className="cont-componet">
          <HeadsetMicIcon fontSize="large" />
          <h2>Awesome Support</h2>
          <p>
            Count on full support to begening to end, and even when we finish,
            we allways gonna be for you
          </p>
        </div>

        <div className="cont-componet">
          <ConstructionIcon fontSize="large" />
          <h2>Solutions Business</h2>
          <p>
            Every app we build is a solution for your business, so you see the
            cost benefit and the investemt retorn as soon as possible.
          </p>
        </div>

        <div className="cont-componet">
          <DevicesIcon fontSize="large" />
          <h2>Digital desing</h2>
          <p>
            All our desings are moderns and full responsive, so you dont have to
            gorry about compability in divices.
          </p>
        </div>
      </div>

      <div className="cont-madre2">
        <div className="cont-componet">
          <EmojiEventsIcon fontSize="large" />
          <h2>Goal Business</h2>
          <p>
            We work on small goals on the project, every component has to be
            perfect for the success of your app.
          </p>
        </div>

        <div className="cont-componet">
          <EmojiObjectsIcon fontSize="large" />
          <h2>Branding Identity</h2>
          <p>
            Every desing that we build is thougth on your brand and how its
            going to fit and bold from the competition.
          </p>
        </div>

        <div className="cont-componet">
          <ShowChartIcon fontSize="large" />
          <h2>Dynamic Growth</h2>
          <p>
            All our apps are full scalable, every time you need a debug or
            upgrade, we will do it fast and low price.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
