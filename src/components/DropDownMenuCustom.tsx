"use client";

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

type DropdownItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type DropdownMenuProps = {
  label: string;
  items: DropdownItem[];
};

export default function DropdownMenuCustom({
  label,
  items,
}: DropdownMenuProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4 w-56 space-y-2 z-50">
        {items.map((item, index) => (
          <NavigationMenuLink asChild key={index}>
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </NavigationMenuLink>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
