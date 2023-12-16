import React from "react";
import { Login } from "../components/LoginForm";
import { Image } from "../components/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import styles from "../styles/Login.module.css";

export const Loginpage = () => {
  return (
    <div>
      <Row>
        <Col className={styles.col1}>
          <Image />
        </Col>
        <Col className={styles.col2}>
          <Login />
        </Col>
      </Row>
    </div>
  );
};
