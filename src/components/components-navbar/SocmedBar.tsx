"use client";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const SocialMediaBar = () => {
  const socialLinks = [
    {
      href: "https://api.whatsapp.com/send?phone=6285156900361",
      icon: <FaWhatsapp className="h-6 w-6 text-green-500" />,
      label: "WhatsApp",
    },
    {
      href: "mailto:yusrilhafis@gmail.com",
      icon: <SiGmail className="h-6 w-6 text-red-600" />,
      label: "Gmail",
    },
    {
      href: "https://instagram.com/hafisyusril",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
      label: "Instagram",
    },
    {
      href: "https://github.com/hafisyusril",
      icon: <FaGithub className="h-6 w-6 text-gray-800" />,
      label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/yusrilhafis/",
        icon: <FaLinkedin className="h-6 w-6 text-gray-800"/>,
        label: "LinkedIn"
    }
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col items-center gap-6 bg-white shadow-lg rounded-r-lg p-4">
        {socialLinks.map((link) => (
          <li key={link.label} className="group relative">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
            {/* Tooltip */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {link.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaBar;
