import React from "react";
import { Navbar } from "./NavbarPublic";
import { Outlet } from "react-router-dom";

export const PublicRoute = () => {
  return (
    <div>
      <Navbar />
      <Outlet />;
    </div>
  );
};
