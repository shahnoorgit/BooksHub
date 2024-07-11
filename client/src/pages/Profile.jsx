import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetuser from "../Hooks/useGetuser";
import BooksCorosel from "../components/BooksCorosel";

const Profile = ({ auth }) => {
  const { username } = useParams();
  const { loading, getUser } = useGetuser();
  const [currUser, setCurrUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(username);
        setCurrUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [username]);
  console.log(currUser?.user);
  return (
    <section className=" w-screen h-[92vh] bg-gray-500">
      <div className=" w-full h-full gap-10 max-sm:flex-col flex justify-center items-center p-5 max-sm:p-1">
        <div className=" w-1/2 h border flex flex-col rounded-xl bg-gray-300 justify-center items-center max-sm:w-full max-sm:mt-5 h-full">
          {loading ? (
            " loading"
          ) : (
            <img
              src={currUser?.user?.image}
              className=" object-cover h-96 w-96 max-sm:w-44 max-sm:h-44 rounded-full"
              height={700}
              width={700}
            />
          )}
          <h1 className="text-2xl text-center text-gray-900 font-bold">
            {currUser?.user.username}
          </h1>
          <p className="text-sm text-gray-600 text-center">
            {currUser?.user.email}
          </p>
          <p className="text-sm text-gray-600 text-center">
            {currUser?.user.phone}
          </p>
          {username == auth?.username && (
            <div className=" flex gap-5 flex-col p-5 w-full items-center justify-center">
              <div className="flex gap-5 w-full items-center justify-center">
                <button
                  type="button"
                  className="text-white w-1/2 mt-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  My Library
                </button>
                <button
                  type="button"
                  className="text-white w-1/2 mt-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  My Wishlist
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" w-1/2 border relative flex flex-col rounded-xl bg-gray-300 justify-center items-center max-sm:w-full max-sm:mt-5 h-full">
          <Link
            to={"/upload"}
            type="button"
            className="text-white z-50 absolute right-1 top-1 max-sm:scale-75 mt-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Upload
          </Link>
          <div className=" w-full scale-90">
            <BooksCorosel
              isclass={" bg-gray-500 w-full -mt-44 max-sm:mt-0  scale-90"}
              title={"Continiue"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
