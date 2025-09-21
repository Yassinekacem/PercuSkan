"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Drum, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "Éducation", href: "#education" },
    { name: "Instruments", href: "#Instruments" },
    { name: "Tournées", href: "#travels" },
            { name: "Spectacles", href: "#spectacles" },
    { name: "Performances", href: "#performances" },
    { name: "Contact", href: "#contact" },


  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le défilement de la page quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-gray-900/80 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold flex items-center gap-2 tracking-wide group relative"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative">
            <Drum className="h-7 w-7 text-cyan-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
            <Sparkles className="h-3 w-3 text-orange-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.8)] transition-all duration-500">
            Percu<span className="text-white">skan</span>
          </span>
          <div className="absolute -inset-2 bg-orange-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
        </a>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative text-gray-200 hover:text-orange-400 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-200 z-60"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Overlay et menu mobile */}
        <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Overlay sombre semi-transparent */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu mobile */}
          <div className={`absolute top-0 left-0 w-full h-full overflow-y-auto transition-transform duration-300 bg-gray-900 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex flex-col items-center justify-center min-h-full space-y-8 py-20 px-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-300 py-3 w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;