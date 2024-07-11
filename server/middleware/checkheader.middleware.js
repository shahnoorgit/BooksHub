import dotenv from "dotenv";

dotenv.config();

export const checkHeaderMiddleware = (req, res, next) => {
  const customHeader = req.headers["x-passkey"]; // Use the name of your custom header
  if (customHeader && customHeader === process.env.X_PASSKEY) {
    next(); // Header is present and valid, proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: "Unauthorized: Invalid or missing header" });
  }
};
