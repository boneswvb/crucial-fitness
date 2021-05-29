import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

function GoalSettingForm({ handlechange, state, handlesubmitgoalsettingform }) {
  console.log('state', state)
  return (
    <div className="container">
      <h1>Goal Setting Form</h1>
      <Form>
        <h3>Personal Details</h3>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            onChange={handlechange}
            value={state.email}
          />
        </Form.Group>
        <Form.Group controlId="goulsetting">
          <Form.Label>Name three LIFESTYLE changes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="lifstylechanges"
            onChange={handlechange}
            value={state.lifstylechanges}
          />
        </Form.Group>
        <Form.Group controlId="goulsetting1">
          <Form.Label>Which is the easiest to change and why?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="easiesttochange"
            onChange={handlechange}
            value={state.easiesttochange}
          />
        </Form.Group>
        <Form.Group controlId="goulsetting2">
          <Form.Label>Which is the hardest to change and why?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="hardesttochange"
            onChange={handlechange}
            value={state.hardesttochange}
          />
        </Form.Group>
        <Button type="submit" value="Register" variant="primary" onClick={handlesubmitgoalsettingform}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

GoalSettingForm.propTypes = {
  handlechange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default GoalSettingForm;
