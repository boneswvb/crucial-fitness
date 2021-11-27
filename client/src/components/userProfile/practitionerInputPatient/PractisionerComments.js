import React, { useState } from "react";

import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PractisionerComments({ handlechange, state }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="container">
      <Button variant="outline-info" onClick={() => setLgShow(true)}>
        Capture Suggestions
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            PractisionerComments
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            <Form.Group controlId="suggestions">
              <Form.Label>Suggestions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="suggestions"
                onChange={handlechange}
                value={state.suggestions}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            type="submit"
            value="Close"
            onClick={() => setLgShow(false)}
          >
            Close
          </Button>
          <Button
            variant="outline-success"
            type="submit"
            value="submit"
            // onClick={}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

PractisionerComments.propTypes = {
  handlechange: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  suggestions: PropTypes.string.isRequired,
};

export default PractisionerComments;
