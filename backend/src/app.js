import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
dotenv.config();

const app = express();
connectDB().then(() => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
});
