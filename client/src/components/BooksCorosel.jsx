// src/BooksSlider.js
import React, { useRef } from "react";
import BookCard from "./Cards";
import { books } from "../libs/dummy data/dummy";

const BooksCorosel = ({ title, isCustome = false, genre }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  let customBook = [];
  return (
    <div className="bg-gray-500 mt-10 p-3 m-3 mr-4">
      <h1 className="text-4xl max-sm:text-2xl text-center font-bold text-gray-100">
        {title}
      </h1>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        >
          &lt;
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {!isCustome &&
            books.map((book, index) => <BookCard key={index} book={book} />)}
          {isCustome &&
            customBook.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BooksCorosel;
