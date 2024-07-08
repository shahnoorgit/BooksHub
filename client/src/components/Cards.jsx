import React from "react";
import { Link, Navigate } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/book-view/${book.id}`}
      className="min-w-[300px] max-sm:hover:scale-90 cursor-pointer hover:scale-105 transition-all ease-in  bg-gray-200 max-w-[300px] max-sm:scale-75 rounded-md overflow-hidden shadow-lg max-sm:m-0 m-4"
    >
      <img
        className="w-full h-48 object-cover"
        src={book.imageUrl}
        alt={book.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl line-clamp-1 mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">{book.description}</p>
      </div>
      <div className="px-6 pt-1 pb-2">
        {book.category.map((cat) => (
          <span className="inline-block border-2 border-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{cat}
          </span>
        ))}
        <div className=" flex justify-between items-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            $10
          </span>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
