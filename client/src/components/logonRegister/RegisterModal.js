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
                type="password"
                name="password"
                value={state.password}
                onChange={onchange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="lastname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={state.lastname}
                onChange={onchange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" value="Register" variant="primary" onClick={handlesubmit}>
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
