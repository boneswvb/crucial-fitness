import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

function AcceptanceForm() {
  return (
    <div className="container">
      <h1>Information needed for treatment/coaching</h1>
      <br />
      <h3 style={{ color: "#f00", textAlign: "center" }}>
        Before any treatment/training start you will be required to provide the
        below details.
      </h3>
      <h3 style={{ color: "#f00", textAlign: "center" }}>
        A legal guardian will be required to sign for minors.
      </h3>
      <br />
      <h2>Personal Details</h2>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Name & Surname</ListGroup.Item>
        <ListGroup.Item as="li">ID Number</ListGroup.Item>
        <ListGroup.Item as="li">Date of birth</ListGroup.Item>
        <ListGroup.Item as="li">Postal adress</ListGroup.Item>
        <ListGroup.Item as="li">Residential adress</ListGroup.Item>
        <ListGroup.Item as="li">Contact details - Cell and work</ListGroup.Item>
        <ListGroup.Item as="li">Email address</ListGroup.Item>
        <ListGroup.Item as="li">
          Emergency contact - Name & Surname
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Emergency contact - Relationship
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Emergency contact - Contact details
        </ListGroup.Item>
      </ListGroup>
      <br />
      <h2>Medical History </h2>
      <p style={{ color: "#f00", textAlign: "center" }}>
        (Please include all relevant information. Crucial Fitness will not be
        held liable for any injury that arises as a result of any or omissions
        contained in this form. All information given on this form will be
        treated as confidential);
      </p>
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          High Blood Pressure - Current medication used
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Low Blood Pressure - Current medication used
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Asthma - Current medication used
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Allergies - Current medication used
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Operations (Major/Minor) (Year of the operations )
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Other: (Please specify) - Current medication used
        </ListGroup.Item>
      </ListGroup>
      <br />
      <h2>Injuries (All current and previous injuries)</h2>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Duration of injuries</ListGroup.Item>
        <ListGroup.Item as="li">Is it re-occurring/Sorted</ListGroup.Item>
        <ListGroup.Item as="li">Current or previous</ListGroup.Item>
      </ListGroup>
      <br />
      <h2>Medical Aid Details </h2>
      <ListGroup as="ul">
        <ListGroup.Item as="li">Medical Aid Provider</ListGroup.Item>
        <ListGroup.Item as="li">Medical Aid nr</ListGroup.Item>
        <ListGroup.Item as="li">Doctor</ListGroup.Item>
        <ListGroup.Item as="li">Phone number</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AcceptanceForm;
