import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      Unique: true,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      //required: true,
    },
    comments: {},
    image: {
      type: String,
      required: true,
    },
  },
  { public: false, timestamps: true }
);

export const PostModel = model("Post", PostSchema);
