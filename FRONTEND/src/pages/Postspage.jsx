import React from "react";
import { PostItem } from "../components/Posts";
//import { useState, useEffect } from "react";

/*const [postsList, setPostsList] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((data) => {
      setPostsList(data);
    });
}, []);*/

export const Postspage = () => {
  return (
    <div>
      {postsList.map((post) => {
        return (
          <PostItem
            key={post.id}
            title={post.title}
            desc={post.desc}
            image={post.image}
            author={post.author}
            timestamp={post.timestamp}
          />
        );
      })}
    </div>
  );
};
