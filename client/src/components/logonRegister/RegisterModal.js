import React, { useState, useContext } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import PropTypes from 'prop-types';

import { Context } from '../../contextProvider/LogonContextP';

function Register({
  handlesubmit,
  onchange,
  state,
}) {
  const [show, setShow] = useState(false);
  const { isSignedOn } = useContext(Context);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {
        !isSignedOn
          ? <Button variant="secondary" onClick={handleShow}>Register</Button>
          : null
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                name="email"
                value={state.email}
                onChange={onchange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password1"
                name="password1"
                value={state.password1}
                onChange={onchange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Re-type Password</Form.Label>
              <Form.Control
                type="password2"
                name="password2"
                value={state.password2}
                onChange={onchange}
              />
            </Form.Group>
            <h3>Personal Details</h3>
            <Form.Group controlId="fullname">
              <Form.Label>Full Names</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Full Names"
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
                onChange={onchange}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Register.propTypes = {
  handlesubmit: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default Register;
