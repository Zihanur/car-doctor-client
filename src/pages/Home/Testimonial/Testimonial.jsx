import img1 from "../../../assets/icons/person.svg";

const Testimonial = () => {
  return (
    <div>
      <p className="mt-7 text-red-800 text-center text-lg font-bold">
        Testimonial
      </p>
      <h1 className="my-2 text-center text-4xl font-extrabold">
        What Customer Says
      </h1>
      <p className=" w-1/3 mx-auto text-center mb-4">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <div className="flex sm:flex-col md:flex-row gap-4 mb-6">
        <div className="border p-6 space-y-4 rounded-md">
          <div className="flex gap-6">
            <div>
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={img1} />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.{" "}
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="border p-6 space-y-4 rounded-md">
          <div className="flex gap-6">
            <div>
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={img1} />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.{" "}
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
