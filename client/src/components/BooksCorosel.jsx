import React from "react";
import Cards from "./Cards";
import { books } from "../libs/dummy data/dummy";

const BooksCorosel = ({ title }) => {
  return (
    <section className="w-full border-t-8 border-b-8 bg-gray-400 p-3">
      <div className=" flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <div className=" max-sm:grid-cols-2 grid-flow-col-dense gap-5 w-full grid grid-cols-4 flex-nowrap justify-center items-center p-2">
          {books.map((book) => (
            <Cards
              title={book.title}
              description={book.description}
              imageurl={book.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksCorosel;
