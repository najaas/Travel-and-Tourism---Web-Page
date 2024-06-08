import Bg1 from "../assets/bg-1.png";
import Navbar from "./Navbar";
import Companies from "./Companies";
import Scroller from "./Scroller";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import Services from "./Services";

const Section1 = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-10 pb-20">
        <div className="w-full md:h-[120vh] flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-[50%] h-[40vh] md:h-full flex items-center justify-center">
            <div className="w-[90%] md:w-[80%] flex flex-col gap-3">
              <p className="text-xs sm:text-sm text-[#F85E9F]">Explore the world</p>
              <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[69px] font-bold leading-tight md:leading-normal">
                Travel <span className="text-[#F85E9F]">top destinations</span> of the world
              </h1>
              <p className="text-xs sm:text-sm">
                We always make our customers happy by providing as many choices as possible
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] h-[60vh] md:h-full flex items-center justify-center">
            <img src={Bg1} alt="background" className="w-full h-full object-cover" />
          </div>
        </div>
        <Companies />
        <div className="mt-10 md:mt-15"></div>
        <Services />
        <div className="mt-10 md:mt-15"></div>
        <Scroller />
        <div className="mt-10 md:mt-15"></div> 
        <Section2 />
        <div className="mt-10 md:mt-15"></div>
        <Section3 />
        <div className="mt-10 md:mt-15"></div> 
      </div>
      <Footer />
    </>
  );
};

export default Section1;
