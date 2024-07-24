const dotenv = require("dotenv");

dotenv.config();

export const CONFIG = {
  DATABASE_HOST: process.env.MONGODB_URI || "",
  PORT: process.env.PORT || "",
  PASSWORD_AWS: process.env.PASSWORD || "",
};
