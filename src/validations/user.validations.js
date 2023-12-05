import { body, param } from "express-validator";
import { UserModel } from "../models/user.model.js";

export const registerUserValidation = [
  body("username")
    .notEmpty()
    .withMessage("Este campo no debe estar vacío")
    .custom(async (value) => {
      const user = await UserModel.findOne({ username: value });

      if (user) throw new Error("Este usuario ya está registrado");

      return true;
    }),
  body("email")
    .notEmpty()
    .withMessage("Este campo no debe estar vacío")
    .isEmail()
    .withMessage("debes escribir un correo válido")
    .custom(async (value) => {
      const user = await UserModel.findOne({ email: value });

      if (user) throw new Error("Este email ya está registrado");

      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .isLength({ min: 8, max: 12 })
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres y 12 como máximo"
    )
    .isString()
    .withMessage("La contraseña debe ser un string")
    .trim()
    .withMessage("No debe haber espacios"),
  body("avatar")
    .notEmpty()
    .withMessage("Este campo no debe estar vacio.")
    .isString()
    .withMessage("Debe ser un string.")
    .isURL()
    .withMessage("Debe ser una URL válida."),
];

export const loginUserValidation = [
  body("email")
    .notEmpty()
    .withMessage("Este campo no debe estar vacío")
    .isEmail()
    .withMessage("Debes escribir un email válido"),
  body("password")
    .notEmpty()
    .withMessage("Este campo no debe estar vacío")
    .isString()
    .withMessage("Debe ser un string"),
];
