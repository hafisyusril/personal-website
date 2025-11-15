import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

 const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <footer
        id="Contacts"
        className="w-full py-10  flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-10 rounded-t-2xl"
      >
        <ul>
          <li className="flex gap-10">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://wa.me/6285156900361"
                  target="_blank"
                  className="items-center"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">Text to WhatsApp</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:yusrilhafis@gmail.com"
                  target="_blank"
                  className="items-center"
                  rel="noopener noreferrer"
                >
                  <SiGmail className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">Text to Gmail</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/hafisyusril"
                  target="_blank"
                  className="items-center"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">GitHub Profile</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/yusrilhafis/"
                  target="_blank"
                  className="items-center"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-green-500 size-8 hover:scale-150 transition-transform" />
                </a>
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


