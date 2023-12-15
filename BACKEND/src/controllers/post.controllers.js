import { CommentModel } from "../models/comment.model.js";
import { PostModel } from "../models/post.model.js";

//controlador para crear un post
export const ctrlCreatePost = async (req, res) => {
  const userId = req.user._id;
  try {
    const { title, desc, image } = req.body;
    const post = new PostModel({
      title,
      desc,
      image,
      author: userId,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para traer todos los posts
export const ctrlGetAllPost = async (req, res) => {
  try {
    const allPost = await PostModel.find()
      .populate("author", ["username", "avatar"])
      .populate("comments", ["desc", "author"]);

    if (allPost.length < 1) return res.sendStatus(204);

    res.json(allPost);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador traer un post
export const ctrlGetPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({ _id: postId })
      .populate("comments", ["desc", "author"])
      .populate("author", ["username", "avatar"]);

    if (!post) return res.sendStatus(404);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};

//controlador para actualizar un post
export const ctrlUpdatePostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: postId },
      req.body,
      { new: true }
    );

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para borrar un post
export const ctrlDeletePostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({ _id: postId });
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    await CommentModel.deleteMany({ _id: { $in: post.comments } });

    await PostModel.findOneAndDelete({
      _id: postId,
    });

    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
