import Book from "../model/Book.model.js";
import User from "../model/user.model.js";
import { uploadToCloudinary } from "../services/cloudinary.js";

export const uploadBook = async (req, res) => {
  const files = req.files;
  const filePaths = {
    pdf: files.pdf ? files.pdf.map((file) => file.path) : [],
    image: files.image ? files.image.map((file) => file.path) : [],
    audio: files.audio ? files.audio.map((file) => file.path) : [],
  };
  const {
    title,
    category,
    description,

    author,
    createdBy,

    publicationYear,
    summary,
    price,
  } = req.body;
  try {
    console.log(title);
    const user = await User.findById(createdBy);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const pdfUrlArray = await uploadToCloudinary(filePaths.pdf);
    const audioUrlArray = await uploadToCloudinary(filePaths.audio);
    const imageUrlArray = await uploadToCloudinary(filePaths.image);

    // Ensure URLs are strings, not arrays
    const pdfUrl =
      Array.isArray(pdfUrlArray) && pdfUrlArray.length > 0
        ? pdfUrlArray[0]
        : "";
    const audioUrl =
      Array.isArray(audioUrlArray) && audioUrlArray.length > 0
        ? audioUrlArray[0]
        : "";
    const imageUrl =
      Array.isArray(imageUrlArray) && imageUrlArray.length > 0
        ? imageUrlArray[0]
        : "";
    const pubYear = new Date(publicationYear).getFullYear();
    const newBook = await Book.create({
      title,
      category,
      description,
      imageUrl,
      author,
      uploadedBy: createdBy,
      pdfUrl,
      audioUrl,
      publicationYear: pubYear,
      summary,
      price,
      readers: 0,
    });

    user.myUploads.push(newBook._id);
    await user.save();
    res.status(201).json({ newBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { id: _id } = req.params;
  const {
    title,
    category,
    description,
    author,
    publicationYear,
    summary,
    price,
  } = req.body;
  try {
    const isBook = await Book.findById(_id);
    if (!isBook) {
      return res.status(404).json({ error: "Book not found." });
    }
    const updatedBook = await Book.findByIdAndUpdate(
      title,
      category,
      description,
      author,
      publicationYear,
      summary,
      price
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found." });
    }

    return res.status(200).json(updateBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  const { user_id } = req.body;
  try {
    const delBook = await Book.findById(bookId);
    if (!delBook) {
      return res.status(404).json({ error: "Book not found." });
    }

    const isUser = delBook.uploadedBy === user_id ? true : false;
    if (!isUser) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this book." });
    }
    const user = await User.findById(user_id);
    await delBook.remove();
    await user.myUploads.pull(bookId);

    return res.status(200).json({ message: "Book deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};
