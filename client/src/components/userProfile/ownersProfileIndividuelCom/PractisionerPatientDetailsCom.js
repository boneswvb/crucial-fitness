import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PatientDetailsCom() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        Customer Details
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>customer Email</h4>
            <h5>customer Name & Surname</h5>
            <h6>Working with: Customer Details</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
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
                <tr>
                  <td>
                    <strong>Last Name</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>Date Of Birth</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>Home Address</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cellphone Number</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>Emergency Contact Name</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>Emergency Contact Number</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Emergency Contact person&apos;s Relationship To Member
                    </strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
                <tr>
                  <td>
                    <strong>Date last updated</strong>
                  </td>
                  <td>The answer will be here</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning" onClick={handleClose}>
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PatientDetailsCom;
