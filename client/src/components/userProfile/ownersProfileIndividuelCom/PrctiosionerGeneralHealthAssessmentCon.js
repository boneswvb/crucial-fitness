import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PrctiosionerGeneralHealthAssessmentCon() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        <p>General Health Assessment</p>
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>customer Email</h4>
            <h5>customer Name & Surname</h5>
            <h6>Working with:General Health Assessment</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Assessment Date:</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Headings</th>
                <th>Patient Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Full Names</strong>
                </td>
                <td>The answer will be here</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning">Change</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PrctiosionerGeneralHealthAssessmentCon;
