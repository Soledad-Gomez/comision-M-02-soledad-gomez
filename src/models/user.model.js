import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      Unique: true,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { isAdmin: true }
);

export const UserModel = model("User", UserSchema);
