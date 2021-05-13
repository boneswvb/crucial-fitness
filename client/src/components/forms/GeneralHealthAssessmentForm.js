import React from 'react';

import { Form } from 'react-bootstrap';

import PropTypes from 'prop-types';

function GeneralHealthAssessmentPage({ data, handlechange }) {
  return (
    <div>
      <h1>General Health Assessment</h1>
      <Form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        data-email="from_email@example.com"
        action="https://script.google.com/macros/s/AKfycbw-DZp1Q1Ad8tQCn5N3B4RJlYqGArQH5_pVGrH3wHLnne6gojVf0gV5c3s9fG2mVqTizw/exec"
      >
        <h3>Personal Details</h3>
        <Form.Group controlId="fullname">
          <Form.Label>Full Names</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Full Names"
            onChange={handlechange}
            fullname={data}
            value={data.fullname}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handlechange}
            lastname={data}
            value={data.lastname}
          />
        </Form.Group>
        <Form.Group controlId="#dateofbirth">
          <Form.Label>Selcet Your Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateofbirth"
            placeholder="Date of Birth"
            onChange={handlechange}
            dateofbirth={data}
            value={data.dateofbirth}
          />
        </Form.Group>
        <Form.Group controlId="adress">
          <Form.Label>Your Home Address</Form.Label>
          <Form.Control
            type="text"
            name="adress"
            placeholder="Address"
            onChange={handlechange}
            adress={data}
            value={data.adress}
          />
        </Form.Group>
        <Form.Group controlId="cellno">
          <Form.Label>Your Cellphone Number</Form.Label>
          <Form.Control
            type="tel"
            name="cellno"
            placeholder="Cellphone Number"
            onChange={handlechange}
            cellno={data}
            value={data.cellno}
          />
        </Form.Group>
        <Form.Group controlId="#econtact">
          <Form.Label>Emergency Contact Name</Form.Label>
          <Form.Control
            type="text"
            name="econtact"
            placeholder="Emergency Contact Name"
            onChange={handlechange}
            econtact={data}
            value={data.econtact}
          />
        </Form.Group>
        <Form.Group controlId="ecellno">
          <Form.Label>Emergency Contact Number</Form.Label>
          <Form.Control
            type="tel"
            name="ecellno"
            placeholder="Emergency Contact Num"
            onChange={handlechange}
            ecellno={data}
            value={data.ecellno}
          />
        </Form.Group>
        <Form.Group controlId="relationship">
          <Form.Label>Relationship To Member</Form.Label>
          <Form.Control
            as="select"
            name="relationship"
            placeholder="Relationship To Member"
            onChange={handlechange}
            relationship={data}
            value={data.relationship}
          >
            <option>---Select One---</option>
            <option>Spouse</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Friend</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="familyAndFriends1">
          <h3>Family and Friends</h3>
          <p><strong>I have someone to talk to about things that are important to me</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="iHaveSomeoneToTalkTo"
              value="4"
              checked={data.iHaveSomeoneToTalkTo === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="iHaveSomeoneToTalkTo"
              value="2"
              checked={data.iHaveSomeoneToTalkTo === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="iHaveSomeoneToTalkTo"
              value="0"
              checked={data.iHaveSomeoneToTalkTo === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="familyAndFriends2">
          <p><strong>I give and receive affection</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="giveAndReceiveAffection"
              value="4"
              checked={data.giveAndReceiveAffection === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="giveAndReceiveAffection"
              value="2"
              checked={data.giveAndReceiveAffection === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="giveAndReceiveAffection"
              value="0"
              checked={data.giveAndReceiveAffection === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="activity">
          <h3>Activity</h3>
          <p><strong>I am physically active (walking, gardening, housework)</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="iAmPhysicallyActive"
              value="4"
              checked={data.iAmPhysicallyActive === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="iAmPhysicallyActive"
              value="2"
              checked={data.iAmPhysicallyActive === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="iAmPhysicallyActive"
              value="0"
              checked={data.iAmPhysicallyActive === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="activity2">
          <p>
            <strong>I exercise for at least 20 minutes (running, cycling, fast walking)</strong>
          </p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="iExercise"
              value="4"
              checked={data.iExercise === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="iExercise"
              value="2"
              checked={data.iExercise === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="iExercise"
              value="0"
              checked={data.iExercise === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="activity3">
          <p><strong>I use seatbelts</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="useSeatbelts"
              value="4"
              checked={data.useSeatbelts === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="useSeatbelts"
              value="2"
              checked={data.useSeatbelts === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="useSeatbelts"
              value="0"
              checked={data.useSeatbelts === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="sleep">
          <h3>Sleep</h3>
          <p><strong>I sleep well and feel rested</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="iSleepWell"
              value="4"
              checked={data.iSleepWell === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="iSleepWell"
              value="2"
              checked={data.iSleepWell === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="iSleepWell"
              value="0"
              checked={data.iSleepWell === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="nutrition">
          <h3>NUTRITION</h3>
          <p><strong>I often eat excess sugar, salt, animal fats and junk food</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="oftenEatExcess"
              value="4"
              checked={data.oftenEatExcess === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="oftenEatExcess"
              value="2"
              checked={data.oftenEatExcess === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="oftenEatExcess"
              value="0"
              checked={data.oftenEatExcess === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="nutrition2">
          <p><strong>I am within …… kg of my ideal weight</strong></p>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I Am Over weight"
              name="overWeight"
              checked={data.overWeight}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I Am Under Weight"
              name="underWeight"
              checked={data.underWeight}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Label>
            <Form.Check
              label="Four"
              type="radio"
              name="myIdealWeight"
              value="4"
              checked={data.myIdealWeight === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Eight"
              type="radio"
              name="myIdealWeight"
              value="2"
              checked={data.myIdealWeight === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="More than eight"
              type="radio"
              name="myIdealWeight"
              value="0"
              checked={data.myIdealWeight === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="tabaccoAndToxins">
          <h3>TABACCO AND TOXINS</h3>
          <p><strong>I have smoked tabacco</strong></p>
          <Form.Label>
            <Form.Check
              label="Not In Five Years"
              type="radio"
              name="smokedTabacco"
              value="4"
              checked={data.smokedTabacco === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Not In One Year"
              type="radio"
              name="smokedTabacco"
              value="2"
              checked={data.smokedTabacco === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="In The Last Year"
              type="radio"
              name="smokedTabacco"
              value="0"
              checked={data.smokedTabacco === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="tabaccoAndToxins2">
          <p><strong>I usually smoke … cigarettes per day</strong></p>
          <Form.Label>
            <Form.Check
              label="I don't smoke"
              type="radio"
              name="cigarettesPerday"
              value="4"
              checked={data.cigarettesPerday === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Five To Ten"
              type="radio"
              name="cigarettesPerday"
              value="2"
              checked={data.cigarettesPerday === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="More than Ten"
              type="radio"
              name="cigarettesPerday"
              value="0"
              checked={data.cigarettesPerday === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="tabaccoAndToxins3">
          <p><strong>I use illegal drugs</strong></p>
          <Form.Label>
            <Form.Check
              label="Never"
              type="radio"
              name="illegalDrugs"
              value="4"
              checked={data.illegalDrugs === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Not In one Year"
              type="radio"
              name="illegalDrugs"
              value="2"
              checked={data.illegalDrugs === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="In Past Year"
              type="radio"
              name="illegalDrugs"
              value="0"
              checked={data.illegalDrugs === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="tabaccoAndToxins4">
          <p><strong>I tend to overuse medication</strong></p>
          <Form.Label>
            <Form.Check
              label="Never"
              type="radio"
              name="overuseMedication"
              value="4"
              checked={data.overuseMedication === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Not In One Year"
              type="radio"
              name="overuseMedication"
              value="2"
              checked={data.overuseMedication === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="In Past Year"
              type="radio"
              name="overuseMedication"
              value="0"
              checked={data.overuseMedication === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="tabaccoAndToxins5">
          <p>
            <strong>
              I drink ….. Caffeine containing drinks per day (Monster, Rockstar, ect.)
            </strong>
          </p>
          <Form.Label>
            <Form.Check
              label="Less Than Three"
              type="radio"
              name="caffeineContainingDrinks"
              value="4"
              checked={data.caffeineContainingDrinks === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Three To Six"
              type="radio"
              name="caffeineContainingDrinks"
              value="2"
              checked={data.caffeineContainingDrinks === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="More Than Six"
              type="radio"
              name="caffeineContainingDrinks"
              value="0"
              checked={data.caffeineContainingDrinks === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="alcohol">
          <h3>Alcohol</h3>
          <p><strong>My average alcohol intake per week is</strong></p>
          <Form.Label>
            <Form.Check
              label="Seven Or Less Drinks"
              type="radio"
              name="averageAlcoholIntake"
              value="4"
              checked={data.averageAlcoholIntake === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Eight To Thirteen"
              type="radio"
              name="averageAlcoholIntake"
              value="2"
              checked={data.averageAlcoholIntake === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fourteen or more"
              type="radio"
              name="averageAlcoholIntake"
              value="0"
              checked={data.averageAlcoholIntake === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="alcohol1">
          <p><strong>I have more than 4 drinks per day</strong></p>
          <Form.Label>
            <Form.Check
              label="Never"
              type="radio"
              name="moreThanFourDrinks"
              value="4"
              checked={data.moreThanFourDrinks === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Occasionally"
              type="radio"
              name="moreThanFourDrinks"
              value="2"
              checked={data.moreThanFourDrinks === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="moreThanFourDrinks"
              value="0"
              checked={data.moreThanFourDrinks === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="alcohol2">
          <p><strong>I drive after drinking</strong></p>
          <Form.Label>
            <Form.Check
              label="Never"
              type="radio"
              name="driveAfterDrinking"
              value="4"
              checked={data.driveAfterDrinking === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Occasionally"
              type="radio"
              name="driveAfterDrinking"
              value="2"
              checked={data.driveAfterDrinking === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="driveAfterDrinking"
              value="0"
              checked={data.driveAfterDrinking === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="stress">
          <h3>STRESS</h3>
          <p><strong>I am able to cope with stress</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost Allways"
              type="radio"
              name="copeWithStress"
              value="4"
              checked={data.copeWithStress === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="copeWithStress"
              value="2"
              checked={data.copeWithStress === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="copeWithStress"
              value="0"
              checked={data.copeWithStress === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="stress1">
          <p><strong>I relax and enjoy leisure time</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost Allways"
              type="radio"
              name="leisureTime"
              value="4"
              checked={data.leisureTime === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="leisureTime"
              value="2"
              checked={data.leisureTime === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="leisureTime"
              value="0"
              checked={data.leisureTime === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="stress2">
          <p><strong>I seem to be in a hurry</strong></p>
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="inAHurry"
              value="4"
              checked={data.inAHurry === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="inAHurry"
              value="2"
              checked={data.inAHurry === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="inAHurry"
              value="0"
              checked={data.inAHurry === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="typeOfPersonality">
          <h3>TYPE OF PERSONALITY</h3>
          <p><strong>I feel angry or hostile</strong></p>
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="angryHostile"
              value="4"
              checked={data.angryHostile === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="angryHostile"
              value="2"
              checked={data.angryHostile === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="angryHostile"
              value="0"
              checked={data.angryHostile === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="typeOfPersonality1">
          <p><strong>I am a positive or optimistic thinker</strong></p>
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="positiveOptimistic"
              value="4"
              checked={data.positiveOptimistic === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="positiveOptimistic"
              value="2"
              checked={data.positiveOptimistic === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="positiveOptimistic"
              value="0"
              checked={data.positiveOptimistic === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="typeOfPersonality2">
          <p><strong>I feel tense or uptight</strong></p>
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="tenseUptight"
              value="4"
              checked={data.tenseUptight === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="tenseUptight"
              value="2"
              checked={data.tenseUptight === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="tenseUptight"
              value="0"
              checked={data.tenseUptight === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="typeOfPersonality3">
          <p><strong>I feel sad or depressed</strong></p>
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="sadDepressed"
              value="4"
              checked={data.sadDepressed === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="sadDepressed"
              value="2"
              checked={data.sadDepressed === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="sadDepressed"
              value="0"
              checked={data.sadDepressed === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="typeOfPersonality4">
          <p><strong>I am satisfied with my job or role</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost Always"
              type="radio"
              name="satisfiedJobRole"
              value="4"
              checked={data.satisfiedJobRole === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="satisfiedJobRole"
              value="2"
              checked={data.satisfiedJobRole === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardley Ever"
              type="radio"
              name="satisfiedJobRole"
              value="0"
              checked={data.satisfiedJobRole === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

GeneralHealthAssessmentPage.propTypes = {
  handlechange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

export default GeneralHealthAssessmentPage;

// General Health Score
// 85 – 100     Good Self-management
// 70 – 84       Good Self-management but attention needed in some areas
// 60 – 69       Fair Self-management but attention needed in several areas
// 40 – 59       Unsatisfactory Self-management more control needed
// 0 – 39       Poor Self-management – Danger Zone
