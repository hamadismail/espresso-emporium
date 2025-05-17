import React, { use } from "react";
import bgImg from "../assets/images/more/11.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { userSignUp, setUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get("email");

    userSignUp(email, password)
      .then((result) => {
        // Signed up
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        setUser({ ...result.user, photoURL: photo });
        navigate("/");
      })
      .catch((error) => {
        alert(error.code);
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
            New to here? SignUp
          </h2>
          <p className="text-center text-[#1b1a1ab3] my-4 md:w-3/4 mx-auto font-thin">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* form */}
          <form onSubmit={handleSignUp}>
            <div>
              {/* name */}
              <div className=" md:w-1/2 mx-auto">
                <label className="text-[#1b1a1acc] text-lg">Name</label> <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>

              {/* photo */}
              <div className=" md:w-1/2 mx-auto my-2">
                <label className="text-[#1b1a1acc] text-lg">Photo URL</label>{" "}
                <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="text"
                  name="photo"
                  placeholder="Enter your photo url"
                />
              </div>

              {/* email */}
              <div className=" md:w-1/2 mx-auto">
                <label className="text-[#1b1a1acc] text-lg">Email</label> <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              {/* password */}
              <div className="md:w-1/2 mx-auto mt-2">
                <label className="text-[#1b1a1acc] text-lg">Password</label>{" "}
                <br />
                <input
                  className="bg-white w-full py-1 px-2 rounded"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="mx-auto md:w-1/2">
              <button className="text-[#331A15] bg-[#D2B48C] border w-full  mt-4 p-1 font-medium rounded cursor-pointer">
                SignUp
              </button>
              <p className="mt-2">
                Already have an account?{" "}
                <Link className="underline text-[#331A15]" to="/auth/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
