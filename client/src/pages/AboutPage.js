import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AboutForm from '../components/about/AboutForm';
import BiographyForm from '../components/about/BiographyForm';
import MissionVisionForm from '../components/about/MissionVisionForm';
import RuleAndRegulationsForm from '../components/about/RuleAndRegulationsForm';
import AcceptanceForm from '../components/about/AcceptanceForm';
import WaiverForm from '../components/about/WaiverForm';

function AboutPage() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <Helmet>
        <meta name="keywords" content="Crucial Fitness And Nutrition" />
        <meta
          name="description"
          content="Crucial Fitness Coaching And Rehabilitation Biography
          Crucial Fitness Coaching And Rehabilitation MissionVision
          Crucial Fitness Coaching And Rehabilitation RuleAndRegulations
          Crucial Fitness Coaching And Rehabilitation Acceptance
          Crucial Fitness Coaching And; Rehabilitation Waiver
          Crucial Fitness And Nutrition
          Fittness training
          Nutrition"
        />
        <title>About Crucial Fitness & Nutrition</title>
      </Helmet>
      <h1>About Crucial Fitness & Nutrition</h1>
      <Switch>
        <Route path="/aboutpage/aboutform">
          <AboutForm />
        </Route>
        <Route path="/aboutpage/biographyform">
          <BiographyForm />
        </Route>
        <Route path="/aboutpage/missionvisionform">
          <MissionVisionForm />
        </Route>
        <Route path="/aboutpage/ruleAndregulationsform">
          <RuleAndRegulationsForm />
        </Route>
        <Route path="/aboutpage/acceptanceform">
          <AcceptanceForm />
        </Route>
        <Route path="/aboutpage/waiverform">
          <WaiverForm />
        </Route>
      </Switch>
    </div>
  );
}

export default AboutPage;
