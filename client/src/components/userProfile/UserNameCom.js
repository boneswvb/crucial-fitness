import React from "react";

import PropTypes from "prop-types";

function UserNameCom({ fullname, lastname }) {
  return (
    <div>
      <h2>
        Welcome back {fullname} {lastname}
      </h2>
    </div>
  );
}

UserNameCom.propTypes = {
  fullname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default UserNameCom;
