import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import Logon from '../../containers/LogonCon';
// import RegisterCon from '../../containers/RegisterCon';
import { Context } from '../../contextProvider/LogonContextP';

import './Navbar.css';

function NavBar() {
  const { isSignedOn } = useContext(Context);
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={2}><Link to="/">Home</Link></Nav.Link>
            {
              isSignedOn
                ? <Nav.Link eventKey={3}><Link to="/Userprofilepage">Profile Page</Link></Nav.Link>
                : null
            }
            <Nav.Link eventKey={46}><Link to="/contactuspage">Contact</Link></Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={4}><Link to="/aboutpage/aboutform">All About Items</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={5}><Link to="/aboutpage/biographyform">Biography</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={6}><Link to="/aboutpage/missionvisionform">Mission/Vision/Values</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item eventKey={7}><Link to="/aboutpage/ruleAndregulationsform">
              Rules & Regulations</Link></NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item eventKey={8}><Link to="/aboutpage/acceptanceform">Acceptance</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={9}><Link to="/aboutpage/waiverform">Waiver</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Health Info" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={10}><Link to="/generalhealthassessmentpage">
                General Health Assessment</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={11}><Link to="/goalsetting">Goal Setting</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={12}><Link to="/lifeStyleasspage">
                Life Style Assessment</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interesting Reads" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={13}>
                <Link to="/interestingreadspage/interestingreadsrorm">Interesting Reads</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={14}>
                <Link to="/interestingreadspage/blogsform">Blogs</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={15}>
                <Link to="/interestingreadspage/weightlossform">Weight Loss</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={16}>
                <Link to="/interestingreadspage/ebooksform">E-Books</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recipes" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={17}>
                <Link to="/recipespage/allrecipes">All Recipes</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={18}>
                <Link to="/recipespage/smoothiesform">Smoothies</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={19}>
                <Link to="/recipespage/healtybitesform">Healty Bites</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={21}>
                <Link to="/recipespage/mealprepform">Meal Prep</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Coaching" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to="/coachingpage/coachingform">Coaching</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={22}><Link to="/coachingpage/individuelform">Individuel</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={23}><Link to="/coachingpage/groupform">Group</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={24}><Link to="/coachingpage/generalfitnessform">General Fitness</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={25}><Link to="/coachingpage/rugbyform">Rugby</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={26}><Link to="/coachingpage/netballform">Netball</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={27}><Link to="/coachingpage/hockeyform">Hockey</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rehabilitation" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={28}><Link to="/rehabilitationpage/rehabilitationform">Rehabilitation</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={29}><Link to="/rehabilitationpage/rehabspotinjuriesform">Sport Injuries</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={30}><Link to="/rehabilitationpage/rehabconcussionrtpform">Concussion - RTP</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={31}><Link to="/rehabilitationpage/rehabconcussionrtlform">Concussion - RTL</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={32}><Link to="/rehabilitationpage/rehabsportmassageform">Sport Massage</Link></NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Photography" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={33}>
              <Link to="/photographypage/photographyform">Photography</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={34}>
              <Link to="/photographypage/photorugbyform">Rugby</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={35}>
              <Link to="/photographypage/photonetballform">Netball</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={36}>
              <Link to="/photographypage/photohockeyform">Hockey</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={37}>
              <Link to="/photographypage/phototennisform">Tennis</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={2}>
              <Link to="/photographypage/photoathleticsform">Athletics</Link></NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Rates" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey={38}><Link to="/ratespage/ratesform">All Rates</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={39}><Link to="/ratespage/rateweightlossform">Weight Loss</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={40}><Link to="/ratespage/raterehabilitationform">Rehabilitation</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={41}><Link to="/ratespage/ratephotographyform">Photography</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={42}><Link to="/ratespage/ratecoachingindividuelform">Coaching/Strapping/Sport Massage - Individuel</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={43}><Link to="/ratespage/ratecoachinggroupform">Coaching - Group</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={44}><Link to="/ratespage/ratecoachinggeneralfitnessform">Coaching - General Fitness</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={45}><Link to="/ratespage/ratecoachingsportspecificform">Coaching - Sport Specific</Link></NavDropdown.Item>
            </NavDropdown>
            {/* <Logon />
            &nbsp;
            <RegisterCon /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
}

export default NavBar;
