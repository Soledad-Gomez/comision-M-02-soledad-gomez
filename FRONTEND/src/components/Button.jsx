import React from "react";

export const Button = ({
  children,
  texto = "default",
  variante = "blue",
  click,
}) => {
  let clase = "";

  if (variante === "blue") clase = "btn-blue";
  if (variante === "green") clase = "btn-green";
  if (variante === "red") clase = "btn-red";

  return (
    <button onClick={click} className={"btn " + clase}>
      {children || texto}
    </button>
  );
};
