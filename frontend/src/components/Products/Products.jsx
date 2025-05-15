import React from "react";
import { BsFillCupHotFill } from "react-icons/bs";
import bgImg from "../../assets/images/more/1.png";
import Product from "./Product";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const Products = () => {
  return (
    <div
      className="bg-white bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="w-11/12 mx-auto mt-12 mb-8">
        <p className="text-center text-[#1B1A1A]">--- Sip & Savor ---</p>
        <h2 className="text-center my-3 text-3xl font-semibold text-shadow-xs text-shadow-[#331A15] text-[#331A15]">
          Our Popular Products
        </h2>
        <div className="flex gap-1 items-center cursor-pointer bg-[#E3B577] border border-[#331A15] w-fit mx-auto px-2 py-1 rounded">
          <button className="text-white cursor-pointer text-shadow-xs text-shadow-gray-500">
            Add Coffee
          </button>
          <BsFillCupHotFill />
        </div>

        {/* products card container*/}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <Product />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
