import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";

import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import styles from "../styles/postById.module.css";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

export const PostByIdPage = () => {
  const { postId } = useParams();

  const { auth } = useContext(AuthContext);

  const [postList, setPostList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/posts/${postId}`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPostList(data));
  }, [auth]);
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

  const handleDelete = async (postId) => {
    return await fetch(`${API_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: auth.token,
      },
    });
  };

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
      <div className="d-flex justify-content-end">
        <Button href="/posts/editpost" className="m-1" variant="dark">
          Editar Post
        </Button>
        <Button
          className="m-1"
          variant="dark"
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                handleDelete(postId).then((res) => {
                  if (res.status !== 202) {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Something went wrong!",
                    });
                  } else {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                    navigate("/posts");
                  }
                });
              }
            });
          }}
        >
          Eliminar Post
        </Button>
      </div>
      <div>
        <div className="m-5">
          <Accordion>
            <Accordion.Item
              className="align-self-center border border-dark"
              eventKey="0"
            >
              <Accordion.Header>Comentarios</Accordion.Header>

              <Accordion.Body>
                <Button
                  className="m-1"
                  variant="dark"
                  href={`/comments/${postId}`}
                >
                  Nuevo comentario
                </Button>

                {postList.comments.map((comments) => {
                  return (
                    <div
                      key={comments._id}
                      className="border border-dark p-2 m-1 rounded"
                    >
                      <p>autor={comments.author}</p>
                      <p>comentario={comments.desc}</p>
                      <div className="d-flex justify-content-end">
                        <Button className="m-1" variant="dark">
                          Editar Comentario
                        </Button>
                        <Button className="m-1" variant="dark">
                          Borrar Comentario
                        </Button>
                      </div>
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
