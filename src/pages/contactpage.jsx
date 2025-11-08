import React, { useState } from "react";
import {
  FaArrowDown,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // New Icons added

const Contactpage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("General Inquiry");
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
    console.log("Success: Form submitted. Response confirmation sent to user.");

    setFullName("");
    setEmail("");
    setPhone("");
    setInquiryType("General Inquiry");
    setMessage("");

    const formConfirmation = document.getElementById("form-confirmation");
    if (formConfirmation) {
      formConfirmation.textContent =
        "Thank you! We have received your message and will respond within 24-48 business hours.";
      formConfirmation.classList.remove("hidden");
      setTimeout(() => {
        formConfirmation.classList.add("hidden");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center mb-14 mt-20 sm:mt-30 ">
      <p className="text-black text-center tracking-wider font-bold select-none text-3xl py-2 ">
        Get In Touch With Our Team
      </p>
      <p className="select-none text-center pt-3 pb-5 ">
        Have a question or need support? <br /> Please fill out the form below,
        and we will get back to you promptly.
      </p>

      <div
        id="form-confirmation"
        className="hidden mb-4 p-3 bg-[#74C69D] text-white rounded-lg shadow-md w-full max-w-sm text-center"
      >
        Form submitted successfully!
      </div>

      <div className="flex flex-col md:flex-row w-full justify-evenly gap-8 h-full px-5 pb-3 sm:pb-15 sm:px-14 items-start">
        {/* Contact Form Section */}
        <form
          onSubmit={handlesubmit}
          className="bg-white  h-full formm flex flex-col rounded-lg shadow-2xl w-full sm:w-[400px] p-8 "
        >
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
            placeholder="John Doe"
            className=" appearance-none rounded w-full py-2 px-3 text-black bg-zinc-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
            required
          />

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
            placeholder="contact@company.com"
            className=" appearance-none rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
            required
          />

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
            placeholder="(123) 456-7890"
            className=" appearance-none rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-1 mt-5 "
            htmlFor="inquiryType"
          >
            Reason for Contact:
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              value={inquiryType}
              onChange={(event) => setInquiryType(event.target.value)}
              className=" appearance-none rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] pr-10"
            >
              <option disabled value="General Inquiry">
                Select a Reason
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Sales/Partnership">Sales/Partnership</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Billing Question">Billing Question</option>
            </select>
            <FaArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
          </div>

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
            placeholder="Type your detailed message here..."
            className=" appearance-none rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-[#74C69D] "
            required
          />

          <button
            type="submit"
            className="bg-[#74C69D] hover:bg-[#529172] cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[50%] m-auto mt-10"
          >
            submit
          </button>
        </form>

        {/* Map and Info Section (New) */}
        <div className=" w-full md:w-[40%] flex flex-col gap-6 ">
          {/* Map */}
          <div className="w-full h-[250px] sm:h-[350px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.936681026417!2d72.87105267490074!3d19.07609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63065a88c3d%3A0x63351e60f5c94207!2sMumbai!5e0!3m2!1sen!2sin!4v1620999900000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg shadow-xl"
            ></iframe>
          </div>

          {/* Address and Contact Details */}
          <div className="bg-white p-5 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Office</h3>
            <div className="flex items-start mb-3">
              <FaMapMarkerAlt
                className="text-[#74C69D] mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="font-semibold text-sm">Headquarters</p>
                <p className="text-gray-600 text-sm">
                  123 Business Tower, Financial District, Mumbai, India - 400001
                </p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <FaPhone
                className="text-[#74C69D] mr-3 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-600 text-sm">
                <a href="tel:+911234567890">+91 123 456 7890</a>
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope
                className="text-[#74C69D] mr-3 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-600 text-sm">
                <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
              </p>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Working Hours: Mon - Fri, 9:00 AM - 5:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
