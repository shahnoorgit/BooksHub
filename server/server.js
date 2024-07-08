import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { connectToDB } from "./database/connectToDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Correctly configure express.urlencoded()
app.use(cors());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
