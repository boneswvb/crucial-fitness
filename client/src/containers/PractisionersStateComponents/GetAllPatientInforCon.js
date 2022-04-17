import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../contextProvider/LogonContextP";
import UserProfileOwner from "../../components/userProfile/ownersProfileIndividuelCom/UserProfileOwner";

function GetAllPatientInforCon() {
  const { userInfo } = useContext(Context);
  const [patientDetails, setPatientDetails] = useState([]);

  const GetAllPatientInfoCall = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/PatientDetails");
      const jsonData = await response.json();
      for (let i = 0; i < jsonData.length; i += 1) {
        return jsonData.map((data) =>
          userInfo.email === data.email
            ? setPatientDetails(() => [...patientDetails, data])
            : null
        );
      }
    } catch (err) {
      console.error(err.message);
    }
    return "Transaction completed successfully";
  };
  useEffect(() => {
    GetAllPatientInfoCall();
  }, [userInfo]);

  return (
    <div>
      {patientDetails.map((items, i) => {
        return (
          <UserProfileOwner
            // User personal info
            pracid={patientDetails[i].p_id}
            pracemail={patientDetails[i].email}
            pracfullname={patientDetails[i].fullname}
          />
        );
      })}
    </div>
  );
}

export default GetAllPatientInforCon;
