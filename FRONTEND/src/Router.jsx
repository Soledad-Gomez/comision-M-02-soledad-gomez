import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Userspage } from "./pages/Userspage";
import { PostByIPage } from "./pages/PostByIdPage";
import { Postspage } from "./pages/Postspage";
import { Registerpage } from "./pages/Registerpage";
import { Loginpage } from "./pages/Loginpage";
import { NotFoundPage } from "./pages/404Page";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users" element={<Userspage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/posts" element={<Postspage />} />
      <Route path="/posts/:postsId" element={<PostByIPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
