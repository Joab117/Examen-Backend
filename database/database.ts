import mongoose from "mongoose";
import { CONFIG } from "../config";

const dotenv = require("dotenv");

dotenv.config();

export function runDatabase() {
  mongoose
    .connect(CONFIG.DATABASE_HOST)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("MongoDB connection error: ", error);
    });
}
