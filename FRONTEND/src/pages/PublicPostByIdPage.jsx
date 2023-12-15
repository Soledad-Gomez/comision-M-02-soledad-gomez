import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/consts";
import Image from "react-bootstrap/Image";
import styles from "../styles/postById.module.css";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

export const PublicPostByIdPage = () => {
  const { postId } = useParams();

  const [postList, setPostList] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/posts/${postId}`, {})
      .then((res) => res.json())
      .then((data) => setPostList(data));
  });
  console.log(postList);

  if (!postList) {
    return (
      <div>
        <div>
          <h1 className="d-flex align-item-center justify-content-center">
            Loading...
          </h1>
        </div>
        <div className="d-flex align-item-center justify-content-center">
          <>
            <Spinner animation="border" variant="dark" />
          </>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Image className={styles.img} src={postList.image} fluid />
      </div>
      <div>
        <Container className="d-flex justify-content-center m-5">
          <Row>
            <h5 className="d-flex justify-content-center">
              Autor: {postList.author.username}
            </h5>
            <Col className="d-flex justify-content-center">
              <Image
                className={styles.avatar}
                src={postList.author.avatar}
                roundedCircle
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <h1 className={styles.h1}>{postList.title}</h1>
      </div>
      <div>
        <p className={styles.p}>{postList.desc}</p>
      </div>
      <div></div>
      <div>
        <div className="m-5">
          <Accordion>
            <Accordion.Item
              className="align-self-center border border-dark"
              eventKey="0"
            >
              <Accordion.Header>Comentarios</Accordion.Header>

              <Accordion.Body>
                {postList.comments.map((comments) => {
                  return (
                    <div key={comments._id}>
                      <p>autor={comments.author}</p>
                      <p>comentario={comments.desc}</p>
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        ;
      </div>
    </div>
  );
};
