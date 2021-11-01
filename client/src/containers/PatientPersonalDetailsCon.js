import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../contextProvider/LogonContextP';
import UserNameCom from '../components/userProfile/UserNameCom';

function PatientPersonalDetailsCon() {
  const { userInfo } = useContext(Context);
  const [allResults, setAllResults] = useState([]);

  const getPersonalInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/PatientDetails')
      const jsonData = await response.json()
      for (let i = 0; i < jsonData.length; i++) {
        return jsonData.map(data => userInfo.email === data.email ? setAllResults(allResults => [...allResults, data]) : null)
      }
    }
    catch (err) {
      console.error(err.message)
    }
  } 
  
  // const getGoalSettingInfo = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/GoalSettingForm')
  //     const jsonData = await response.json()
  //     for (let i = 0; i < jsonData.length; i++) {
  //       return jsonData.map(data => userInfo.email === data.email ? setAllResults(allResults => [...allResults, data]) : null)
  //     }
  //   }
  //   catch (err) {
  //     console.error(err.message)
  //   }
  // }

  // const getLifeStyleAssInfo = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/LifeStyleAssForm')
  //     const jsonData = await response.json()
  //     for (let i = 0; i < jsonData.length; i++) {
  //       return jsonData.map(data => userInfo.email === data.email ? setAllResults(allResults => [...allResults, data]) : null)
  //     }
  //   }
  //   catch (err) {
  //     console.error(err.message)
  //   }
  // }

  useEffect(() => {
    getPersonalInfo()
    // getGeneralHealthAssessmentInfo(),
    // getGoalSettingInfo(),
    // getLifeStyleAssInfo()
  }, [userInfo])
  return (
    <div>
      {
        allResults.map((items, i) => {
          return (
            < UserNameCom
              key={i}
              // id={allResults[i].p_id}
              // email={allResults[i].email}
              fullname={allResults[i].fullname}
              lastname={allResults[i].lastname}
              // dateofbirth={allResults[i].dateofbirth}
              // adress={allResults[i].adress}
              // cellno={allResults[i].cellno}
              // econtact={allResults[i].econtact}
              // ecellno={allResults[i].ecellno}
              // relationship={allResults[i].relationship}
              // date={allResults[i].date}
              // allresults={allResults}
              // //gen health ass
              // copewithstress = {allResults[i].copewithstress}
              // //goal setting
              // lifstylechanges = {allResults[i].lifstylechanges}
              // //lifstyle ass
              // curhealtproblems = {allResults[i].curhealtproblems}
            />
          );
        })
      }
    </div>
  )
}

export default PatientPersonalDetailsCon;