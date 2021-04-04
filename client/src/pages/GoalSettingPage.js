import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import GoalSettingForm from '../components/forms/GoalSettingForm';

function GoalSettingPage() {
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
          content="service "
        />
        <meta name="description" content="Agents" />
        <title>Goal Setting Form - Crucial Fitness & Nutrition</title>
      </Helmet>
      <GoalSettingForm
        handlechange={handleChange}
        state={formState}
      />
    </div>
  );
}

export default GoalSettingPage;
