import React, { useState, useEffect, useContext } from "react";

import { Context } from "../contextProvider/LogonContextP";
import GoalsettingComp from "../components/userProfile/GoalsettingComp";

function PatientPersonalDetailsCon() {
  const { userInfo } = useContext(Context);
  const [allResults, setAllResults] = useState([]);

  const getGoalSettingInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/GoalSettingForm");
      const jsonData = await response.json();
      for (let i = 0; i < jsonData.length; i += 1) {
        return jsonData.map((data) =>
          userInfo.email === data.email
            ? setAllResults(() => [...allResults, data])
            : null
        );
      }
    } catch (err) {
      console.error(err.message);
    }
    return "Transaction completed successfully";
  };

  useEffect(() => {
    getGoalSettingInfo();
  }, [userInfo]);
  return (
    <div>
      {allResults.length > 0 ? <h3>Goal Setting</h3> : null}
      {allResults.map((items, i) => {
        return (
          <GoalsettingComp
            key={allResults[i].gsf_id}
            email={allResults[i].email}
            lifstylechanges={allResults[i].lifstylechanges}
            easiesttochange={allResults[i].easiesttochange}
            hardesttochange={allResults[i].hardesttochange}
            date={allResults[i].date}
          />
        );
      })}
    </div>
  );
}

export default PatientPersonalDetailsCon;
