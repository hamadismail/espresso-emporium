import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import errImg from "../assets/images/404/404.gif";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <p
        onClick={() => navigate("/")}
        className="text-[#374151] font-semibold text-xl flex gap-1 items-center justify-center cursor-pointer mt-8"
      >
        <IoMdArrowBack />
        Back to home
      </p>

      <img className="mx-auto" src={errImg} />
    </div>
  );
};

export default Error;
