"use client";

import Navbar from "@/components/components-navbar/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function PortfolioPage() {
  const projects = [
    {
      title: "Company Profile byU",
      image: "/byu.png",
      description:
        "byU's interactive and easily accessible company profile website, complete with digital service information search features.",
      href: "/portfolio/byu",
    },
    {
      title: "Blu Digital Banking",
      image: "/blu-logo.png",
      description:
        "A digital banking platform with a modern and responsive appearance that focuses on user experience and ease of transactions.",
      href: "/portfolio/blu",
    },
    {
      title: "Blibli E-commerce",
      image: "/blibli-logo.png",
      description:
        "E-commerce platform with fast product search system and modern and responsive interface design.",
      href: "/portfolio/blibli",
    },
  ];

  return (
    <div className="bg-[#182449]">
      <Navbar />

      <main className="relative">
        {projects.map((project, index) => (
          <motion.section
            key={index}
            className={`sticky top-0 h-screen z-[${
              10 + index
            }] flex items-center justify-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-[#182449] flex flex-col items-center justify-center px-8">
              <div className="max-w-4xl w-full text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-green-500 mb-8">
                  {project.title}
                  <span className="text-4xl md:text-3xl font-semibold text-[#D6E1FF]">
                    .
                  </span>
                </h1>

                <div className="relative w-full h-64 md:h-96 mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg border border-green-500"
                  />
                </div>

                <p className="text-lg md:text-xl text-[#D6E1FF]/80 mb-6">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="inline-block px-6 py-3 bg-green-500 text-[#0F172A] font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Show Details
                </Link>
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioPage;
