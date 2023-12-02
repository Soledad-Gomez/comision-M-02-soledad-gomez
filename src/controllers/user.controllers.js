import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//controlador para registrar un usuario
export const ctrlRegister = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para traer todos los usuarios
export const ctrlGetAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para buscar un usuario
export const ctrlFindOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) return res.sendStatus(404);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para actualizar un usuario
export const ctrlUpdateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const updateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      req.body,
      {
        new: true,
      }
    );
    res.json(updateUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controlador para eliminar un usuario
export const ctrlDeleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await UserModel.findOneAndDelete({ _id: userId });
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
