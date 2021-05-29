import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import PropTypes from 'prop-types';

function PatientDetails({
  handlechange,
  state,
  handlesubmitpatdetails,
  handleclose,
  handleshow,
  show
}) {
  return (
    <div>
      <Button variant="secondary" onClick={handleshow}>Update Personal Details</Button>
      <Modal show={show} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
          // id="gform"
          // method="POST"
          // class="pure-form pure-form-stacked"
          // data-email="from_email@example.com"
          // action="https://script.google.com/macros/s/AKfycbw-DZp1Q1Ad8tQCn5N3B4RJlYqGArQH5_pVGrH3wHLnne6gojVf0gV5c3s9fG2mVqTizw/exec"
          >
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
            <Form.Group controlId="fullname">
              <Form.Label>Full Names</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Full Names"
                onChange={handlechange}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleclose}>
            Close
          </Button>
          <Button type="submit" value="Submit" variant="primary" onClick={handlesubmitpatdetails}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

PatientDetails.propTypes = {
  handlechange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default PatientDetails;
