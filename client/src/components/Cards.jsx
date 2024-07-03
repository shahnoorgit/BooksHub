import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, description, link, imageurl }) => {
  return (
    <Link
      to={link}
      className=" justify-center items-center bg-gray-300 flex flex-col gap-1 min-h-96 p-5 "
    >
      <div>
        <img src={imageurl} className=" object-contain" width={200} />
      </div>
      <p>{title}</p>
      <p className=" line-clamp-3">{description}</p>
    </Link>
  );
};

export default Cards;
