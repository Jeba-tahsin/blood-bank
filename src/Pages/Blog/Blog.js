import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
              <h5 class="card-title">
                Why Should I donate Blood and Am I eligible for donation ?
              </h5>
              <p class="card-text">
              Great question! .Giving blood can reveal potential health problems.Giving blood can reduce harmful iron stores.Giving blood may lower your risk of suffering a heart attack.Giving blood may reduce your risk of developing cancer.Giving blood can help your liver stay healthy.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
              <h5 class="card-title">
                Give Blood and Save three Lives or even more and bring smile.
              </h5>
              <p class="card-text">
                The campaign aims to highlight stories of people whose lives
                have been saved through blood donation, to motivate regular
                blood donors to continue giving blood, and motivate people in
                good health who have never given blood to begin doing so,
                particularly young people.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
              <h5 class="card-title">Donating blood connects us all in a soul.</h5>
              <p class="card-text">
              We have adopted the slogan "Share life, give blood", to draw attention to the roles that voluntary donation systems play in encouraging people to care for one another and promote community cohesion.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
              <h5 class="card-title">Attendance Allowance campaign</h5>
              <p class="card-text">
              The theme of this year’s World Blood Donor Day is “Blood connects us all”. It focuses on thanking blood donors and highlights the dimension of “sharing” and “connection” between blood donors and patients. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
