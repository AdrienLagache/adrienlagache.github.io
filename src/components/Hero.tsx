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
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [visibleChars]);

  return (
    <section className="flex flex-col items-start justify-center text-left px-6 sm:px-12 py-12 max-w-7xl mx-auto min-h-[calc(100vh-5rem)]">
      {/* Titre sans animation mais avec couleurs */}
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-foreground mb-10 break-words">
        Spécialisé en{" "}
        <span className="text-pink-400">Next.js</span> et{" "}
        <span className="text-cyan-400">React</span>, je développe des interfaces modernes tout en maîtrisant les bases d&apos;une architecture backend avec{" "}
        <span className="text-red-500">NestJS</span> et{" "}
        <span className="text-yellow-400">Docker</span>.
      </h1>

      {/* Paragraphe animé lettre par lettre */}
      <div className="text-sm sm:text-lg text-neutral-400 mb-20 max-w-4xl relative">
        {/* Texte complet invisible pour réserver l'espace */}
        <p className="opacity-0 pointer-events-none" aria-hidden="true">
          {paragraphText}
        </p>
        
        {/* Texte visible qui s'affiche progressivement */}
        <p className="absolute top-0 left-0 w-full">
          {paragraphText.slice(0, visibleChars)}
          <span className="inline-block w-[1ch] animate-blink text-neutral-400">|</span>
        </p>
      </div>

      {/* Bouton animé après fin d'écriture */}
      <div
        className={`transform transition-all duration-700 ease-in-out ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="#projets"
          className="px-6 py-3 bg-cyan-600 text-foreground text-sm sm:text-lg rounded-md hover:bg-cyan-500 transition"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}
