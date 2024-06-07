import React from "react";
import destination from '../assets/destination 1.png'
import booking from '../assets/booking 1.png'
import cloudy from '../assets/cloudy 1.png'

const Services = () => {
  return (
    <div className="w-full h-[50vh] flex">
      <div className="w-[50%] h-full flex flex-col justify-center gap-11">
        <h1 className="text-[#F85E9F] text-3xl font-bold">Services</h1>
        <h3 className="text-3xl font-bold">Our top value categories for you</h3>
      </div>
      <div className="w-[50%] h-full flex gap-2 items-center overflow-x-scroll">
        <div className="w-[350px] h-[380px] border-2 rounded-lg flex flex-col gap-2">
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={destination} className="w-20 h-20" alt="" />
          </div>
          <h1 className="text-center font-bold">Best Tour Guide</h1>
          <p className="text-center">What looked like a small patch of purple grass, above five feet.</p>
        </div>
        <div className="w-[350px] h-[380px] border-2 rounded-lg flex flex-col gap-2">
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={booking} className="w-20 h-20" alt="" />
          </div>
          <h1 className="text-center font-bold">Easy Booking</h1>
          <p className="text-center">Square, was moving across the sand in their direction.</p>
        </div>
        <div className="w-[350px] h-[380px] border-2 rounded-lg flex flex-col gap-2">
          <div className="w-full h-[70%] flex justify-center items-center">
            <img src={cloudy} className="w-20 h-20" alt="" />
          </div>
          <h1 className="text-center font-bold">Weather Forecast</h1>
          <p className="text-center">What looked like a small patch of purple grass, above five feet.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;