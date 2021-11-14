import React from "react";

import PatientPersonalDetailsCon from "../containers/PatientPersonalDetailsCon";
import PatientGeneralHealthAssessmentCon from "../containers/PatientGeneralHealthAssessmentCon";
import SubmitPatientDetailsCon from "../containers/SubmitPatientDetailsCon";
import PatientGoalsettingCon from "../containers/PatientGoalsettingCon";
import PatientLifeStyleAssFormCon from "../containers/PatientLifeStyleAssFormCon";

function UserProfilePage() {
  return (
    <div className="container">
      <PatientPersonalDetailsCon />
      <br />
      <PatientGeneralHealthAssessmentCon />
      <br />
      <PatientGoalsettingCon />
      <br />
      <PatientLifeStyleAssFormCon />
      <br />
      <SubmitPatientDetailsCon />
    </div>
  );
}

export default UserProfilePage;
