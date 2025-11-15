"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "@/lib/projects"; // pastikan path-nya benar

const HomePortfolio = () => {
  const [showAll, setShowAll] = useState(false);

  // kalau showAll = false → tampil 4, kalau true → tampil semua
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-8">
      {/* === Grid Section === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full">
        {displayedProjects.map((project) => (
          <div
            key={project.slug}
            className="card bg-[#1d232a] w-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            <figure className="relative w-full h-48">
              <Image
                src={project.images[0]} 
                alt={`${project.title} image`}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/portfolio/${project.slug}`}>
                  <button className="btn btn-primary">Show Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === Show More Button === */}
      {!showAll && projects.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="btn btn-outline btn-primary mt-4"
        >
          Show More Projects
        </button>
      )}
    </div>
  );
};

export default HomePortfolio;
