import React from "react";
import pic from "../assets/programmer.webp";
import { MdPlace, MdEmail } from "react-icons/md";
import { FaAnglesUp } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="dark:text-white text-center dark:bg-black text-white bg-black max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full text-3xl font-bold duration-200 dark:hover:text-emerald-400 hover:text-sky-400 dark:text-sky-400 text-emerald-400">
            Web Developer
          </h1>
          <p className="py-4 text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-row justify-center gap-6">
            <FaFacebook
              size={28}
              className="text-emerald-400 dark:text-sky-400 dark:hover:text-emerald-400 hover:text-sky-400 duration-200 hover:scale-125"
            />
            <FaInstagram
              size={28}
              className="text-emerald-400 dark:text-sky-400 dark:hover:text-emerald-400 hover:text-sky-400 duration-200 hover:scale-125"
            />
            <FaTwitter
              size={28}
              className="text-emerald-400 dark:text-sky-400 dark:hover:text-emerald-400 hover:text-sky-400 duration-200 hover:scale-125"
            />
            <FaYoutube
              size={28}
              className="text-emerald-400 dark:text-sky-400 dark:hover:text-emerald-400 hover:text-sky-400 duration-200 hover:scale-125"
            />
            <FaWhatsapp
              size={28}
              className="text-emerald-400 dark:text-sky-400 dark:hover:text-emerald-400 hover:text-sky-400 duration-200 hover:scale-125"
            />
          </div>
        </div>
        <div>
          <img
            src={pic}
            alt="programmer"
            className="mx-auto w-[60%] lg:w-[85%] flex justify-center hover:scale-110 duration-200"
          ></img>
        </div>
        <div className="duration-200">
          <h1 className=" dark:text-sky-400 text-emerald-400 duration-200 dark:hover:text-emerald-400 hover:text-sky-400 font-bold mb-10 text-center text-3xl">
            Contact
          </h1>
          <ul className="duration-200">
            <li className="flex justify-center text-xl duration-200 dark:hover:text-emerald-400 hover:text-sky-400 dark:text-sky-400  text-emerald-400 md:text-2xl">
              <FaPhoneAlt
                className=" dark:hover:text-sky-400 hover:text-emerald-400 my-8 mt-1 mr-15"
                size={24}
              />{" "}
              03xx-xxxxxxx
            </li>
            <li className="flex justify-center text-xl duration-200 dark:hover:text-emerald-400 hover:text-sky-400 dark:text-sky-400 text-emerald-400 md:text-2xl">
              <FaWhatsapp
                className=" dark:hover:text-sky-400 hover:text-emerald-400 my-8 mt-1 mr-15"
                size={28}
              />{" "}
              03xx-xxxxxxx
            </li>
            <li className="flex justify-center text-xl duration-200 dark:hover:text-emerald-400 hover:text-sky-400 dark:text-sky-400 text-emerald-400 md:text-2xl">
              <MdPlace
                className=" dark:hover:text-sky-400 hover:text-emerald-400 my-8 mt-1 mr-15"
                size={30}
              />{" "}
              Pakistan-/-/-
            </li>
            <li className="flex justify-center text-xl duration-200  dark:hover:text-emerald-400 hover:text-sky-400 dark:text-sky-400 text-emerald-400 md:text-2xl">
              <MdEmail
                className="  dark:hover:text-sky-400 hover:text-emerald-400 my-8 mt-1 mr-10"
                size={30}
              />
              --@gamil.com
            </li>
          </ul>
          <HashLink smooth to="#nav">
        <button className="dark:bg-sky-400 bg-emerald-400 dark:hover:bg-emerald-400 hover:bg-sky-400 flex justify-end text-black dark:text-white font-bold py-2 px-4 rounded-lg mx-auto mt-6 duration-200 hover:scale-105">
          <FaAnglesUp size={24} />
        </button>
          </HashLink>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
