import React from 'react';
import Hero from '../components/hero';
import Partners from '../components/partners';
import Hero2 from '../components/hero2';
import Hero3 from '../components/hero3';
import Team from '../components/teaminfo';

const HomePage = () => {
  return (
    <>
      
      <div className="bg-[#74C69D] mt-18 sm:mt-22 md: px-5 pb-5 pt-3 sm:py-10 sm:px-15">
        <Hero />
      </div>
      <div className=" pb-5 pt-3 sm:px-15 sm:py-10">
        <Partners />
      </div>
      <div className=" px-5 pb-5 pt-3 sm:px-15 sm:py-10">
        <Hero2 />
      </div>
      <div className=" px-5 pb-5 pt-3 sm:px-15 sm:py-10">
        <Hero3 />
      </div>
      <div className=" px-5 pb-5 sm:px-15 ">
        <Team />
      </div>
     
    </>
  );
};

export default HomePage;