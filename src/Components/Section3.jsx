import React from "react";
import Image1 from "../assets/photo1.png";
import Image2 from "../assets/photo2.png";
import Image3 from "../assets/photo3.png";
import Bg from '../assets/BACKGROUND.png'

const Section3 = () => {
  return (
    <div className="w-full h-[160vh] flex items-center">
      <div className="w-[50%] h-full flex items-center flex-col justify-center">
        <div className="w-[27vw] h-[30%] flex flex-col justify-evenly mb-10">
          <h1 className="text-2xl text-[#F85E9F]">KEY FEATURES</h1>
          <h1 className="text-3xl">We offer best service</h1>
          <p className="text-[#191825]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="w-[370px] h-[50vh] flex flex-col justify-evenly items-center space-y-6">
          <div className="w-full flex items-center">
            <div className="w-[70px] h-[70px] flex-shrink-0">
              <img src={Image1} alt="Feature 1" />
            </div>
            <div className="ml-4">
              <h1 className="font-bold">We offer best services</h1>
              <h1>Lorem Ipsum is not simply random text</h1>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-[70px] h-[70px] flex-shrink-0">
              <img src={Image2} alt="Feature 2" />
            </div>
            <div className="ml-4">
              <h1 className="font-bold">Schedule your trip</h1>
              <h1>It has roots in a piece of classical</h1>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-[70px] h-[70px] flex-shrink-0">
              <img src={Image3} alt="Feature 3" />
            </div>
            <div className="ml-4">
              <h1 className="font-bold">Get discounted coupons</h1>
              <h1>Lorem Ipsum is not simply random text</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={Bg} alt="" />
      </div>
    </div>
  );
};

export default Section3;
