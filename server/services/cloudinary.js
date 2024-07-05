import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (localpath) => {
  try {
    if (!localpath) return { message: "no local file path provided" };

    const res = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });

    // Unlink the file asynchronously and handle the callback properly
    fs.unlink(localpath, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      } else {
        console.log("Local file deleted");
      }
    });

    return res.secure_url;
  } catch (error) {
    console.log("error while uploading file to cloudinary", error);

    // Unlink the file asynchronously and handle the callback properly
    fs.unlink(localpath, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      }
    });

    return null;
  }
};
