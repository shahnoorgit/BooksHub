import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { books } from "../libs/dummy data/dummy";
import { MdKeyboardBackspace } from "react-icons/md";
import BooksCorosel from "../components/BooksCorosel";

const BookView = () => {
  const { id } = useParams();
  const Sbook = books.find((book) => book.id === Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  console.log(Sbook);
  return (
    <section className="relative">
      <div className="relative flex justify-center max-sm:flex-col max-sm:items-center max-sm:p-0 min-h-screen w-screen bg-gray-400 p-10">
        <button
          onClick={() => window.history.back()}
          className=" absolute left-10 top-1"
        >
          <MdKeyboardBackspace className=" max-sm:text-2xl text-4xl" />
        </button>
        <div className=" w-1/2 h-[40%]">
          <img
            src={Sbook.imageUrl}
            alt={Sbook?.title}
            className="object-cover shadow-lg"
            width={"438px"}
            height={"700px"}
          />
        </div>
        <div className="flex relative max-sm:p-2 flex-col gap-5 w-1/2 max-sm:w-full h-[40%]">
          <div className=" flex">
            <h1 className=" relative text-2xl font-bold  max-sm:-mb-5 max-sm:text-sm text-gray-900">
              {Sbook.title}
            </h1>
            <div className=" flex gap-1 max-sm:scale-50 max-sm:right-0 max-sm:absolute">
              {Sbook.category.map((genre) => (
                <span className=" border-2 rounded-xl p-1 border-gray-950 scale-90">
                  {" "}
                  {genre}{" "}
                </span>
              ))}
            </div>
          </div>
          <p className=" text-xl max-sm:text-base font-medium text-gray-800">
            {Sbook.description}
          </p>
          <div className="flex flex-col justify-start items-start">
            <h1 className=" font-bold mt-5 mb-5 max-sm:mt-1 max-sm:mb-1 text-xl underline max-sm:text-sm line-clamp-4 text-gray-900">
              Summary
            </h1>
            <p className="text-xl font-medium max-sm:text-sm text-gray-800">
              {Sbook.summary}
            </p>
          </div>
          <div className="-mb-5 flex justify-start items-center flex-col max-sm:flex-row gap-3">
            <h1 className=" text-xl max-sm:text-base font-bold text-gray-950">
              Published -
              <span className=" text-xl max-sm:text-base font-extrabold text-black">
                {Sbook.publicationYear}
              </span>
            </h1>
            <h1 className=" text-xl max-sm:text-base font-bold text-gray-950">
              Author -
              <span className=" text-xl max-sm:text-base font-extrabold text-black">
                {Sbook.author}
              </span>
            </h1>
          </div>
          <div className=" w-full mt-10 max-sm:mt-1 flex justify-between items-center gap-5 h-full p-5">
            <button
              type="button"
              className="text-white w-1/2 h-20 bg-gradient-to-br from-red-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Add to Wishlist
            </button>
            <button
              type="button"
              className="text-white w-1/2 h-20 bg-gradient-to-br from-yellow-600 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className=" min-w-[100vw]">
        <BooksCorosel
          doSlide={true}
          isCustome={true}
          genre={Sbook.category}
          title={"Similar books you may like"}
        />
      </div>
    </section>
  );
};

export default BookView;
