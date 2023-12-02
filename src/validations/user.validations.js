import { body, param } from "express-validator";

export const registerUserValidation = [
  body("username").notEmpty().withMessage("Este campo no debe estar vacío"),
  body("email")
    .notEmpty()
    .withMessage("Este campo no debe estar vacío")
    .isEmail()
    .withMessage("debes escribir un correo válido"),
  body("password")
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .isLength({ min: 8, max: 12 })
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres y 12 como máximo"
    ),
  body("avatar")
    .notEmpty()
    .withMessage("El campo { avatar } no debe estar vacio.")
    .isString()
    .withMessage("El campo { avatar } debe ser un string.")
    .isURL()
    .withMessage("El campo { avatar } debe ser una URL válida."),
];

export const updateUserValidation = [
  body("username")
    .optional()
    .notEmpty()
    .withMessage("Este campo no debe estar vacío"),
  body("email")
    .optional()
    .notEmpty()
    .withMessage("Este campo no debe estar vacío")
    .isEmail()
    .withMessage("debes escribir un correo válido"),
  body("password")
    .optional()
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .isLength({ min: 8, max: 12 })
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres y 12 como máximo"
    ),
  body("avatar")
    .optional()
    .notEmpty()
    .withMessage("El campo { avatar } no debe estar vacio.")
    .isString()
    .withMessage("El campo { avatar } debe ser un string.")
    .isURL()
    .withMessage("El campo { avatar } debe ser una URL válida."),
];

export const loginUserValidation = [body("email"), body("password")];
