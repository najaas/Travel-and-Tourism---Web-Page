import React from "react";
import img1 from "../assets/BACKGROUND.png";
import Button from "./Button";
import Card from "./Card";

const Scroller = () => {
  return <>
  <div className="w-full h-[80vh] flex-col ">
    <div className="w-full h-[30%] flex justify-between">
        <div className="flex flex-col gap-3">
            <h3 className="text-[#F85E9F] text-2xl pt-10">Top Destination</h3>
            <h1 className="text-5xl">Explore top destination</h1>
        </div>
        <div className="w-[20%] h-full flex items-center justify-center gap-6" >
            <Button arrows={"Left"}/>
            <Button arrows={"Right"} color={"blue"}/>

        </div>
    </div>
    <div className=" w-full h-[70%] flex flex-grow items-center">
        <Card/>
        <Card/>
        <Card/>
    </div>
  </div>
  </>;
};

export default Scroller;
