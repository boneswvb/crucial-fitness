import React from 'react';

function UserProfile({
  fullname,
  lastname,
}) {  
  return (
    <div>
      <h2>Welcome back {fullname} {lastname}</h2>
    </div>
  );
}

export default UserProfile;
