import React from 'react';

import { Helmet } from 'react-helmet';

import HomeForm from '../components/home/HomeForm';

function HomePage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service "
        />
        <meta name="description" content="Agents" />
        <title>Crucial Fitness & Nutrition</title>
      </Helmet>
      <HomeForm />
    </div>
  );
}

export default HomePage;
