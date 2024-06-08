import React from 'react';
import Logo from '../assets/Logo.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TfiInstagram } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="w-[72%] max-w-[1200px] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[40%] mb-8 md:mb-0">
          <div className="w-full h-[50px] flex items-center">
            <div className="w-[50px] h-[50px]">
              <img src={Logo} alt="" />
            </div>
            <h2 className="text-[24px] font-bold">Travlog</h2>
          </div>
          <div className="w-[80%] h-[160px] flex items-center mt-4">
            <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</h1>
          </div>
          <div className="w-full h-[100px] flex items-center mt-4">
            <div className="flex w-[30%] justify-between">
              <FaFacebook />
              <AiFillTwitterCircle />
              <TfiInstagram />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[30%] mb-8 md:mb-0">
            <h1 className="text-xl mb-4">Company</h1>
            <div className="flex flex-col">
              <h3 className="mb-2">About</h3>
              <h3 className="mb-2">Career</h3>
              <h3 className="mb-2">Mobile</h3>
            </div>
          </div>
          <div className="w-full md:w-[30%] mb-8 md:mb-0">
            <h1 className="text-xl mb-4">Contact</h1>
            <div className="flex flex-col">
              <h3 className="mb-2">Why Travlog?</h3>
              <h3 className="mb-2">Partner with us</h3>
              <h3 className="mb-2">FAQ's</h3>
              <h3 className="mb-2">Blog</h3>
            </div>
          </div>
          <div className="w-full md:w-[30%]">
            <h1 className="text-xl mb-4">Meet Us</h1>
            <div className="flex flex-col">
              <h3 className="mb-2">+00 92 1234 56789</h3>
              <h3 className="mb-2">info@travlog.com</h3>
              <h3 className="mb-2">205. R Street, New York</h3>
              <h3 className="mb-2">BD23200</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;