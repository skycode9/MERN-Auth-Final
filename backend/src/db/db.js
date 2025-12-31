import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Database is connected successfully");
  } catch (error) {
    console.error("MongoDB Error: " + error);
    process.exit(1);
  }
};

export default connectDB;
