import React from "react";

import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import InterestingReadsForm from "../components/interestingReads/InterestingReadsForm";
import BlogsForm from "../components/interestingReads/BlogsForm";
import EBooksForm from "../components/interestingReads/EBooksForm";
import WeightLossForm from "../components/interestingReads/WeightLossForm";

function InterestingReadsPage() {
  return (
    <div className="container">
      <Helmet>
        <meta name="keywords" content="service " />
        <meta name="description" content="aaa" />
        <title>Interesting reads - Crucial Fitness & Nutrition</title>
      </Helmet>
      <h1>Interesting Reads</h1>
      <Switch>
        <Route path="/interestingreadspage/interestingreadsrorm">
          <InterestingReadsForm />
        </Route>
        <Route path="/interestingreadspage/blogsform">
          <BlogsForm />
        </Route>
        <Route path="/interestingreadspage/ebooksform">
          <EBooksForm />
        </Route>
        <Route path="/interestingreadspage/weightlossform">
          <WeightLossForm />
        </Route>
      </Switch>
    </div>
  );
}

export default InterestingReadsPage;
