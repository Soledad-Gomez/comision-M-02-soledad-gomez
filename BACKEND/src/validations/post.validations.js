import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

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

export const findPostValidation = [
  param("postId").custom(isValidObjectId).withMessage("Debe ser un Id válido"),
];

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
