import hero2 from "/assets/hero2.jpg";
import React from "react";
import "../index.css";

const Hero2 = () => {
  return (
    <section className="select-none w-full h-full flex justify-center-safe">
      <div className="container w-full flex-col lg:flex-row flex lg:gap-32 items-center justify-between">
        {/* left Imag*/}
        <div className="mainimg flex items-center ">
          <img src={hero2} alt="Team working on idea" className="p-7" />
        </div>
        {/* right Content Area */}
        <div className="xl:w-[50%] w-full text-black">
          <h1 className="maintext w-full flex justify-center lg:justify-start lg:mb-3.5 mb-2 leading-14 text-[40px] font-bold">
            Empowering Your Business Through Innovation
          </h1>
          <p className="w-full mb-8 flex justify-center lg:justify-start tracking-tight text-[#212529] text-justify sm:text-lg ">
            Discover how our tailored solutions can address your most complex challenges, drive efficiency, and unlock new opportunities for growth. We're committed to delivering tangible results that propel your enterprise forward in today's dynamic market.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-black cursor-pointer font-semibold rounded-lg text-lg transition duration-300 hover:bg-gray-600 text-white px-12 py-3 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;