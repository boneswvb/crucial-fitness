import React from "react";

import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";

function AboutForm() {
  return (
    <div className="container">
      <Media>
        <Media.Body>
          <h2>Introduction</h2>
          <p>
            Crucial Fitness Coaching & Rehabilitation is an integrated company
            specializing in fitness coaching and rehabilitation of all sport
            codes in South Africa. Crucial Fitness was founded by Adri Fourie in
            2019 with a vision to improve on fitness and resilience levels of
            all sport codes at schools and semiprofessional levels. Our clients
            are our top priority and we are committed to helping them reach
            their full potential as athletes. Crucial fitness is located at the
            White River Rugby Club in White River, which gives us the great
            opportunity to exercise and rehabilitate athletes of all sport codes
            on a rugby pitch. White River Rugby Club also forms part of the Puma
            scouting system for young rugby player.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h2>Our values</h2>
          <p>
            Our valuesare the cornerstone of the company, and by those we will
            grow our company but also those whom we meet. We endeavor to live by
            and uphold the following values:
          </p>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Commitment</ListGroup.Item>
        <ListGroup.Item as="li">Empowerment</ListGroup.Item>
        <ListGroup.Item as="li">Freedom</ListGroup.Item>
        <ListGroup.Item as="li">Excellence</ListGroup.Item>
        <ListGroup.Item as="li">Teamwork</ListGroup.Item>
      </ListGroup>
      <br />
      <Media>
        <Media.Body>
          <h2>Services</h2>
          <p>
            Our services to our athletes to suit their sporting career includes:
          </p>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          Fitness Coaching – Strength, Flexibility, Power and Endurance - (Body
          weight training or equipment used)
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Fitness testing – Pre- and off-season
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Injury rehabilitation through exercise
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Concussion – Return to learn and play (in conjunction with family
          doctor for scholars and semiprofessional athletes)
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Pre-event strapping (prevention of further injury)
        </ListGroup.Item>
        <ListGroup.Item as="li">Sport photography</ListGroup.Item>
        <ListGroup.Item as="li">
          Sport massage (releasing of spasms and stiffness in muscles for better
          performance)
        </ListGroup.Item>
      </ListGroup>
      <br />
      <h2>Analysis of the Market</h2>
      <Media>
        <Media.Body>
          <h4>Competitive Analysis</h4>
          <p>
            The level of competition is high with many Physical Therapists that
            have been in the industry for a long time and their level of
            experience is high compared to Crucial Fitness. My competitors’
            strength is the fact that they are well connected with teams,
            doctors, and coaches. Their weaknesses are only working on the
            current injury and not the origin which led to the injury, being the
            athletes’ “go-to-therapist”. That is where Crucial Fitness will be
            overtaking them.
          </p>
        </Media.Body>
      </Media>
      <br />
      <h3>SWOT Analysis of the Business</h3>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          <strong>Strength</strong>: Knowledge and passion I have of fitness and
          rehabilitation.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Weakness</strong>: Unknow in the Industry.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Opportunities</strong>
          :
          <br />
          <strong>Rugby</strong>
          <br />
          Admin for bulletjie rugby, supporting and fitness coaching U/15 boys,
          <br />
          <strong>Cricket</strong>
          <br />
          Score keeping and coaching mini cricket u/8 & u/9
          <br />
          <strong>Netball</strong>
          <br />
          Playing through school and Ehlazeni senior B and level 1 coach.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Threats</strong>: Competitors.
        </ListGroup.Item>
      </ListGroup>
      <Media>
        <Media.Body>
          <h2>Business Strategies</h2>
          <p>
            Crucial Fitness will implement the following strategies to achieve
            its goals in becoming the leading ‘Go-to-coach’ in return to sport
            fitness and rehabilitation company to overcome its competitors.
          </p>
        </Media.Body>
      </Media>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          Crucial Fitness will ensure that our clients will get the most out of
          their careers.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          We will always be transparent and honest in all our dealings.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          We will always maintain the highest level of professionalism dealings
          with the athlete and referrals.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          We will spend time with all our clients to get to know them, what
          their goals are, and how they want to achieve it.
        </ListGroup.Item>
      </ListGroup>
      <br />
      <Media>
        <Media.Body>
          <h2>Our Target Market</h2>
          <p>
            Our target market is athletes of all ages, with the aim of helping
            them to achieve their goal in their sporting career which they are
            working for. Through proper coaching and rehabilitation we will help
            them to extent their sporting careers further.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h2>Business structure</h2>
          <p>Sole Proprietor</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <h2>Conclusion</h2>
          <p>
            My goal is to help athletes get and stay injury free, so that they
            can make the most of their sporting careers for as long as they feel
            the need for competing. I will not clear an athlete if they are not
            100% free of injury.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default AboutForm;
