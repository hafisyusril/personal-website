import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
   <div className="flex flex-col md:flex-row items-center py-5 justify-between gap-6">
  {/* Kiri: Intro */}
  <div className="space-y-3 md:w-2/3">
    <p className="text-[#3DD68C]">
      Hi, my name is{" "}
      <span className="text-[#3DD68C] text-2xl font-bold">
        Yusril Hafis
      </span>
    </p>
    <h1 className="text-3xl md:text-4xl font-bold text-[#D6E1FF]">
      Fullstack Developer
    </h1>
    <p className="text-[#D6E1FF]">
      Specializing in building clean, modern, and user-focused websites for
      exceptional digital experience.
    </p>
    <div className="flex flex-wrap items-center gap-2 md:flex-row justify-start">
      <Button className="bg-blue-900 text-green-500 cursor-pointer">
        <Link href={"/contact-form"}>Contact me</Link>
      </Button>
      <Button className="bg-blue-900 text-green-500 cursor-pointer">
        <Link href={"/portfolio"}>My Portfolio</Link>
      </Button>
    </div>
  </div>

  {/* Kanan: Foto Profil */}
  <div className="relative w-70 h-70 md:w-100 md:h-100 rounded-full overflow-hidden shadow-lg justify-end">
    <Image
      src="/semi-professional-4.webp"
      alt="Professional Photo"
      fill
      className="object-cover"
    />
  </div>
</div>

  );
};

export default Hero;
