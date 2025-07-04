"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/components-navbar/Navbar";
import Footer from "@/components/Footer";

const Byu = () => {
  return (
    <div className="bg-[#182449]">
      <nav className="mb-15">
        <Navbar />
      </nav>
      <section className="px-4 md:px-20 py-10 space-y-20">
        {/* Title and Brief */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-green-500">
            Company Profile ByU
          </h1>
          <p className="mt-4 text-[#D6E1FF]">
            byU&apos;s interactive and easily accessible company profile website,
            complete with digital service information search features.
          </p>
        </div>

        {/* Fullwidth Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/byu.png"
            alt="byU Preview"
            fill
            className="object-cover"
          />
        </div>

        {/* Sticky Info + STAR Method */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sticky Left Column */}
          <div className="md:col-span-1 h-fit md:sticky top-20 border-2 border-green-500 rounded-lg p-2">
            <div className="space-y-2 text-[#D6E1FF]">
              <p>
                <span className="text-green-500 font-semibold">Client:</span>{" "}
                byU (Telkomsel)
              </p>
              <p>
                <span className="text-green-500 font-semibold">My Role:</span>{" "}
                Fullstack Developer
              </p>
              <p>
                <span className="text-green-500 font-semibold">Year:</span> 2025
              </p>
            </div>
          </div>

          {/* STAR Right Column */}
          <div className="md:col-span-2 space-y-10 text-[#D6E1FF]">
            <div>
              <h2 className="text-2xl font-bold text-green-500 mb-2">
                Situation
              </h2>
              <p>
                byU, a digital product by Telkomsel, needed a website revamp to
                enhance user engagement and better showcase their offerings.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-500 mb-2">Task</h2>
              <p>
                My main task was to rebuild the frontend and backend structure
                of the website, focusing on scalability, speed, and
                responsiveness.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-500 mb-2">Action</h2>
              <p>
                I used Next.js with TypeScript for the frontend, integrated the
                backend using Node.js and MongoDB, and deployed it using Vercel
                for performance optimization.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-500 mb-2">Result</h2>
              <p>
                The redesign resulted in a significant improvement in site speed
                and user engagement. Visitors found it easier to navigate and
                access key information.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Evidence Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative w-full h-[200px] md:h-[300px] rounded-lg overflow-hidden"
            >
              <Image
                src={`/screenshot-byu-${i}.png`}
                alt={`Preview ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* More Portfolio Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-500 mb-6">
            More Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#1E293B] rounded-lg shadow">
              <Link
                href="/portfolio/blu"
                className="text-green-400 text-lg font-semibold hover:underline"
              >
                Blu Digital Banking
              </Link>
              <p className="text-[#D6E1FF] text-sm mt-2">
                A digital banking platform with a modern and responsive
                appearance that focuses on user experience and ease of
                transactions.
              </p>
            </div>
            <div className="p-4 bg-[#1E293B] rounded-lg shadow">
              <Link
                href="/portfolio/blibli"
                className="text-green-400 text-lg font-semibold hover:underline"
              >
                Blibli E-Commerce
              </Link>
              <p className="text-[#D6E1FF] text-sm mt-2">
                E-commerce platform with fast product search system and modern
                and responsive interface design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Byu;
