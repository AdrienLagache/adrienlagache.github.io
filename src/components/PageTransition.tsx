"use client";

import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll vers le haut sauf si il y a une ancre
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
    }

    // Démarrer l'animation après le montage
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Seulement au montage

  return (
    <div
      className={`w-full h-full transform transition-all duration-600 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
} 