"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
  
    {
      name: "Product",
      href: "/products",
    },
  ];
  return (
    <div>
      <ul className="flex gap-3 p-2 text-center">
        {menuItems.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={ pathname === `${link.href}` ? "text-blue-500" : "" } >{link.name}</Link>
          </li>
        ))
        }
      </ul>
    </div>
  );
}
