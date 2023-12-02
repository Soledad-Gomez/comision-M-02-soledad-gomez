import { Router } from "express";

import {
  ctrlDeleteUser,
  ctrlFindOneUser,
  ctrlGetAllUsers,
  ctrlRegister,
  ctrlUpdateUser,
} from "../controllers/user.controllers.js";
import {
  registerUserValidation,
  updateUserValidation,
} from "../validations/user.validations.js";
import { applyValidations } from "../middlewares/apply.validations.js";

const userRouter = Router();

//ruta para crear un usuario
userRouter.post("/", registerUserValidation, applyValidations, ctrlRegister);

//ruta para traer todos los usuarios
userRouter.get("/", ctrlGetAllUsers);

userRouter.get("/:userId", ctrlFindOneUser);

//ruta para actualizar un usuario
userRouter.patch(
  "/:userId",
  updateUserValidation,
  applyValidations,
  ctrlUpdateUser
);

//ruta para eliminar un usuario
userRouter.delete("/:userId", ctrlDeleteUser);

export { userRouter };
