import React, { useState } from 'react';

import Register from '../components/logonRegister/RegisterModal';

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Register
        handlesubmit={handleSubmit}
        onchange={handleChange}
        state={formState}
      />
    </div>
  );
}
