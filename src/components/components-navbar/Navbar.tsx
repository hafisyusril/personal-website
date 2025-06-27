"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
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

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

export default function Navbar() {
  return (
    <nav className="container mx-auto flex flex-row md:flex-row justify-between items-center py-4 gap-4">
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
                      <div className="font-medium">Register and Login page</div>
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
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://www.instagram.com/hafisyusril/"
                      target="_blank"
                      className="flex-row items-center gap-2"
                    >
                      <FaInstagram className="text-pink-500" />
                      Instagram
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex flex-row bg-transparent hover:bg-transparent text-green-500 md:hidden">
              <GiHamburgerMenu />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute right-0 top-full  mt-2 w-56 bg-white shadow-md z-50 rounded-md origin-top-right">
              <ul className="grid w-[50px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href={""}>Projects</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href={"#Contacts"}>Contact Me</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href={""}>Platform</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div></div>
    </nav>
  );
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
