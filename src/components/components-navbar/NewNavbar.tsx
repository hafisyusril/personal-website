"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NewNavbar = () => {
  const leftMenu = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/'},
  ]

  return (
    <nav className="container mx-auto flex justify-between items-center">

      <div className="flex gap-8 m-8 items-center">
        <h1 className="hover:bg-gray-200 rounded">Home</h1>
        <h1 className="hover:bg-gray-200 rounded">About</h1>
      </div>

      <div className="flex gap-8 m-8 items-center">
        <h1 className="hover:bg-gray-200 rounded-lg">Work</h1>
        <h1 className="hover:bg-gray-200 rounded">Contact</h1>
        <h1 className="hover:bg-gray-200 rounded">
          <GiHamburgerMenu />
        </h1>
      </div>
    </nav>
  );
};

export default NewNavbar;
