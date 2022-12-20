import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const MainLayOut = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayOut;
