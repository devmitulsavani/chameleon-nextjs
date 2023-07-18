"use client";
import React, { useState, useEffect } from "react";

const ContactFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };

    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);
  return (
    <>
      <form id="contactForm" className="flex flex-wrap -mx-4 mt-4 md:mt-9">
        <fieldset className="w-full sm:w-1/2 px-4 py-3 sm:py-5">
          <label
            htmlFor="name"
            className="capitalize text-base sm:text-lg md:text-[20px] font-medium block mb-4"
          >
            name
          </label>
          <input
            type="text"
            id="name"
            placeholder="name"
            required
            className="placeholder:capitalize w-full px-4 py-3 border border-black rounded-[10px] placeholder:opacity-50 text-base sm:text-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className="w-full sm:w-1/2 px-4 py-3 sm:py-5">
          <label
            htmlFor="email"
            className="capitalize text-base sm:text-lg md:text-[20px] font-medium block mb-4"
          >
            email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="placeholder:capitalize w-full px-4 py-3 border border-black rounded-[10px] placeholder:opacity-50 text-base sm:text-lg"
          />
        </fieldset>
        <fieldset className="w-full sm:w-1/2 px-4 py-3 sm:py-5">
          <label
            htmlFor="mobileNumber"
            className="appearance-none capitalize text-base sm:text-lg md:text-[20px] font-medium block mb-4"
          >
            mobile number
          </label>
          <input
            id="mobileNumber"
            type="text"
            placeholder="mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            className="placeholder:capitalize w-full px-4 py-3 border border-black rounded-[10px] placeholder:opacity-50 text-base sm:text-lg"
          />
        </fieldset>
        <fieldset className="w-full sm:w-1/2 px-4 py-3 sm:py-5">
          <label
            htmlFor="subject"
            className="capitalize text-base sm:text-lg md:text-[20px] font-medium block mb-4"
          >
            subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="placeholder:capitalize w-full px-4 py-3 border border-black rounded-[10px] placeholder:opacity-50 text-base sm:text-lg"
          />
        </fieldset>
        <fieldset className="w-full px-4 py-3 sm:py-5">
          <label
            htmlFor="message"
            className="capitalize text-base sm:text-lg md:text-[20px] font-medium block mb-4"
          >
            message
          </label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
            className="placeholder:capitalize resize-none w-full px-4 py-3 border border-black rounded-[10px] placeholder:opacity-50 text-base sm:text-lg"
          ></textarea>
        </fieldset>
        <fieldset className="w-full px-4 py-3 sm:py-5">
          <input
            type="submit"
            value="send"
            className="block text-center bg-secondary w-full py-4 font-bold text-white uppercase text-lg rounded-[10px] cursor-pointer hover:opacity-80 duration-300"
          />
        </fieldset>
      </form>
    </>
  );
};

export default ContactFrom;
