"use client";

import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Démarrer l'animation après le montage
    const timer = setTimeout(() => {
      setIsVisible(true);
    });

    return () => clearTimeout(timer);
  }, []); // Seulement au montage

  return (
    <div
      className={`w-full h-full transform transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
} 