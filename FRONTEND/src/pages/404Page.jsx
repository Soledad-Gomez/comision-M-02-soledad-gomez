import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Not Found</p>

      <Link to="/">Ir a la página principal</Link>
    </div>
  );
};
