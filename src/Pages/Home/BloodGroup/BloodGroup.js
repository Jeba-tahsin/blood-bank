import React from "react";

const BloodGroup = () => {
  return (
    <div className="container mt-5">
      <h2 className='text-primary'>Blood Group</h2>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Blood Type</th>
              <th scope="col">Gives</th>
              <th scope="col">Receives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A+</th>
              <td>A+, AB+</td>
              <td>A+, A-, O+, O-</td>
            </tr>
            <tr>
              <th scope="row">O+</th>
              <td>O+, A+, B+, AB+</td>
              <td>O+, O-</td>
            </tr>
            <tr>
              <th scope="row">B+</th>
              <td>B+, AB+</td>
              <td>B+, B-, O+, O-</td>
            </tr>
            <tr>
              <th scope="row">AB+</th>
              <td>AB+</td>
              <td>Everyone</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4>Universal donor and universal recipient</h4>
        <p>
          O negative blood contains no A, B, or RhD antigens. Almost anyone with
          any blood type can receive these red blood cells. A person with group
          O negative blood is a universal donor.
        </p>
        <li>A person with O-negative blood can donate to almost anyone.</li>
        <li>
          A person with Rh-negative blood can donate to a person with
          Rh-negative or Rh-positive blood.
        </li>
        <li>
          A person with Rh-positive blood can only donate to someone with
          Rh-positive blood.
        </li>
      </div>
    </div>
  );
};

export default BloodGroup;
