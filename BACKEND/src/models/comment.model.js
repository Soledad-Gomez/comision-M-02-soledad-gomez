import { Schema, model, Types } from "mongoose";

const CommentSchema = new Schema({
  author: {
    type: Types.ObjectId,
    ref: "User",
    //required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  post: {
    type: Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

export const CommentModel = model("comments", CommentSchema);
