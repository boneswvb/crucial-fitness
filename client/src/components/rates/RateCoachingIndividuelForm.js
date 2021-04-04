import React from 'react';

function RateCoachingIndividuelForm() {
  return (
    <div className="container">
      <h1>Individuel Coaching/Strapping/Massage</h1>
      <p>All prices quoted in South-African Rand</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
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
          <tr>
            <th scope="row">5</th>
            <td>Massage - Injury Specific</td>
            <td>30 Minutes</td>
            <td>250</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>
              Massage
              Back, Neck
              <br />
              & Shoulders
              <br />
              (Inc Arms & Hands)
            </td>
            <td>30 Minutes</td>
            <td>350</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Massage Legs & Feet</td>
            <td>30 Minutes</td>
            <td>250</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>
              Massage
              Feet, Back, Neck
              <br />
              & Legs
            </td>
            <td>45 Minutes</td>
            <td>450</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td colSpan="2">Strapping - 1 Limb</td>
            <td>30</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td colSpan="2">Strapping - 2 Limbs</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td colSpan="2">Strapping - 3 Or More Limbs</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RateCoachingIndividuelForm;
