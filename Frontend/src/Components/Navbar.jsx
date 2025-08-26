import { useState } from "react";
import React from 'react'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { MdNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { PiPlant } from "react-icons/pi";
import { CiCloudSun } from "react-icons/ci";

const Navbar = () => {
  const [nav,setNav] = useState(true);

  const [mode,changemode]=useState(true);

  const handleNavbar = () => {
    setNav(!nav);
  }
  const ToggleChange=()=>{
    document.documentElement.classList.toggle("dark");
    changemode(!mode);
  }
  return (
    <div className="bg-black">
      <div id="nav" className='dark:text-white dark:bg-black text-white bg-black flex h-24 items-center max-w-[1240px] m-auto px-4' >
        <h1 className='w-full text-3xl font-bold hover:text-sky-400 dark:hover:text-[#00df90] text-emerald-400 dark:text-sky-400'>Portfolio</h1>

        <ul className='md:flex hidden'>
            <li className='p-4 text-left relative hover:text-emerald-400 dark:hover:text-sky-400 duration-200'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold dark:decoration-sky-400 decoration-emerald-400 dark:text-sky-400 text-emerald-400' : ''} to="/">Home</NavLink></li>
            <li className='p-4 hover:text-emerald-400 dark:hover:text-sky-400 duration-200'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold decoration-emerald-400 dark:decoration-sky-400 dark:text-sky-400 text-emerald-400' : ''} to="/about">About</NavLink></li>
            <li className='p-4 hover:text-emerald-400 dark:hover:text-sky-400 duration-200'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold decoration-emerald-400 dark:decoration-sky-400 dark:text-sky-400 text-emerald-400' : ''} to="/contact">Contact</NavLink></li>
            <li className='p-4 hover:text-emerald-400 dark:hover:text-sky-400 duration-200'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold decoration-emerald-400 dark:decoration-sky-400 dark:text-sky-400 text-emerald-400' : ''} to="/gallery">Gallery</NavLink></li>
            <li className='p-4 hover:text-emerald-400 text-sky-400 dark:text-emerald-400  dark:hover:text-sky-400 duration-200'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold decoration-emerald-400 dark:decoration-sky-400 dark:text-sky-400 text-emerald-400' : ''} to="/signup">Signup</NavLink></li>
        </ul>
        <button onClick={ToggleChange} id="modebtn" className="dark:bg-black dark:text-black hover:scale-105 absolute right-6 top-20 bg-black text-black rounded-md cursor-pointer z-20">{mode ? <CiCloudSun size={40} className="m-1 p-1 bg-sky-400 border-2 border-sky-400 rounded-lg"/> : <PiPlant size={40} className="m-1 p-1 bg-emerald-400 border-2 border-emerald-400 rounded-lg "/>} </button>
        <div onClick={handleNavbar} className="cursor-pointer block md:hidden">
            {nav ? <LuMenu size={28} className="dark:text-sky-400 text-emerald-400"/> : <RxCross2 size={28} className="dark:text-sky-400 text-emerald-400" />}
        </div>
        <div className={!nav ?' z-10 fixed top-0 left-0 w-[45%] h-auto border-r dark:border-r-sky-400 border-r-emerald-400 border-b dark:border-b-sky-400 border-b-emerald-400 backdrop-blur-md bg-white/10 ease-in-out duration-500' :'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold dark:text-sky-400 text-emerald-400 text-center mt-5'>Menu</h1>
            <ul className='pt-5 text-center'>
            <li className='p-5 border-b border-b-gray-600 dark:hover:text-sky-400 hover:text-emerald-400  dark:text-emerald-400 text-sky-400'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold dark:decoration-sky-400 decoration-emerald-400 dark:text-sky-400 text-emerald-400' : ''} to="/">Home</NavLink></li>
            <li className='p-5 border-b border-b-gray-600 dark:hover:text-sky-400 hover:text-emerald-400  dark:text-emerald-400 text-sky-400'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold dark:decoration-sky-400 decoration-emerald-400 dark:text-sky-400 text-emerald-400' : ''} to="/about">About</NavLink></li>
            <li className='p-5 border-b border-b-gray-600 dark:hover:text-sky-400 hover:text-emerald-400  dark:text-emerald-400 text-sky-400'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold dark:decoration-sky-400 decoration-emerald-400 dark:text-sky-400 text-emerald-400' : ''} to="/contact">Contact</NavLink></li>
            <li className='p-5 border-b border-b-gray-600 dark:hover:text-sky-400 hover:text-emerald-400  dark:text-emerald-400 text-sky-400'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold dark:decoration-sky-400 decoration-emerald-400 dark:text-sky-400 text-emerald-400' : ''} to="/gallery">Gallery</NavLink></li>
            <li className='p-5 border-b border-b-gray-600 dark:hover:text-sky-400 hover:text-emerald-400  dark:text-emerald-400 text-sky-400'><NavLink className={({isActive})=>isActive ? 'underline underline-offset-4 font-bold dark:decoration-sky-400 decoration-emerald-400 dark:text-sky-400 text-emerald-400' : ''} to="/signup">Signup</NavLink></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
