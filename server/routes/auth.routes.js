import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import {
  loginControll,
  logoutuser,
  signupControll,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", upload.single("file"), signupControll);
router.post("/login", loginControll);
router.post("/logout", logoutuser);

export default router;
