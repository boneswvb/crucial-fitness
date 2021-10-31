import React from "react";

function GeneralHealthAssessmentCom ({
  key,
  haf_id,
  email,
  ihavesomeonetotalkto,
  giveandreceiveaffection,
  iAmphysicallyactive,
  iexercise,
  useseatbelts,
  isleepwell,
  ofteneatexcess,
  overweight,
  underweight,
  myidealweight,
  smokedtabacco,
  cigarettesperday,
  illegaldrugs,
  overusemedication,
  caffeinecontainingdrinks,
  averagealcoholintake,
  morethanfourdrinks,
  driveafterdrinking,
  copewithstress,
  leisuretime,
  inahurry,
  angryhostile,
  positiveoptimistic,
  tenseuptight,
  saddepressed,
  satisfiedjobrole,
  date
}) {
  return (
    <div>
       <p>
         Your score: {
       ihavesomeonetotalkto +
       giveandreceiveaffection +
       iAmphysicallyactive +
       iexercise +
       useseatbelts +
       isleepwell +
       ofteneatexcess +
       overweight +
       underweight +
       myidealweight +
       smokedtabacco +
       cigarettesperday +
       illegaldrugs +
       overusemedication +
       caffeinecontainingdrinks +
       averagealcoholintake +
       morethanfourdrinks +
       driveafterdrinking +
       copewithstress +
       leisuretime +
       inahurry +
       angryhostile +
       positiveoptimistic +
       tenseuptight +
       saddepressed +
       satisfiedjobrole
       } - 
       haf_id: {haf_id}  email: {email} date submitted: {date}</p>
      
        <strong>
          <hr />
        </strong>
    </div>
  )};

export default GeneralHealthAssessmentCom;