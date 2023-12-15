import React from "react";
import { NewPost } from "../components/NewPostForm";

export const NewPostPage = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Nueva Publicación</h1>
      <NewPost />
    </div>
  );
};
