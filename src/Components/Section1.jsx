import React from "react";
import Bg1 from "../assets/bg-1.png";
import Navbar from "./Navbar";
import Companies from "./Companies";
import Scroller from "./Scroller";
import Section from './Section2'

const Section1 = () => {
  return (
    <div className="pl-28 pr-28 pb-20">
      <Navbar />
      <div className="w-full h-[80vh] flex flex-col-reverse md:flex-row">
        <div className="w-[45%] h-full flex items-center justify-center">
          <div className="w-[80%] flex flex-col gap-3">
            <p>Explore the world!</p>
            <h1 className="text-[69px] font-bold ">
              Travel <p className="text-[#F85E9F]">top destination</p> of the world
            </h1>
            <p>
              We always make our customer happy by providing as many choices as
              possible
            </p>
          </div>
        </div>
        <div>
          <img src={Bg1} alt="backgroundImage" />
        </div>
      </div>
     <Companies/>
     <Scroller/>
     <Section />
    </div>
  );
};

export default Section1;
