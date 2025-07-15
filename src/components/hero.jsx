import heroimg from "/assets/heroimage.png";
import React from "react";
import "../index.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#74C69D] select-none w-full h-full flex justify-center-safe ">
      <div className="container w-full flex-col-reverse lg:flex-row flex lg:gap-32 items-center justify-between ">
        {/* Left Content Area */}
        <div className="xl:w-[50%] w-full text-white">
          <p className="welcome flex justify-center lg:justify-start xl:text-xl font-bold uppercase lg:mb-3.5 tracking-[0.4em]">
            Welcome
          </p>
          <h1 className="maintext w-full flex justify-center lg:justify-start lg:mb-3.5 mb-2 leading-14 text-[30px] tracking-tight text-justify font-semibold">
            AMAN KAHAR
          </h1>
          <p className="w-full mb-8 flex justify-center lg:justify-start tracking-tight text-gray-100 text-justify sm:text-lg ">
            Driving innovation and delivering robust solutions for enterprises worldwide. We leverage cutting-edge technology to help businesses streamline operations, enhance productivity, and achieve sustainable growth. Explore how our expertise can transform your vision into reality.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-white cursor-pointer font-semibold rounded-lg text-lg transition duration-300 hover:bg-gray-600 text-[#74C69D] px-12 py-3 ">
              Explore
            </button>
          </div>
        </div>

        {/* Right Img*/}
        <div className="mainimg flex items-center ">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={heroimg}
            alt="Team working on idea"
            className="p-7"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;