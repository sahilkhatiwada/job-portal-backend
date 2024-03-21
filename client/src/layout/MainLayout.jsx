import React from "react";
import { Outlet } from "react-router-dom";
import FooterDiv from "../Components/FooterDiv/FooterDiv";
import NavBar from "../Components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="w-[85%] m-auto bg-[white]">
      <NavBar />
      <Outlet />
      <FooterDiv />
    </div>
  );
};

export default MainLayout;
