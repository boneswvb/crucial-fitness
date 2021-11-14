import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";

function BiographyForm() {
  return (
    <div className="container">
      <Media>
        <Media.Body>
          <h3>Adri Fourie</h3>
          <h5>Get to know a bit of me. </h5>
          <p>
            I would like to make use of this opportunity to introduce myself as
            a Fitness Coach/Trainer, Sports Therapist, Sports photographer,
            Sport and Exercise Nutritionist as well as a level 2 First Aider. I
            received my qualification as fitness coach in January 2019 from ETA
            (Exercise Teachers Academy). With the start of the rugby season of
            2019, I was approached that I also had the opportunity to work with
            the U/15 team. The players had mostly complained of chronic back
            pain and old injuries that they did not rehabilitated correctly.
            Fitness was done on Mondays (90 minutes) and Tuesdays (30 min),
            after which there was worked on game plan and tactics on Tuesday to
            Thursday.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <p>
            As a Sport Therapist, I ensured that injuries were assessed with the
            first fitness session after match day, where I would continue with
            rehabilitation through exercise. The players who were or had any
            injuries still bothering them would be assessed for clearing for
            full practice and the next match day. At the end of the season there
            were only 2 players in the group with injuries: 1 Dislocating knee
            (old ACL - hooker) and 1 &apos;shin splints&apos; (scrum half). I
            also received my level 2 certificate for First Aid in March this
            year (2019). As a Sport Nutritionist, I also gave some advice to the
            players on what to eat when exercising and then also what to eat 2
            days before the match to ensure that they will have enough energy
            during the match. After the schools’ season came to a close, I
            became involved at the White River Rugby Club where I assisted with
            their injuries rehabilitation, pre-match strapping and warm-ups
            before practice or matches.
          </p>
          <p>
            Practice was Tuesdays and Thursdays evenings. During match time I
            worked as a Sports Therapist/Physio with the Emergency medical
            teams. I would inform the coaches whether the player can continue or
            should he be substituted. With River Rugby club having three teams
            in the finals at the Mbombela Stadium in 2019, I also had the
            privilege to be the clubs’ therapist, and I was then in contact with
            the coaches per radio. The first team qualified for the gold cup in
            2020, which have now been moved to 2021. My practice is at the White
            River rugby Club, where I have the rugby pitch as my training space
            for all the athletes who need rehabilitation and/or fitness training
            before returning to their club or school.
          </p>
        </Media.Body>
      </Media>
      <h3>The following services are available:</h3>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          Pre- and post-season fitness training
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Concussion treatment (6-week plan + fitness clearing) return to play
          or learn (scholars)
        </ListGroup.Item>
        <ListGroup.Item as="li">Pre-event strapping</ListGroup.Item>
        <ListGroup.Item as="li">Sport massage</ListGroup.Item>
        <ListGroup.Item as="li">Sport Photography</ListGroup.Item>
        <ListGroup.Item as="li">Fitness Coaching</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default BiographyForm;
