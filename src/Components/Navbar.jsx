import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-16 tracking-wide relative z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <a href="#">
            <img src={Logo} alt="logo" className="w-6 sm:w-8" />
          </a>
          <h2 className="text-lg sm:text-xl font-bold ml-2">Travlog</h2>
        </div>

        <div id="collapseMenu" className="hidden lg:flex lg:mx-auto gap-x-5">
          <ul className="flex gap-x-5">
            <li>
              <a href="#" className="hover:text-purple-600 text-gray-800 font-semibold text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 text-gray-800 font-semibold text-base">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 text-gray-800 font-semibold text-base">
                Feature
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 text-gray-800 font-semibold text-base">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 text-gray-800 font-semibold text-base">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 text-gray-800 font-semibold text-base">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex space-x-3">
          <button className="px-4 py-2 text-sm rounded-full font-bold transition-all duration-300 hover:bg-transparent hover:text-purple-600">
            Log In
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-purple-600 bg-purple-600 transition-all duration-300 hover:bg-transparent hover:text-purple-600">
            Sign Up
          </button>
        </div>

        <button id="toggleOpen" className="lg:hidden ml-2">
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
