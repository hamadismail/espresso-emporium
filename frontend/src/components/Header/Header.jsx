import React from "react";
import headerBg from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div
      className="py-2 flex justify-center gap-2 items-center"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <img className="w-12" src={logo} />
      <h2 className="text-white text-2xl">Espresso Emporium</h2>
    </div>
  );
};

export default Header;
