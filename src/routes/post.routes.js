import { Router } from "express";
import { ctrlGetAllPost } from "../controllers/post.controllers.js";

const postRouter = Router();

//get all products
postRouter.get("/", ctrlGetAllPost);

//create a new product
postRouter.post("/", ctrlGetAllPost);

//get one, update and delete a product
postRouter.get("/:productId", ctrlGetAllPost);
postRouter.put("/:productId", ctrlGetAllPost);
postRouter.delete("/:productId", ctrlGetAllPost);

export { postRouter };

//viene del otro archivo
/*
import { ctrlLogin, ctrlRegister } from "../controllers/user.controllers.js";
import { registerUserValidation } from "../../validations/register.user.validation.js";
import { applyValidations } from "../middlewares/apply.validations.js";

const userRouter = Router();

userRouter.post(
  "/register",
  registerUserValidation,
  applyValidations,
  ctrlRegister
);
userRouter.post("/login", ctrlLogin);

export { userRouter };*/
