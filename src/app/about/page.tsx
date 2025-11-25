"use client";
import Aboutme from "@/components/Aboutme";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="bg-[#182449] min-h-screen pt-30">
      <motion.div
        className="container mx-auto px-4 snap-y snap-mandatory scroll-smooth bg-[#182449]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <Aboutme />
      </motion.div>
    </div>
  );
};

export default ContactForm;
