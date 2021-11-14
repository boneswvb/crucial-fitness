import React from "react";

import Table from "react-bootstrap/Table";

import PropTypes from "prop-types";

function GeneralHealthAssessmentCom({
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
  date,
}) {
  const scoreDescription = [
    {
      one: "Good Self-management",
      two: "Good Self-management but attention needed in some areas",
      three: "Fair Self-management but attention needed in several areas",
      four: "Unsatisfactory Self-management. More control needed",
      five: "Poor Self-management – Danger Zone",
    },
  ];
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
    satisfiedjobrole;

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
            <td>
              {scoreDescription.map((data) => {
                if (score >= 0 && score <= 39) {
                  return data.five;
                }
                if (score >= 40 && score <= 59) {
                  return data.four;
                }
                if (score >= 60 && score <= 69) {
                  return data.three;
                }
                if (score >= 70 && score <= 84) {
                  return data.two;
                }
                if (score >= 85 && score <= 100) {
                  return data.one;
                }
                return data;
              })}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

GeneralHealthAssessmentCom.propTypes = {
  haf_id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  ihavesomeonetotalkto: PropTypes.string.isRequired,
  giveandreceiveaffection: PropTypes.string.isRequired,
  iAmphysicallyactive: PropTypes.string.isRequired,
  iexercise: PropTypes.string.isRequired,
  useseatbelts: PropTypes.string.isRequired,
  isleepwell: PropTypes.string.isRequired,
  ofteneatexcess: PropTypes.string.isRequired,
  overweight: PropTypes.string.isRequired,
  underweight: PropTypes.string.isRequired,
  myidealweight: PropTypes.string.isRequired,
  smokedtabacco: PropTypes.string.isRequired,
  cigarettesperday: PropTypes.string.isRequired,
  illegaldrugs: PropTypes.string.isRequired,
  overusemedication: PropTypes.string.isRequired,
  caffeinecontainingdrinks: PropTypes.string.isRequired,
  averagealcoholintake: PropTypes.string.isRequired,
  morethanfourdrinks: PropTypes.string.isRequired,
  driveafterdrinking: PropTypes.string.isRequired,
  copewithstress: PropTypes.string.isRequired,
  leisuretime: PropTypes.string.isRequired,
  inahurry: PropTypes.string.isRequired,
  angryhostile: PropTypes.string.isRequired,
  positiveoptimistic: PropTypes.string.isRequired,
  tenseuptight: PropTypes.string.isRequired,
  saddepressed: PropTypes.string.isRequired,
  satisfiedjobrole: PropTypes.string.isRequired,
};

export default GeneralHealthAssessmentCom;
