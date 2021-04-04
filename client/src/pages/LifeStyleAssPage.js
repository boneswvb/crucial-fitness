import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import LifeStyleAssForm from '../components/forms/LifeStyleAssForm';

function LifeStyleAssPage() {
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
      <LifeStyleAssForm
        handleChange={handleChange}
        state={formState}
      />
    </div>
  );
}

export default LifeStyleAssPage;
