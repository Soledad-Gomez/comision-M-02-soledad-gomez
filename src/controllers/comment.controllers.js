import { CommentModel } from "../models/comment.model.js";

//controlador para crear un comentario
export const ctrlCreateComment = async (req, res) => {
  try {
    const newComment = await CommentModel.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para buscar todos los comentarios
export const ctrlAllComments = async (req, res) => {
  try {
    const allComments = await CommentModel.find();
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
    const comment = await CommentModel.findOne({ _id: commentId });
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
    );
    res.json(updatedComment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para borrar un comentario
export const ctrlDeleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    await CommentModel.findOneAndDelete({ _id: commentId });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
