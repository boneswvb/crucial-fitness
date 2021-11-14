import React from "react";

function RatePhotographyForm() {
  return (
    <div className="container">
      <h1>Photography</h1>
      <p>All prices quoted in South-African Rand</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan="2">
              Type Of Sport
            </th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colSpan="2">Rugby</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colSpan="2">Netball</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Hockey</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td colSpan="2">Tennis</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td colSpan="2">Athletics</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td colSpan="2">Other</td>
            <td>Available on request</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RatePhotographyForm;
