import React from "react";

import Media from "react-bootstrap/Media";

function WaiverForm() {
  return (
    <div className="container">
      <h1>WAIVER OF LIABILITY</h1>
      <br />
      <h3 style={{ color: "#f00", textAlign: "center" }}>
        Before any treatment/coaching start you will be required to sign the
        below form.
      </h3>
      <h3 style={{ color: "#f00", textAlign: "center" }}>
        A legal guardian will be required to sign for minors.
      </h3>
      <Media>
        <Media.Body>
          <p>
            I/We hereby undersign and acknowledge that the Training, Training
            Programs and eventsheld by Crucial Fitness & Nutrition may expose me
            to many inherent risks, including accidents, injury, illness or even
            death. I/We assume all risk of injuries associated with
            participation including, but not limited to, falls, contact with
            other participants, the effects of the weather, including high
            heat/humidity, and all other risk known and appreciated by me.
          </p>
          <p>
            I/We hereby acknowledge my responsibility in communicating any
            physical and psychological concerns that might conflict with
            participating in activity. I/We acknowledge that I/We am/are
            physically fit and mentally capable of performing the physical
            activity I/We choose to participate in.
          </p>
          <p>
            After reading this waiver and knowing these facts, and in
            consideration of acceptance of my participation and Crucial Fitness
            & Nutrition furnishing services to me/us, I/We agree, for myself and
            anyone entitled to act on my behalf, to HOLD HARMLESS, WAIVE AND
            RELEASE to Crucial Fitness & Nutrition, its employees, organizers,
            representatives for any responsibility, liabilities, or claims of
            any kind arising out of my participation in the Crucial Fitness &
            Nutrition Training, Training Programs and/or events
          </p>
          <p>
            I/We are aware that this is a waiver and release of Liability and
            I/We voluntarily agree to its terms.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default WaiverForm;
