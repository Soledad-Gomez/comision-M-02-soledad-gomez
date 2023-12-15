import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "../styles/posts.module.css";
import { Link } from "react-router-dom";

export const PostItem = ({ postId, title, desc, author, image, timestamp }) => {
  return (
    <Col>
      <Card key={postId} className="border border-dark">
        <Card.Img className={styles.img} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <div>
            <Card.Text className={styles.cardText}>{desc}</Card.Text>
          </div>
          <Link className={styles.btn} to={`/posts/${postId}`}>
            Seguir leyendo
          </Link>
        </Card.Body>
        <Card.Footer>
          <Card.Text>"Autor: {author}"</Card.Text>

          <small className="text-muted">{timestamp}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};
