import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

import Coaching from '../pictures/homePage/Coaching.png';
import HealthInfo from '../pictures/homePage/HealthInfo.jpg';
import Photography from '../pictures/homePage/Photography.jpg';
import Reading from '../pictures/homePage/Reading.jpg';
import Receipies from '../pictures/homePage/receipies.jpg';
import Rehabilitation from '../pictures/homePage/rehabilitation.jpg';

import './Home.css';

function HomeForm() {
  return (
    <div className="row">
      <Card style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={HealthInfo} height={250} alt="HealthInfo" />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Health Information</Card.Title>
          <Card.Text>
            <ListGroup as="ul" style={{ textAlign: 'center' }}>
              <ListGroup.Item as="li">
                <Link to="/goalsetting">
                  <p className="dropdown-item"><strong>Goal Setting</strong></p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/lifeStyleasspage">
                  <p className="dropdown-item"><strong>Life Style Assessment</strong></p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/generalhealthassessmentpage">
                  <p className="dropdown-item"><strong>General Health Assessment</strong></p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/#">
                  <p className="dropdown-item"><strong>&nbsp;</strong></p>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={Reading} height={250} alt="HealthInfo" />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Interesting Reads</Card.Title>
          <Card.Text>
            <ListGroup as="ul" style={{ textAlign: 'center' }}>
              <ListGroup.Item as="li">
                <Link to="/interestingreadspage/blogsform">
                  <p className="dropdown-item">
                    <strong>Blogs</strong>
                  </p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/interestingreadspage/ebooksform">
                  <p className="dropdown-item">
                    <strong>E-Books</strong>
                  </p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/interestingreadspage/weightlossform">
                  <p className="dropdown-item">
                    <strong>Weight Loss</strong>
                  </p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/#"><p className="dropdown-item"><strong>&nbsp;</strong></p></Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={Receipies} height={250} alt="HealthInfo" />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Receipies</Card.Title>
          <Card.Text>
            <ListGroup as="ul" style={{ textAlign: 'center' }}>
              <ListGroup.Item as="li">
                <Link to="/recipespage/healtybitesform">
                  <p className="dropdown-item">
                    <strong>Healty Bites</strong>
                  </p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/recipespage/mealprepform">
                  <p className="dropdown-item">
                    <strong>Meal Prep</strong>
                  </p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/recipespage/quickmealsform">
                  <p className="dropdown-item">
                    <strong>Quick Meals</strong>
                  </p>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Link to="/recipespage/smoothiesform">
                  <p className="dropdown-item">
                    <strong>Smoothies</strong>
                  </p>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={Rehabilitation} height={250} alt="HealthInfo" />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Rehabilitation</Card.Title>
          <Card.Text>
            <ListGroup as="ul" style={{ textAlign: 'center' }}>
              <ListGroup.Item as="li"><Link to="/rehabilitationpage/rehabconcussionrtlform"><p className="dropdown-item"><strong>Concussion - RTL</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/rehabilitationpage/rehabconcussionrtpform"><p className="dropdown-item"><strong>Concussion - RTP</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/rehabilitationpage/rehabsportmassageform"><p className="dropdown-item"><strong>Sport Massage</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/rehabilitationpage/rehabspotinjuriesform"><p className="dropdown-item"><strong>Sport Injuries</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/#"><p className="dropdown-item"><strong>&nbsp;</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/#"><p className="dropdown-item"><strong>&nbsp;</strong></p></Link></ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '10px', display: 'none' }}>
        <Card.Img variant="top" src={Photography} height={250} alt="HealthInfo" />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Photography</Card.Title>
          <Card.Text>
            {/* <ListGroup as="ul" style={{ textAlign: 'center' }}>
              <ListGroup.Item as="li"><Link to="/photographypage/photoathleticsform">
              <p className="dropdown-item"><strong>Athletics</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/photographypage/photohockeyform">
              <p className="dropdown-item"><strong>Hockey</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/photographypage/photonetballform">
              <p className="dropdown-item"><strong>Netball</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/photographypage/photorugbyform">
              <p className="dropdown-item"><strong>Rugby</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/photographypage/phototennisform">
              <p className="dropdown-item"><strong>Tennis</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/#"><p className="dropdown-item">
              <strong>&nbsp;</strong></p></Link></ListGroup.Item>
            </ListGroup> */}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', margin: '10px' }}>
        <Card.Img variant="top" src={Coaching} height={250} alt="HealthInfo" />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Coaching</Card.Title>
          <Card.Text>
            <ListGroup as="ul" style={{ textAlign: 'center' }}>
              <ListGroup.Item as="li"><Link to="/coachingpage/individuelform"><p className="dropdown-item"><strong>Individuel</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/coachingpage/groupform"><p className="dropdown-item"><strong>Group</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/coachingpage/generalfitnessform"><p className="dropdown-item"><strong>General Fitness</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/coachingpage/rugbyform"><p className="dropdown-item"><strong>Rugby</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/coachingpage/netballform"><p className="dropdown-item"><strong>Netball</strong></p></Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to="/coachingpage/hockeyform"><p className="dropdown-item"><strong>Hockey</strong></p></Link></ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeForm;
