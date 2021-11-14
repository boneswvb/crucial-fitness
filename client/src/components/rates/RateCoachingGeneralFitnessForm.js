import React from "react";

function RateCoachingGeneralFitnessForm() {
  return (
    <div className="container">
      <h1>General Fitness</h1>
      <p>All prices quoted in South-African Rand</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment Plan</th>
            <th scope="col">Includes</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              Monthly - Training
              <br />
              No personal trainer
            </td>
            <td>Program + Equipment</td>
            <td>450</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              Monthly - Training
              <br />
              With personal trainer
            </td>
            <td>Program + Equipment</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Daily Visitor</td>
            <td>Equipment Only</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Daily Visitor</td>
            <td>No Equipment</td>
            <td>70</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RateCoachingGeneralFitnessForm;
