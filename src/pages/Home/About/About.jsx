import img1 from "../../../assets/images/about_us/parts.jpg";
import img2 from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={img2} className="rounded-lg shadow-2xl w-3/4 " />
          <img
            src={img1}
            className="absolute top-1/2 right-5 rounded-lg shadow-2xl w-1/2 border-4 border-white"
          />
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <p className=" text-red-800 text-lg font-bold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are experience in this field!
          </h1>
          <p className="py-6 text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6 text-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-secondary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
