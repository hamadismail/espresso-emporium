import React from "react";
import bgImg from "../assets/images/more/11.png";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffe = () => {
  const navigate = useNavigate();

  const handleAddCoffe = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newCoffe = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });

          form.reset();
        }
      });
  };
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="w-11/12 md:w-10/12 mx-auto py-8">
        <p
          onClick={() => navigate("/")}
          className="text-[#374151] font-semibold flex gap-1 items-center cursor-pointer"
        >
          <IoMdArrowBack />
          Back to home
        </p>

        {/* contact form */}
        <div className="bg-[#F4F3F0] mt-8 px-12 py-8">
          <h2 className="text-center text-2xl text-[#374151] font-semibold">
            Add New Coffee
          </h2>
          <p className="text-center text-[#1b1a1ab3] my-4 md:w-3/4 mx-auto font-thin">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* form */}
          <form onSubmit={handleAddCoffe}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#1b1a1acc] text-lg">Name</label> <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                />
              </div>
              <div>
                <label className="text-[#1b1a1acc] text-lg">Chef</label> <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                />
              </div>
              <div>
                <label className="text-[#1b1a1acc] text-lg">Supplier</label>{" "}
                <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div>
                <label className="text-[#1b1a1acc] text-lg">Price</label> <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="price"
                  placeholder="Enter coffee price"
                />
              </div>
              <div>
                <label className="text-[#1b1a1acc] text-lg">Category</label>{" "}
                <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                />
              </div>
              <div>
                <label className="text-[#1b1a1acc] text-lg">Details</label>{" "}
                <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-[#1b1a1acc] text-lg">Photo</label> <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                />
              </div>
            </div>
            <button className="text-[#331A15] bg-[#D2B48C] border w-full mt-4 p-1 font-medium rounded cursor-pointer">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
