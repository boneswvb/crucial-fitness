import React from 'react';

import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';

function RehabSpotInjuriesForm() {
  return (
    <div className="container">
      <Media>
        <Media.Body>
          <h2>What is sports injury rehabilitation?</h2>
          <sub><a href="https://www.pthealth.ca/" target="blank">Info from pt Health</a></sub>
          <p>
            Sports Injury Rehabilitation is a multi-disciplinary approach to the prevention,
            evaluation, and treatment of injuries. The first step towards recovery is getting an
            accurate diagnosis from a certified sports-injury specialist or your health care
            practitionar. Typically, the initial stage of treatment involves reducing pain and
            promoting healing.
          </p>
        </Media.Body>
      </Media>
      <br />
      <Media>
        <Media.Body>
          <h4>Sports injury rehabilitation treats a range of conditions, including:</h4>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Acute sports injuries</ListGroup.Item>
        <ListGroup.Item as="li">Strains</ListGroup.Item>
        <ListGroup.Item as="li">Sprains</ListGroup.Item>
        <ListGroup.Item as="li">Muscle, tendon and ligament repairs</ListGroup.Item>
        <ListGroup.Item as="li">Tendonitis</ListGroup.Item>
        <ListGroup.Item as="li">Hand injuries</ListGroup.Item>
        <ListGroup.Item as="li">Shoulder dislocation</ListGroup.Item>
        <ListGroup.Item as="li">Foot or ankle dysfunction</ListGroup.Item>
        <ListGroup.Item as="li">Surgery rehab</ListGroup.Item>
      </ListGroup>
      <br />
      <Media>
        <Media.Body>
          <h4>The sports injury rehabilitation program will benefit those with:</h4>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Post-operative injuries</ListGroup.Item>
        <ListGroup.Item as="li">ACL reconstruction</ListGroup.Item>
        <ListGroup.Item as="li">Meniscus tears</ListGroup.Item>
        <ListGroup.Item as="li">Rotator cuff repair</ListGroup.Item>
        <ListGroup.Item as="li">Acute and chronic musculoskeletal injuries</ListGroup.Item>
        <ListGroup.Item as="li">Sprains and strains</ListGroup.Item>
      </ListGroup>
      <br />
      <Media.Body>
        <h4>How it Works:</h4>
        <p>
          Typically, the initial stage of treatment involves reducing pain and promoting healing.
          Once pain and swelling are reduced, progressive reconditioning treatment will begin.
        </p>
        <p>
          Exercises will be prescribed to target specific goals such as mobility,
          flexibility training, coordination of balance and joint positioning.
          As progress is made, the athlete and trainer can work together towards
          re-establishing strength.
        </p>
        <p>
          We are committed to providing state-of-the-art clinical care for athletes of all ages and
          skill levels. Although you may be injured, you can still stay in shape, and can use the
          injury period as an opportunity to strengthen other areas of the body.
        </p>
        <p>
          A personal, committed investment in healing is a strategy that will help you
          regain optimal performance.
        </p>
      </Media.Body>
    </div>
  );
}

export default RehabSpotInjuriesForm;
