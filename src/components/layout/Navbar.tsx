"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "work", href: "#projects" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-base/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#top"
          className="font-mono-custom text-accent text-sm tracking-widest hover:opacity-80 transition-opacity"
        >
          Ann Chisom Sokwueaku
        </Link>

        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono-custom text-[11px] text-text-secondary uppercase tracking-widest hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
