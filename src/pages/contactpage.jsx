import React, { useState } from "react";

const Contactpage = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("form submitted:", { name, email });
    alert("form submitted");
    SetName("");
    SetEmail("");
  };
  return (
    <div className="flex flex-col items-center w-full justify-center mb-14 mt-20 sm:mt-30 ">
      <p className="text-black text-center tracking-wider font-bold select-none text-2xl py-2 ">
        Contact Us
      </p>
      <p className="select-none text-center pt-3 pb-5 ">
        Lorem ipsum, dolor sit amet consectetur <br /> Suscipit nemo hic quos,
        ab,
      </p>
      <div
        className="flex flex-col 
        md:flex-row w-full justify-evenly gap-5  h-full px-5 pb-3 sm:pb-15 sm:px-14  items-center"
      >
        <form
          onSubmit={handlesubmit}
          className="bg-white h-full formm  flex flex-col rounded-lg shadow-2xl sm:w-[400px] md:w-[500px] md:p-15 p-5  "
        >
          <label
            className="block text-gray-700 text-sm font-bold mb-1 "
            htmlFor="aman"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => SetName(event.target.value)}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-800 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-1 mt-5 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-800 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-[#74C69D]   hover:bg-[#529172]  cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[40%] m-auto mt-10"
          >
            submit
          </button>
        </form>
        <div className=" w-auto max-w-[450px] h-[200px]  sm:h-[300px] mb-25 md:mb-0 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332179421566!2d-122.01154692409919!3d37.33464377209959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1752400836366!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg shadow-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
