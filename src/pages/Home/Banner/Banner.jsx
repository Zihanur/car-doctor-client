import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-md" />
        <div className="absolute flex flex-col justify-center h-full p-4 gap-6 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <h1 className="text-6xl w-1/2">Affordable Price For Car Servicing</h1>
          <p className="text-lg w-3/4	">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-6 ms-4">
            <button className="btn btn-error text-2xl">Discover More</button>
            <button className="btn btn-white text-2xl">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-md" />
        <div className="absolute flex flex-col justify-center h-full p-4 gap-6 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <h1 className="text-6xl w-1/2">Affordable Price For Car Servicing</h1>
          <p className="text-lg w-3/4	">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-6 ms-4">
            <button className="btn btn-error text-2xl">Discover More</button>
            <button className="btn btn-white text-2xl">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-md" />
        <div className="absolute flex flex-col justify-center h-full p-4 gap-6 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <h1 className="text-6xl w-1/2">Affordable Price For Car Servicing</h1>
          <p className="text-lg w-3/4	">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-6 ms-4">
            <button className="btn btn-error text-2xl">Discover More</button>
            <button className="btn btn-white text-2xl">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-md" />
        <div className="absolute flex flex-col justify-center h-full p-4 gap-6 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <h1 className="text-6xl w-1/2">Affordable Price For Car Servicing</h1>
          <p className="text-lg w-3/4	">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-6 ms-4">
            <button className="btn btn-error text-2xl">Discover More</button>
            <button className="btn btn-white text-2xl">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
