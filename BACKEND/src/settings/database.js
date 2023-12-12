import { connect } from "mongoose";
import { env } from "./config.js";

export const startConnection = async () => {
  try {
    const db = await connect(env.MONGO_URI, {
      dbName: "posts-db",
    });
    console.log("DB is connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
