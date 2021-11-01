import React from 'react';

import Table from 'react-bootstrap/Table'

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
  date
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

export default LifeStyleAssFormCom;
