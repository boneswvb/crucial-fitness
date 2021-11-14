import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function LifeStyleAssForm({
  handlechange,
  state,
  handlesubmitlifeStyleassform,
}) {
  console.log("state", state);
  return (
    <div className="container">
      <h1>Life Style Assessment</h1>
      <Form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        data-email="from_email@example.com"
        action="https://script.google.com/macros/s/AKfycbw-DZp1Q1Ad8tQCn5N3B4RJlYqGArQH5_pVGrH3wHLnne6gojVf0gV5c3s9fG2mVqTizw/exec"
      >
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
        <Form.Group controlId="curhealtproblems">
          <Form.Label>Current Healt Problems</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="curhealtproblems"
            placeholder="Current Healt Problems"
            onChange={handlechange}
            value={state.curhealtproblems}
          />
        </Form.Group>
        <Form.Group controlId="medicalhistory">
          <Form.Label>
            Medical History - For The Last 10 Years And Other Important
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="medicalhistory"
            placeholder="Medical History"
            onChange={handlechange}
            value={state.medicalhistory}
          />
        </Form.Group>
        <Form.Group controlId="medsandsuppliments">
          <Form.Label>
            Current Medication And Suppliments That You Are Using
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="medsandsuppliments"
            placeholder="Medication and Suppliments"
            onChange={handlechange}
            value={state.medsandsuppliments}
          />
        </Form.Group>
        <div>
          <h3>
            Family History – Does anyone in your family have a history of the
            following?
          </h3>
          <Form.Group controlId="heartDiseaseRelation">
            <Form.Label>Heart Disease</Form.Label>
            <Form.Control
              as="select"
              name="heartdiseaserelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.heartdiseaserelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="diabetesType1Relation">
            <Form.Label>Diabetes Type 1</Form.Label>
            <Form.Control
              as="select"
              name="diabetestype1relation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.diabetestype1relation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="diabetesType2Relation">
            <Form.Label>Diabetes Type 2</Form.Label>
            <Form.Control
              as="select"
              name="diabetestype2relation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.diabetestype2relation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="highBloodPressureRelation">
            <Form.Label>High Blood Pressure</Form.Label>
            <Form.Control
              as="select"
              name="highbloodpressurerelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.highbloodpressurerelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="highCholesterolRelation">
            <Form.Label>High Cholesterol</Form.Label>
            <Form.Control
              as="select"
              name="highcholesterolrelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.highcholesterolrelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="thyroidDiseaseRelation">
            <Form.Label>Thyroid Disease</Form.Label>
            <Form.Control
              as="select"
              name="thyroiddiseaserelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.thyroiddiseaserelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="metabolicSyndromeRelation">
            <Form.Label>Metabolic Syndrome</Form.Label>
            <Form.Control
              as="select"
              name="metabolicsyndromerelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.metabolicsyndromerelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="renaldiseaserelation">
            <Form.Label>Renal Disease</Form.Label>
            <Form.Control
              as="select"
              name="renaldiseaserelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.renaldiseaserelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="liverDiseaseRelation">
            <Form.Label>Liver Disease</Form.Label>
            <Form.Control
              as="select"
              name="liverdiseaserelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.liverdiseaserelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="cancerRelation">
            <Form.Label>Cancer</Form.Label>
            <Form.Control
              as="select"
              name="cancerinrelation"
              placeholder="Family Member with History"
              onChange={handlechange}
              value={state.cancerrelation}
            >
              <option>---Select One---</option>
              <option>Not Applicable</option>
              <option>Spouse</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Grand Mother</option>
              <option>Grand Father</option>
              <option>Uncle</option>
              <option>Aunt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="typeOfCancerRelation">
            <Form.Label>Type Of Cancer</Form.Label>
            <Form.Control
              type="text"
              name="typeofcancerrelation"
              placeholder="Type Of Cancer"
              onChange={handlechange}
              value={state.typeOfCancerRelation}
            />
          </Form.Group>
          <Form.Group controlId="pastInjuriesAll">
            <Form.Label>Past Injuries: Please list all injuries</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="pastinjuriesall"
              placeholder="Past Injuries"
              onChange={handlechange}
              value={state.pastinjuriesall}
            />
          </Form.Group>
          <h2>Stress Management</h2>
          <Form.Group controlId="lifeStressors">
            <Form.Label>
              Describe any recent life stressors? (e.g. Health, Relationship/s,
              Financial, Work)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="lifetressors"
              placeholder="Describe any recent life stressors"
              onChange={handlechange}
              value={state.lifestressors}
            />
          </Form.Group>
          <Form.Group controlId="copeWithStress">
            <Form.Label>
              How do you cope with stress in your life? (e.g. Physical Activity,
              Medication)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="copewithstress"
              placeholder="How do you cope with stress in your life?"
              onChange={handlechange}
              value={state.copewithstress}
            />
          </Form.Group>
          <Form.Group controlId="managingCurrentStress">
            <Form.Label>
              How helpful are these techniques at managing your current stress
              level?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="managingcurrentstress"
              placeholder="How helpful are these techniques at managing your current stress level?"
              onChange={handlechange}
              value={state.managingcurrentstress}
            />
          </Form.Group>
          <Form.Group controlId="relaxOrUnwind">
            <Form.Label>
              Is it often hard for you to relax or unwind?
            </Form.Label>
            <Form.Control
              as="select"
              onChange={handlechange}
              name="relaxorunwind"
              value={state.relaxorunwind}
            >
              <option>---Select One---</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="SomeTimes">Some Times</option>
              <option value="AllWays">Always</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="sleepPerNight">
            <Form.Label>How many hours do you sleep per night</Form.Label>
            <Form.Control
              as="select"
              onChange={handlechange}
              name="sleeppernight"
              value={state.sleeppernight}
            >
              <option>---Select One---</option>
              <option value="1">1 Hour per night</option>
              <option value="2">2 Hours per night</option>
              <option value="3">3 Hours per night</option>
              <option value="4">4 Hours per night</option>
              <option value="5">5 Hours per night</option>
              <option value="6">6 Hours per night</option>
              <option value="7">7 Hours per night</option>
              <option value="8">8 Hours per night</option>
              <option value="9">9 Hours per night</option>
              <option value="10">10 Hours per night</option>
              <option value="11">11 Hours per night</option>
              <option value="12">12 Hours per night</option>
            </Form.Control>
          </Form.Group>
        </div>
        <Button
          type="submit"
          value="Register"
          variant="primary"
          onClick={handlesubmitlifeStyleassform}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

LifeStyleAssForm.propTypes = {
  handlechange: PropTypes.func.isRequired,
  handlesubmitlifeStyleassform: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default LifeStyleAssForm;
