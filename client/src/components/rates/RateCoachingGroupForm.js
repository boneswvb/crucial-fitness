import React from "react";

function RateCoachingGroupForm() {
  return (
    <div className="container">
      <h1>Group Coaching</h1>
      <p>All prices quoted in South-African Rand</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Monthly Fees - Group Training</th>
            <th scope="col">Includes</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2 People Per Group</td>
            <td>Program + Equipment</td>
            <td>400 Per Person</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>4 People Per Group</td>
            <td>Program + Equipment</td>
            <td>380 Per Person</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>6 Or More People Per Group</td>
            <td>Program + Equipment</td>
            <td>350 Per Person</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>15 Or More People Per Group</td>
            <td>Program + Equipment</td>
            <td>Available On Request</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RateCoachingGroupForm;
