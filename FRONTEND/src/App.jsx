import React from "react";
import { Router } from "./Router";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router />
    </React.Fragment>
  );
};
