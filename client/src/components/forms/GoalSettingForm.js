import React from 'react';

import { Form } from 'react-bootstrap';

import PropTypes from 'prop-types';

function GoalSettingForm({ handlechange, state }) {
  return (
    <div className="container">
      <h1>Goal Setting Form</h1>
      <Form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        data-email="from_email@example.com"
        action="https://script.google.com/macros/s/AKfycbw-DZp1Q1Ad8tQCn5N3B4RJlYqGArQH5_pVGrH3wHLnne6gojVf0gV5c3s9fG2mVqTizw/exec"
      >

        <h3>Personal Details</h3>
        <Form.Group controlId="fullname">
          <Form.Label>Full Names</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Full Names"
            onChange={handlechange}
            fullname={state}
            value={state.fullname}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handlechange}
            lastname={state}
            value={state.lastname}
          />
        </Form.Group>
        <Form.Group controlId="#dateofbirth">
          <Form.Label>Selcet Your Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateofbirth"
            placeholder="Date of Birth"
            onChange={handlechange}
            dateofbirth={state}
            value={state.dateofbirth}
          />
        </Form.Group>
        <Form.Group controlId="adress">
          <Form.Label>Your Home Address</Form.Label>
          <Form.Control
            type="text"
            name="adress"
            placeholder="Address"
            onChange={handlechange}
            adress={state}
            value={state.adress}
          />
        </Form.Group>
        <Form.Group controlId="cellno">
          <Form.Label>Your Cellphone Number</Form.Label>
          <Form.Control
            type="tel"
            name="cellno"
            placeholder="Cellphone Number"
            onChange={handlechange}
            cellno={state}
            value={state.cellno}
          />
        </Form.Group>
        <Form.Group controlId="#econtact">
          <Form.Label>Emergency Contact Name</Form.Label>
          <Form.Control
            type="text"
            name="econtact"
            placeholder="Emergency Contact Name"
            onChange={handlechange}
            econtact={state}
            value={state.econtact}
          />
        </Form.Group>
        <Form.Group controlId="ecellno">
          <Form.Label>Emergency Contact Number</Form.Label>
          <Form.Control
            type="tel"
            name="ecellno"
            placeholder="Emergency Contact Num"
            onChange={handlechange}
            ecellno={state}
            value={state.ecellno}
          />
        </Form.Group>
        <Form.Group controlId="relationship">
          <Form.Label>Relationship To Member</Form.Label>
          <Form.Control
            as="select"
            name="relationship"
            placeholder="Relationship To Member"
            onChange={handlechange}
            relationship={state}
            value={state.relationship}
          >
            <option>---Select One---</option>
            <option>Spouse</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Friend</option>
            <option>Other</option>
          </Form.Control>
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
            name="easiestToChange"
            onChange={handlechange}
            value={state.easiestToChange}
          />
        </Form.Group>
        <Form.Group controlId="goulsetting2">
          <Form.Label>Which is the hardest to change and why?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="hardestToChange"
            onChange={handlechange}
            value={state.hardestToChange}
          />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

GoalSettingForm.propTypes = {
  handlechange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default GoalSettingForm;
