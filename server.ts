const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
import { Application } from "express";
import { runDatabase } from "./database/database";
import router from "./Routes";

dotenv.config();

async function start() {
  const app: Application = express();
  const PORT = process.env.PORT || 3004;

  app.use(cors());
  app.use(express.json());
  app.use(router);

  runDatabase();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

start();
