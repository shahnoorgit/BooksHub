import User from "../model/user.model.js";
import { uploadToCloudinary } from "../services/cloudinary.js";
import bcrypt from "bcrypt";
import generateTokenandsetCookie from "../utils/jwttoken.js";

export const signupControll = async (req, res) => {
  const { username, phone, email, password, confirmPassword } = req.body;

  try {
    // Password confirmation check
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check for existing username, phone, and email
    const existingUser = await User.findOne({
      $or: [{ username }, { phone }, { email }],
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ error: "Username already exists" });
      }
      if (existingUser.phone === phone) {
        return res.status(400).json({ error: "Phone number already exists" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ error: "Email already exists" });
      }
    }

    // Upload image to Cloudinary
    const localPath = req.file.path;
    const imageStr = await uploadToCloudinary(localPath);

    // Hash password
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      phone,
      email,
      password: hashedPassword,
      image: imageStr,
      favorites: [],
      history: [],
      role: "user",
    });

    // Save user to database
    await newUser.save();

    // Generate token and set cookie
    generateTokenandsetCookie(newUser._id, res);

    // Respond with user info
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      image: newUser.image,
    });
  } catch (error) {
    console.error(error);

    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        error: `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } already exists`,
      });
    }

    // General server error
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      console.log(req.body);
      return res.status(400).json({ error: "Invalid email" });
    }

    const conPassword = await bcrypt.compare(password, user.password);

    if (!conPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateTokenandsetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      image: user.image,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", details: error.message });
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
