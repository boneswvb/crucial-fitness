import React from "react";

import Table from "react-bootstrap/Table";

import PropTypes from "prop-types";

function GoalsettingComp({
  email,
  lifstylechanges,
  easiesttochange,
  hardesttochange,
  date,
}) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Life Style Changes</th>
            <th>Easiest To Change</th>
            <th>Hardest To Change</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
            <td>{lifstylechanges}</td>
            <td>{easiesttochange}</td>
            <td>{hardesttochange}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

GoalsettingComp.propTypes = {
  email: PropTypes.string.isRequired,
  lifstylechanges: PropTypes.string.isRequired,
  easiesttochange: PropTypes.string.isRequired,
  hardesttochange: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default GoalsettingComp;
