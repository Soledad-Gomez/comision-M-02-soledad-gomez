import { Router } from "express";

import {
  ctrlCreateComment,
  ctrlUpdateComment,
  ctrlDeleteComment,
  ctrlAllComments,
  ctrlFindOneComment,
} from "../controllers/comment.controllers.js";

import {
  createCommentValidation,
  updateCommentValidation,
} from "../validations/comment.validations.js";

import { applyValidations } from "../middlewares/apply.validations.js";

const commentRouter = Router();

//ruta para crear un comentario
commentRouter.post(
  "/",
  createCommentValidation,
  applyValidations,
  ctrlCreateComment
);

//ruta para buscar todos los comentarios
commentRouter.get("/", ctrlAllComments);

//ruta para buscar un comentario por Id
commentRouter.get("/:commentId", ctrlFindOneComment);

//ruta para editar un comentario
commentRouter.patch(
  "/:commentId",
  updateCommentValidation,
  applyValidations,
  ctrlUpdateComment
);

//ruta para borrar un comentario
commentRouter.delete("/:commentId", ctrlDeleteComment);

export { commentRouter };
