import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    Unique: true,
    required: true,
    //maxLength: 50,
    //minLength: 3,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    //referencia a user
  },
  comments: {},
  imageURL: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    required: true,
  },
});

export const PostModel = model("Post", PostSchema);
