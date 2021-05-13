import React from 'react';

import { Form } from 'react-bootstrap';

import PropTypes from 'prop-types';

function LifeStyleAssForm({ handleChange, state }) {
  return (
    <div className="container">
      <h1>Life Style Assessment</h1>
      {/* <h3>Personal Details</h3> */}
      <Form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        data-email="from_email@example.com"
        action="https://script.google.com/macros/s/AKfycbw-DZp1Q1Ad8tQCn5N3B4RJlYqGArQH5_pVGrH3wHLnne6gojVf0gV5c3s9fG2mVqTizw/exec"
      >
        <Form.Group controlId="fullname">
          <Form.Label>Full Names</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Full Names"
            onChange={handleChange}
            fullname={state}
            value={state.fullname}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            lastname={state}
            value={state.lastname}
          />
        </Form.Group>
        <Form.Group controlId="#dateofbirth">
          <Form.Label>Selcet Your Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateofbirth"
            placeholder="Date of Birth"
            onChange={handleChange}
            dateofbirth={state}
            value={state.dateofbirth}
          />
        </Form.Group>
        <Form.Group controlId="adress">
          <Form.Label>Your Home Address</Form.Label>
          <Form.Control
            type="text"
            name="adress"
            placeholder="Address"
            onChange={handleChange}
            adress={state}
            value={state.adress}
          />
        </Form.Group>
        <Form.Group controlId="cellno">
          <Form.Label>Your Cellphone Number</Form.Label>
          <Form.Control
            type="tel"
            name="cellno"
            placeholder="Cellphone Number"
            onChange={handleChange}
            cellno={state}
            value={state.cellno}
          />
        </Form.Group>
        <Form.Group controlId="#econtact">
          <Form.Label>Emergency Contact Name</Form.Label>
          <Form.Control
            type="text"
            name="econtact"
            placeholder="Emergency Contact Name"
            onChange={handleChange}
            econtact={state}
            value={state.econtact}
          />
        </Form.Group>
        <Form.Group controlId="ecellno">
          <Form.Label>Emergency Contact Number</Form.Label>
          <Form.Control
            type="tel"
            name="ecellno"
            placeholder="Emergency Contact Num"
            onChange={handleChange}
            ecellno={state}
            value={state.ecellno}
          />
        </Form.Group>
        <Form.Group controlId="relationship">
          <Form.Label>Relationship To Member</Form.Label>
          <Form.Control
            as="select"
            name="relationship"
            placeholder="Relationship To Member"
            onChange={handleChange}
            relationship={state}
            value={state.relationship}
          >
            <option>---Select One---</option>
            <option>Spouse</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Friend</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="curhealtproblems">
          <Form.Label>Current Healt Problems</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="curhealtproblems"
            placeholder="Current Healt Problems"
            onChange={handleChange}
            curhealtproblems={state}
            value={state.curhealtproblems}
          />
        </Form.Group>
        <Form.Group controlId="medicalhistory">
          <Form.Label>Medical History - For The Last 10 Years And Other Important</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="medicalhistory"
            placeholder="Medical History"
            onChange={handleChange}
            medicalhistory={state}
            value={state.medicalhistory}
          />
        </Form.Group>
        <Form.Group controlId="medsandsuppliments">
          <Form.Label>Current Medication And Suppliments That You Are Using</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="medsandsuppliments"
            placeholder="Medication and Suppliments"
            onChange={handleChange}
            medsandsuppliments={state}
            value={state.medsandsuppliments}
          />
        </Form.Group>
        <div>
          <h3>Family History – Does anyone in your family have a history of the following?</h3>
          <Form.Group controlId="heartDiseaseRelation">
            <Form.Label>Heart Disease</Form.Label>
            <Form.Control
              as="select"
              name="heartDiseaseRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              heartdiseaserelation={state}
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
              name="diabetesType1Relation"
              placeholder="Family Member with History"
              onChange={handleChange}
              diabetestype1relation={state}
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
              name="diabetesType2Relation"
              placeholder="Family Member with History"
              onChange={handleChange}
              diabetestype1relation={state}
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
          <Form.Group controlId="highBloodPressureRelation">
            <Form.Label>High Blood Pressure</Form.Label>
            <Form.Control
              as="select"
              name="highBloodPressureRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              highbloodpressurerelation={state}
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
              name="highCholesterolRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              highcholesterolrelation={state}
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
              name="thyroidDiseaseRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              thyroiddiseaserelation={state}
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
              name="metabolicSyndromeRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              metabolicsyndromerelation={state}
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
          <Form.Group controlId="renalDiseaseRelation">
            <Form.Label>Renal Disease</Form.Label>
            <Form.Control
              as="select"
              name="renalDiseaseRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              renaldiseaserelation={state}
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
              name="liverDiseaseRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              liverdiseaserelation={state}
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
              name="cancerinRelation"
              placeholder="Family Member with History"
              onChange={handleChange}
              cancerrelation={state}
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
              name="typeOfCancerRelation"
              placeholder="Type Of Cancer"
              onChange={handleChange}
              relationshipcacer={state}
              value={state.typeOfCancerRelation}
            />
          </Form.Group>
          <Form.Group controlId="pastInjuriesAll">
            <Form.Label>Past Injuries: Please list all injuries</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="pastInjuriesAll"
              placeholder="Past Injuries"
              onChange={handleChange}
              pastinjuriesall={state}
              value={state.pastinjuriesall}
            />
          </Form.Group>
          <h2>Stress Management</h2>
          <Form.Group controlId="lifeStressors">
            <Form.Label>
              Describe any recent life stressors? (e.g. Health, Relationship/s, Financial, Work)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="lifetressors"
              placeholder="Describe any recent life stressors"
              onChange={handleChange}
              lifestressors={state}
              value={state.lifestressors}
            />
          </Form.Group>
          <Form.Group controlId="copeWithStress">
            <Form.Label>
              How do you cope with stress in your life? (e.g. Physical Activity, Medication)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="copeWithStress"
              placeholder="How do you cope with stress in your life?"
              onChange={handleChange}
              copewithstress={state}
              value={state.copewithstress}
            />
          </Form.Group>
          <Form.Group controlId="managingCurrentStress">
            <Form.Label>
              How helpful are these techniques at managing your current stress level?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="managingCurrentStress"
              placeholder="How helpful are these techniques at managing your current stress level?"
              onChange={handleChange}
              managingcurrentstress={state}
              value={state.managingcurrentstress}
            />
          </Form.Group>
          <Form.Group controlId="relaxOrUnwind">
            <Form.Label>Is it often hard for you to relax or unwind?</Form.Label>
            <Form.Control
              as="select"
              value={state.relaxorunwind}
              onChange={handleChange}
              name="relaxOrUnwind"
              relaxorunwind={state}
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
              value={state.sleeppernight}
              onChange={handleChange}
              name="sleepPerNight"
              sleeppernight={state}
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
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

LifeStyleAssForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default LifeStyleAssForm;
