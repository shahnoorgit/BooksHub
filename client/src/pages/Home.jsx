import React from "react";
import Hero from "../components/Hero";
import BooksCorosel from "../components/BooksCorosel";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <BooksCorosel title={"Top Book Categories"} />
      <BooksCorosel title={"Top Books Of The Month"} />
      <Upload />
    </div>
  );
};

export default Home;
