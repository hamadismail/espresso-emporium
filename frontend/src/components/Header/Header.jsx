import React from "react";
import headerBg from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="w-11/12 mx-auto py-2 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2">
          <img className="w-12" src={logo} />
          <h2
            onClick={() => navigate("/")}
            className="text-white text-2xl cursor-pointer"
          >
            Espresso Emporium
          </h2>
        </div>

        <div>
          <button
            onClick={() => navigate("/auth/login")}
            className="px-2 py-1 bg-[#D2B48C] text-[#331A15] cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
