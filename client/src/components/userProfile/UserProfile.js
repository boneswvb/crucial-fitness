import React, { useContext } from 'react';

import PatientDetailsCon from '../../containers/PatientDetailsCon';
import { Context } from '../../contextProvider/LogonContextP';

function UserProfile() {
  const { userInfo } = useContext(Context);
  console.log("userInfo", userInfo);
  return (
    <div>
      <h1>Userprofile</h1>
      <h3>Good day Mr/s {userInfo.lastname}</h3>
      <p>You joined this website on: {userInfo.date}</p>
      <p>Your registered email: {userInfo.email}</p>
      <p>Your registration number: {userInfo.si_id}</p>
      <PatientDetailsCon />
    </div>
  );
}

export default UserProfile;
