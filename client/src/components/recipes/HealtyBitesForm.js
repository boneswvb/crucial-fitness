import React from "react";

import Figure from "react-bootstrap/Figure";

import IMG1 from "../pictures/Healthy Bites/1402472465186.jpg";
import IMG2 from "../pictures/Healthy Bites/1405422003941.jpg";
import IMG3 from "../pictures/Healthy Bites/FB_IMG_1430393108986.jpg";

function HealtyBitesForm() {
  return (
    <div className="container">
      <h1>Healty Bites</h1>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Healty Bites"
          src={IMG1}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Healty Bites"
          src={IMG3}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Healty Bites"
          src={IMG2}
          thumbnail
        />
      </Figure>
    </div>
  );
}

export default HealtyBitesForm;
