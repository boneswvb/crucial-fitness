import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Context } from '../../contextProvider/LogonContextP';

function Logon({
  handlesubmit,
  onchange,
  state,
}) {
  const {
    handleClickLogOn,
    handleClickLogOff,
    isSignedOn,
    show,
    handleClose,
    handleShow,
  } = useContext(Context);

  return (
    <div>
      {
        isSignedOn
          ? <Button variant="secondary" onClick={handleClickLogOff}>Log off</Button>
          : <Button variant="secondary" onClick={handleShow}>Logon</Button>
      }
      &nbsp;
      &nbsp;
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p>Logon</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Login">
            <Form onSubmit={handlesubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  name="email"
                  onChange={onchange}
                  value={state.email}
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
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClickLogOn()}>
            Log on
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Logon.propTypes = {
  handlesubmit: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default Logon;
