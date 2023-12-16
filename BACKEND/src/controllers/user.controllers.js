import { UserModel } from "../models/user.model.js";
import { createJWT } from "../utils/jwt.js";
import bcrypt from "bcrypt";

//controlador para registrar un usuario
export const ctrlRegister = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ error: "No se pudo crear el usuario" });
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
    const user = await UserModel.findOne({ _id: userId }).populate("username");
    if (!user) return res.sendStatus(404);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};

//controlador para Ingresar a la cuenta
export const ctrlLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Credenciales inválidas" });
    const token = await createJWT({ userId: user._id });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "No se puede ingresar a la cuenta" });
  }
};
