import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: [
    {
      type: String,
      enum: [
        "Fiction",
        "Non-fiction",
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Romance",
        "Biography",
        "Self-help",
        "Business",
        "History",
        "Science",
        "Children's",
        "Young Adult",
        "Poetry",
        "Comics & Graphic Novels",
        "Horror",
        "Adventure",
      ],
      required: true,
    },
  ],
  description: {
    type: String,
  },
  imageUrl: {
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
  pdfUrl: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  readers: {
    type: Number,
    default: 0,
  },
});

const Book = model("Book", bookSchema);

export default Book;
