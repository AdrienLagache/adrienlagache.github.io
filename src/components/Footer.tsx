"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-neutral-800 py-4 px-6 bg-black text-white">
      <div className="flex flex-col items-center gap-4 text-sm text-neutral-400">
        <div className="flex gap-6 text-xl items-center">
          <a
            href="https://github.com/AdrienLagache"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-lagache/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:adrien@example.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://fr.fiverr.com/s/VYLxr75"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  width="20"
  height="20"
  fill="currentColor"
  className="text-white/60 hover:text-cyan-400 transition"
>
  <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
  <circle cx="11.5" cy="1.5" r="1.5" />
</svg>

          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Adrien Lagache – Tous droits réservés.
        </p>
        <p>
          <a
            href="https://iconscout.com/icons/fiverr"
            className="text-xs hover:text-cyan-400 transition"
            target="_blank"
          >
            Fiverr
          </a>{" "}
          by{" "}
          <a
            href="https://iconscout.com/contributors/pixel-icons"
            className="text-xs hover:text-cyan-400 transition"
            target="_blank"
          >
            Pixel Icons
          </a>
        </p>
      </div>
    </footer>
  );
}
