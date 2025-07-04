"use client";
import Link from "next/link";
import { BiLike } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoDocumentTextOutline, IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

const SideBar = () => {
  const socialLinks = [
    {
      href: "/",
      icon: <IoHomeOutline className="h-6 w-6 text-green-500" />,
      label: "Home"
    },
    {
      href: "#AboutMe",
      icon: <FaRegUser className="h-6 w-6 text-green-500" />,
      label: "AboutMe",
    },
    {
      href: "#Skills",
      icon: <HiOutlineWrenchScrewdriver className="h-6 w-6 text-green-500" />,
      label: "Skills",
    },
    {
      href: "#Portfolio",
      icon: <IoDocumentTextOutline className="h-6 w-6 text-green-500" />,
      label: "Portfolio",
    },
    {
      href: "#Experience",
      icon: <MdWorkOutline className="h-6 w-6 text-green-500" />,
      label: "Experience",
    },
    {
      href: "#Testimonial",
      icon: <BiLike className="h-6 w-6 text-green-500" />,
      label: "Testimonials",
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col items-center gap-4 p-4">
        {socialLinks.map((link) => (
          <li key={link.label} className="group relative w-full">
            <Link
              href={link.href}
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 hover:scale-200 rounded-full transition-transform"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
            {/* Tooltip */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {link.label}
            </span>
            {/* Tambahkan <hr> kecuali untuk item terakhir */}
              <hr className="border-green-500 my-2 w-8" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

