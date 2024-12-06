import express from "express";
const app = express();
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import userRoutes from "./routes/users.routes.js";

const PORT = 8000;
const URI=process.env.URI;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(URI)
  .then(() => {
    console.log("DB connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));

  app.use("/api/v1/users", userRoutes);