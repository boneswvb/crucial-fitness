import React, { useState } from "react";

import TestDis from "./TestDis";

function Test() {
  const [genHealtAss, setGenHealtAss] = useState([]);
  const [goalSetForm, setGoalSetForm] = useState([]);
  const [lifeStyleAssForm, setLifeStyleAssForm] = useState([]);
  const [patientDetails, setPatientDetails] = useState([]);

  const handleClickGetAllDatabaseData = () => {
    Promise.all([
      fetch("http://localhost:5000/api/GeneralHealthAssessmentForm"),
      fetch("http://localhost:5000/api/GoalSettingForm"),
      fetch("http://localhost:5000/api/LifeStyleAssForm"),
      fetch("http://localhost:5000/api/PatientDetails"),
    ])
      .then(function a(responses) {
        return Promise.all(
          responses.map(function r(response) {
            return response.json();
          })
        );
      })
      .then(function storeData(data) {
        // Log the data to the console
        // You would do something with both sets of data here
        setGenHealtAss(() => [...genHealtAss, data[0]]);
        setGoalSetForm(() => [...goalSetForm, data[1]]);
        setLifeStyleAssForm(() => [...lifeStyleAssForm, data[2]]);
        setPatientDetails(() => [...patientDetails, data[3]]);
      })
      .catch(function error(err) {
        console.log(err);
      });
  };
  console.log("goalSetForm", goalSetForm);
  return (
    <div>
      <TestDis
        getalldata={handleClickGetAllDatabaseData}
        genHealtAss={genHealtAss}
        goalsetform={goalSetForm}
        lifestyleass={lifeStyleAssForm}
        patientdetails={patientDetails}
      />
    </div>
  );
}

export default Test;
