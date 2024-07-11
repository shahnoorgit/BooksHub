import React, { useState } from "react";
import Select from "react-select";

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

const CustomForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Extract the values from the selected categories
    const selectedValues = selectedCategories.map((option) => option.value);
    console.log("Form submitted with selected categories:", selectedValues);
    // Add your form submission logic here
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
              className="h-[177px] w-full rounded-lg shadow-md hover:scale-105 transition-all ease-in shadow-gray-900"
              type="text"
              id="summary"
              name="summary"
              placeholder="summary under 50 words"
              required
            />
          </div>
        </div>
        <div className=" w-1/3 max-sm:w-full max-sm:bg-transparent rounded-lg shadow-md shadow-gray-900 bg-gray-50">
          <input type="text" required />
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
