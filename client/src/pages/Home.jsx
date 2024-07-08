import React from "react";
import Hero from "../components/Hero";
import BooksCorosel from "../components/BooksCorosel";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <BooksCorosel />
      <BooksCorosel />
    </div>
  );
};

export default Home;
