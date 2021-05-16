import React, { useContext } from 'react';

import { Context } from '../contextProvider/LogonContextP';

import Logon from '../components/logonRegister/logonModal';

function Login() {
  const {
    handlechange,
    formState,
  } = useContext(Context);
  return (
    <div>
      <Logon
        handlechange={handlechange}
        state={formState}
      />
    </div>
  );
}

export default Login;
