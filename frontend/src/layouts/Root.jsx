import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
