import React from "react";

import Table from "react-bootstrap/Table";

import PropTypes from "prop-types";

function LifeStyleAssFormCom({
  email,
  curhealtproblems,
  medicalhistory,
  medsandsuppliments,
  pastinjuriesall,
  lifetressors,
  copewithstress,
  managingcurrentstress,
  relaxorunwind,
  sleeppernight,
  date,
}) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Current Healt Problems</th>
            <th>Medical History</th>
            <th>Meds And Suppliments</th>
            <th>Past Injuries - All</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
            <td>{curhealtproblems}</td>
            <td>{medicalhistory}</td>
            <td>{medsandsuppliments}</td>
            <td>{pastinjuriesall}</td>
            <td>{date}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Life Stressors</th>
            <th>Cope With Stress</th>
            <th>Managing Current Stress</th>
            <th>Relax Or Unwind</th>
            <th>Sleep per Night</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{lifetressors}</td>
            <td>{copewithstress}</td>
            <td>{managingcurrentstress}</td>
            <td>{relaxorunwind}</td>
            <td>{sleeppernight}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

LifeStyleAssFormCom.propTypes = {
  email: PropTypes.string.isRequired,
  curhealtproblems: PropTypes.string.isRequired,
  medicalhistory: PropTypes.string.isRequired,
  medsandsuppliments: PropTypes.string.isRequired,
  pastinjuriesall: PropTypes.string.isRequired,
  lifetressors: PropTypes.string.isRequired,
  copewithstress: PropTypes.string.isRequired,
  managingcurrentstress: PropTypes.string.isRequired,
  relaxorunwind: PropTypes.string.isRequired,
  sleeppernight: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default LifeStyleAssFormCom;
