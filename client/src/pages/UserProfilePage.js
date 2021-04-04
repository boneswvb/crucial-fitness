import React, { useContext } from 'react';

import UserProfile from '../components/userProfile/UserProfile';
import { Context } from '../contextProvider/LogonContextP';

import './UserProfilePage.css';

function UserProfilePage() {
  const { isSignedOn } = useContext(Context);
  const style = isSignedOn ? 'displayUser' : 'displayUserNo';

  return (
    <div className={style}>
      <UserProfile />
    </div>
  );
}

export default UserProfilePage;
