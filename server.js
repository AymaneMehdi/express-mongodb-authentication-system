import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;
connectDB();
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});