import React from "react";

import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";

import RehabConcussionRtlForm from "./RehabConcussionRtlForm";
import RehabConcussionRtpForm from "./RehabConcussionRtpForm";
import RehabSportMassageForm from "./RehabSportMassageForm";
import RehabSpotInjuriesForm from "./RehabSpotInjuriesForm";

function RehabilitationForm() {
  return (
    <div className="container">
      <Media>
        <Media.Body>
          <h2>What Is a Concussion?</h2>
          <sub>
            <a href="https://www.webmd.com/" target="blank">
              Info from WebMD
            </a>
          </sub>
          <p>
            The most common and least serious type of traumatic brain injury is
            called a concussion. The word comes from the Latin concutere, which
            means &quot;to shake violently.&quot;A concussion is most often
            caused by a sudden direct blow or bump to the head.
          </p>
          <p>
            According to the CDC, between 2001 and 2009, an estimated 173,285
            people under age 19 were treated in hospital emergency rooms for
            concussions related to sports and recreation activities. Other
            causes include car and bicycle accidents, work-related injuries,
            falls, and fighting.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h2>Signs of a TBI include:</h2>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Confusion</ListGroup.Item>
        <ListGroup.Item as="li">Depression</ListGroup.Item>
        <ListGroup.Item as="li">Dizziness</ListGroup.Item>
        <ListGroup.Item as="li">Balance problems</ListGroup.Item>
        <ListGroup.Item as="li">Double or fuzzy vision</ListGroup.Item>
        <ListGroup.Item as="li">Changes in size of pupils</ListGroup.Item>
        <ListGroup.Item as="li">Feeling foggy or groggy</ListGroup.Item>
        <ListGroup.Item as="li">Feeling sluggish or tired</ListGroup.Item>
        <ListGroup.Item as="li">Headache</ListGroup.Item>
        <ListGroup.Item as="li">Loss of consciousness</ListGroup.Item>
        <ListGroup.Item as="li">Irritability</ListGroup.Item>
        <ListGroup.Item as="li">Slurred speech</ListGroup.Item>
        <ListGroup.Item as="li">Stiff neck</ListGroup.Item>
        <ListGroup.Item as="li">Restlessness</ListGroup.Item>
        <ListGroup.Item as="li">Clumsiness</ListGroup.Item>
        <ListGroup.Item as="li">Memory loss</ListGroup.Item>
        <ListGroup.Item as="li">Nausea</ListGroup.Item>
        <ListGroup.Item as="li">Vomitting</ListGroup.Item>
        <ListGroup.Item as="li">Sensitivity to noise</ListGroup.Item>
        <ListGroup.Item as="li">Sensitivity to light</ListGroup.Item>
        <ListGroup.Item as="li">
          Trouble with hearing, smell, taste
        </ListGroup.Item>
        <ListGroup.Item as="li">Sleep disturbance</ListGroup.Item>
        <ListGroup.Item as="li">Trouble concentrating</ListGroup.Item>
        <ListGroup.Item as="li">Trouble remembering</ListGroup.Item>
      </ListGroup>
      <Media>
        <Media.Body>
          <h3>Get medical help right away if someone has any of these</h3>
        </Media.Body>
      </Media>
      <RehabConcussionRtlForm />
      <RehabConcussionRtpForm />
      <RehabSportMassageForm />
      <RehabSpotInjuriesForm />
    </div>
  );
}

export default RehabilitationForm;
