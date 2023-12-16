import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_URL } from "../utils/consts";

export const NewPost = (target) => {
  const [newPost, setNewPost] = useState({
    title: "",
    desc: "",
    image: "",
  });

  const handleChange = ({ target }) => {
    setNewPost({
      ...newPost,
      [target.name]: target.value,
    });
  };

  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        Authorization: auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => {
      if (res.status !== 201) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo crear!",
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tu publicación ha sido creada",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setNewPost("");
      navigate("/posts");
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newPost.title}
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
              value={newPost.desc}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Imágen</Form.Label>
            <Form.Control
              type="url"
              placeholder="http://example.com"
              name="image"
              value={newPost.image}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Copia la dirección de tu imágen
            </Form.Text>
          </Form.Group>
          <Form.Group className="d-grid gap-2">
            <Button variant="dark" type="submit">
              Publicar
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
