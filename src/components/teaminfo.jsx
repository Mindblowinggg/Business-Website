import React, { useState } from "react";
import { teamMembers } from "../utils/constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Teaminfo = () => {
  const [currentindex, setcurrentindex] = useState(0);
  const totalmembers = teamMembers.length;

  const prevbtn = () => {
    const isfirstindex = currentindex === 0;
    const newindex = isfirstindex ? totalmembers - 1 : currentindex - 1;
    setcurrentindex(newindex);
  };

  const nextbtn = () => {
    const islastindex = currentindex === totalmembers - 1;
    const newindex = islastindex ? 0 : currentindex + 1;
    setcurrentindex(newindex);
  };

  const currentmember = teamMembers[currentindex];

  return (
    <div className=" relative flex flex-col justify-center items-center text-center py-10">
      <p className="text-[#74C69D] text-[16px] tracking-widest select-none font-bold sm:text-lg ">
        OUR TEAM
      </p>
      <p className="text-black tracking-wider font-bold select-none text-2xl py-2">
        Meet Our Experts
      </p>
      <p className="select-none pt-3 pb-5">
        Behind every successful solution is a team of dedicated professionals. <br /> Discover the expertise driving our innovation.
      </p>

      {/* card */}
      <div className="relative w-full max-w-[400px] mb-35 sm:mb-35 md:mb-20 min-w-[150px] bg-[#74c69dae] flex justify-center items-center">
        <div className="flex flex-col justify-center gap-3 items-center text-2xl font-medium w-full h-[350px] max-w-[400px] min-w-[150px] py-8 px-4 border-2 border-black rounded-lg shadow-2xl relative">
          <img src={currentmember.image} className="rounded-full object-fill select-none border-2 border-black h-40 w-40"/>
          <h1 className="select-none">{currentmember.name}</h1>
          <h1 className="select-none">{currentmember.role}</h1>
          <FaArrowLeft
            className="border-1 border-black rounded-full absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer"
            onClick={prevbtn}
            size={30}
          />
          <FaArrowRight
            className="border-1 border-black rounded-full absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer"
            onClick={nextbtn}
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Teaminfo;