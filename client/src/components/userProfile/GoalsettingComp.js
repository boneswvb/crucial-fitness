import React from 'react';

import Table from 'react-bootstrap/Table'

function GoalsettingComp({
  email, 
  lifstylechanges, 
  easiesttochange, 
  hardesttochange, 
  date
}) {  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Life Style Changes</th>
            <th>Easiest To  Change</th>
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

export default GoalsettingComp;
