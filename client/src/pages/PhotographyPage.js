import React from "react";
import { Switch, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

import PhotographyForm from "../components/photography/PhotographyForm";
import PhotoAthleticsForm from "../components/photography/PhotoAthleticsForm";
import PhotoHockeyForm from "../components/photography/PhotoHockeyForm";
import PhotoNetballForm from "../components/photography/PhotoNetballForm";
import PhotoRugbyForm from "../components/photography/PhotoRugbyForm";
import PhotoTennisForm from "../components/photography/PhotoTennisForm";

function PhotographyPage() {
  return (
    <div className="container">
      <Helmet>
        <meta name="keywords" content="service " />
        <meta name="description" content="aaa" />
        <title>Photography - Crucial Fitness & Nutrition</title>
      </Helmet>
      <h1>Photography</h1>
      <Switch>
        <Route path="/photographypage/photographyform">
          <PhotographyForm />
        </Route>
        <Route path="/photographypage/photoathleticsform">
          <PhotoAthleticsForm />
        </Route>
        <Route path="/photographypage/photohockeyform">
          <PhotoHockeyForm />
        </Route>
        <Route path="/photographypage/photonetballform">
          <PhotoNetballForm />
        </Route>
        <Route path="/photographypage/photorugbyform">
          <PhotoRugbyForm />
        </Route>
        <Route path="/photographypage/phototennisform">
          <PhotoTennisForm />
        </Route>
      </Switch>
    </div>
  );
}

export default PhotographyPage;
