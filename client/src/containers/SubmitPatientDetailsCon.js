import React, { useState } from "react";

import PatientDetails from "../components/forms/PatientDetails";

function PatientDetailsCon() {
  const [formState, setFormState] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    fullname,
    lastname,
    dateofbirth,
    adress,
    cellno,
    econtact,
    ecellno,
    relationship,
  } = formState;

  const handleSubmitPatDetails = async (e) => {
    e.preventDefault();
    try {
      const date =
        Date().slice(8, 10) + Date().slice(3, 7) + Date().slice(10, 15);
      const body = {
        email,
        fullname,
        lastname,
        dateofbirth,
        adress,
        cellno,
        econtact,
        ecellno,
        relationship,
        date,
      };

      await fetch("http://localhost:5000/api/PatientDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      handleClose();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <PatientDetails
        handlechange={handleChange}
        state={formState}
        handlesubmitpatdetails={handleSubmitPatDetails}
        handleclose={handleClose}
        handleshow={handleShow}
        show={show}
      />
    </div>
  );
}

export default PatientDetailsCon;
