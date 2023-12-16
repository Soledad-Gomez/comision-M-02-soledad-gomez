import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Postspage } from "./pages/Postspage";
import { NewPostPage } from "./pages/NewPostPage";
import { PostByIdPage } from "./pages/PostByIdPage";
import { Userspage } from "./pages/Userspage";
import { Registerpage } from "./pages/Registerpage";
import { Loginpage } from "./pages/Loginpage";
import { NotFoundPage } from "./pages/404Page";
import { PrivateRoutes } from "./components/PrivateRoute";
import { NewCommentPage } from "./pages/NewCommentPage";
import { PublicRoute } from "./components/PublicRoute";
import { PublicPostsPage } from "./pages/PublicPostPage";
import { PublicPostByIdPage } from "./pages/PublicPostByIdPage";
import { EditPostPage } from "./pages/EditPostPage";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/posts" element={<Postspage />} />
        <Route path="/posts/newpost" element={<NewPostPage />} />
        <Route path="/posts/:postId" element={<PostByIdPage />} />
        <Route path="/comments/:postId" element={<NewCommentPage />} />
        <Route path="/posts/:postId/edit" element={<EditPostPage />} />
        <Route path="/users" element={<Userspage />} />
      </Route>

      <Route element={<PublicRoute />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/public/posts" element={<PublicPostsPage />} />
        <Route path="/public/posts/:postId" element={<PublicPostByIdPage />} />
      </Route>

      <Route path="/register" element={<Registerpage />} />
      <Route path="/login" element={<Loginpage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
