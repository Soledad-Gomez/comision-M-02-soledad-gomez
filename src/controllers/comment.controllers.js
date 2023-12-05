import { CommentModel } from "../models/comment.model.js";
import { PostModel } from "../models/post.model.js";

//controlador para crear un comentario
export const ctrlCreateComment = async (req, res) => {
  const userId = req.user._id;
  try {
    const post = await PostModel.findById(req.body.post);
    const { desc } = req.body;
    const comment = new CommentModel({
      desc,
      post,
      author: userId,
    });
    await comment.save();
    if (!post) return res.sendStatus(404);
    post.comments.push(comment._id);
    await post.save();
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para buscar todos los comentarios
export const ctrlAllComments = async (req, res) => {
  try {
    const allComments = await CommentModel.find().populate("author", [
      "username",
      "avatar",
    ]);
    res.json(allComments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para busca un comentario por Id
export const ctrlFindOneComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await CommentModel.findOne({ _id: commentId }).populate(
      "author",
      ["username", "avatar"]
    );
    if (!comment) return res.sendStatus(404);

    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};

//controlador para actualizar un comentario
export const ctrlUpdateComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const updatedComment = await CommentModel.findOneAndUpdate(
      { _id: commentId },
      req.body,
      { new: true }
    ).populate("author", ["username", "avatar"]);
    res.json(updatedComment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para borrar un comentario
export const ctrlDeleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await CommentModel.findById(commentId);
    if (!comment) return res.sendStatus(404);

    const post = await PostModel.findById(comment.post);
    await comment.deleteOne();
    await post.updateOne({ $pull: { comments: comment._id } });
    await post.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
