import Book from "../model/Book.model.js";
import User from "../model/user.model.js";

export const uploadBook = async (req, res) => {
  console.log(req.body);
  const {
    title,
    category,
    description,
    image,
    author,
    uploadedBy,
    pdf,
    audio,
    publicationYear,
    summary,
    price,
  } = req.body;
  try {
    const imagePath = req.image.path;
    const audioPath = req.audio.path;
    const pdfPath = req.pdf.path;
    const pdfUrl = await uploadToCloudinary(pdfPath);
    const audioUrl = await uploadToCloudinary(audioPath);
    const imageUrl = await uploadToCloudinary(imagePath);

    const user = await User.findById(uploadedBy);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const newBook = await Book.create({
      title,
      category,
      description,
      imageUrl,
      author,
      uploadedBy: user._id,
      pdfUrl,
      audioUrl,
      publicationYear,
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
