"use client";

import { projects } from "@/lib/projects";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Footer from "./Footer";

export default function Portfolios() {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <motion.div
      className="pt-40 pb-35"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {" "}
      {/* Scrollable Projects */}
      <div className="w-full flex justify-center">
        <motion.ul
          ref={ref}
          style={{ maskImage }}
          className="flex overflow-x-scroll no-scrollbar gap-8  w-full max-w-6xl"
        >
          {projects.map((project) => (
            <li
              key={project.slug}
              className="flex-none w-[300px] md:w-[400px] bg-[#1B2B5B] rounded-2xl border border-green-500 shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-green-400 text-xl font-semibold mb-3">
                  {project.title}
                  <span className="text-[#D6E1FF]">.</span>
                </h2>

                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <p className="text-[#D6E1FF]/80 text-sm md:text-base mb-4">
                  {project.description}
                </p>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-block text-center px-4 py-2 bg-green-500 text-[#0F172A] font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Show Details
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

// ========== Scroll Mask Animation ==========
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
