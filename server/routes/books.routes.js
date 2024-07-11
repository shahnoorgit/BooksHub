import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { uploadBook } from "../controllers/books.controller.js";

const router = express.Router();

router.post(
  "/upload",
  upload.fields([{ name: "pdf" }, { name: "image" }, { name: "audio" }]),
  uploadBook
);

export default router;
