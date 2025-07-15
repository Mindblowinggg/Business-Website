import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { marquee } from "../utils/constants";

const Partners = () => {
  return (
    <>
      <div className="partnerss overflow-hidden bg-white ">
        <p className="text-[#74C69D] text-[16px] tracking-widest font-bold sm:text-lg justify-center flex items-center">
          OUR PARTNERS
        </p>

        <p className="text-xl sm:text-3xl font-bold p-5 justify-center flex items-center ">
          Trusted Collaborations for Success
        </p>

        <p className=" text-center justify-center flex items-center ">
          We're proud to collaborate with industry leaders and innovative companies to deliver exceptional value.
        </p>

        <Marquee
          gradient={true}
          gradientColor="#74C69D"
          gradientWidth={100}
          className=" mt-4 gap-20 "
        >
          <motion.div className="Logos flex justify-between items-center sm:flex-row sm:mt-5 gap-20 ">
            {marquee.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.alt}
                className="logoimgs h-12 sm:w-20 md:w-20 lg:w-35 object-contain "
              />
            ))}
          </motion.div>
        </Marquee>

        <div className="learnmore flex justify-center items-center sm:mt-8">
          <button className="bg-black text-white px-8 py-3 cursor-pointer font-semibold rounded-lg text-lg transition duration-300 hover:bg-gray-600 ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Partners;