import React, { useState } from "react";

import PractisionerExcersizeProgram from "../../components/userProfile/practitionerInputPatient/PractisionerExcersizeProgram";

function SubmitPractisionerExcersizeProgram() {
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
      <PractisionerExcersizeProgram
        handlechange={handleChange}
        state={formState}
      />
    </div>
  );
}

export default SubmitPractisionerExcersizeProgram;
