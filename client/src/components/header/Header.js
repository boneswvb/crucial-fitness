import React from "react";

import Figure from "react-bootstrap/Figure";
import Media from "react-bootstrap/Media";

import Name from "../companyDetails/Name";

import businessLogo from "../pictures/businessLogo.png";
import BokSmart from "../pictures/bokSmartLogo.png";

import "./Header.css";

function Header() {
  return (
    <div className="topNaf container">
      <Media>
        <Figure>
          <Figure.Image
            width={101}
            height={110}
            alt="Logo"
            src={businessLogo}
          />
          <Figure.Caption>
            <h6>Crucial Fitness</h6>
          </Figure.Caption>
        </Figure>
        <Media.Body>
          <Name />
        </Media.Body>
        <Figure>
          <Figure.Image width={120} height={100} alt="Logo" src={BokSmart} />
          <Figure.Caption>Registered Coach</Figure.Caption>
        </Figure>
      </Media>
      <hr />
    </div>
  );
}

export default Header;
