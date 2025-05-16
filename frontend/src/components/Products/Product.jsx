import React from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Product = ({ coffe, coffes, setCoffes }) => {
  const navigate = useNavigate();

  const { _id, name, chef, supplier, price, category, details, photo } =
    coffe || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffes/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
            const remainingCoffes = coffes.filter((c) => c._id !== _id);
            setCoffes(remainingCoffes);
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] py-4">
      <div className="flex justify-around items-center">
        <img src={photo} />

        <div>
          <p className="text-[#1B1A1A] font-semibold">
            Name: <span className="text-[#5C5B5B] font-thin">{name}</span>
          </p>
          <p className="text-[#1B1A1A] font-semibold">
            Chef: <span className="text-[#5C5B5B] font-thin">{chef}</span>
          </p>
          <p className="text-[#1B1A1A] font-semibold">
            Price:{" "}
            <span className="text-[#5C5B5B] font-thin">{price} Taka</span>
          </p>
        </div>

        <div className="space-y-2">
          <div
            onClick={() => {
              navigate(`/coffe/${_id}`), window.scrollTo(0, 0);
            }}
            className="bg-[#D2B48C] cursor-pointer p-2 text-white rounded"
          >
            <FaEye />
          </div>
          <div
            onClick={() => {
              navigate(`/updatecoffe/${_id}`), window.scrollTo(0, 0);
            }}
            className="bg-[#3C393B] cursor-pointer p-2 text-white rounded"
          >
            <MdEdit />
          </div>
          <div
            onClick={() => handleDelete(_id)}
            className="bg-[#EA4744] cursor-pointer p-2 text-white rounded"
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
