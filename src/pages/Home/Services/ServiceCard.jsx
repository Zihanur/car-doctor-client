import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end items-center">
          <p className="text-error">Price: {price}</p>
          <Link to={`/booking/${_id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
