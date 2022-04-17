import React, { useState, useEffect, useContext } from "react";

import { Context } from "../contextProvider/LogonContextP";
import UserNameCom from "../components/userProfile/LifeStyleAssFormCom";

function PatientPersonalDetailsCon() {
  const { userInfo } = useContext(Context);
  const [allResults, setAllResults] = useState([]);

  const getLifeStyleAssInfo = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/LifeStyleAssForm"
      );
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
    getLifeStyleAssInfo();
  }, [userInfo]);
  return (
    <div>
      {allResults.length > 0 ? <h3>Life Style Assessment</h3> : null}
      {allResults.map((items, i) => {
        return (
          <UserNameCom
            key={allResults[i].laf_id}
            email={allResults[i].email}
            curhealtproblems={allResults[i].curhealtproblems}
            medicalhistory={allResults[i].medicalhistory}
            medsandsuppliments={allResults[i].medsandsuppliments}
            heartdiseaserelation={allResults[i].heartdiseaserelation}
            diabetestype1relation={allResults[i].diabetestype1relation}
            diabetestype2relation={allResults[i].diabetestype2relation}
            highbloodpressurerelation={allResults[i].highbloodpressurerelation}
            highcholesterolrelation={allResults[i].highcholesterolrelation}
            thyroiddiseaserelation={allResults[i].thyroiddiseaserelation}
            metabolicsyndromerelation={allResults[i].metabolicsyndromerelation}
            renaldiseaserelation={allResults[i].renaldiseaserelation}
            liverdiseaserelation={allResults[i].liverdiseaserelation}
            cancerinrelation={allResults[i].cancerinrelation}
            typeofcancerrelation={allResults[i].typeofcancerrelation}
            pastinjuriesall={allResults[i].pastinjuriesall}
            lifetressors={allResults[i].lifetressors}
            copewithstress={allResults[i].copewithstress}
            managingcurrentstress={allResults[i].managingcurrentstress}
            relaxorunwind={allResults[i].relaxorunwind}
            sleeppernight={allResults[i].sleeppernight}
            date={allResults[i].date}
          />
        );
      })}
    </div>
  );
}

export default PatientPersonalDetailsCon;
