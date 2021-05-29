import React from 'react';

function UserProfile({
  id,
  email,
  fullname,
  lastname,
  dateofbirth,
  adress,
  cellno,
  econtact,
  ecellno,
  relationship,
  date,
  allresults,
}) {
  return (
    <div>
      <p>Patient P_ID: {id}</p>
      <p>Email: {email}</p>
      <p>Full name: {fullname}</p>
      <p>Last name: {lastname}</p>
      <p>Date of birth: {dateofbirth}</p>
      <p>Adress: {adress}</p>
      <p>Cellphone number: {cellno}</p>
      <p>Emergency contact: {econtact}</p>
      <p>Emergency contact cellphone number: {ecellno}</p>
      <p>Relationship to member: {relationship}</p>
      <p>Date joined: {date}</p>
    </div>
  );
}

export default UserProfile;
