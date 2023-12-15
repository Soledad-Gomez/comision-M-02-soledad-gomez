import React from "react";
import { RegisterForm } from "../components/RegisterForm";
import { ImageRegister } from "../components/ImageRegister";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import styles from "../styles/Login.module.css";

export const Registerpage = () => {
  return (
    <div>
      <Row>
        <Col className={styles.col1}>
          <ImageRegister />
        </Col>
        <Col className={styles.col2}>
          <RegisterForm />
        </Col>
      </Row>
    </div>
  );
};
