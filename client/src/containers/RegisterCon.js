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

  const { password, email, lastname } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { password, email, lastname };
      await fetch('http://localhost:5000/api/Register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
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
