import { Router } from "express";

import {
  ctrlFindOneUser,
  ctrlGetAllUsers,
  ctrlLogin,
  ctrlRegister,
} from "../controllers/user.controllers.js";
import {
  loginUserValidation,
  registerUserValidation,
} from "../validations/user.validations.js";
import { applyValidations } from "../middlewares/apply.validations.js";

const userRouter = Router();

//ruta para crear un usuario
userRouter.post(
  "/register",
  registerUserValidation,
  applyValidations,
  ctrlRegister
);

//ruta para ingresar a la cuenta de usuario
userRouter.post("/login", loginUserValidation, applyValidations, ctrlLogin);

//ruta para traer todos los usuarios
userRouter.get("/", ctrlGetAllUsers);

//ruta para buscar un usuario
userRouter.get("/:userId", ctrlFindOneUser);

export { userRouter };
