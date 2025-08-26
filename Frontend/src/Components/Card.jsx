import React from "react";
import SubCard from "./SubCard";
import icon1 from "../assets/html.webp";
import icon2 from "../assets/css.webp";
import icon3 from "../assets/js.webp";
import icon4 from "../assets/react.webp";
import icon5 from "../assets/tailwind.webp";
import icon6 from "../assets/nodejs.webp";

const Card = () => {
  return (
    <div id="card" className="relative dark:bg-sky-950 bg-green-950 w-full py-[6rem] px-4">
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b dark:from-black/95 from-black/95 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t dark:from-black/95 from-black/95 to-transparent pointer-events-none z-10"></div>
      <div className="max-w-[1240px] flex sm:overflow-auto overflow-auto md:overflow-hidden space-x-6 mx-auto md:grid md:grid-cols-3 gap-8">
        <SubCard img={icon1} topic={'HTML'}/>
        <SubCard img={icon2} topic={'CSS'}/>
        <SubCard img={icon3} topic={'JAVASCRIPT'}/>
        <SubCard img={icon6} topic={'NODEJS'}/>
        <SubCard img={icon4} topic={'REACT'}/>
        <SubCard img={icon5} topic={'TAILWIND'}/>
      </div>
    </div>
  );
};

export default Card;
