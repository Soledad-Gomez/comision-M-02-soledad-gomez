import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/posts">
                Publicaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="posts/newpost">
                Crear
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mi cuenta
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/users">
                    Mis publicaciones
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" onClick={logout}>
                    Cerrar sesión
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mi cuenta
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <h4>{auth?.user?.username}</h4>
          </form>
        </div>
      </div>
    </nav>
  );
};
