import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlDeletePostById,
  ctrlGetAllPost,
  ctrlGetPostById,
  ctrlUpdatePostById,
} from "../controllers/post.controllers.js";
import {
  createPostvalidation,
  findPostValidation,
  updatePostvalidation,
} from "../validations/post.validations.js";
import { applyValidations } from "../middlewares/apply.validations.js";

const postRouter = Router();

//get all products
postRouter.get("/", ctrlGetAllPost);

//create a new product
postRouter.post("/", createPostvalidation, applyValidations, ctrlCreatePost);

//get one, update and delete a product
postRouter.get(
  "/:postId",
  findPostValidation,
  applyValidations,
  ctrlGetPostById
);
postRouter.patch(
  "/:postId",
  updatePostvalidation,
  applyValidations,
  ctrlUpdatePostById
);
postRouter.delete("/:postId", ctrlDeletePostById);

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
