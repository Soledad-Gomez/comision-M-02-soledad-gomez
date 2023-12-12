import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const Homepage = () => {
  const { auth } = useContext(AuthContext);

  return <div> {auth?.user?.username} </div>;
};
