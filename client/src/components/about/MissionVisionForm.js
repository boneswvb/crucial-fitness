import React from "react";

import Media from "react-bootstrap/Media";

function MissionVisionForm() {
  return (
    <div className="container">
      <h1>Our Mission, Vission and Values</h1>
      <br />
      <Media>
        <Media.Body>
          <h3>VISION</h3>
          <p>
            Empowering a Healthier and Fitter client through fitness and
            nutrition as a part of everyday life.
          </p>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <Media.Body>
          <h3>MISSION</h3>
          <p>
            Crucial Fitness & Nutrition is committed and caring to those who are
            striving to empower themselves to a fitter, healthier lifestyle and
            in goal setting.
          </p>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <Media.Body>
          <h3>VALUES</h3>
          <h5>COMMITMENT</h5>
          <p>
            I commit myself to my clients and team members 100% – always giving
            my best.
          </p>
          <h5>INTEGRITY</h5>
          <p>
            I always speak the truth and keep my word. I am wise in my
            commitments so I do not overcommit myself.
          </p>
          <h5>COMMUNICATION</h5>
          <p>
            I commit to give clear communication to all clients. Truthful
            communication will create solid, encouraging relationships.
          </p>
          <h5>FUN</h5>
          <p>
            I teach clients how fitness and a healthy lifestyle can be fun by
            incorporating activities that they enjoy to do on their own.
          </p>
          <h5>CONSISTENCY</h5>
          <p>
            I will be consistent in my actions so my clients can know what to
            expect from me.
          </p>
          <h5>BALANCE</h5>
          <p>
            I encourage clients to create balance in their new healthier
            lifestyles. It is important to take time for yourself and your
            health before you can take care of others.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default MissionVisionForm;
