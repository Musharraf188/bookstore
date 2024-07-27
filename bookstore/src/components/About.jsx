import React from "react";
import bannerImage from "../assets/Banner.jpg"; // Replace with your actual image path
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
    <div>
        <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              About Us{" "}
              <span className="text-pink-500">and Our Story</span>
            </h1>
            <p className="text-xl">
              Welcome to our Bookstore! Our journey began with a passion for
              books and a desire to share that passion with others. We are a team
              of avid readers and book enthusiasts dedicated to curating the best
              selection of books to suit every taste and interest. Our cozy
              bookstore is a place where stories come to life, and we invite
              you to explore our shelves, discover new favorites, and join our
              community of book lovers.
            </p>
            <p className="text-xl">
              We believe that reading has the power to transform lives and build
              connections. Whether you're looking for a gripping novel, an
              inspiring biography, or a delightful children's book, we're here
              to help you find the perfect read. Thank you for being a part of
              our story!
            </p>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img
            src={bannerImage}
            className="w-full h-auto object-cover"
            alt="About Us Image"
          />
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
