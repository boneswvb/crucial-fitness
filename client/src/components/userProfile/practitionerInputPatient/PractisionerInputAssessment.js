import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PractisionerInputAssessment() {
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
            <Form.Group size="lg" controlId="captureddate">
              <Form.Label>Captured Date</Form.Label>
              <Form.Control
                autoFocus
                type="date"
                name="captureddate"
                placeholder="Captured Date"
                // onChange={handlechange}
                // value={state.captureddate}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                name="email"
                // onChange={handlechange}
                // value={state.email}
              />
            </Form.Group>
            <Form.Group controlId="fullname">
              <Form.Label>Full Names</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Full Names"
                // onChange={handlechange}
                // value={state.fullname}
              />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Last Name"
                // onChange={handlechange}
                // value={state.lastname}
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                name="age"
                placeholder="Age"
                // onChange={handlechange}
                // value={state.age}
              />
            </Form.Group>
            <Form.Group controlId="familyAndFriends1">
              <Form.Label>
                <Form.Check
                  label="Male"
                  type="radio"
                  name="malefemale"
                  value="Male"
                  // checked={state.ihavesomeonetotalkto === "4"}
                  // onChange={handlechange}
                />
              </Form.Label>
              <br />
              <Form.Label>
                <Form.Check
                  label="Female"
                  type="radio"
                  name="malefemale"
                  value="Female"
                  // checked={state.ihavesomeonetotalkto === "2"}
                  // onChange={handlechange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="text"
                name="height"
                placeholder="Height"
                // onChange={handlechange}
                // value={state.height}
              />
            </Form.Group>
            <Form.Group controlId="weight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="text"
                name="weight"
                placeholder="Weight (kg)"
                // onChange={handlechange}
                // value={state.weight}
              />
            </Form.Group>
            <Form.Group controlId="chest">
              <Form.Label>Chest (cm)</Form.Label>
              <Form.Control
                type="text"
                name="chest"
                placeholder="Chest (cm)"
                // onChange={handlechange}
                // value={state.chest}
              />
            </Form.Group>
            <Form.Group controlId="waist">
              <Form.Label>Waist (cm)</Form.Label>
              <Form.Control
                type="text"
                name="waist"
                placeholder="Waist (cm)"
                // onChange={handlechange}
                // value={state.waist}
              />
            </Form.Group>
            <Form.Group controlId="hip">
              <Form.Label>Hip (cm)</Form.Label>
              <Form.Control
                type="text"
                name="hip"
                placeholder="Hip (cm)"
                // onChange={handlechange}
                // value={state.hip}
              />
            </Form.Group>
            <Form.Group controlId="thighleft">
              <Form.Label>Thigh Left (cm)</Form.Label>
              <Form.Control
                type="text"
                name="thighleft"
                placeholder="Thigh Left (cm)"
                // onChange={handlechange}
                // value={state.thighleft}
              />
            </Form.Group>
            <Form.Group controlId="thighright">
              <Form.Label> Thigh Right (cm)</Form.Label>
              <Form.Control
                type="text"
                name="thighright"
                placeholder=" Thigh Right (cm)"
                // onChange={handlechange}
                // value={state.thighright}
              />
            </Form.Group>
            <Form.Group controlId="calfleft">
              <Form.Label>Calf Left (cm)</Form.Label>
              <Form.Control
                type="text"
                name="calfleft"
                placeholder="Calf Left (cm)"
                // onChange={handlechange}
                // value={state.calfleft}
              />
            </Form.Group>
            <Form.Group controlId="calfright">
              <Form.Label>Calf Right (cm)</Form.Label>
              <Form.Control
                type="text"
                name="calfright"
                placeholder="Calf Right (cm)"
                // onChange={handlechange}
                // value={state.calfright}
              />
            </Form.Group>
            <Form.Group controlId="bicepleft">
              <Form.Label>Bicep Left (cm)</Form.Label>
              <Form.Control
                type="text"
                name="aaa"
                placeholder="Bicep Left (cm)"
                // onChange={handlechange}
                // value={state.aaa}
              />
            </Form.Group>

            <Form.Group controlId="bicepight">
              <Form.Label>Bicep Right (cm)</Form.Label>
              <Form.Control
                type="text"
                name="bicepight"
                placeholder="Bicep Right (cm)"
                // onChange={handlechange}
                // value={state.bicepight}
              />
            </Form.Group>
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
export default PractisionerInputAssessment;
