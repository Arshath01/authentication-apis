import express from "express";
import router from "./routes/index.js";
import connectToDatabase from "./databaseConnection.js";

const app = express();
const PORT = 3000; // localhost port

app.use(router);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`server is running in the port ${PORT}`);
});
