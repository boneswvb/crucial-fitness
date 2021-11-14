import React from "react";

function RateWeightLossForm() {
  return (
    <div className="container">
      <h1>Weight Loss</h1>
      <p>All prices quoted in South-African Rand</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan="2">
              Type
            </th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colSpan="2">Weight Loss</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colSpan="2">Eating Habits</td>
            <td>Available on request</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Detox</td>
            <td>Available on request</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RateWeightLossForm;
