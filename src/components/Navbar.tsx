"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#182449]/30 backdrop-blur-2xl">
      <div className="container mx-auto px-4 flex flex-row md:flex-row justify-between items-center py-4 gap-4">
        <div className="flex">
          <Link href={"/"}>
            <p className="text-green-500 font-mono text-xl cursor-pointer">
              YusCODE.
            </p>
          </Link>
        </div>

        <div className="gap-6 hidden md:flex">
          <div>
            <Link
              href={"/"}
              className={`font-normal text-xl cursor-pointer ${
                pathname === "/"
                  ? "text-green-200" 
                  : "text-green-500 hover:text-green-200"
              }`}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href={"/portfolio"}
              className={`font-normal text-xl cursor-pointer ${
                pathname === "/portfolio"
                  ? "text-green-200" 
                  : "text-green-500 hover:text-green-200"
              }`}
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Link
              href={"/about"}
              className={`font-normal text-xl cursor-pointer ${
                pathname === "/about"
                  ? "text-green-200"
                  : "text-green-500 hover:text-green-200"
              }`}
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex">
          <Link
            href={"/contact"}
            className={`font-bold text-xl cursor-pointer ${
              pathname === "/contact"
                ? "text-green-200"
                : "text-green-500 hover:text-green-200"
            }`}
          >
            <IoChatbubbleEllipsesOutline />
          </Link>
        </div>

        
      </div>
    </nav>
  );
}
