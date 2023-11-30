import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  author: {
    type: String,
    //referencia a Uer
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,
  },
});

export const CommentModel = model("comments", CommentSchema);
