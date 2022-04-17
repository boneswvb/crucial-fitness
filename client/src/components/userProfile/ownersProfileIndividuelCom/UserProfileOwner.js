import React from "react";

import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Media from "react-bootstrap/Media";

import SubmitPractisionerComments from "../../../containers/PractisionersStateComponents/SubmitPractisionerComments";
import SubmitPractisionerExcersizeProgram from "../../../containers/PractisionersStateComponents/SubmitPractisionerExcersizeProgram";
import SubmitPractisionerInputAssessment from "../../../containers/PractisionersStateComponents/SubmitPractisionerInputAssessment";
import PractisionerPatientDetailsCom from "./PractisionerPatientDetailsCom";
import PrctiosionerGeneralHealthAssessmentCon from "./PrctiosionerGeneralHealthAssessmentCon";
import PractisionerLifeStyleAssFormCom from "./PractisionerLifeStyleAssFormCom";
import PractisionerGoalsettingComp from "./PractisionerGoalsettingComp";
import PractisionersPatientAssessmentCom from "./PractisionersPatientAssessmentCom";
import PractisionerPatientExersizeProgress from "./PractisionerPatientExersizeProgress";
import PractisionerCommentsCom from "./PractisionerCommentsCom";

function UserProfileOwner({
  searchstate,
  handlechange,
  handleclicksearchbutton,
  goalsetting,
}) {
  return (
    <div className="container ">
      <Media.Body>
        <h2>Welcome back Adri!</h2>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search Patient By Email"
            aria-label="Search By Email"
            aria-describedby="Search"
            id="search"
            name="search"
            type="input"
            onChange={handlechange}
            value={searchstate.search}
          />
          <Button variant="success" onClick={handleclicksearchbutton}>
            Search
          </Button>
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
          <PractisionerGoalsettingComp goalsetting={goalsetting} />
        </div>

        <hr />
        <h3 style={{ textAlign: "center" }}>Track patient Exersize Progress</h3>
        <div className="d-flex justify-content-around">
          <PractisionerCommentsCom />
          <PractisionerPatientExersizeProgress />
          <PractisionersPatientAssessmentCom />
        </div>
        <hr />
      </Media.Body>
    </div>
  );
}

UserProfileOwner.propTypes = {
  searchstate: PropTypes.string.isRequired,
  handlechange: PropTypes.string.isRequired,
  handleclicksearchbutton: PropTypes.string.isRequired,
  goalsetting: PropTypes.string.isRequired,
};

export default UserProfileOwner;
