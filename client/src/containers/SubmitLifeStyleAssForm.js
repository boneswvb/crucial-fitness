import React, { useState } from "react";

import LifeStyleAssForm from "../components/forms/LifeStyleAssForm";

function SubmitLifeStyleAssForm() {
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

  const {
    email,
    curhealtproblems,
    medicalhistory,
    medsandsuppliments,
    heartdiseaserelation,
    diabetestype1relation,
    diabetestype2relation,
    highbloodpressurerelation,
    highcholesterolrelation,
    thyroiddiseaserelation,
    metabolicsyndromerelation,
    renaldiseaserelation,
    liverdiseaserelation,
    cancerinrelation,
    typeofcancerrelation,
    pastinjuriesall,
    lifetressors,
    copewithstress,
    managingcurrentstress,
    relaxorunwind,
    sleeppernight,
  } = formState;

  const handleSubmitLifeStyleAssForm = async (e) => {
    e.preventDefault();
    try {
      const date =
        Date().slice(8, 10) + Date().slice(3, 7) + Date().slice(10, 15);
      const body = {
        email,
        curhealtproblems,
        medicalhistory,
        medsandsuppliments,
        heartdiseaserelation,
        diabetestype1relation,
        diabetestype2relation,
        highbloodpressurerelation,
        highcholesterolrelation,
        thyroiddiseaserelation,
        metabolicsyndromerelation,
        renaldiseaserelation,
        liverdiseaserelation,
        cancerinrelation,
        typeofcancerrelation,
        pastinjuriesall,
        lifetressors,
        copewithstress,
        managingcurrentstress,
        relaxorunwind,
        sleeppernight,
        date,
      };
      await fetch("http://localhost:5000/api/LifeStyleAssForm", {
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
      <LifeStyleAssForm
        handlechange={handleChange}
        state={formState}
        handlesubmitlifeStyleassform={handleSubmitLifeStyleAssForm}
      />
    </div>
  );
}

export default SubmitLifeStyleAssForm;
