import React from 'react';

import { Helmet } from 'react-helmet';

import GeneralHealthAssessmentPage from './GeneralHealthAssessmentPage';
import GoalSetting from '../components/forms/GoalSettingForm';
import LifeStyleAssPage from './LifeStyleAssPage';

function HealthInfoPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service "
        />
        <meta name="description" content="aaa" />
        <title>Health Information - Crucial Fitness & Nutrition</title>
      </Helmet>
      <GoalSetting />
      <LifeStyleAssPage />
      <GeneralHealthAssessmentPage />
    </div>
  );
}

export default HealthInfoPage;
