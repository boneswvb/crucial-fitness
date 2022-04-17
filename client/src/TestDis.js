import React from "react";

import Button from "react-bootstrap/Button";

function TestDis({
  getalldata,
  goalsetform,
  lifestyleass,
  patientdetails,
  genHealtAss,
}) {
  return (
    <div>
      <Button variant="success" onClick={getalldata}>
        TestDis
      </Button>
      {goalsetform.map((items, i) => (
        <div key={i}>
          <p>ID: {items[i].gsf_id}</p>
          <p>Email: {items[i].email}</p>
        </div>
      ))}
    </div>
  );
}

export default TestDis;
