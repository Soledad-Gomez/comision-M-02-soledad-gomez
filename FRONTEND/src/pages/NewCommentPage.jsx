import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import Button from "react-bootstrap/Button";

import Spinner from "react-bootstrap/Spinner";
import { API_URL } from "../utils/consts";

export const NewCommentPage = () => {
  const { postId } = useParams();

  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const [postList, setPostList] = useState(null);

  const getPostList = (postId) => {
    fetch(`${API_URL}/posts/${postId}`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPostList(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
      post: postId,
    };

    fetch(`${API_URL}/comments/${postId}`, {
      method: "POST",
      headers: {
        Authorization: auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status !== 201) {
        return alert("No se pudo publicar el comentario");
      } else {
        navigate(`/posts/${postId}`);
      }
    });
  };
  useEffect(() => {
    getPostList(postId);
  });

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
    <div className="d-flex p-2 flex-column align-items-center justify-content-center w-80 mt-5">
      <div>
        <h2>Haz un comentario en: {postList.title}</h2>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="d-flex p-2 flex-column align-items-center justify-content-center gap-2"
          style={{ width: "80vw" }}
          controlId="desc"
        >
          <Form.Label>Comentario</Form.Label>
          <Form.Control as="textarea" rows={3} name="desc" />
        </Form.Group>
        <Form.Group className="d-flex p-2 flex-column align-items-center justify-content-center">
          <Form.Group className="d-grid gap-2">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
};
