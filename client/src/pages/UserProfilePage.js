import React from 'react';

import PatientPersonalDetailsCon from '../containers/PatientPersonalDetailsCon';
import PatientDetailsCon from '../containers/PatientDetailsCon';

function UserProfilePage() {
  return (
    <div >
      <h1>User Profile</h1>
      <PatientDetailsCon />
      <PatientPersonalDetailsCon />
    </div>
  );
}

export default UserProfilePage;
