import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { updateBook, uploadBook } from "../controllers/books.controller.js";

const router = express.Router();

router.post(
  "/upload",
  upload.fields([{ name: "pdf" }, { name: "image" }, { name: "audio" }]),
  uploadBook
);

router.post("/update/:id", updateBook);
export default router;
