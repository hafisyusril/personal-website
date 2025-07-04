import Navbar from "@/components/components-navbar/Navbar";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#182449] py-50">
      <main className="container mx-auto px-10 md:px-50">
        <Navbar />
        <p className="text-lg md:text-4xl font-bold text-[#D6E1FF] mb-10">
          Looking to partner or work together? Reach out through the contact
          below and I'll get back to you in the next 48 hours.
        </p>
        <div className="space-y-5">
          <a
            href="https://wa.me/6285156900361"
            target="_blank"
            className="flex text-lg text-[#D6E1FF] gap-5 items-center hover:opacity-70 w-fit"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-500 md:size-5" />+62 851 5690 0361
          </a>
          <a
            href="mailto:yusrilhafis@gmail.com"
            target="_blank"
            className="flex text-lg text-[#D6E1FF] gap-5 items-center hover:opacity-70 w-fit"
            rel="noopener noreferrer"
          >
            <SiGmail className="text-red-500 md:size-5" />yusrilhafis@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
};

export default ContactForm;
