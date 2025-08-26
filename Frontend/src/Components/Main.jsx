import React from "react";
import image1 from "../assets/Laptop.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const Main = () => {
  return (
    <>
      <div id="main" className="w-full relative text-white dark:bg-sky-950 bg-emerald-950 py-16 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-23 bg-gradient-to-b dark:from-black/95 from-black/95 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-23 bg-gradient-to-t dark:from-black/95 from-black/95 to-transparent pointer-events-none"></div>
        <div className="max-w-[1240px] max-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 hover:scale-105 active:scale-105 duration-200"
            src={image1} alt="programmer coding"
          ></img>
          <div className="text-center flex flex-col justify-center">
            <p className=" font-bold dark:text-white ">About</p>
            <h1 className="md:text-4xl text-emerald-400 dark:text-sky-400 sm:text-3xl font-bold py-2">
              Website Development and Designing
            </h1>
            <p className="md:text-2xl text-xl dark:text-white">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
              I create each website using all of my skills such as coding as well as
              designing too which results in unique, beautifull, and
              high-performing websites.
            </p>
            <HashLink smooth to="#card">
            <button className="bg-black text-emerald-400 shadow-xl dark:text-sky-400 w-[200px] py-3 rounded-md font-medium my-6 mx-auto active:scale-105 hover:scale-105 duration-200">
              See More{" "}
              <FaArrowRightLong
                style={{
                  display: "inline-block",
                  fontSize: "20px",
                  color: "white",
                }}
              />
            </button>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
