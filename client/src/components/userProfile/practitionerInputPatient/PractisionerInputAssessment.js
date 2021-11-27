import React, { useState } from "react";

import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function PractisionerInputAssessment({ handlechange, state }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="container">
      <Button variant="outline-info" onClick={() => setLgShow(true)}>
        Capture Assessment
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Assessment
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
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                name="age"
                placeholder="Age"
                onChange={handlechange}
                value={state.age}
              />
            </Form.Group>
            <Form.Group controlId="familyAndFriends1">
              <Form.Label>
                <Form.Check
                  label="Male"
                  type="radio"
                  name="malefemale"
                  value="Male"
                  checked={state.malefemale === "Male"}
                  onChange={handlechange}
                />
              </Form.Label>
              <br />
              <Form.Label>
                <Form.Check
                  label="Female"
                  type="radio"
                  name="malefemale"
                  value="Female"
                  checked={state.malefemale === "Female"}
                  onChange={handlechange}
                />
              </Form.Label>
            </Form.Group>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Form.Group controlId="height">
                      <Form.Control
                        type="text"
                        name="height"
                        placeholder="Height"
                        onChange={handlechange}
                        value={state.height}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="weight">
                      <Form.Control
                        type="text"
                        name="weight"
                        placeholder="Weight (kg)"
                        onChange={handlechange}
                        value={state.weight}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="chest">
                      <Form.Control
                        type="text"
                        name="chest"
                        placeholder="Chest (cm)"
                        onChange={handlechange}
                        value={state.chest}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="waist">
                      <Form.Control
                        type="text"
                        name="waist"
                        placeholder="Waist (cm)"
                        onChange={handlechange}
                        value={state.waist}
                      />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Group controlId="hip">
                      <Form.Control
                        type="text"
                        name="hip"
                        placeholder="Hip (cm)"
                        onChange={handlechange}
                        value={state.hip}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="thighleft">
                      <Form.Control
                        type="text"
                        name="thighleft"
                        placeholder="Thigh Left (cm)"
                        onChange={handlechange}
                        value={state.thighleft}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="thighright">
                      <Form.Control
                        type="text"
                        name="thighright"
                        placeholder=" Thigh Right (cm)"
                        onChange={handlechange}
                        value={state.thighright}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="calfleft">
                      <Form.Control
                        type="text"
                        name="calfleft"
                        placeholder="Calf Left (cm)"
                        onChange={handlechange}
                        value={state.calfleft}
                      />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Group controlId="calfright">
                      <Form.Control
                        type="text"
                        name="calfright"
                        placeholder="Calf Right (cm)"
                        onChange={handlechange}
                        value={state.calfright}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="bicepleft">
                      <Form.Control
                        type="text"
                        name="bicepleft"
                        placeholder="Bicep Left (cm)"
                        onChange={handlechange}
                        value={state.aaa}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId="bicepight">
                      <Form.Control
                        type="text"
                        name="bicepight"
                        placeholder="Bicep Right (cm)"
                        onChange={handlechange}
                        value={state.bicepight}
                      />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
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
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

PractisionerInputAssessment.propTypes = {
  handlechange: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default PractisionerInputAssessment;
