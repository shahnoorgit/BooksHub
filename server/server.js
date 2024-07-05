import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { upload } from "./middleware/multer.middleware.js";
import { uploadToCloudinary } from "./services/cloudinary.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import path from "path";
import { connectToDB } from "./database/connectToDB.js";

dotenv.config();

const app = express();

app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors());
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});
app.use("/api", authRoutes);
/*app.post("/upload", upload.single("file"), async (req, res) => {
  const localfile = req.file.path;
  const response = await uploadToCloudinary(localfile);
  console.log(response);
  res.status(200).json(response);
});
*/
