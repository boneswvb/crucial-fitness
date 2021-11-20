import React from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import PractisionerInputAssessment from "./practitionerInputPatient/PractisionerInputAssessment";
import PractisionerComments from "./practitionerInputPatient/PractisionerComments";
import PractisionerPatientDetailsCom from "./ownersProfileIndividuelCom/PractisionerPatientDetailsCom";
import PrctiosionerGeneralHealthAssessmentCon from "./ownersProfileIndividuelCom/PrctiosionerGeneralHealthAssessmentCon";
import PractisionerLifeStyleAssFormCom from "./ownersProfileIndividuelCom/PractisionerLifeStyleAssFormCom";
import PractisionerGoalsettingComp from "./ownersProfileIndividuelCom/PractisionerGoalsettingComp";
import PractisionersPatientAssessmentCom from "./ownersProfileIndividuelCom/PractisionersPatientAssessmentCom";
import PractisionerPatientExersizeProgress from "./ownersProfileIndividuelCom/PractisionerPatientExersizeProgress";
import PractisionerExcersizeProgram from "./practitionerInputPatient/PractisionerExcersizeProgram";

function UserProfileOwner() {
  return (
    <div className="container ">
      <h2>Welcome back Practisioner!</h2>

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
        <PractisionerInputAssessment />
        <PractisionerComments />
        <PractisionerExcersizeProgram />
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <PractisionerPatientDetailsCom />
        <PrctiosionerGeneralHealthAssessmentCon />
        <PractisionerLifeStyleAssFormCom />
        <PractisionerGoalsettingComp />
      </div>
      <div className="d-flex justify-content-around">
        <PractisionersPatientAssessmentCom />
        <PractisionerPatientExersizeProgress />
      </div>
      <hr />
    </div>
  );
}

export default UserProfileOwner;
