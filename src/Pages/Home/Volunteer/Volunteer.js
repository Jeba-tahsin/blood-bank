import React from "react";
import './Volunteer.css';
import v1 from "../../../images/volunter/v1.jpg";
import v2 from "../../../images/volunter/v2.jpg";
import v3 from "../../../images/volunter/v3.jpg";
import v4 from "../../../images/volunter/v4.jpg";


const Volunteer = () => {
  return (
    <div  className='mt-5 text-primary'>
        <h3>Our Volunteers</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 m-5 mt-0">
        <div class="col">
          <div class="card image">
            <div className='justify-content-center'>
            <img src={v4} class="card-img-top rounded-circle" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">Jhon Smith</h5>
              <p class="card-text">
                He is the main leader of our group.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card image">
            <div className='justify-content-center'>
            <img src={v2} class="card-img-top rounded-circle" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">Zara Topal</h5>
              <p class="card-text">
               She is the most friendly Volunteer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card image">
            <div className='justify-content-center'>
            <img src={v3} class="card-img-top rounded-circle" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">Ruhi Iplici</h5>
              <p class="card-text">
                She manage the whole management.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card image">
            <div className='justify-content-center'>
            <img src={v1} class="card-img-top rounded-circle" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">Ayesha Sayma</h5>
              <p class="card-text">
                She is very friendly Volunteer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
