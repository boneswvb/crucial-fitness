import React, { useState } from "react";

import PractisionerComments from "../../components/userProfile/practitionerInputPatient/PractisionerComments";

function SubmitPractisionerComments() {
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
    <div className="d-flex justify-content-around">
      <PractisionerComments handlechange={handleChange} state={formState} />
    </div>
  );
}

export default SubmitPractisionerComments;
