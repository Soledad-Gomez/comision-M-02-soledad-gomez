import { PostItem } from "../components/PublicPostsCards";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "../utils/consts";
import Row from "react-bootstrap/Row";
import styles from "../styles/posts.module.css";
import CardGroup from "react-bootstrap/CardGroup";

export const PublicPostsPage = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`, {})
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data);
      });
  }, []);

  console.log(postsList);

  return (
    <div className={styles.div}>
      <div className="d-flex justify-content-center text-white">
        <div className={styles.banner}>
          <h2 className="d-flex justify-content-center pt-5 ">
            VIAJAMOS... NO PARA ESCAPAR DE LA VIDA.
          </h2>

          <h2 className="d-flex justify-content-center p-2">
            SINO PARA QUE LA VIDA NO SE NOS ESCAPE.
          </h2>
        </div>
      </div>
      <CardGroup>
        <Row xs={1} md={2} className="g-4">
          {postsList.map((post) => {
            return (
              <PostItem
                key={post._id}
                postId={post._id}
                title={post.title}
                desc={post.desc}
                image={post.image}
                author={post.author.username}
                avatar={post.author.avatar}
                timestamp={post.timestamp}
              />
            );
          })}
        </Row>
      </CardGroup>
    </div>
  );
};
