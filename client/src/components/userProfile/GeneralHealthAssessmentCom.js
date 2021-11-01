import React from "react";

import Table from 'react-bootstrap/Table'

function GeneralHealthAssessmentCom ({
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
  const scoreDescription = [{
    one: "Good Self-management", 
    two: "Good Self-management but attention needed in some areas", 
    three: "Fair Self-management but attention needed in several areas", 
    four: "Unsatisfactory Self-management. More control needed", 
    five: "Poor Self-management – Danger Zone"
  }];
  const score =
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
    
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>haf_id</th>
            <th>Email</th>
            <th>Date Submitted</th>
            <th>Score</th>
            <th>Score - Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{haf_id}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{score}</td>
            <td>{
              scoreDescription.map(data => {
                if (score >= 0 && score <= 39){
                  return data.five
                }else if (score >= 40 && score <= 59) {
                  return data.four
                }else if (score >= 60 && score <= 69) {
                  return data.three
                }else if (score >= 70 && score <= 84) {
                  return data.two
                }else if (score >= 85 && score <= 100) {
                  return data.one
                }
              })
            }</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )};

export default GeneralHealthAssessmentCom;