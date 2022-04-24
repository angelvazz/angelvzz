import React from 'react';
//Imports
import '../Css/goals.css';
import img3 from '../images/team.svg';

const Goals = () => {
  return (
    <>
      <div className="cont-madre-goals">
        <div className="cont-goals">
          <img className="team-img" src={img3} alt="team" />

          <div>
            <h1 className="h1-goals">About Us</h1>

            <div className="cont-mision-vision">
              <div className="cont-mision">
                <h1>Our Mission</h1>
                <p>
                  At vero eos accusamus iusto odio dignissim ducimus a blandi
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sit occaecati cupiditate provident
                  similique sunt.
                </p>
              </div>

              <div className="cont-vision">
                <h1>Our Vision</h1>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis that aut
                  rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae non recusandae at Itaque earum
                  rerum hic tenetur sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
