"use client";

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-800 flex flex-wrap justify-between items-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} y.kacem. Tous droits réservés.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-400 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
