import React from "react";
import cup1 from "../../assets/images/cups/Rectangle9.png";
import cup2 from "../../assets/images/cups/Rectangle10.png";
import cup3 from "../../assets/images/cups/Rectangle11.png";
import cup4 from "../../assets/images/cups/Rectangle12.png";
import cup5 from "../../assets/images/cups/Rectangle13.png";
import cup6 from "../../assets/images/cups/Rectangle14.png";
import cup7 from "../../assets/images/cups/Rectangle15.png";
import cup8 from "../../assets/images/cups/Rectangle16.png";
import "./followus.css";

const FollowUs = () => {
  return (
    <div className="mt-12 mb-8 w-11/12 mx-auto">
      <p className="text-center text-[#1B1A1A]">Follow Us Now</p>
      <h2 className="text-center text-[#331A15] text-3xl font-semibold text-shadow-xs text-shadow-amber-950">
        Follow on Instagram
      </h2>

      {/* coffe card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 justify-items-center">
        <img className="cup-img rounded-md" src={cup1} />
        <img className="cup-img rounded-md" src={cup2} />
        <img className="cup-img rounded-md" src={cup3} />
        <img className="cup-img rounded-md" src={cup4} />
        <img className="cup-img rounded-md" src={cup5} />
        <img className="cup-img rounded-md" src={cup6} />
        <img className="cup-img rounded-md" src={cup7} />
        <img className="cup-img rounded-md" src={cup8} />
      </div>
    </div>
  );
};

export default FollowUs;
