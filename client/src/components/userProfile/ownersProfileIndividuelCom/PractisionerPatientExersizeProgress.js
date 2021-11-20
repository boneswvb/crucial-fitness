import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PractisionerPatientExersizeProgress() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        <p>Patient Exersize</p>
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>customer Email</h4>
            <h5>customer Name & Surname</h5>
            <h6>Working with: Patient Exersize Progress</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Warm-up</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Warm-up </th>
                <th>Exercises</th>
                <th>Reps</th>
                <th>Wts (Lb)</th>
                <th>Weeks</th>
                <th>Frequency</th>
                <th>Start</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Full</strong>
                </td>
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
          <h3>Strength</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Warm-up </th>
                <th>Exercises</th>
                <th>Reps</th>
                <th>Wts (Lb)</th>
                <th>Weeks</th>
                <th>Frequency</th>
                <th>Start</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Full</strong>
                </td>
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
          <h3>Cardio</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Warm-up </th>
                <th>Exercises</th>
                <th>Reps</th>
                <th>Wts (Lb)</th>
                <th>Weeks</th>
                <th>Frequency</th>
                <th>Start</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Full</strong>
                </td>
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
          <h3>Cool-down</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Warm-up </th>
                <th>Exercises</th>
                <th>Reps</th>
                <th>Wts (Lb)</th>
                <th>Weeks</th>
                <th>Frequency</th>
                <th>Start</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Full</strong>
                </td>
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

export default PractisionerPatientExersizeProgress;
