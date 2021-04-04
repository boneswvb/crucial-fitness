import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import GeneralHealthAssessmentForm from '../components/forms/GeneralHealthAssessmentForm';

function GeneralHealthAssessmentPage() {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;
    return type === 'checkbox' ? setFormState({
      ...formState,
      [name]: checked,
    })
      : setFormState({
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
        <title>General Health Assessment Form - Crucial Fitness & Nutrition</title>
      </Helmet>
      <GeneralHealthAssessmentForm
        data={formState}
        handlechange={handleChange}
      />
    </div>
  );
}

export default GeneralHealthAssessmentPage;
