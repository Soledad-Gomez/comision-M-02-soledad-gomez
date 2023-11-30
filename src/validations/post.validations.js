import { body, param } from "express-validator";

export const createPostvalidation = [
  body("title")
    .notEmpty()
    .withMessage("Debes agregar un título")
    .isString()
    .withMessage("El título debe ser un string"),
  body("desc").notEmpty().withMessage("Debes agregar una descripción"),
  body("image")
    .notEmpty()
    .withMessage("Debes agregar una imágen")
    .isURL()
    .withMessage("Debe ser un link válido"),
];

/*
export const listPostValidations = [
  header('authorization').exists(),
  applyValidations,
];
*/

export const findPostValidation = [param("postId")];

export const updatePostvalidation = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Debes agregar un título")
    .isString()
    .withMessage("El título debe ser un string"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Debes agregar una descripción"),
  body("image")
    .optional()
    .notEmpty()
    .withMessage("Debes agregar una imágen")
    .isURL()
    .withMessage("Debe ser un link válido"),
];
