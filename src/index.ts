import dotenv from "dotenv";
import express from 'express';

import apiRouter from "./routers";

// Load .env entries into process.env
dotenv.config();

const app = express();

// Add Routers
app.use("/api", apiRouter)

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Application started and running on port: " + port);
});