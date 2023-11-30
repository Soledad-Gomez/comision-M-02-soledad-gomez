import { body } from "express-validator";

export const createComment = [
  body("author").notEmpty().withmessage("Debes indicar el autor").isString(),
  body("description")
    .notEmpty()
    .withmessage("Debes escribir una descripción")
    .isString(),
];
