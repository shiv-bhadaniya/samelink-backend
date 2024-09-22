import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

app.use(express.json());

app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is running 🚀");
});

mongoose
  .connect(DB_CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connected AND Server running at http://localhost:${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error(err);
  });