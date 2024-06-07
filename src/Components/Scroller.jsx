import React from "react";
import Button from "./Button";
import Card from "./Card";
import Card1 from '../assets/Rectangle 6.png'
import Card2 from '../assets/Rectangle 6 (1).png'
import Card3 from '../assets/Rectangle 7.png'

const Scroller = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full h-[30%] flex justify-between items-center">
        <div className="flex flex-col gap-3 text-center">
          <h3 className="text-[#F85E9F] text-2xl pt-10">Top Destination</h3>
          <h1 className="text-5xl">Explore top destination</h1>
        </div>
        <div className="w-[20%] h-full flex items-center justify-center gap-6">
          <Button arrows={"Left"} />
          <Button arrows={"Right"} color={""} />
        </div>
      </div>
      <div className="w-full h-[70%] flex flex-col justify-center items-center gap-4 md:gap-28">
        <Card image={Card1} />
        <Card image={Card2} />
        <Card image={Card3} />
      </div>
    </div>
  );
};

export default Scroller;
