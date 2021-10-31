import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import SubmitLifeStyleAssForm from '../containers/SubmitLifeStyleAssForm';

function LifeStyleAssPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>Life Style Assessment Form - Crucial Fitness & Nutrition</title>
      </Helmet>
      <SubmitLifeStyleAssForm />
    </div>
  );
}

export default LifeStyleAssPage;
