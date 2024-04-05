import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function connectToDatabase() {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected succesfully...");
    })
    .catch((err) => {
      console.log("error", err);
    });
}

export default connectToDatabase;
