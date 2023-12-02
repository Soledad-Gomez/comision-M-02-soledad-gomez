import { Router } from "express";

import {
  ctrlCreatePost,
  ctrlDeletePostById,
  ctrlGetAllPost,
  ctrlGetPostById,
  ctrlUpdatePostById,
} from "../controllers/post.controllers.js";

import {
  createPostvalidation,
  findPostValidation,
  updatePostvalidation,
} from "../validations/post.validations.js";

import { applyValidations } from "../middlewares/apply.validations.js";

const postRouter = Router();

//ruta para crear un nuevo post
postRouter.post("/", createPostvalidation, applyValidations, ctrlCreatePost);

//ruta para ver todos lo posts
postRouter.get("/", ctrlGetAllPost);

//ruta para ver un post buscandolo por su Id
postRouter.get(
  "/:postId",
  findPostValidation,
  applyValidations,
  ctrlGetPostById
);

//ruta para editar un post buscandolo por su Id
postRouter.patch(
  "/:postId",
  updatePostvalidation,
  applyValidations,
  ctrlUpdatePostById
);

//ruta para borrar un post buscandolo por su Id
postRouter.delete("/:postId", ctrlDeletePostById);

export { postRouter };
