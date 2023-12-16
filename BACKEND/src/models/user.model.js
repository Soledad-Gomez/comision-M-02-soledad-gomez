import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";

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

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

export const UserModel = model("User", UserSchema);
