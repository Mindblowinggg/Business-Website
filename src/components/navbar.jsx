import React from "react";
import { motion } from "framer-motion";
import logo from "/assets/logo.png"; 
import { IoMdMenu } from "react-icons/io";
import "../index.css"; 
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { navLinks } from "../utils/constants"; 
import { NavLink } from "react-router-dom";


const MotionNavLink = motion(NavLink);

const Navbar = () => {
  const [openMainDropdown, setOpenMainDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [menuopen, setmenuopen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const getNavLinkClass = ({ isActive }) =>
    `flex px-2 text-lg font-semibold transition duration-300 ${
      isActive
        ? "text-white underline underline-offset-4"
        : "text-white hover:text-gray-200"
    }`;

  const getDropdownLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-[#74C69D] hover:bg-gray-100 transition duration-200 ${
      isActive ? "font-bold bg-gray-100" : ""
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-lg font-semibold transition duration-300 ${
      isActive ? "text-blue-200 bg-[#5fa381]" : "text-white hover:bg-[#5fa381]"
    }`;

  const getMobileSubLinkClass = ({ isActive }) =>
    `block px-8 py-2 text-white hover:bg-[#5fa381] transition duration-200 ${
      isActive ? "font-bold bg-[#5fa381]" : ""
    }`;

  const getMobileSubSubLinkClass = ({ isActive }) =>
    `block px-12 py-2 text-white hover:bg-[#529170] transition duration-200 ${
      isActive ? "font-bold bg-[#529170]" : ""
    }`;

  return (
    <motion.nav
      className={`
        fixed w-full top-0 left-0 z-50 px-5 pb-3 pt-3 sm:py-5 sm:px-14 md:mb-10 mb-3
        ${scrolled ? "bg-[#32ac6fa2] backdrop-blur-2xl" : "bg-[#74C69D]"}
        `}
    >
      <div className="flex justify-between items-center px-4 py-2">

        {/* Logo and Site Title */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo}
            alt="Website Logo"
            className="h-8 lg:h-full"
          />

          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white pl-2 lg:text-5xl text-3xl font-semibold"
          >
            start
          </motion.h1>
        </div>

        {/* Desktop Navbar */}
        <motion.div className="navbar gap-20 hidden px-2 lg:flex items-center">
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="relative"
              // Desktop: onMouseEnter/onMouseLeave for hover dropdowns
              onMouseEnter={() =>
                link.dropdown && setOpenMainDropdown(link.name)
              }
              onMouseLeave={() => setOpenMainDropdown(null)}
            >
              <MotionNavLink
                to={link.href}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", delay: 0.1 * index }}
                className={getNavLinkClass}
              >
                {link.name}
                {link.dropdown && (
                  <div className="flex justify-center items-center mt-1 ml-1">
                    <IoIosArrowDown />
                  </div>
                )}
              </MotionNavLink>

              {/* Main Dropdown Menu (Desktop) */}
              {link.dropdown && openMainDropdown === link.name && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-35 z-10 ">
                  {link.dropdown.map((dropdownItem, index) => (
                    <div
                      key={dropdownItem.name}
                      className="relative"
                      // Desktop: onMouseEnter/onMouseLeave for sub-dropdowns
                      onMouseEnter={() =>
                        dropdownItem.dropdown &&
                        setOpenSubDropdown(dropdownItem.name)
                      }
                      onMouseLeave={() =>
                        dropdownItem.dropdown && setOpenSubDropdown(null)
                      }
                    >
                      <MotionNavLink
                        initial={{ opacity: 0, x: 130 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.04, delay: 0.09 * index }}
                        to={dropdownItem.href}
                        className={getDropdownLinkClass}
                      >
                        {dropdownItem.name}
                        {dropdownItem.dropdown && (
                          <span className="float-right ml-2">
                            <IoIosArrowDown className="inline-block align-middle" />
                          </span>
                        )}
                      </MotionNavLink>

                      {/* Sub-Dropdown Menu (Desktop) */}
                      {dropdownItem.dropdown &&
                        openSubDropdown === dropdownItem.name && (
                          <div className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 w-40 z-20 ">
                            {dropdownItem.dropdown.map(
                              (subdropdownItem, subIndex) => (
                                <MotionNavLink
                                  initial={{ opacity: 0, x: 130 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.04,
                                    delay: 0.09 * subIndex,
                                  }}
                                  to={subdropdownItem.href}
                                  key={subdropdownItem.name}
                                  className={getDropdownLinkClass} // Re-use or define new style
                                >
                                  {subdropdownItem.name}
                                </MotionNavLink>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onClick={() => setmenuopen(!menuopen)}
          className="flex lg:hidden text-white justify-center items-center cursor-pointer"
        >
          {menuopen ? (
            <RxCross1 className="w-8 h-8" />
          ) : (
            <IoMdMenu className="w-9 h-9" />
          )}
        </motion.div>
      </div>

      {/* Mobile Navigation Links (Small Screens) */}
      {menuopen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-[#74C69D] py-10"
        >
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative">
              <MotionNavLink
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, ease: "easeOut" }}
                to={link.href}
                className={getMobileLinkClass}
                // Mobile: Only onClick for dropdowns. No onMouseEnter/onMouseLeave here.
                onClick={(e) => {
                  if (link.dropdown) {
                    e.preventDefault(); // Prevent navigation for dropdown parent link
                    setOpenMainDropdown(
                      openMainDropdown === link.name ? null : link.name
                    );
                  } else {
                    setmenuopen(false); // Close mobile menu if it's a direct link
                    setOpenMainDropdown(null); // Close any open main dropdown
                    setOpenSubDropdown(null); // Close any open sub dropdown
                  }
                }}
              >
                {link.name}
                {link.dropdown && (
                  <span className="float-right mt-1 ml-1">
                    <IoIosArrowDown />
                  </span>
                )}
              </MotionNavLink>

              {/* Mobile Main Dropdown Menu */}
              {link.dropdown && openMainDropdown === link.name && (
                <div className="bg-[#63ad85] py-2">
                  {link.dropdown.map((dropdownItem, index) => (
                    <div key={dropdownItem.name} className="relative">
                      <MotionNavLink
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, ease: "easeOut" }}
                        to={dropdownItem.href}
                        className={getMobileSubLinkClass}
                       
                        onClick={(e) => {
                          if (dropdownItem.dropdown) {
                            e.preventDefault(); 
                            setOpenSubDropdown(
                              openSubDropdown === dropdownItem.name
                                ? null
                                : dropdownItem.name
                            );
                          } else {
                            setmenuopen(false); // Close mobile menu if it's a direct link
                            setOpenMainDropdown(null); // Close main dropdown
                            setOpenSubDropdown(null); // Close current sub dropdown
                          }
                        }}
                      >
                        {dropdownItem.name}
                        {dropdownItem.dropdown && (
                          <span className="float-right ml-2">
                            <IoIosArrowDown className="inline-block align-middle" />
                          </span>
                        )}
                      </MotionNavLink>

                      {/* Mobile Sub-Dropdown Menu */}
                      {dropdownItem.dropdown &&
                        openSubDropdown === dropdownItem.name && (
                          <div className="bg-[#5fa381] py-2">
                            {dropdownItem.dropdown.map((subdropdownItem) => (
                              <MotionNavLink
                                key={subdropdownItem.name}
                                to={subdropdownItem.href}
                                className={getMobileSubSubLinkClass}
                                onClick={() => {
                                  setmenuopen(false); // Close mobile menu on click
                                  setOpenMainDropdown(null); // Close main dropdown
                                  setOpenSubDropdown(null); // Close current sub dropdown
                                }}
                              >
                                {subdropdownItem.name}
                              </MotionNavLink>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;