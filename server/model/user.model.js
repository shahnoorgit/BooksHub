import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: "String",
    required: true,
    unique: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  image: {
    type: "String",
    required: true,
  },
  phone: {
    type: "Number",
    required: true,
    unique: true,
  },
  role: {
    type: "String",
    enum: ["user", "admin"],
    default: "user",
  },
  favrites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  password: {
    type: String,
    required: true,
  },

  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  myUploads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = model("User", userSchema);

export default User;
