import React, { useState } from "react";

import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function PractisionerExcersizeProgram({ handlechange, state }) {
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
                        name="warm_up_exercises"
                        placeholder="Exercises"
                        onChange={handlechange}
                        value={state.warm_up_exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="warm_up_reps"
                        placeholder="Reps"
                        onChange={handlechange}
                        value={state.warm_up_reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="warm_up_wts"
                        placeholder="WTS"
                        onChange={handlechange}
                        value={state.warm_up_wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="warm_up_weeks"
                        placeholder="Weeks"
                        onChange={handlechange}
                        value={state.warm_up_weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="warm_up_frequency"
                        placeholder="Frequency"
                        onChange={handlechange}
                        value={state.warm_up_frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="date"
                        name="start"
                        placeholder="Start"
                        onChange={handlechange}
                        value={state.warm_up_start}
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
                        name="strength_exercises"
                        placeholder="Exercises"
                        onChange={handlechange}
                        value={state.strength_exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="strength_reps"
                        placeholder="Reps"
                        onChange={handlechange}
                        value={state.strength_reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="strength_wts"
                        placeholder="WTS"
                        onChange={handlechange}
                        value={state.strength_wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="strength_weeks"
                        placeholder="Weeks"
                        onChange={handlechange}
                        value={state.strength_weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="strength_frequency"
                        placeholder="Frequency"
                        onChange={handlechange}
                        value={state.strength_frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="date"
                        name="strength_start"
                        placeholder="Start"
                        onChange={handlechange}
                        value={state.strength_start}
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
                        name="cardio_exercises"
                        placeholder="Exercises"
                        onChange={handlechange}
                        value={state.cardio_exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cardio_reps"
                        placeholder="Reps"
                        onChange={handlechange}
                        value={state.cardio_reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cardio_wts"
                        placeholder="WTS"
                        onChange={handlechange}
                        value={state.cardio_wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cardio_weeks"
                        placeholder="Weeks"
                        onChange={handlechange}
                        value={state.cardio_weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cardio_frequency"
                        placeholder="Frequency"
                        onChange={handlechange}
                        value={state.cardio_frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="date"
                        name="cardio_start"
                        placeholder="Start"
                        onChange={handlechange}
                        value={state.cardio_start}
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
                        name="cool_down_exercises"
                        placeholder="Exercises"
                        onChange={handlechange}
                        value={state.cool_down_exercises}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="reps">
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cool_down_reps"
                        placeholder="Reps"
                        onChange={handlechange}
                        value={state.cool_down_reps}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="wts">
                      <Form.Label>WTS</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cool_down_wts"
                        placeholder="WTS"
                        onChange={handlechange}
                        value={state.cool_down_wts}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="weeks">
                      <Form.Label>Weeks</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cool_down_weeks"
                        placeholder="Weeks"
                        onChange={handlechange}
                        value={state.cool_down_weeks}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="frequency">
                      <Form.Label>Frequency</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        name="cool_down_frequency"
                        placeholder="Frequency"
                        onChange={handlechange}
                        value={state.cool_down_frequency}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group size="lg" controlId="start">
                      <Form.Label>Start</Form.Label>
                      <Form.Control
                        autoFocus
                        type="date"
                        name="cool_down_start"
                        placeholder="Start"
                        onChange={handlechange}
                        value={state.cool_down_start}
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
        </Modal.Footer>
      </Modal>
    </div>
  );
}

PractisionerExcersizeProgram.propTypes = {
  handlechange: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PractisionerExcersizeProgram;
