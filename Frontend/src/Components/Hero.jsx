import React from "react";
import { ReactTyped } from "react-typed";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <div id="hero" className="text-white dark:bg-black dark:text-white bg-black ">
        <div className="max-w-[800px] w-full h-[400px] flex flex-col justify-center text-center mx-auto">
          <p className="p-1 font-bold">Hello, I Am</p>
          <h1 className=" md:text-7xl sm:text-6xl text-emerald-400 dark:text-sky-400 dark:hover:text-emerald-400 hover:text-sky-400 duration-200 font-serif text-4xl">
            Alam Jan
          </h1>
          <div>
            <p className="font-bold md:text-3xl sm:text-2xl text-xl">
              I Am
              <ReactTyped
                strings={[" Frontend Developer", " Backend Developer"]}
                className="md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-red-400"
                typeSpeed={50}
                backSpeed={50}
                loop
              ></ReactTyped>
            </p>
          </div>
          <div>
            <p className="font-bold text-xl">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. */}
              I'm a Junior Developer and i do not have much experience of years yet, but I
              started learning at a very young age and that's the reason that each website
              contains the evidence of my skills.
            </p>
            <HashLink smooth to="#main">
            <button className="scroll-smooth bg-emerald-400 dark:bg-sky-400 active:scale-105 hover:bg-sky-400 dark:hover:bg-emerald-400 w-[200px] py-3 rounded-lg font-bold my-6 hover:scale-105 duration-200">
              More Details
            </button>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
