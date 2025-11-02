"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/#about", label: "Про захід" },
    { href: "/#topics", label: "Напрямки" },
    { href: "/#program", label: "Програма" },
    { href: "/#speakers", label: "Спікери" },
    { href: "/#partners", label: "Партнери" },
    { href: "/#projects", label: "Реалізовані проєкти" },
    { href: "/#buy-ticket", label: "Придбати квиток" },
    { href: "/#contacts", label: "Контакти" },
  ];

  return (
    <header className="w-full bg-[#487307] text-[#fffaf1] fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold uppercase cursor-pointer">
          Geluka Agro
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#487307] w-full">
          <div className="max-w-7xl mx-auto w-full">
            <nav className="flex flex-col gap-4 p-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
