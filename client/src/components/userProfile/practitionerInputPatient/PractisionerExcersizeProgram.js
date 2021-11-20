import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function PractisionerExcersizeProgram() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="container">
      <Button variant="outline-info" onClick={() => setLgShow(true)}>
        Capture Excersize Program
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Capture Excersize Program
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
            <h3>Warm-up</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Exercises</th>
                  <th>Reps</th>
                  <th>Wts (Lb)</th>
                  <th>Weeks</th>
                  <th>Frequency</th>
                  <th>Start</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Group size="lg" controlId="exercises">
                      <Form.Label>Exercises</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="exercises"
                        placeholder="Exercises"
                        // onChange={handlechange}
                        // value={state.exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="reps"
                        placeholder="Reps"
                        // onChange={handlechange}
                        // value={state.reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="wts"
                        placeholder="WTS"
                        // onChange={handlechange}
                        // value={state.wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="weeks"
                        placeholder="Weeks"
                        // onChange={handlechange}
                        // value={state.weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="frequency"
                        placeholder="Frequency"
                        // onChange={handlechange}
                        // value={state.frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="start"
                        placeholder="Start"
                        // onChange={handlechange}
                        // value={state.start}
                      />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-warning"
                type="submit"
                value="add"
                // onClick={}
              >
                Add
              </Button>
            </div>
            <h3>Strength</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Exercises</th>
                  <th>Reps</th>
                  <th>Wts (Lb)</th>
                  <th>Weeks</th>
                  <th>Frequency</th>
                  <th>Start</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Group size="lg" controlId="exercises">
                      <Form.Label>Exercises</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="exercises"
                        placeholder="Exercises"
                        // onChange={handlechange}
                        // value={state.exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="reps"
                        placeholder="Reps"
                        // onChange={handlechange}
                        // value={state.reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="wts"
                        placeholder="WTS"
                        // onChange={handlechange}
                        // value={state.wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="weeks"
                        placeholder="Weeks"
                        // onChange={handlechange}
                        // value={state.weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="frequency"
                        placeholder="Frequency"
                        // onChange={handlechange}
                        // value={state.frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="start"
                        placeholder="Start"
                        // onChange={handlechange}
                        // value={state.start}
                      />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-warning"
                type="submit"
                value="add"
                // onClick={}
              >
                Add
              </Button>
            </div>
            <h3>Cardio</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Exercises</th>
                  <th>Reps</th>
                  <th>Wts (Lb)</th>
                  <th>Weeks</th>
                  <th>Frequency</th>
                  <th>Start</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Group size="lg" controlId="exercises">
                      <Form.Label>Exercises</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="exercises"
                        placeholder="Exercises"
                        // onChange={handlechange}
                        // value={state.exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="reps"
                        placeholder="Reps"
                        // onChange={handlechange}
                        // value={state.reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="wts"
                        placeholder="WTS"
                        // onChange={handlechange}
                        // value={state.wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="weeks"
                        placeholder="Weeks"
                        // onChange={handlechange}
                        // value={state.weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="frequency"
                        placeholder="Frequency"
                        // onChange={handlechange}
                        // value={state.frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="start"
                        placeholder="Start"
                        // onChange={handlechange}
                        // value={state.start}
                      />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-warning"
                type="submit"
                value="add"
                // onClick={}
              >
                Add
              </Button>
            </div>
            <h3>Cool-down</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Exercises</th>
                  <th>Reps</th>
                  <th>Wts (Lb)</th>
                  <th>Weeks</th>
                  <th>Frequency</th>
                  <th>Start</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Group size="lg" controlId="exercises">
                      <Form.Label>Exercises</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="exercises"
                        placeholder="Exercises"
                        // onChange={handlechange}
                        // value={state.exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="reps"
                        placeholder="Reps"
                        // onChange={handlechange}
                        // value={state.reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="wts"
                        placeholder="WTS"
                        // onChange={handlechange}
                        // value={state.wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="weeks"
                        placeholder="Weeks"
                        // onChange={handlechange}
                        // value={state.weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="frequency"
                        placeholder="Frequency"
                        // onChange={handlechange}
                        // value={state.frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="start"
                        placeholder="Start"
                        // onChange={handlechange}
                        // value={state.start}
                      />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-warning"
                type="submit"
                value="add"
                // onClick={}
              >
                Add
              </Button>
            </div>
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
export default PractisionerExcersizeProgram;
