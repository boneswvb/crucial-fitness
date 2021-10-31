import React from 'react';

import PatientPersonalDetailsCon from '../containers/PatientPersonalDetailsCon';
import PatientGeneralHealthAssessmentCon from '../containers/PatientGeneralHealthAssessmentCon';
import PatientDetailsCon from '../containers/SubmitPatientDetailsCon';

function UserProfilePage() {
  return (
    <div >
      <h1>User Profile</h1>
      <PatientPersonalDetailsCon />
      <PatientGeneralHealthAssessmentCon />
      <PatientDetailsCon />
    </div>
  );
}

export default UserProfilePage;
