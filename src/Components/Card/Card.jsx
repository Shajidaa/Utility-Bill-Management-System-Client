import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCategory, MdDateRange } from "react-icons/md";
import { Link } from "react-router";
import { IoMdArrowRoundForward } from "react-icons/io";

const Card = ({ bill }) => {
  const { title, category, location, date, image, _id } = bill;

  return (
    <div
      className="card bg-base-100 shadow-md max-h-96 
    dark:shadow-lg hover:shadow-xl transition-all
    duration-300 hover:scale-105  rounded-2xl  dark:bg-gray-800"
    >
      <figure className="h-48 ">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-2xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-sky-800 dark:text-sky-50 ">
          {title}
        </h2>

        <div className="space-y-1 text-sm">
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MdCategory className="text-primary" />
            <span className="font-medium">{category}</span>
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-primary" />
            {location}
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MdDateRange className="text-primary" />
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        <div className="w-full mt-4">
          <Link
            to={`/bills-details/${_id}`}
            className="btn w-full! primary-btn  text-white border-none "
          >
            See Details <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;