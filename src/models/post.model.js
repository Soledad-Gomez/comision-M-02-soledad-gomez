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
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: {},
  imageURL: {
    type: String,
    required: true,
  },
  CreatedAt: {
    //timestamps: true,
  },
});

export const PostModel = model("Post", PostSchema);
