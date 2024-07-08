import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import {
  loginController,
  logoutuser,
  signupControll,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", upload.single("file"), signupControll);
router.post("/login", loginController);
router.post("/logout", logoutuser);

export default router;
