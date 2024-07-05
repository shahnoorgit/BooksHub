import User from "../model/user.model.js";
import { uploadToCloudinary } from "../services/cloudinary.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import generateTokenandsetCookie from "../../utils/jwttoken.js";

export const signupControll = async (req, res) => {
  const { username, phone, email, password, confirmPassword } = req.body;
  const signupValSchema = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    password: Joi.string().min(7).max(20).required(),
    confirmPassword: Joi.string().min(7).max(20).required(),
  });

  try {
    const { error, value } = signupValSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    if (password != confirmPassword) {
      return res.status(200).json({ error: "password do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(200).json({ error: "username already exits" });
    }

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const localPath = req.file.path;
    const imageStr = await uploadToCloudinary(localPath);
    const newUser = await User.create({
      username,
      phone,
      email,
      password: hashedPassword,
      image: imageStr,
      favrites: [],
      history: [],
      role: "user",
    });

    await newUser.save();
    generateTokenandsetCookie(newUser._id, res);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error", error });
  }
};

export const loginControll = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    const password = await bcrypt.compare(password, user?.password || "");
    if (!user || !password) {
      res.status(400).json({ error: " invalid credentials" });
    }
    generateTokenandsetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      role: user.role,
      image: user.image,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error", error });
  }
};

export const logoutuser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "user logged out succesfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
