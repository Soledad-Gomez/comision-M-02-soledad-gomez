import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";

export const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [user, setUSer] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setUSer({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.status !== 200) return alert("Error al iniciar sesión");

    const res = await req.json();

    login(res);

    navigate("/");

    console.log(res);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className={styles.label} column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="email@example.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label className={styles.label} column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group className="d-grid gap-2">
            <Button variant="dark" size="lg" type="submit">
              Iniciar Sesión
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
