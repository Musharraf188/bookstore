import React from "react";
import data from "../../public/data.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to our Premium Books Selection! Discover the finest collection of books handpicked for discerning readers. Enjoy exclusive titles, rare finds, and bestselling novels that will captivate and inspire you. Dive into a world of extraordinary stories and enrich your reading experience with our premium selection.
          </p>
          <Link to="/">
            <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {data.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
