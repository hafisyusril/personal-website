import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-5 justify-between gap-15">
      {/* Kiri: Intro */}
      <div className="space-y-6 md:w-2/3">
        <p className="text-[#D6E1FF]">
          Hi, my name is{" "}
          <span className="text-[#3DD68C] md:text-3xl font-bold">
            Yusril Haidar Hafis
          </span>
        </p>
        <h1 className="text-3xl md:text-6xl font-bold text-[#D6E1FF]">
          Fullstack Developer
        </h1>
        <p className="md:text-2xl text-[#D6E1FF]">
          Specializing in building clean, modern, and user-focused websites for
          exceptional digital experience.
        </p>
        <div className="flex flex-wrap items-center gap-4 md:flex-row justify-start">
          <Link href={"/contact"}>
            <Button className="bg-blue-900 text-green-500 cursor-pointer">
              Contact me
            </Button>
          </Link>
          <Link href={"/portfolio"}>
            <Button className="bg-blue-900 text-green-500 cursor-pointer">
              My Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Kanan: Foto Profil */}
      <div className="relative w-50 h-50 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-1 ring-green-500 ring-offset-30 md:ring-offset-40 ring-offset-[#172449]">
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
