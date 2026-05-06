import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`Connected to MongoDB DB HOST: ${connectionInstances.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


export default connectDB;