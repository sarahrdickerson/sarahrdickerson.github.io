"use client";

import React from 'react';
import useScroll from '@/lib/hooks/useScroll';
import Link  from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const scrolled = useScroll(50);

    const handleScroll = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className={`pl-5 navbar fixed top-0 w-full flex justify-center 
        ${ scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
    >
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost hover:bg-opacity-0 lg:hidden">
                <AiOutlineMenu className="text-2xl" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={() => handleScroll("#experience")}>experience</a></li>
                {/* <li><a onClick={() => handleScroll("#education")}>education</a></li> */}
                <li><a onClick={() => handleScroll("#projects")}>projects</a></li>
                <li><a onClick={() => handleScroll("#contact")}>contact</a></li>
            </ul>
            </div>
            <div className="">
                <a className="normal-case font-semibold text-xl nav-item text-black" onClick={() => handleScroll("#home")}>sarah dickerson</a>
            </div>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu-horizontal px-1">
                <li><a className='nav-item p-4 block' onClick={() => handleScroll("#experience")}>experience</a></li>
                {/* <li><a className='nav-item p-4 block' onClick={() => handleScroll("#education")}>education</a></li> */}
                <li><a className='nav-item  p-4 block' onClick={() => handleScroll("#projects")}>projects</a></li>
                <li><a className='nav-item  p-4 block' onClick={() => handleScroll("#contact")}>contact</a></li>
            </ul>
        </div>
         

        
    </div>
  )
}

export default Navbar