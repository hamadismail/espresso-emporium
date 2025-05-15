import React from "react";
import Banner from "../components/Header/Banner";
import Features from "../components/Header/Features";
import FollowUs from "../components/FollowUs/FollowUs";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Products />
      <FollowUs />
    </div>
  );
};

export default Home;
