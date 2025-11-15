"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#182449] py-50">
      <motion.div
        className="snap-y snap-mandatory scroll-smooth bg-[#182449]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <main className="container mx-auto px-10 md:px-50">
          <p className="text-lg md:text-4xl font-bold text-[#D6E1FF] mb-10">
            Looking to partner or work together? Reach out through the contact
            below and I will get back to you in the next 48 hours.
          </p>
          <div className="space-y-5">
            <a
              href="https://wa.me/6285156900361"
              target="_blank"
              className="flex text-lg text-[#D6E1FF] gap-5 items-center hover:opacity-70 w-fit"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-500 md:size-5" />
              +62 851 5690 0361
            </a>
            <a
              href="mailto:yusrilhafis@gmail.com"
              target="_blank"
              className="flex text-lg text-[#D6E1FF] gap-5 items-center hover:opacity-70 w-fit"
              rel="noopener noreferrer"
            >
              <SiGmail className="text-red-500 md:size-5" />
              yusrilhafis@gmail.com
            </a>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default ContactForm;
