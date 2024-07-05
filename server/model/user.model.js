import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  image: {
    type: "string",
    required: true,
  },
  phone: {
    type: "number",
    required: true,
    unique: true,
  },
  role: {
    type: "string",
    enum: ["user", "admin"],
    default: "user",
  },
  favrites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],

  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = model("User", userSchema);

export default User;
