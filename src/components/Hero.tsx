"use client";

import { useEffect, useState } from "react";

const paragraphText =
  "Des composants bien structurés, un rendu rapide côté client comme côté serveur, et une approche modulaire pour des projets solides.";

const typingSpeed = 10;

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (visibleChars < paragraphText.length) {
      const timeout = setTimeout(
        () => setVisibleChars((c) => c + 1),
        typingSpeed
      );
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowButton(true), 100); // délai pour le bouton
    }
  }, [visibleChars]);

  return (
    <section className="flex flex-col items-start justify-center text-left px-6 sm:px-12 py-12 max-w-7xl mx-auto min-h-screen">
      {/* Titre sans animation mais avec couleurs */}
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white mb-6 break-words">
        Spécialisé en{" "}
        <span className="text-pink-400">Next.js</span> et{" "}
        <span className="text-cyan-400">React</span>, je développe des interfaces modernes tout en maîtrisant les bases d’une architecture backend avec{" "}
        <span className="text-red-500">NestJS</span> et{" "}
        <span className="text-yellow-400">Docker</span>.
      </h1>

      {/* Paragraphe animé lettre par lettre */}
      <p className="text-sm sm:text-lg text-neutral-400 mb-8 max-w-2xl min-h-[4rem]">
        {paragraphText.slice(0, visibleChars)}
        <span className="inline-block w-[1ch] animate-blink text-neutral-400">|</span>
      </p>

      {/* Bouton animé après fin d’écriture */}
      <div
        className={`transform transition-all duration-700 ease-out ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href="#projets"
          className="px-6 py-3 bg-cyan-600 text-white text-sm sm:text-lg rounded-md hover:bg-cyan-500 transition"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}
