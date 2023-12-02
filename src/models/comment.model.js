import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  author: {
    type: String,
    ref: "User",
  },
  desc: {
    type: String,
    required: true,
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export const CommentModel = model("comments", CommentSchema);
