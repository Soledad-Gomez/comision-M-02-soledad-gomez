import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 10,
    minLength: 3,
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
});

export const UserModel = model("User", UserSchema);
