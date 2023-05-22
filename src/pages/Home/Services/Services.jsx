import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <p className="mt-7 text-red-800 text-center text-lg font-bold">
          Service
        </p>
        <h1 className="my-2 text-center text-4xl font-extrabold">
          Our Service Area
        </h1>
        <p className=" w-1/3 mx-auto text-center mb-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which donot look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
