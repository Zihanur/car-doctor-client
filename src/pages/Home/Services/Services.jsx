import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [asc, setAsc] = useState(true);
  const searchRef =  useRef("")

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc,search]);

  const handleSearch=()=>{
    setSearch(searchRef.current.value)
  }

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
        <div className="flex justify-end gap-4">
          <div className="form-control">
            <div className="input-group">
              <input
              ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => setAsc(!asc)}>
            {asc ? "Price: High to Low" : "Price: Low to High"}
          </button>
        </div>
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
