import React from "react";
import { FaCheck } from "react-icons/fa6";

const ServicesPage = () => {
  return (
    <div className="mt-20 sm:mt-30">
      <p className="text-[#74C69D]  text-[16px] text-center tracking-widest select-none  font-bold sm:text-lg ">
        PLANS
      </p>
      <p className="text-black text-center tracking-wider font-bold select-none text-2xl py-2 ">
        OUR SERVICES
      </p>
      <p className="select-none text-center pt-3 ">
        Lorem ipsum, dolor sit amet consectetur <br /> Suscipit nemo hic quos,
        ab,
      </p>

      <div className="offers grid grid-cols-1 lg:grid-cols-3 lg:gap-[20px] gap-10  sm:pb-20 sm:px-14">
        {/*col 1 */}
        <div className="py-5 md:py-10 px-4 rounded h-[550px] ">
          <div className=" p-2  shadow-2xl md:p-5 w-full h-full text-center ">
            <p>Basic</p>
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold"> $100</h1>
              <p className="text-gray-400 ml-1"> /month</p>
            </div>
            <p className="text-center lg:text-sm pt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              corrupti pariatur ipsum voluptate quibusdam, ea nesciunt debitis
              molestias vel nostrum.
            </p>

            <div className="flex flex-col mt-10 lg:text-sm items-center">
              <div className="flex pt-3 lg:pt-0 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3  items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
            
            </div>
            <div className="learnmore pb-15  flex justify-center items-center sm:mt-8">
          <button className="bg-black text-white px-8 py-3 cursor-pointer font-semibold rounded-lg text-lg  transition duration-300 hover:bg-gray-600 ">
            Learn More
          </button>
        </div>
          </div>
        </div>
        {/*col 2 */}
       <div className="py-5 md:py-10 px-4 rounded h-[550px] ">
          <div className=" p-2  shadow-2xl md:p-5 w-full h-full text-center ">
            <p>Basic</p>
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold"> $200</h1>
              <p className="text-gray-400 ml-1"> /month</p>
            </div>
            <p className="text-center lg:text-sm pt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              corrupti pariatur ipsum voluptate quibusdam, ea nesciunt debitis
              molestias vel nostrum.
            </p>

            <div className="flex flex-col mt-10 lg:text-sm items-center">
              <div className="flex pt-3 lg:pt-0 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3  items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
            
            </div>
            <div className="learnmore pb-15  flex justify-center items-center sm:mt-8">
          <button className="bg-black text-white px-8 py-3 cursor-pointer font-semibold rounded-lg text-lg  transition duration-300 hover:bg-gray-600 ">
            Learn More
          </button>
        </div>
          </div>
        </div>
        {/*col 3 */}
        <div className="py-5 md:py-10 px-4 rounded h-[550px] ">
          <div className=" p-2  shadow-2xl md:p-5 w-full h-full text-center ">
            <p>Basic</p>
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold"> $400</h1>
              <p className="text-gray-400 ml-1"> /month</p>
            </div>
            <p className="text-center lg:text-sm pt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              corrupti pariatur ipsum voluptate quibusdam, ea nesciunt debitis
              molestias vel nostrum.
            </p>

            <div className="flex flex-col mt-10 lg:text-sm items-center">
              <div className="flex pt-3 lg:pt-0 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3 items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
              <div className="flex pt-3  items-center"><FaCheck size={25} className="text-[#74C69D]"/> <p>Lorem ipsum dolor sit amet.</p></div>
            
            </div>
            <div className="learnmore pb-15  flex justify-center items-center sm:mt-8">
          <button className="bg-black text-white px-8 py-3 cursor-pointer font-semibold rounded-lg text-lg  transition duration-300 hover:bg-gray-600 ">
            Learn More
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
