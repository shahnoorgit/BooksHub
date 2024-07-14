import React, { useState } from "react";
import Select from "react-select";
import useUplaodBook from "../Hooks/useUplaodBook";

const categories = [
  { value: "Fiction", label: "Fiction" },
  { value: "Non-fiction", label: "Non-fiction" },
  { value: "Science Fiction", label: "Science Fiction" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Mystery", label: "Mystery" },
  { value: "Thriller", label: "Thriller" },
  { value: "Romance", label: "Romance" },
  { value: "Biography", label: "Biography" },
  { value: "Self-help", label: "Self-help" },
  { value: "Business", label: "Business" },
  { value: "History", label: "History" },
  { value: "Science", label: "Science" },
  { value: "Children's", label: "Children's" },
  { value: "Young Adult", label: "Young Adult" },
  { value: "Poetry", label: "Poetry" },
  { value: "Comics & Graphic Novels", label: "Comics & Graphic Novels" },
  { value: "Horror", label: "Horror" },
  { value: "Adventure", label: "Adventure" },
];
const CustomForm = ({ auth }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [data, setData] = useState({
    title: "",
    createdBy: auth._id,
    author: "",
    publicationYear: "",
    author: "",
    description: "",
    summary: "",
    price: "",
    pdf: null,
    image: null,
    audio: null,
  });

  const { loading, uploadBook } = useUplaodBook();
  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
    setData({ ...data, genre: selectedOptions });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Extract the values from the selected categories
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("createdBy", data.createdBy);
    formdata.append("author", data.author);
    formdata.append("publicationYear", data.publicationYear);
    formdata.append("price", data.price);
    formdata.append("description", data.description);
    formdata.append("summary", data.summary);
    formdata.append(
      "genre",
      selectedCategories.map((option) => option.value)
    );
    formdata.append("pdf", data.pdf);
    formdata.append("image", data.image);
    formdata.append("audio", data.audio);

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[85%] gap-5 max-sm:w-[95%] rounded-md flex-col flex p-5 bg-gray-400"
    >
      <div className=" flex max-sm:flex-col gap-5 w-full">
        <div className=" max-sm:w-full w-2/3">
          <div className="flex flex-col items-start gap-1 justify-start">
            <label className="text-lg font-bold text-gray-800" htmlFor="name">
              Title
            </label>
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="h-12 w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
              type="text"
              id="name"
              name="name"
              placeholder="title of book"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-1 justify-start">
            <label
              className="text-lg font-bold text-gray-800"
              htmlFor="categories"
            >
              Categories
            </label>
            <Select
              isMulti
              name="categories"
              options={categories}
              className="basic-multi-select w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
              classNamePrefix="select"
              onChange={handleCategoryChange}
              value={selectedCategories}
            />
          </div>
          <div className="flex flex-col items-start gap-1 justify-start">
            <label className="text-lg font-bold text-gray-800" htmlFor="author">
              Author
            </label>
            <input
              value={data.author}
              onChange={(e) => setData({ ...data, author: e.target.value })}
              className="h-12 w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
              type="text"
              id="author"
              name="author"
              placeholder="author of book"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-1 justify-start">
            <label className="text-lg font-bold text-gray-800" htmlFor="author">
              Description
            </label>
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="h-[107px] w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
              type="text"
              id="description"
              name="description"
              placeholder="description under 15 words"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-1 justify-start">
            <label className="text-lg font-bold text-gray-800" htmlFor="author">
              Summary
            </label>
            <textarea
              value={data.summary}
              onChange={(e) => setData({ ...data, summary: e.target.value })}
              className="h-[177px] w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
              type="text"
              id="summary"
              name="summary"
              placeholder="summary under 50 words"
              required
            />
          </div>
        </div>
        <div className=" p-5 w-1/3 max-sm:w-full max-sm:bg-transparent rounded-lg shadow-md shadow-gray-900 bg-gray-50">
          <div className="mb-4">
            <div className="flex mb-2 flex-col items-start gap-1 justify-start">
              <label
                className="text-lg font-bold text-gray-800"
                htmlFor="author"
              >
                Price
              </label>
              <input
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
                className="w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
                type="text"
                id="price"
                name="price"
                placeholder="$ price"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-1 justify-start">
              <label
                className="text-lg font-bold text-gray-800"
                htmlFor="publicationDate"
              >
                Publication Date
              </label>
              <input
                value={data.publicationYear}
                onChange={(e) =>
                  setData({ ...data, publicationYear: e.target.value })
                }
                type="date"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload PDF:
            </label>
            <input
              name="pdf"
              required
              onChange={handleFileChange}
              type="file"
              accept=".pdf"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload Audio:<span>(Optional)</span>
            </label>
            <input
              name="audio"
              onChange={handleFileChange}
              type="file"
              accept="audio/*"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload Image:
            </label>
            <input
              name="image"
              required
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 p-2 w-full bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
