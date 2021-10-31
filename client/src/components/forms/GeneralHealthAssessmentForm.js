import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

function GeneralHealthAssessmentPage({ state, handlechange, handlesubmitgoalsettingform }) {
  return (
    <div>
      <h1>General Health Assessment</h1>
      <Form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        state-email="from_email@example.com"
        action="https://script.google.com/macros/s/AKfycbw-DZp1Q1Ad8tQCn5N3B4RJlYqGArQH5_pVGrH3wHLnne6gojVf0gV5c3s9fG2mVqTizw/exec"
      >
        <h3>Personal Details</h3>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            onChange={handlechange}
            value={state.email}
          />
        </Form.Group>
        <Form.Group controlId="familyAndFriends1">
          <h3>Family and Friends</h3>
          <p><strong>I have someone to talk to about things that are important to me</strong></p>
          <Form.Label>
            <Form.Check
              label="Almost always"
              type="radio"
              name="ihavesomeonetotalkto"
              value="4"
              checked={state.ihavesomeonetotalkto === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="ihavesomeonetotalkto"
              value="2"
              checked={state.ihavesomeonetotalkto === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="ihavesomeonetotalkto"
              value="0"
              checked={state.ihavesomeonetotalkto === '0'}
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
              name="giveandreceiveaffection"
              value="4"
              checked={state.giveandreceiveaffection === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="giveandreceiveaffection"
              value="2"
              checked={state.giveandreceiveaffection === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="giveandreceiveaffection"
              value="0"
              checked={state.giveandreceiveaffection === '0'}
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
              name="iamphysicallyactive"
              value="4"
              checked={state.iamphysicallyactive === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="iamphysicallyactive"
              value="2"
              checked={state.iamphysicallyactive === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="iamphysicallyactive"
              value="0"
              checked={state.iamphysicallyactive === '0'}
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
              name="iexercise"
              value="4"
              checked={state.iexercise === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="iexercise"
              value="2"
              checked={state.iexercise === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="iexercise"
              value="0"
              checked={state.iexercise === '0'}
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
              name="useseatbelts"
              value="4"
              checked={state.useseatbelts === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="useseatbelts"
              value="2"
              checked={state.useseatbelts === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="useseatbelts"
              value="0"
              checked={state.useseatbelts === '0'}
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
              name="isleepwell"
              value="4"
              checked={state.isleepwell === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="isleepwell"
              value="2"
              checked={state.isleepwell === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="isleepwell"
              value="0"
              checked={state.isleepwell === '0'}
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
              name="ofteneatexcess"
              value="4"
              checked={state.ofteneatexcess === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="ofteneatexcess"
              value="2"
              checked={state.ofteneatexcess === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly ever"
              type="radio"
              name="ofteneatexcess"
              value="0"
              checked={state.ofteneatexcess === '0'}
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
              name="overweight"
              checked={state.overweight}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I Am Under Weight"
              name="underweight"
              checked={state.underweight}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Label>
            <Form.Check
              label="Four"
              type="radio"
              name="myidealweight"
              value="4"
              checked={state.myidealweight === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Eight"
              type="radio"
              name="myidealweight"
              value="2"
              checked={state.myidealweight === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="More than eight"
              type="radio"
              name="myidealweight"
              value="0"
              checked={state.myidealweight === '0'}
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
              name="smokedtabacco"
              value="4"
              checked={state.smokedtabacco === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Not In One Year"
              type="radio"
              name="smokedtabacco"
              value="2"
              checked={state.smokedtabacco === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="In The Last Year"
              type="radio"
              name="smokedtabacco"
              value="0"
              checked={state.smokedtabacco === '0'}
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
              name="cigarettesperday"
              value="4"
              checked={state.cigarettesperday === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Five To Ten"
              type="radio"
              name="cigarettesperday"
              value="2"
              checked={state.cigarettesperday === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="More than Ten"
              type="radio"
              name="cigarettesperday"
              value="0"
              checked={state.cigarettesperday === '0'}
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
              name="illegaldrugs"
              value="4"
              checked={state.illegaldrugs === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Not In one Year"
              type="radio"
              name="illegaldrugs"
              value="2"
              checked={state.illegaldrugs === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="In Past Year"
              type="radio"
              name="illegaldrugs"
              value="0"
              checked={state.illegaldrugs === '0'}
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
              name="overusemedication"
              value="4"
              checked={state.overusemedication === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Not In One Year"
              type="radio"
              name="overusemedication"
              value="2"
              checked={state.overusemedication === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="In Past Year"
              type="radio"
              name="overusemedication"
              value="0"
              checked={state.overusemedication === '0'}
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
              name="caffeinecontainingdrinks"
              value="4"
              checked={state.caffeinecontainingdrinks === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Three To Six"
              type="radio"
              name="caffeinecontainingdrinks"
              value="2"
              checked={state.caffeinecontainingdrinks === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="More Than Six"
              type="radio"
              name="caffeinecontainingdrinks"
              value="0"
              checked={state.caffeinecontainingdrinks === '0'}
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
              name="averagealcoholintake"
              value="4"
              checked={state.averagealcoholintake === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Eight To Thirteen"
              type="radio"
              name="averagealcoholintake"
              value="2"
              checked={state.averagealcoholintake === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fourteen or more"
              type="radio"
              name="averagealcoholintake"
              value="0"
              checked={state.averagealcoholintake === '0'}
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
              name="morethanfourdrinks"
              value="4"
              checked={state.morethanfourdrinks === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Occasionally"
              type="radio"
              name="morethanfourdrinks"
              value="2"
              checked={state.morethanfourdrinks === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="morethanfourdrinks"
              value="0"
              checked={state.morethanfourdrinks === '0'}
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
              name="driveafterdrinking"
              value="4"
              checked={state.driveafterdrinking === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Occasionally"
              type="radio"
              name="driveafterdrinking"
              value="2"
              checked={state.driveafterdrinking === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="driveafterdrinking"
              value="0"
              checked={state.driveafterdrinking === '0'}
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
              name="copewithstress"
              value="4"
              checked={state.copewithstress === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="copewithstress"
              value="2"
              checked={state.copewithstress === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="copewithstress"
              value="0"
              checked={state.copewithstress === '0'}
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
              name="leisuretime"
              value="4"
              checked={state.leisuretime === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="leisuretime"
              value="2"
              checked={state.leisuretime === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardly Ever"
              type="radio"
              name="leisuretime"
              value="0"
              checked={state.leisuretime === '0'}
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
              name="inahurry"
              value="4"
              checked={state.inahurry === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="inahurry"
              value="2"
              checked={state.inahurry === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="inahurry"
              value="0"
              checked={state.inahurry === '0'}
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
              name="angryhostile"
              value="4"
              checked={state.angryhostile === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="angryhostile"
              value="2"
              checked={state.angryhostile === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="angryhostile"
              value="0"
              checked={state.angryhostile === '0'}
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
              name="positiveoptimistic"
              value="4"
              checked={state.positiveoptimistic === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="positiveoptimistic"
              value="2"
              checked={state.positiveoptimistic === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="positiveoptimistic"
              value="0"
              checked={state.positiveoptimistic === '0'}
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
              name="tenseuptight"
              value="4"
              checked={state.tenseuptight === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="tenseuptight"
              value="2"
              checked={state.tenseuptight === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="tenseuptight"
              value="0"
              checked={state.tenseuptight === '0'}
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
              name="saddepressed"
              value="4"
              checked={state.saddepressed === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="saddepressed"
              value="2"
              checked={state.saddepressed === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Fairly Often"
              type="radio"
              name="saddepressed"
              value="0"
              checked={state.saddepressed === '0'}
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
              name="satisfiedjobrole"
              value="4"
              checked={state.satisfiedjobrole === '4'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Sometimes"
              type="radio"
              name="satisfiedjobrole"
              value="2"
              checked={state.satisfiedjobrole === '2'}
              onChange={handlechange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            <Form.Check
              label="Hardley Ever"
              type="radio"
              name="satisfiedjobrole"
              value="0"
              checked={state.satisfiedjobrole === '0'}
              onChange={handlechange}
            />
          </Form.Label>
        </Form.Group>
        <Button type="submit" value="Register" variant="primary" onClick={handlesubmitgoalsettingform}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

GeneralHealthAssessmentPage.propTypes = {
  handlechange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default GeneralHealthAssessmentPage;

// General Health Score
// 85 – 100     Good Self-management
// 70 – 84       Good Self-management but attention needed in some areas
// 60 – 69       Fair Self-management but attention needed in several areas
// 40 – 59       Unsatisfactory Self-management more control needed
// 0 – 39       Poor Self-management – Danger Zone
