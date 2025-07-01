import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

 const Footer = () => {
  return (
    <div>
      <footer
        id="Contacts"
        className="w-full py-6 bg-gray-900 flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-10 rounded-t-2xl"
      >
        <ul>
          <li className="flex gap-10">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://wa.me/6285156900361"
                  target="_blank"
                  className="items-center"
                >
                  <FaWhatsapp className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Text to WhatsApp</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="mailto:yusrilhafis@gmail.com"
                  target="_blank"
                  className="items-center gap-2"
                >
                  <SiGmail className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Text to Gmail</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/hafisyusril"
                  target="_blank"
                  className="items-center gap-2"
                >
                  <FaGithub className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">GitHub Profile</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.linkedin.com/in/yusrilhafis/"
                  target="_blank"
                  className="items-center gap-2"
                >
                  <FaLinkedin className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Linkedin Profile</TooltipContent>
            </Tooltip>
          </li>
        </ul>
        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} Yusril Hafis. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer


