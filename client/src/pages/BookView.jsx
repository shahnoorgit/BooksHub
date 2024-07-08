import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../libs/dummy data/dummy";

const BookView = () => {
  const { id } = useParams();
  const Sbook = books.find((book) => book.id === Number(id));
  console.log(Sbook);
  return <div>BookView{id}</div>;
};

export default BookView;
