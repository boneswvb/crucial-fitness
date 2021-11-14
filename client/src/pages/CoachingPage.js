import React from "react";

import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import CoachingForm from "../components/coaching/CoachingForm";
import GeneralFitnessForm from "../components/coaching/GeneralFitnessForm";
import GroupForm from "../components/coaching/GroupForm";
import HockeyForm from "../components/coaching/HockeyForm";
import IndividuelForm from "../components/coaching/IndividuelForm";
import NetballForm from "../components/coaching/NetballForm";
import RugbyForm from "../components/coaching/RugbyForm";

function CoachingPage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Helmet>
        <meta name="keywords" content="service " />
        <meta name="description" content="aaa" />
        <title>Coaching - Crucial Fitness & Nutrition</title>
      </Helmet>
      <Switch>
        <Route path="/coachingpage/coachingform">
          <CoachingForm />
        </Route>
        <Route path="/coachingpage/generalfitnessform">
          <GeneralFitnessForm />
        </Route>
        <Route path="/coachingpage/groupform">
          <GroupForm />
        </Route>
        <Route path="/coachingpage/hockeyform">
          <HockeyForm />
        </Route>
        <Route path="/coachingpage/individuelform">
          <IndividuelForm />
        </Route>
        <Route path="/coachingpage/netballform">
          <NetballForm />
        </Route>
        <Route path="/coachingpage/rugbyform">
          <RugbyForm />
        </Route>
      </Switch>
    </div>
  );
}

export default CoachingPage;
