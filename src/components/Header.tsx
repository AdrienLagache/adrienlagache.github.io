"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full px-6 py-4 border-b border-neutral-800 bg-black text-white sticky top-0 z-50">
        <nav className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition"
          >
            Adrien Lagache
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-30 text-sm font-medium">
            <Link href="/" className="hover:text-cyan-400 transition">
              Accueil
            </Link>
            <Link href="/#projets" className="hover:text-cyan-400 transition">
              Projets
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </div>

          {/* Burger Button Mobile */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </header>

      {/* Menu Mobile */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-15 left-0 w-full bg-black border-t border-neutral-800 px-6 py-6 space-y-4 flex flex-col gap-4 text-base font-medium transition-all duration-300 ease-in-out z-40 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          Accueil
        </Link>
        <Link
          href="/#projets"
          className="hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          Projets
        </Link>
        <Link
          href="/contact"
          className="hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
