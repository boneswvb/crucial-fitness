import React from 'react';

import { Helmet } from 'react-helmet';

import SubmitGoalsettingForm from '../containers/SubmitGoalsettingForm';

function GoalSettingPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service "
        />
        <meta name="description" content="Agents" />
        <title>Goal Setting Form - Crucial Fitness & Nutrition</title>
      </Helmet>
      <SubmitGoalsettingForm />
    </div>
  );
}

export default GoalSettingPage;
