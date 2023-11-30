import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { startConnection } from "./src/settings/database.js";

//variables de entorno
import { env } from "./src/settings/config.js";

//rutas
import { postRouter } from "./src/routes/post.routes.js";
//import {productRouter} from ".src/routes/product.router.js"

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

//rutas
app.use("/api/posts", postRouter);
//app.use("/api/products", productRouter);

app.listen(env.PORT, async () => {
  await startConnection();
  console.log(`server on port ${env.PORT}`);
});
