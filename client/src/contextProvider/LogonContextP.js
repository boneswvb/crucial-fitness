import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [isSignedOn, setIsSignedOn] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClickLogOff = () => setIsSignedOn(false);
  const handleClickLogOn = () => {
    setIsSignedOn(true);
    handleClose();
  };

  return (
    <Context.Provider value={{
      isSignedOn,
      handleClickLogOn,
      handleClickLogOff,
      show,
      handleClose,
      handleShow,
    }}
    >
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.bool.isRequired,
};

export { ContextProvider, Context };
