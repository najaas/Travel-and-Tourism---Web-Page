import React from 'react';
import Image from '../assets/Group 9238.png';
import Fram from '../assets/Frame 96.png';
import Fram1 from '../assets/Frame 50.png';

const Section2 = () => {
  return (
    <div className="w-full h-[120vh] flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-[60%] h-[50vh] md:h-[100vh] mb-8 md:mb-0 order-1 md:order-none">
        <img src={Image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-[40%] h-auto flex flex-col justify-center items-center md:items-start px-4 order-2 md:order-none">
        <div className="w-full h-[70vh] flex flex-col justify-evenly mb-8">
          <h1 className="text-3xl text-[#F85E9F]">Travel Point</h1>
          <div className="text-4xl text-center md:text-left">
            <h1>We're helping you find</h1>
            <h1>your dream location</h1>
          </div>
          <div className="text-[#191825] text-center md:text-left">
            <h1>Contrary to popular belief, Lorem Ipsum is not</h1>
            <h1>simply random text. It has roots in a piece of</h1>
            <h1>classical Latin literature from 45 BC.</h1>
          </div>
        </div>
        {/* Uncomment below to show the additional frame image */}
        {/* <img src={Fram1} alt="" className="w-[200px] mb-8" /> */}
        <div className="w-[300px]">
          <img src={Fram} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
