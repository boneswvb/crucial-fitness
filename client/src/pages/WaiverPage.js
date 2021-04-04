import React from 'react';

import { Helmet } from 'react-helmet';

import WaiverForm from '../components/about/WaiverForm';

function WaiverPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>WaiverPage - Crucial Fitness & Nutrition</title>
      </Helmet>
      <WaiverForm />
    </div>
  );
}

export default WaiverPage;
