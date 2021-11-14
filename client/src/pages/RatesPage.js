import React from "react";
import { Switch, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

import RatesForm from "../components/rates/RatesForm";
import RateCoachingGeneralFitnessForm from "../components/rates/RateCoachingGeneralFitnessForm";
import RateCoachingGroupForm from "../components/rates/RateCoachingGroupForm";
import RateCoachingIndividuelForm from "../components/rates/RateCoachingIndividuelForm";
import RateCoachingSportSpecificForm from "../components/rates/RateCoachingSportSpecificForm";
import RatePhotographyForm from "../components/rates/RatePhotographyForm";
import RateRehabilitationForm from "../components/rates/RateRehabilitationForm";
import RateWeightLossForm from "../components/rates/RateWeightLossForm";

function RatesPage() {
  return (
    <div className="container">
      <Helmet>
        <meta name="keywords" content="service " />
        <meta name="description" content="aaa" />
        <title>Rates - Crucial Fitness & Nutrition</title>
      </Helmet>
      <Switch>
        <Route path="/ratespage/ratesform">
          <RatesForm />
        </Route>
        <Route path="/ratespage/ratecoachinggeneralfitnessform">
          <RateCoachingGeneralFitnessForm />
        </Route>
        <Route path="/ratespage/ratecoachinggroupform">
          <RateCoachingGroupForm />
        </Route>
        <Route path="/ratespage/ratecoachingindividuelform">
          <RateCoachingIndividuelForm />
        </Route>
        <Route path="/ratespage/ratecoachingsportspecificform">
          <RateCoachingSportSpecificForm />
        </Route>
        <Route path="/ratespage/ratephotographyform">
          <RatePhotographyForm />
        </Route>
        <Route path="/ratespage/raterehabilitationform">
          <RateRehabilitationForm />
        </Route>
        <Route path="/ratespage/rateweightlossform">
          <RateWeightLossForm />
        </Route>
      </Switch>
    </div>
  );
}

export default RatesPage;
