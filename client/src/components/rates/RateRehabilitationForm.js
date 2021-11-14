import React from "react";

function RateRehabilitationForm() {
  return (
    <div className="container">
      <h1>Rehabilitation - General</h1>
      <p>All prices quoted in South-African Rand</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan="2">
              Description
            </th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colSpan="2">First Visit</td>
            <td>250</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colSpan="2">Follow Up Visits</td>
            <td>150</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h1>Rehabilitation - Concussion</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan="2">
              Per Session
            </th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colSpan="2">Return To Learn</td>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colSpan="2">Return To Play</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RateRehabilitationForm;
