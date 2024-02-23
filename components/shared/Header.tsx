"use client";

import Image from "next/image";
import logo from "@/public/images/logo_paintters-pm62id7wvwj8wgwfwlpq1is0m2uuzuqbdznwvf6yo0.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contect Us", href: "/contect" },
];

function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between px-20 items-center h-20">
      <Image src={logo} alt="" priority />
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index} className="mr-10">
            <Link
              className={`link ${
                pathname === link.href ? "text-[#009b83]" : ""
              } font-semibold`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
