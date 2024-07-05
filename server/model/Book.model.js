import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  pdf: {
    type: String,
  },
  audio: {
    type: Audio,
  },
});
