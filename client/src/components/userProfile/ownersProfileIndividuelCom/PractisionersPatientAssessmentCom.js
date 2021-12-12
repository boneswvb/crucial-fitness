import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PractisionersPatientAssessmentCom() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="outline-warning" onClick={handleShow}>
        <p>Patient Assessment</p>
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>customer Email</h4>
            <h5>customer Name & Surname</h5>
            <h6>Working with: Patient Assessment</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Assessment Date:</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>
                    <strong>Height (cm)</strong>
                  </td>
                  <td>
                    <strong>Weight (kg)</strong>
                  </td>
                  <td>
                    <strong>Chest (cm)</strong>
                  </td>
                  <td>
                    <strong> Waist (cm)</strong>
                  </td>
                  <td>
                    <strong>Hip (cm)</strong>
                  </td>
                  <td>
                    <strong>Thigh Left (cm)</strong>
                  </td>
                  <td>
                    <strong>Thigh Right (cm)</strong>
                  </td>
                  <td>
                    <strong>Calf Left (cm)</strong>
                  </td>
                  <td>
                    <strong>Calf Right (cm)</strong>
                  </td>
                  <td>
                    <strong>Bicep Left (cm)</strong>
                  </td>
                  <td>
                    <strong>Bicep Right (cm)</strong>
                  </td>
                  <td>
                    <strong>Date</strong>
                  </td>
                </tr>
                <tr>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                  <td>Answer</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning">Change info</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PractisionersPatientAssessmentCom;
