import React, { useState } from "react";

const Contactpage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // New state for Phone Number
  const [inquiryType, setInquiryType] = useState("General Inquiry"); // New state for Dropdown
  const [message, setMessage] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("Form Submission:", {
      fullName,
      email,
      phone,
      inquiryType,
      message,
    });
    alert(
      "Thank you! We have received your message and will respond within 24-48 business hours."
    );
    setFullName("");
    setEmail("");
    setPhone("");
    setInquiryType("General Inquiry");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center w-full justify-center mb-14 mt-20 sm:mt-30 ">
      <p className="text-black text-center tracking-wider font-bold select-none text-2xl py-2 ">
        Contact Our Team
      </p>
      <p className="select-none text-center pt-3 pb-5 ">
        Have a question or need support? <br /> Please fill out the form below,
        and we will get back to you promptly.
      </p>
      <div
        className="flex flex-col 
        md:flex-row w-full justify-evenly gap-5  h-full px-5 pb-3 sm:pb-15 sm:px-14  items-center"
      >
        <form
          onSubmit={handlesubmit}
          className="bg-white h-full formm  flex flex-col rounded-lg shadow-2xl sm:w-[400px] md:w-[500px] md:p-15 p-5  "
        >
          {/* Full Name Field */}
          <label
            className="block text-gray-700 text-sm font-bold mb-1 "
            htmlFor="fullName"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className=" appearance-none  rounded w-full py-2 px-3 text-black bg-zinc-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
          />

          {/* Email Field */}
          <label
            className="block text-gray-700 text-sm font-bold mb-1 mt-5 "
            htmlFor="email"
          >
            Business Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className=" appearance-none  rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
          />

          {/* Phone Number Field (New) */}
          <label
            className="block text-gray-700 text-sm font-bold mb-1 mt-5 "
            htmlFor="phone"
          >
            Phone Number (Optional):
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className=" appearance-none  rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
          />

          {/* Inquiry Type Dropdown (New) */}
          <label
            className="block text-gray-700 text-sm font-bold mb-1 mt-5 "
            htmlFor="inquiryType"
          >
            Reason for Contact:
          </label>
          <select
            id="inquiryType"
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            className=" appearance-none  rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
          >
            <option>General Inquiry</option>
            <option>Sales/Partnership</option>
            <option>Customer Support</option>
            <option>Billing Question</option>
          </select>

          {/* Message Field */}
          <label
            className="block text-gray-700 text-sm font-bold mb-1 mt-5 "
            htmlFor="message"
          >
            Your Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="4"
            className=" appearance-none  rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#74C69D]   hover:bg-[#529172]  cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[40%] m-auto mt-10"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
