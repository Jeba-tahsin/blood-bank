import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import servicesData from "../../../data/serviceData.json";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(servicesData);
  }, []);
  //console.log(services);
  return (
    <div className='mt-5'>
      <h2 className="text-primary">Our services</h2>
        <div className='row m-3'>
        {services.slice(1, 7).map((service1) => (
        <Service key={service1.id} service={service1}>
          {" "}
        </Service>
      ))}
        </div>
    </div>
  );
};

export default Services;
