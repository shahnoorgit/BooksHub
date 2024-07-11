// src/BooksSlider.js
import React, { useEffect, useRef, useState } from "react";
import BookCard from "./Cards";
import { books } from "../libs/dummy data/dummy";

const BooksCorosel = ({
  title,
  isCustom = false,
  isclass,
  doSlide = false,
  genre,
}) => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState("right");

  const scrollLeft = () => {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    if (scrollLeft > 0) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      setDirection("right");
    }
  };

  const scrollRight = () => {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    if (scrollLeft + clientWidth < scrollWidth) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    } else {
      setDirection("left");
    }
  };

  let filteredBooks = [];
  if (isCustom) {
    filteredBooks = books.filter((book) =>
      book.category.some((category) => genre.includes(category))
    );
  }
  console.log(filteredBooks);

  useEffect(() => {
    if (!doSlide) return;

    const interval = setInterval(() => {
      if (direction === "right") {
        scrollRight();
      } else {
        scrollLeft();
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [doSlide, direction]);

  return (
    <div
      className={
        isclass ? isclass : " max-w-full w-full bg-gray-500 mt-10 p-3 m-3 mr-4"
      }
    >
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
          {!isCustom &&
            books.map((book, index) => <BookCard key={index} book={book} />)}
          {isCustom &&
            filteredBooks.map((book, index) => (
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
