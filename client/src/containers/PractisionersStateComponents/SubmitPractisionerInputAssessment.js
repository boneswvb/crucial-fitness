import React, { useState } from "react";

import PractisionerInputAssessment from "../../components/userProfile/practitionerInputPatient/PractisionerInputAssessment";

function SubmitPractisionerInputAssessment() {
  const [formState, setFormState] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    return type === "checkbox"
      ? setFormState({
          ...formState,
          [name]: checked,
        })
      : setFormState({
          ...formState,
          [name]: value,
        });
  };
  return (
    <div>
      <PractisionerInputAssessment
        handlechange={handleChange}
        state={formState}
      />
    </div>
  );
}

export default SubmitPractisionerInputAssessment;
