"use client";

import { cn } from "@/lib/utils";
import { Menu, X, Drum, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Éducation", href: "#education" },
  { name: "Instruments", href: "#Instruments" },
  { name: "Tournées", href: "#travels" },
  { name: "Performances", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo enrichi avec effet de lueur et animation */}
        <a
          href="#hero"
          className="text-2xl font-extrabold flex items-center gap-2 tracking-wide group relative"
        >
          <div className="relative">
            <Drum className="h-7 w-7 text-cyan-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
            <Sparkles className="h-3 w-3 text-blue-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500">
            Percu<span className="text-white">skan</span>
          </span>
          <div className="absolute -inset-2 bg-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-gray-200 hover:text-cyan-400 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          {/* Theme toggle on desktop */}
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme toggle on mobile */}

          {/* Menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-gray-200 z-50"
            aria-label={isMenuOpen ? "Fermer menu" : "Ouvrir menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-gray-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transform transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-10 text-2xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-gray-200 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};