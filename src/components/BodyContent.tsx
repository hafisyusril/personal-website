"use client";

import { motion } from "framer-motion";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import HomePortfolio from "./HomePortfolio";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

const BodyContent = () => {
  return (
    <motion.div
      className="container mx-auto px-4 snap-y snap-mandatory scroll-smooth"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Hero Section */}
      <section id="Hero" className="snap-start md:px-2 pt-2 md:py-12">
        <Hero />
      </section>

      <main className="space-y-8">
        {/* About Me Section */}

        {/* Portfolio Section */}
        <section
          id="Portfolio"
          className="min-h-screen snap-start pt-16 scroll-mt-16 text-[#D6E1FF] rounded-4xl"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Portfolio
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>
          <HomePortfolio />
        </section>

        {/* Experience Section */}
        <section
          id="Experience"
          className=" snap-start pt-16 scroll-mt-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Experience
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>

          <Experience />
        </section>

        {/* Skills Section */}
        <section id="Skills" className="snap-start pt-16 scroll-mt-16 ">
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Skills
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>

          <Skills />
        </section>

        {/* Testimonial Section */}
        <section
          id="Testimonial"
          className="snap-start py-16 scroll-mt-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Testimonials
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>

          <Testimonials />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default BodyContent;
