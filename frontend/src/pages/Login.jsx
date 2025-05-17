import React, { use } from "react";
import bgImg from "../assets/images/more/11.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { userSignIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const signinInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // update last signin info in database
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signinInfo),
        })
          .then((res) => res.json())
          .then((data) => {});
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
            Login as existing user
          </h2>
          <p className="text-center text-[#1b1a1ab3] my-4 md:w-3/4 mx-auto font-thin">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* form */}
          <form onSubmit={handleLogin}>
            <div>
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
              <div className="md:w-1/2 mx-auto mt-3">
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
                Login
              </button>
              <p className="mt-2">
                Don't have an account?{" "}
                <Link className="underline text-[#331A15]" to="/auth/signup">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
