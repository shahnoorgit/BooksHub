import express from "express";
import { getuser } from "../controllers/user.controller.js";
import { checkHeaderMiddleware } from "../middleware/checkheader.middleware.js";

const router = express.Router();

router.post("/:username", checkHeaderMiddleware, getuser);

export default router;
