import React from "react";
import footerBg from "../../assets/images/more/13.jpg";
import logo from "../../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="w-11/12 mx-auto pt-8 md:pt-16 pb-8 md:flex justify-between text-[#331A15]">
        <div className="space-y-3 max-md:mb-4">
          <img className="w-12" src={logo} />
          <h2 className="text-2xl font-semibold">Espresso Emporium</h2>
          <p className="md:w-3/4">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl text-left font-semibold">Connect with Us</h2>
          <form className="flex flex-col mt-3 gap-2">
            <input className="p-2 bg-white" type="text" placeholder="Name" />
            <input className="p-2 bg-white" type="email" placeholder="Email" />
            <textarea className="p-2 bg-white" placeholder="Message"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
