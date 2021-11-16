import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

// import PropTypes from "prop-types";

function UserProfileOwner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container ">
      <h2>Welcome back Practiosioner!</h2>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Patient By Email"
          aria-label="Search By Email"
          aria-describedby="Search"
          id="search"
        />
        <Button variant="success">Search</Button>
      </InputGroup>

      <div className="d-flex justify-content-around">
        <Button variant="primary" onClick={handleShow}>
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
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Change</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Full Names</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Last Name</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Date Of Birth</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Home Address</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cellphone Number</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Emergency Contact Name</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Emergency Contact Number</strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Emergency Contact person&apos;s Relationship To Member
                      </strong>
                    </td>
                    <td>The answer will be here</td>
                    <td>
                      <Button variant="outline-warning">Change</Button>{" "}
                    </td>
                    <td>
                      <Button variant="outline-danger">Delete</Button>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <p>General Health Assessment Form </p>
        <p>General Health Assessment Life Style</p>
        <p>Assessment Form</p>
      </div>
    </div>
  );
}

// UserProfileOwner.propTypes = {
//   fullname: PropTypes.string.isRequired,
// };

export default UserProfileOwner;
