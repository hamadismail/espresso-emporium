import React from "react";
import bgImg from "../assets/images/more/11.png";
import card from "../assets/images/5.png";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

const CoffeDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="w-11/12 md:w-10/12 mx-auto py-8">
        <p
          onClick={() => navigate("/")}
          className="text-[#374151] font-semibold flex gap-1 items-center cursor-pointer"
        >
          <IoMdArrowBack />
          Back to home
        </p>
        <div className="flex max-md:flex-col justify-center gap-4 md:gap-12  py-12 items-center bg-[#F4F3F0] mt-4">
          <img src={card} />
          <div className="max-md:text-center">
            <h2 className="text-[#331A15] text-xl font-semibold mb-3">
              Niceties
            </h2>
            <p className="text-[#1B1A1A]">
              Name:{" "}
              <span className="text-[#5C5B5B] font-thin">Americano Coffee</span>
            </p>
            <p className="text-[#1B1A1A] my-1">
              Chef:{" "}
              <span className="text-[#5C5B5B] font-thin">Mr. Matin Paul</span>
            </p>
            <p className="text-[#1B1A1A]">
              Supplier:{" "}
              <span className="text-[#5C5B5B] font-thin">Cappu Authorizer</span>
            </p>
            <p className="text-[#1B1A1A] my-1">
              Price: <span className="text-[#5C5B5B] font-thin">100 BDT</span>
            </p>
            <p className="text-[#1B1A1A]">
              Category:{" "}
              <span className="text-[#5C5B5B] font-thin">Americano</span>
            </p>
            <p className="text-[#1B1A1A] mt-1">
              Details:{" "}
              <span className="text-[#5C5B5B] font-thin">
                Espresso with hot water
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
