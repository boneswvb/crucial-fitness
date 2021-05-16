import React, { useState } from 'react';

import PatientDetails from '../components/forms/PatientDetails';

export default function Login() {
  const [formState, setFormState] = useState('');

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
    <div>
      <PatientDetails
        handlechange={handleChange}
        state={formState}
      />
    </div>
  );
}
