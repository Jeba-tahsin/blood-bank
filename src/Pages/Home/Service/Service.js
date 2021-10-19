import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { title, description, img, id } = service;

  return (
    <div className="col-md-4 service g-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <Link to={`/details/${id}`}><button className='btn-danger'>Details</button></Link>
        </div> 
      </div>
    </div> 
  );
};

export default Service;
