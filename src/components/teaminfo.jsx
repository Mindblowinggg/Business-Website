import React, { useState } from "react";
import { teamMembers } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Teaminfo = () => {
  return (
    <div className=" relative flex flex-col justify-center items-center text-center py-10">
      <p className="text-[#74C69D] text-[16px] tracking-widest select-none font-bold sm:text-lg ">
        OUR TEAM
      </p>
      <p className="text-black tracking-wider font-bold select-none text-2xl py-2">
        Meet Our Experts
      </p>
      <p className="select-none pt-3 pb-5">
        Behind every successful solution is a team of dedicated professionals.{" "}
        <br /> Discover the expertise driving our innovation.
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
            speed: 650,
          },
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[50%] mb-20 h-auto py-10 px-5 mx-auto"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center w-full items-center h-full"
          >
            {/* Team Member Card Structure */}
            <div className="flex flex-col justify-center gap-3 items-center text-2xl font-medium  h-[350px] w-full py-8 px-4 border-2 border-black rounded-lg shadow-2xl relative">
              <img
                src={member.image}
                className="rounded-full object-cover select-none border-2 border-black h-40 w-40"
                alt={member.name}
              />
              <h1 className="select-none text-xl font-bold">{member.name}</h1>
              <h1 className="select-none text-base text-gray-600">
                {member.role}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Teaminfo;
