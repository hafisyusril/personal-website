"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegUser, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { GiHamburgerMenu } from "react-icons/gi";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { BiLike } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/30 backdrop-blur-2xl shadow-md">
      <div className="container mx-auto flex flex-row md:flex-row justify-between items-center py-4 gap-4">
        <div className="flex px-8">
          <Link href={"/"}>
            <p className="text-green-500 font-bold text-xl">YusCODE.</p>
          </Link>
        </div>
        <NavigationMenu viewport={false} className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem className="hidden md:inline-block">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-green-500">
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">
                          Register and Login page
                        </div>
                        <div className="text-muted-foreground">
                          Build Register and Login page properly
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Company Profile</div>
                        <div className="text-muted-foreground">
                          Build responsive and interactive design for company
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:inline-block">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-green-500">
                Contact Me
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[130px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://wa.me/6285156900361"
                        target="_blank"
                        className="flex-row items-center gap-2"
                      >
                        <FaWhatsapp className="text-green-500" />
                        WhatsApp
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="mailto:yusrilhafis@gmail.com"
                        target="_blank"
                        className="flex-row items-center gap-2"
                      >
                        <SiGmail className="text-red-500" />
                        Gmail
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:inline-block">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-green-500">
                Platforms
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[130px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://github.com/hafisyusril"
                        target="_blank"
                        className="flex-row items-center gap-2"
                      >
                        <FaGithub className="text-[#2b3137]" />
                        GitHub
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://www.linkedin.com/in/yusrilhafis/"
                        target="_blank"
                        className="flex-row items-center gap-2"
                      >
                        <FaLinkedin className="text-[#0077B5]" />
                        Linkedin
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

         
        </NavigationMenu>
        <div className="drawe md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex ml-auto mr-3">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn  text-green-500 bg-transparent border border-hidden drawer-button"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-60 px-4 py-20 gap-5">
              {/* Sidebar content here */}
              <li>
                <a href="#AboutMe"><FaRegUser className="h-6 w-6 text-green-500" />About Me</a>
              </li>
              <li>
                <a href="#Skills"><HiOutlineWrenchScrewdriver className="h-6 w-6 text-green-500" />Skills</a>
              </li>
              <li>
                <a href="#Portfolio"><IoDocumentTextOutline className="h-6 w-6 text-green-500" />Portfolio</a>
              </li>
              <li>
<a href="#Experience"><MdWorkOutline className="h-6 w-6 text-green-500" />Work Experience</a>
              </li>
              <li>
<a href="#Testimonial"><BiLike className="h-6 w-6 text-green-500" />Testimonials</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}
