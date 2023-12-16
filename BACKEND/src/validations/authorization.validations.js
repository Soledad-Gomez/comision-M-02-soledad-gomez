import { header } from "express-validator";

export const authHeader = [
  header("authorization").exists().withMessage("Se requiere autorización"),
];
