import React from "react";
import { IoMdDoneAll } from "react-icons/io";

const SubCard = (props) => {
  return (
    <div className=" dark:text-white dark:bg-black  text-white bg-black w-[70%] md:w-[90%] xl:w-[80%] mx-auto active:scale-105 border-2 dark:border-sky-300 border-emerald-300 dark:active:shadow-sky-200 active:shadow-emerald-200 shad shadow-2xl dark:hover:shadow-sky-300 hover:shadow-emerald-300 flex flex-col p-4  sm:mb-8 rounded-lg hover:scale-105 duration-200 my-8">
      <img
        src={props.img}
        className="w-20 h-20 mx-auto  hover:scale-110 active:scale-110 duration-200"
      ></img>
      <h2 className="font-bold text-center duration-200 text-2xl py-4 dark:hover:hover:text-emerald-400  hover:hover:text-sky-400 dark:text-sky-400 text-emerald-400">
        {props.topic}
      </h2>
      <p className="text-center text-4xl flex flex-row justify-center text-red-400">
        Learned <IoMdDoneAll size={30} className="text-red-400 mt-1 ml-1" />{" "}
      </p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-7">Coding Language</p>
        <p className="py-2 border-b mx-8">Website Development</p>
      </div>
      <button className="dark:bg-sky-400 bg-emerald-400 active:scale-105 dark:hover:bg-emerald-400 hover:bg-sky-400 w-[200px] py-3 md:w-[150px] rounded-md font-medium my-6 mx-auto px-6 hover:scale-105 duration-200">
        More
      </button>
    </div>
  );
};

export default SubCard;
