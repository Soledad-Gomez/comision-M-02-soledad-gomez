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
import { authHeader } from "../validations/authorization.validations.js";
import { validateToken } from "../middlewares/validate.token.js";

const commentRouter = Router();

//ruta para crear un comentario
commentRouter.post(
  "/:postId",
  authHeader,
  validateToken,
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
  authHeader,
  validateToken,
  updateCommentValidation,
  applyValidations,
  ctrlUpdateComment
);

//ruta para borrar un comentario
commentRouter.delete(
  "/:commentId",
  authHeader,
  validateToken,
  ctrlDeleteComment
);

export { commentRouter };
