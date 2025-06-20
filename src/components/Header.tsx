"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProjectsInView, setIsProjectsInView] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  // Détection de la section projets visible
  useEffect(() => {
    const projectsElement = document.getElementById("projets");
    
    if (!projectsElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% de la section visible
        rootMargin: "-100px 0px -100px 0px" // Offset pour le header sticky
      }
    );

    observer.observe(projectsElement);

    return () => observer.disconnect();
  }, [pathname]);

  // Détermine quel lien est actif
  const isLinkActive = (linkPath: string) => {
    if (linkPath === "/contact") {
      return pathname === "/contact";
    }
    
    if (linkPath === "/#projets") {
      return pathname === "/" && isProjectsInView;
    }
    
    if (linkPath === "/") {
      return pathname === "/" && !isProjectsInView;
    }
    
    return false;
  };

  const getLinkClasses = (linkPath: string) => {
    const baseClasses = "transition";
    const activeClasses = "text-cyan-400";
    const inactiveClasses = "hover:text-cyan-400";
    
    return isLinkActive(linkPath) 
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <>
      <header className="w-full px-6 py-4 border-b border-neutral-800 bg-background text-foreground sticky top-0 z-50">
        <nav className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground hover:text-cyan-400 transition"
          >
            Adrien Lagache
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-30 text-sm font-medium">
            <Link href="/" className={getLinkClasses("/")}>
              Accueil
            </Link>
            <Link href="/#projets" className={getLinkClasses("/#projets")}>
              Projets
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact
            </Link>
          </div>

          {/* Burger Button Mobile */}
          <button
            className="md:hidden text-foreground text-3xl"
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
        className={`md:hidden fixed top-15 left-0 w-full bg-background border-t border-neutral-800 px-6 py-6 space-y-4 flex flex-col gap-4 text-base font-medium transition-all duration-300 ease-in-out z-40 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className={getLinkClasses("/")}
          onClick={() => setMenuOpen(false)}
        >
          Accueil
        </Link>
        <Link
          href="/#projets"
          className={getLinkClasses("/#projets")}
          onClick={() => setMenuOpen(false)}
        >
          Projets
        </Link>
        <Link
          href="/contact"
          className={getLinkClasses("/contact")}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
