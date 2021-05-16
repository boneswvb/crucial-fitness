import React, { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Context } from '../../contextProvider/LogonContextP';

function Logon() {
  const {
    isSignedOn,
    handleClickLogOff,
    show,
    handleClose,
    handleShow,
    formState,
    handleChange,
    getUserInfo,
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
          <Modal.Title>Logon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Login">
            <Form>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" value="Register" variant="primary" onClick={(e) => getUserInfo(e)}>
            Log on
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Logon;
