import React from "react";
import Hero from "../components/Hero";
import BooksCorosel from "../components/BooksCorosel";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <BooksCorosel doSlide={true} title={"Most readed books of the month"} />
      <BooksCorosel title={"explore the best books collection"} />
    </div>
  );
};

export default Home;
