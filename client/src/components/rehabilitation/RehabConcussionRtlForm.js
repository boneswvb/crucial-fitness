import React from "react";

import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";

function ConcussionRtlForm() {
  return (
    <div className="container">
      <h1>Concussion - Return To Learn</h1>
      <sub>
        <a href="https://www.cdc.gov/headsup/schools/index.html" target="blank">
          Info from Heads Up to Schools - CDC
        </a>
      </sub>
      <Media>
        <Media.Body>
          <h2>What is RTL – Return To Learn ?</h2>
          <p>
            Most kids and teens will only need help through informal, academic
            adjustments as they recover from a concussion. However for kids and
            teens with ongoing symptoms, a variety of formal support services
            may be available to help them during their recovery. These support
            services may vary widely among provinces and school districts. The
            type of support will differ based on the needs of each student.
          </p>
          <h4>Some of these support services may include:</h4>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          Response to Intervention Protocol(RTI)
        </ListGroup.Item>
        <ListGroup.Item as="li">504 Plan</ListGroup.Item>
        <ListGroup.Item as="li">
          Individualized Education Plan(IEP)
        </ListGroup.Item>
      </ListGroup>
      <Media>
        <Media.Body>
          <p>
            Your child or teen may feel frustrated, sad, and even angry because
            she or he cannot return to school right away, keep up with
            schoolwork, or hang out as much with their friends. Talk often with
            your child or teen about this and offer your support and
            encouragement.
          </p>
          <p>
            Any one of your students could take a spill, knock his / her head,
            and get a concussion in any number of school settings ranging from
            the hallway, the playground, the cafeteria, and beyond.
          </p>
          <p>
            That’s why—whether you’re a principal, school nurse, teacher or
            other school professional—the CDC and several other distinguished
            medical, educational, school - health and school - professional
            organizations encourage you to use the HEADS UP to Schools: Know
            Your Concussion ABCs materials.
          </p>
          <p>
            This flexible set of materials, developed for professionals working
            with grades K - 12, will help you identify and respond to
            concussions in an array of school settings.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default ConcussionRtlForm;
