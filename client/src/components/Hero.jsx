import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-x-hidden">
      <section className="flex justify-between items-start p-5 w-full max-sm:flex-col max-sm:gap-5">
        <div className="w-1/3 p-10 max-sm:w-full">
          <div className="mt-[30%] flex flex-col items-center gap-5 max-sm:mt-0 mb-5">
            <h1 className="text-5xl font-bold text-white max-sm:text-2xl">
              BooksHub
            </h1>
            <p className="text-xl text-gray-100 max-sm:text-lg text-center max-sm:w-full">
              Discover and read books from around the world by multiple known
              authors and anonymous authors
            </p>
          </div>
          <div className="mt-10 flex justify-center items-start gap-5">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Start exploring!
            </button>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <img src="/images/hero.png" alt="BooksHub" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
