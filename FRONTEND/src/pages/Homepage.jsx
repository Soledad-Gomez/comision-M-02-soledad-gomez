import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import styles from "../styles/homePage.module.css";

export const Homepage = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className={styles.background}>
      <h1 className="d-flex justify-content-center pt-5 text-black">
        El destino perfecto
      </h1>
      <p className="d-flex justify-content-center p-2  text-black">
        "La vida es un viaje, viajar es vivir dos veces"
      </p>
      <h4 className="d-flex justify-content-center pt-5 text-black">
        Aquí encontrarás publicaciones de viajes.
      </h4>
      <h4 className="d-flex justify-content-center text-black">
        Si te registras podrás compartir tus propias publicaciones
      </h4>
      <h4 className="d-flex justify-content-center text-black">
        y comentar publicaciones de otras
      </h4>
      <div> {auth?.user?.username} </div>;
    </div>
  );
};

//<div> {auth?.user?.username} </div>; me muestra el auth, el usuario que inició sesión
