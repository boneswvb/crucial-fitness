import React, { useState } from 'react';

import Example from '../components/logonRegister/logonModal';

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

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Example
        handlesubmit={handleSubmit}
        onchange={handleChange}
        state={formState}
      />
    </div>
  );
}
