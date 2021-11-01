import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../contextProvider/LogonContextP';
import UserProfileCom from '../components/userProfile/GeneralHealthAssessmentCom';

function PatientPersonalDetailsCon() {
  const { userInfo } = useContext(Context);
  const [GeneralHealthAssessmentInfoResults, setGeneralHealthAssessmentInfoAllResults] = useState([]);

  const getGeneralHealthAssessmentInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/GeneralHealthAssessmentForm')
      const jsonData = await response.json()
      for (let i = 0; i < jsonData.length; i++) {
        return jsonData.map(data => userInfo.email === data.email 
          ? setGeneralHealthAssessmentInfoAllResults(GeneralHealthAssessmentInfoResults => 
            [...GeneralHealthAssessmentInfoResults, data]) : null)
      }
    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getGeneralHealthAssessmentInfo()
  }, [userInfo])
  return (
    <div>
      {
        GeneralHealthAssessmentInfoResults.length > 0 
        ? <h3>General Health Assessment</h3>
        : null
      }
      {
        GeneralHealthAssessmentInfoResults.map((items, i) => {
          return (
            < UserProfileCom
              key={i}
              copewithstress = {GeneralHealthAssessmentInfoResults[i].copewithstress}
              haf_id = {GeneralHealthAssessmentInfoResults[i].haf_id}
              email = {GeneralHealthAssessmentInfoResults[i].email}
              ihavesomeonetotalkto = {GeneralHealthAssessmentInfoResults[i].ihavesomeonetotalkto}
              giveandreceiveaffection = {GeneralHealthAssessmentInfoResults[i].giveandreceiveaffection}
              iAmphysicallyactive = {GeneralHealthAssessmentInfoResults[i].iAmphysicallyactive}
              iexercise = {GeneralHealthAssessmentInfoResults[i].iexercise}
              useseatbelts = {GeneralHealthAssessmentInfoResults[i].useseatbelts}
              isleepwell = {GeneralHealthAssessmentInfoResults[i].isleepwell}
              ofteneatexcess = {GeneralHealthAssessmentInfoResults[i].ofteneatexcess}
              overweight = {GeneralHealthAssessmentInfoResults[i].overweight}
              underweight = {GeneralHealthAssessmentInfoResults[i].underweight}
              myidealweight = {GeneralHealthAssessmentInfoResults[i].myidealweight}
              smokedtabacco = {GeneralHealthAssessmentInfoResults[i].smokedtabacco}
              cigarettesperday = {GeneralHealthAssessmentInfoResults[i].cigarettesperday}
              illegaldrugs = {GeneralHealthAssessmentInfoResults[i].illegaldrugs}
              overusemedication = {GeneralHealthAssessmentInfoResults[i].overusemedication}
              caffeinecontainingdrinks = {GeneralHealthAssessmentInfoResults[i].caffeinecontainingdrinks}
              averagealcoholintake = {GeneralHealthAssessmentInfoResults[i].averagealcoholintake}
              morethanfourdrinks = {GeneralHealthAssessmentInfoResults[i].morethanfourdrinks}
              driveafterdrinking = {GeneralHealthAssessmentInfoResults[i].driveafterdrinking}
              copewithstress = {GeneralHealthAssessmentInfoResults[i].copewithstress}
              leisuretime = {GeneralHealthAssessmentInfoResults[i].leisuretime}
              inahurry = {GeneralHealthAssessmentInfoResults[i].inahurry}
              angryhostile = {GeneralHealthAssessmentInfoResults[i].angryhostile}
              positiveoptimistic = {GeneralHealthAssessmentInfoResults[i].positiveoptimistic}
              tenseuptight = {GeneralHealthAssessmentInfoResults[i].tenseuptight}
              saddepressed = {GeneralHealthAssessmentInfoResults[i].saddepressed}
              satisfiedjobrole = {GeneralHealthAssessmentInfoResults[i].satisfiedjobrole}
              date = {GeneralHealthAssessmentInfoResults[i].date}
            />
          );
        })
      }
    </div>
  )
}

export default PatientPersonalDetailsCon;