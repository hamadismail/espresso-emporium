import React, { useState } from "react";
import { BsFillCupHotFill } from "react-icons/bs";
import bgImg from "../../assets/images/more/1.png";
import Product from "./Product";
import { useLoaderData, useNavigate } from "react-router";

const Products = () => {
  const navigate = useNavigate();
  const existingCoffes = useLoaderData();
  const [coffes, setCoffes] = useState(existingCoffes);

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
        <div
          onClick={() => {
            navigate("/addcoffe"), window.scrollTo(0, 0);
          }}
          className="flex gap-1 items-center cursor-pointer bg-[#E3B577] border border-[#331A15] w-fit mx-auto px-2 py-1 rounded"
        >
          <button className="text-white cursor-pointer text-shadow-xs text-shadow-gray-500">
            Add Coffee
          </button>
          <BsFillCupHotFill />
        </div>

        {/* products card container*/}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {coffes.map((coffe) => (
            <Product
              key={coffe._id}
              coffe={coffe}
              coffes={coffes}
              setCoffes={setCoffes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
