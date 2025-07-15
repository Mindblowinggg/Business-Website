import hero3 from "/assets/hero3.jpg";
import React from "react";
import "../index.css";

const Hero3 = () => {
  return (
    <section className=" select-none w-full h-full flex justify-center-safe   ">
      <div className="container w-full   flex-col-reverse lg:flex-row flex lg:gap-32 items-center justify-between  ">
        {/* Left Content Area */}
        <div className="xl:w-[50%] w-full text-black">
          <h1 className="maintext w-full flex justify-center lg:justify-start  lg:mb-3.5 mb-2 leading-14 text-[40px] font-bold">
            Tailored Strategies for Your Business Growth
          </h1>
          <p className="w-full mb-8  flex justify-center lg:justify-start tracking-tight text-[#212529] text-justify sm:text-lg ">
            We work closely with our clients to understand their unique
            challenges and develop customized strategies that deliver measurable
            results. Our approach is designed to ensure your enterprise not only
            meets but exceeds its objectives, paving the way for sustainable
            success.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-black cursor-pointer font-semibold rounded-lg text-lg  transition duration-300 hover:bg-gray-600 text-white px-12 py-3 ">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Imag*/}
        <div className="mainimg  flex items-center ">
          {/* Placeholder for your illustration */}
          <img src={hero3} alt="Team working on idea" className="p-7" />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
