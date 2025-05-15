import React from "react";
import headerBg from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="py-2 flex justify-center gap-2 items-center"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <img className="w-12" src={logo} />
      <h2
        onClick={() => navigate("/")}
        className="text-white text-2xl cursor-pointer"
      >
        Espresso Emporium
      </h2>
    </div>
  );
};

export default Header;
