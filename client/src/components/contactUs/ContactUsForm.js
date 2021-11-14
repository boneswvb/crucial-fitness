import React from "react";

import Media from "react-bootstrap/Media";

import Address from "../companyDetails/Address";

function ContactUsForm() {
  return (
    <div className="container">
      <Media>
        <Media.Body>
          <Address />
        </Media.Body>
        <form action="http://maps.google.com/maps" method="get" target="_blank">
          <h3>Find us on Google Maps</h3>
          <p htmlFor="saddr">
            Enter your location, Street and town, Then click &quot;Get
            directions&quot;
          </p>
          <p>
            You will be re-directed to Google Maps and the shortest route to
            Crucial Fitness
          </p>
          <input
            type="hidden"
            name="daddr"
            value="White River Rugby Club, White River, 1240"
          />
          <input
            type="text"
            name="saddr"
            placeholder="11 Mopane str, white river"
          />
          &nbsp;
          <input className="submit" type="submit" value="Get directions" />
        </form>
      </Media>
    </div>
  );
}

export default ContactUsForm;
