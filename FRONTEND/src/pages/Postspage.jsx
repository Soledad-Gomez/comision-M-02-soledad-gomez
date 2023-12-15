import { PostItem } from "../components/PostsCards";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { API_URL } from "../utils/consts";
import Row from "react-bootstrap/Row";
import styles from "../styles/posts.module.css";
import CardGroup from "react-bootstrap/CardGroup";

export const Postspage = () => {
  const [postsList, setPostsList] = useState([]);

  //para que me pase el token de autorización desde auth
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${API_URL}/posts`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data);
      });
  }, [auth]);

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
