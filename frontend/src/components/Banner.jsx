import React from "react";
import bannerBg from "../assets/images/more/3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-bottom h-[60vh]  md:h-[80vh] max-md:text-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="w-11/12 mx-auto text-white h-full flex justify-end items-center">
        <div className="md:w-1/2 py-6 space-y-2">
          <h2 className="text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="md:w-2/3">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="px-2 py-1 bg-[#D2B48C] text-[#331A15]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
