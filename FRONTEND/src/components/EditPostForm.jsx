import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_URL } from "../utils/consts";

export const EditPost = (target) => {
  const params = useParams();
  const { postId } = useParams();
  const [updatePost, setupdatePost] = useState({
    title: "",
    desc: "",
    image: "",
  });

  const handleChange = ({ target }) => {
    setupdatePost({
      ...updatePost,
      [target.name]: target.value,
    });
  };
  console.log(updatePost);

  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUpdate = (postId) => {
    fetch(`${API_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        Authorization: auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePost),
    }).then((res) => {
      if (res.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo editar!",
        });
        navigate(`/posts/${postId}`);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tu publicación ha sido editada",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  console.log(postId);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={updatePost.title}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Escribe el titulo para tu nueva publicación
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              value={updatePost.desc}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Imágen</Form.Label>
            <Form.Control
              type="url"
              placeholder="http://example.com"
              name="image"
              value={updatePost.image}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Copia la dirección de tu imágen
            </Form.Text>
          </Form.Group>
          <Form.Group className="d-grid gap-2">
            <Button
              className="m-1"
              variant="dark"
              onClick={() => {
                handleUpdate(postId);
              }}
            >
              Editar
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
