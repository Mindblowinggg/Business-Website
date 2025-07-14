import React from "react";
import image1 from "/assets/portfolio img1.jpg";
import image2 from "/assets/portfolio img2.jpg";
import image3 from "/assets/portfolio img3.jpg";
import image4 from "/assets/portfolio img4.jpg";
import image5 from "/assets/portfolio img5.jpg";
import image6 from "/assets/portfolio img6.jpg";
import image7 from "/assets/portfolio img7.jpg";
import image8 from "/assets/portfolio img8.jpg";


const PortfolioPage = () => {
  return (
    <div className="mt-20 sm:mt-30">
      <p className="text-[#74C69D]  text-[16px] text-center tracking-widest select-none  font-bold sm:text-lg ">
        WORKS
      </p>
      <p className="text-black text-center tracking-wider font-bold select-none text-2xl py-2 ">
        PORTFOLIO
      </p>
      <p className="select-none text-center pt-3 pb-15">
        Lorem ipsum, dolor sit amet consectetur <br /> Suscipit nemo hic quos,
        ab,
      </p>
      <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-15 gap-10  px-5 pb-3 pt-3 sm:py-5 sm:px-14">
        {/* Row 1 */}
        <div className=" border border-gray-300 rounded h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image1} className="w-full h-full object-cover" />
        </div>
        <div className="  border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image2} className="w-full h-full object-cover" />
        </div>

        {/* Row 2 */}
        <div className="  border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image3} className="w-full h-full object-cover" />
        </div>
        <div className=" border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image4} className="w-full h-full object-cover" />
        </div>

        {/* Row 3 */}
        <div className="  border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image5} className="w-full h-full object-cover" />
        </div>
        <div className=" border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image6} className="w-full h-full object-cover" />
        </div>

        {/* Row 4 */}
        <div className="  border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image7} className="w-full h-full object-cover" />
        </div>
        <div className="  border border-gray-300 rounded flex items-center justify-center h-[200px] sm:h-[300px]  lg:h-[340px]">
          <img src={image8} className="w-full h-full object-cover" />
        </div>
        
      </div>
      <div className="learnmore pb-15  flex justify-center items-center mb-30 sm:mb-10 sm:mt-8">
          <button className="bg-black text-white px-8 py-3 cursor-pointer font-semibold rounded-lg text-lg  transition duration-300 hover:bg-gray-600 ">
            Learn More
          </button>
        </div>
    </div>
  );
};

export default PortfolioPage;
