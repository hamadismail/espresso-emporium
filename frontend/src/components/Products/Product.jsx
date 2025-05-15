import React from "react";
import card from "../../assets/images/1.png";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Product = () => {
  return (
    <div className="bg-[#F5F4F1] py-4">
      <div className="flex justify-around items-center">
        <img src={card} />
        <div>
          <p className="text-[#1B1A1A] font-semibold">
            Name:{" "}
            <span className="text-[#5C5B5B] font-thin">Americano Coffee</span>
          </p>
          <p className="text-[#1B1A1A] font-semibold">
            Chef:{" "}
            <span className="text-[#5C5B5B] font-thin">Mr. Matin Paul</span>
          </p>
          <p className="text-[#1B1A1A] font-semibold">
            Price: <span className="text-[#5C5B5B] font-thin">890 Taka</span>
          </p>
        </div>
        <div className="space-y-2">
          <div className="bg-[#D2B48C] cursor-pointer p-2 text-white rounded">
            <FaEye />
          </div>
          <div className="bg-[#3C393B] cursor-pointer p-2 text-white rounded">
            <MdEdit />
          </div>
          <div className="bg-[#EA4744] cursor-pointer p-2 text-white rounded">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
