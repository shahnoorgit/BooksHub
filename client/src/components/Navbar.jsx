import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import useLogout from "../Hooks/useLogout";

const Navbar = ({ auth }) => {
  const { loading, logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="bg-gray-900 w-screen shadow shadow-gray-500 px-2">
      <div className="flex flex-wrap items-center justify-evenly mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/bookshub.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            BooksHub
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className=" flex gap-2 items-center">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Books..."
              />
            </div>

            {auth ? (
              <div className=" flex justify-center items-center gap-2">
                <Link
                  to={"/"}
                  className=" flex cursor-pointer gap-3 items-center bg-transparent justify-center"
                >
                  <CiShoppingCart className=" text-white text-3xl " />
                </Link>
                <div className=" flex gap-3 items-center bg-white justify-center w-10 h-10 rounded-full">
                  <img
                    src={auth.image}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <Link to={"/login"}>
                <button
                  type="button"
                  className="text-white mt-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3  rounded md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/favourite"}
                className="block py-2 px-3  rounded md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                favourite
              </Link>
            </li>
            <li>
              <Link
                to={"/history"}
                className="block py-2 px-3  rounded md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                History
              </Link>
            </li>
            <li>
              <Link
                to={`/profile/${auth?.username}`}
                className="block py-2 px-3  rounded md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to={"/my-orders"}
                className="block py-2 px-3  rounded md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                My Orders
              </Link>
            </li>
            {auth && (
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-3  rounded md:hover:bg-transparent  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700"
                >
                  LogOut
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
