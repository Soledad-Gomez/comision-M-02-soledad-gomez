import { PostModel } from "../models/post.model.js";

//controlador para crear un post
export const ctrlCreatePost = async (req, res) => {
  try {
    const newPost = await PostModel.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para traer todos los posts
export const ctrlGetAllPost = async (req, res) => {
  try {
    const allPost = await PostModel.find(
      {
        /*public: true*/
      },
      "-__v"
    );
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
    const post = await PostModel.findOne({ _id: postId }, "-__v");

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
    await PostModel.findOneAndDelete({ _id: postId });
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
