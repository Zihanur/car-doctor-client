import { Link } from "react-router-dom";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Teams = () => {
  return (
    <div>
      <p className="mt-10 text-red-800 text-center text-lg font-bold">Team</p>
      <h1 className="my-2 text-center text-4xl font-extrabold">
        Meet Our Team
      </h1>
      <p className=" w-1/3 mx-auto text-center mb-4">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="card-actions">
              <Link>
                <FaFacebook className="h-6 w-6 text-blue-700" />
              </Link>
              <Link>
                <FaTwitter className="h-6 w-6 text-blue-900" />
              </Link>
              <Link>
                <FaLinkedin className="h-6 w-6 text-blue-400" />
              </Link>
              <Link>
                <FaInstagram className="h-6 w-6 text-orange-800" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="card-actions">
              <Link>
                <FaFacebook className="h-6 w-6 text-blue-700" />
              </Link>
              <Link>
                <FaTwitter className="h-6 w-6 text-blue-900" />
              </Link>
              <Link>
                <FaLinkedin className="h-6 w-6 text-blue-400" />
              </Link>
              <Link>
                <FaInstagram className="h-6 w-6 text-orange-800" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="card-actions">
              <Link>
                <FaFacebook className="h-6 w-6 text-blue-700" />
              </Link>
              <Link>
                <FaTwitter className="h-6 w-6 text-blue-900" />
              </Link>
              <Link>
                <FaLinkedin className="h-6 w-6 text-blue-400" />
              </Link>
              <Link>
                <FaInstagram className="h-6 w-6 text-orange-800" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
