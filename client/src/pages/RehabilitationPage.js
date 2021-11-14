import React from "react";
import { Switch, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

import RehabilitationForm from "../components/rehabilitation/RehabilitationForm";
import RehabConcussionRtlForm from "../components/rehabilitation/RehabConcussionRtlForm";
import RehabConcussionRtpForm from "../components/rehabilitation/RehabConcussionRtpForm";
import RehabSportMassageForm from "../components/rehabilitation/RehabSportMassageForm";
import RehabSpotInjuriesForm from "../components/rehabilitation/RehabSpotInjuriesForm";

function RehabilitationPage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Helmet>
        <meta name="keywords" content="service " />
        <meta name="description" content="aaa" />
        <title>Rehabilitation - Crucial Fitness & Nutrition</title>
      </Helmet>
      <h1>Rehabilitation</h1>
      <Switch>
        <Route path="/rehabilitationpage/rehabilitationform">
          <RehabilitationForm />
        </Route>
        <Route path="/rehabilitationpage/rehabconcussionrtlform">
          <RehabConcussionRtlForm />
        </Route>
        <Route path="/rehabilitationpage/rehabconcussionrtpform">
          <RehabConcussionRtpForm />
        </Route>
        <Route path="/rehabilitationpage/rehabsportmassageform">
          <RehabSportMassageForm />
        </Route>
        <Route path="/rehabilitationpage/rehabspotinjuriesform">
          <RehabSpotInjuriesForm />
        </Route>
      </Switch>
    </div>
  );
}

export default RehabilitationPage;
