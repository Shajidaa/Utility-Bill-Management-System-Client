import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCategory, MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const Card = ({ bill }) => {
  const { title, category, location, date, image, _id } = bill;

  return (
    <div
      className="card bg-base-100 shadow-md 
    dark:shadow-lg hover:shadow-xl transition-all 
    duration-300 border border-green-200  dark:border-green-700 rounded-2xl"
    >
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover rounded-t-2xl"
        />
      </figure>

      <div className="card-body text-left p-5">
        <h2 className="card-title text-lg font-semibold text-green-700 dark:text-green-300">
          {title}
        </h2>

        <div className="space-y-1 text-sm">
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MdCategory className="text-green-500 dark:text-green-400" />
            <span className="font-medium">{category}</span>
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-green-500 dark:text-green-400" />
            {location}
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MdDateRange className="text-green-500 dark:text-green-400" />
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        <div className="w-full   mt-4">
          <Link
            to={`/bills-details/${_id}`}
            className="btn  w-full bg-green-600 hover:bg-green-700 text-white border-none dark:bg-green-500 dark:hover:bg-green-600"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
