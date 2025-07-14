import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-[#74C69D] h-35 md:h-22 flex flex-col lg:flex-row lg:justify-between justify-center-safe gap-5 px-5 sm:px-15 w-full  items-center"
    >
      <div className="icons flex justify-center items-center gap-1 sm:gap-18 md:gap-3 lg:gap-5 ">
        <FaFacebook className="h-7 w-7 cursor-pointer hover:scale-110 text-white" />
        <a
          href="https://www.instagram.com/marc_usb47?utm_source=qr&igsh=MWExbWd0YnF4cWNi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-7 w-7 cursor-pointer hover:scale-110 text-white" />
        </a>
        <FaTwitter className="h-7 w-7 cursor-pointer hover:scale-110 text-white" />
        <FaPinterest className="h-7 w-7 cursor-pointer hover:scale-110 text-white" />
        <FaWhatsapp className="h-7 w-7 cursor-pointer hover:scale-110 text-white" />
        <FaYoutube className="h-7 w-7 cursor-pointer hover:scale-110 text-white" />
      </div>
      <div className="flex justify-center items-center ">
        <FaRegCopyright className="h-5 w-5 mr-2 text-white " />
        <p className="font-light text-white select-none sm:text-2xl ">
          Start, 2025. All rights reserved.{" "}
        </p>

        <h1 className="font-bold text-xl ml-2 font-mono select-none sm:text-2xl ">
          Created by AMAN KAHAR
        </h1>
      </div>
    </div>
  );
};

export default Footer;
