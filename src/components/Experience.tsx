"use client";
import { experiences } from "@/lib/experience";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className="flex flex-col md:flex-row bg-[#182449] text-[#D6E1FF] p-8 gap-8">
      {/* ================= Left Timeline Section ================= */}
      <div className="relative flex flex-col items-start">
        {/* Vertical Line */}
        <div className="absolute left-[14px] top-0 bottom-0 w-[4px] bg-[#2D3C70]" />

        {/* Timeline Items */}
        <ul className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <li
              key={index}
              onClick={() => setSelectedId(index)}
              className="relative cursor-pointer flex items-center group"
            >
              {/* Dot */}
              <div
                className={`z-10 w-7 h-7 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                  ${
                    selectedId === index
                      ? "bg-green-500 border-green-500 scale-110 shadow-[0_0_10px_#22c55e]"
                      : "bg-[#182449] border-[#2D3C70] group-hover:border-green-500"
                  }`}
              >
                {selectedId === index && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </div>

              <span
                className={`ml-4 transition ${
                  selectedId === index
                    ? "text-green-500"
                    : "hover:text-green-500"
                }`}
              >
                {exp.company}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Right Detail Box ================= */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className=""
          >
            <h2 className="text-2xl font-medium mb-2 text-[#D6E1FF]">
              {experiences[selectedId].position}{" "}
              <span className="text-green-400 font-medium">
                @ {experiences[selectedId].company}
              </span>
            </h2>
            <p className="text-sm mb-4">{experiences[selectedId].duration}</p>
            <ul className="list-none pl-2 space-y-2">
              {experiences[selectedId].descriptions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <TiTick className="text-green-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
