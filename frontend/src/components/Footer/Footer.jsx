import React from "react";
import footerBg from "../../assets/images/more/13.jpg";
import logo from "../../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="w-11/12 mx-auto pt-8 md:pt-16 pb-8 md:flex justify-between text-[#331A15]">
        <div className="space-y-3 max-md:mb-4">
          <img className="w-12" src={logo} />
          <h2 className="text-3xl font-semibold">Espresso Emporium</h2>
          <p className="md:w-3/4">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* social */}
          <div className="flex gap-1 text-xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>

          {/* get in touch */}
          <h2 className="text-2xl mt-6 font-semibold">Get in Touch</h2>

          {/* contact-info */}
          <div className="flex gap-2 items-center">
            <FaPhone /> +880 1800000000
          </div>
          <div className="flex gap-2 items-center">
            <IoMdMail /> info@gmail.com
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationDot /> Demra, Dhaka - 1362
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl text-left font-semibold">Connect with Us</h2>
          <form className="flex flex-col mt-3 gap-2">
            <input className="p-2 bg-white" type="text" placeholder="Name" />
            <input className="p-2 bg-white" type="email" placeholder="Email" />
            <textarea className="p-2 bg-white" placeholder="Message"></textarea>
            <input
              className="border-2 w-1/2  md:w-1/4 rounded-full cursor-pointer py-1"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
