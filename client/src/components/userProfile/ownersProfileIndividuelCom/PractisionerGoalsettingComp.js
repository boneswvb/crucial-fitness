import React, { useState } from "react";

import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PractisionerGoalsettingComp({ goalsetting }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        <p>Goal Setting</p>
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Email: </h4>
            <h5>customer Name & Surname</h5>
            <h6>Working with: Goal Setting</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive>
            {goalsetting.map((items) => (
              <tbody>
                <tr style={{ colspan: 2 }}>
                  <td>
                    <p>
                      <strong>Assessment Date:</strong> {items.date}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Name 3 Lifstyle Changes <br /> You Need To Do
                    </strong>
                  </td>
                  <td>{items.lifstylechanges}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Easiest To Change</strong>
                  </td>
                  <td>{items.easiesttochange}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Hardest To Change</strong>
                  </td>
                  <td>{items.hardesttochange}</td>
                </tr>
              </tbody>
            ))}
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

PractisionerGoalsettingComp.propTypes = {
  goalsetting: PropTypes.string.isRequired,
};

export default PractisionerGoalsettingComp;
