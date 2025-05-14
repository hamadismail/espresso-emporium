import React from "react";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";

const Features = () => {
  return (
    <div className="bg-[#ECEAE3] py-8">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <img src={icon1} />
          <h2 className="text-[#331A15] text-2xl">Awesome Aroma</h2>
          <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon2} />
          <h2 className="text-[#331A15] text-2xl">High Quality</h2>
          <p className="text-[#1B1A1A]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img src={icon3} />
          <h2 className="text-[#331A15] text-2xl">Pure Grades</h2>
          <p className="text-[#1B1A1A]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={icon4} />
          <h2 className="text-[#331A15] text-2xl">Proper Roasting</h2>
          <p className="text-[#1B1A1A]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
