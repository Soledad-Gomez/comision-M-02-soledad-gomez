import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Register.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { API_URL } from "../utils/consts";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [user, setUSer] = useState({
    username: "",
    avatar: "",
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
    const req = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(user);
    if (req.status !== 201) return alert("Error al registrar usuario");

    const res = await req.json();
    navigate("/users/login");

    console.log(res);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Registro</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextUsername"
          >
            <Form.Label className={styles.label} column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextAvatar">
            <Form.Label className={styles.label} column sm="2">
              Avatar
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="url"
                placeholder="www-my-avatar.com"
                name="avatar"
                value={user.avatar}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

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
              Registrarse
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
