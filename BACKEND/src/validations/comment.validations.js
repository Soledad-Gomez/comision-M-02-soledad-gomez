import { body } from "express-validator";

export const createCommentValidation = [
  body("desc")
    .notEmpty()
    .withMessage("Debes escribir un comentario")
    .isString(),
];

export const updateCommentValidation = [
  body("desc")
    .optional()
    .notEmpty()
    .withMessage("Debes escribir un comentario")
    .isString(),
];
