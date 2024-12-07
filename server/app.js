import express from "express";
const app = express();
// import http  from 'http';
// import { Server } from 'socket.io';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import route from "./routes/users.routes.js";

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

  app.use("/api/v1/users", route);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });
  