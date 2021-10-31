import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import SubmitGeneralHealthAssessmentCon from '../containers/SubmitGeneralHealthAssessmentCon';

function GeneralHealthAssessmentPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>General Health Assessment Form - Crucial Fitness & Nutrition</title>
      </Helmet>
      <SubmitGeneralHealthAssessmentCon />
    </div>
  );
}

export default GeneralHealthAssessmentPage;
