import React, { useState } from "react";

import GeneralHealthAssessmentForm from "../components/forms/GeneralHealthAssessmentForm";

function SubmitGeneralHealthAssessmentCon() {  
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

  const {
    email,
    lifstylechanges,
    easiesttochange,
    hardesttochange,
  } = formState;

  const handleSubmitGeneralHealthAssessmentForm = async (e) => {
    e.preventDefault();
    try {
      const date =
        Date().slice(8, 10) + Date().slice(3, 7) + Date().slice(10, 15);
      const body = {
        email,
        lifstylechanges,
        easiesttochange,
        hardesttochange,
        date,
      };
      await fetch("http://localhost:5000/api/GoalSettingForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <GeneralHealthAssessmentForm
        handlechange={handleChange}
        state={formState}
        handlesubmitgoalsettingform={handleSubmitGeneralHealthAssessmentForm}
      />
    </div>
  );
}

export default SubmitGeneralHealthAssessmentCon;
