import React, { useState } from "react";

import PropTypes from "prop-types";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [formState, setFormState] = useState("");
  const [isSignedOn, setIsSignedOn] = useState(false);
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleClickLogOff = () => {
    setIsSignedOn(false);
    setUserInfo({});
    setFormState("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    return type === "checkbox"
      ? setFormState({
          ...formState,
          [name]: checked,
        })
      : setFormState({
          ...formState,
          [name]: value,
        });
  };

  const getUserInfo = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/SignIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formState.email,
        password: formState.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.email === formState.email) {
          setUserInfo(user);
          setIsSignedOn(true);
          handleClose();
        } else {
          alert("Incorrect log on info provided");
        }
      });
  };
  return (
    <Context.Provider
      value={{
        isSignedOn,
        handleClickLogOff,
        show,
        handleClose,
        handleShow,
        formState,
        handleChange,
        getUserInfo,
        userInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export { ContextProvider, Context };
