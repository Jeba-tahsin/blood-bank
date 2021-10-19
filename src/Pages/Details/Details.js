import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import serviceData from "../../data/serviceData.json";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(serviceData);
  }, []);
  const singleData = data?.find(
    (service) => parseInt(service.id) === parseInt(id)
  );
  console.log(singleData);
  return (
    <div className='container'>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{singleData?.title}</h5>
          <p class="card-text">
            {singleData?.details}
          </p>
        </div>
        <img src={singleData?.img} class="card-img-bottom" alt="..." />
      </div>
    </div>
  );
};

export default Details;
