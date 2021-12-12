import React from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import SubmitPractisionerComments from "../../containers/PractisionersStateComponents/SubmitPractisionerComments";
import SubmitPractisionerExcersizeProgram from "../../containers/PractisionersStateComponents/SubmitPractisionerExcersizeProgram";
import SubmitPractisionerInputAssessment from "../../containers/PractisionersStateComponents/SubmitPractisionerInputAssessment";
import PractisionerPatientDetailsCom from "./ownersProfileIndividuelCom/PractisionerPatientDetailsCom";
import PrctiosionerGeneralHealthAssessmentCon from "./ownersProfileIndividuelCom/PrctiosionerGeneralHealthAssessmentCon";
import PractisionerLifeStyleAssFormCom from "./ownersProfileIndividuelCom/PractisionerLifeStyleAssFormCom";
import PractisionerGoalsettingComp from "./ownersProfileIndividuelCom/PractisionerGoalsettingComp";
import PractisionersPatientAssessmentCom from "./ownersProfileIndividuelCom/PractisionersPatientAssessmentCom";
import PractisionerPatientExersizeProgress from "./ownersProfileIndividuelCom/PractisionerPatientExersizeProgress";
import PractisionerCommentsCom from "./ownersProfileIndividuelCom/PractisionerCommentsCom";

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

      <hr />
      <h3 style={{ textAlign: "center" }}>Input Patient Information</h3>
      <div className="d-flex justify-content-around">
        <SubmitPractisionerComments />
        <SubmitPractisionerExcersizeProgram />
        <SubmitPractisionerInputAssessment />
      </div>

      <hr />
      <h3 style={{ textAlign: "center" }}>
        Check Patient Information & Completed form Information
      </h3>
      <div className="d-flex justify-content-around">
        <PractisionerPatientDetailsCom />
        <PrctiosionerGeneralHealthAssessmentCon />
        <PractisionerLifeStyleAssFormCom />
        <PractisionerGoalsettingComp />
      </div>

      <hr />
      <h3 style={{ textAlign: "center" }}>Track patient Exersize Progress</h3>
      <div className="d-flex justify-content-around">
        <PractisionerCommentsCom />
        <PractisionerPatientExersizeProgress />
        <PractisionersPatientAssessmentCom />
      </div>

      <hr />
    </div>
  );
}

export default UserProfileOwner;
