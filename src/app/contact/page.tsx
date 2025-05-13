import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="w-full px-6 sm:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Me contacter
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Coordonnées à gauche */}
          <div className="flex-1 space-y-6 text-neutral-400 text-sm order-1 lg:order-none">
            <div>
              <FaEnvelope className="inline mr-2 text-white" />
              lagacheadrien64@gmail.com
            </div>
            <div>
              <FaLinkedin className="inline mr-2 text-white" />
              <a
                href="https://www.linkedin.com/in/adrien-lagache-163462282/"
                className="hover:text-cyan-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/adrien-lagache
              </a>
            </div>
            <div>
              <FaGithub className="inline mr-2 text-white" />
              <a
                href="https://github.com/AdrienLagache"
                className="hover:text-cyan-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/AdrienLagache
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                className="inline mr-2 text-white"
              >
                <circle cx="12" cy="12" r="10" />
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="12"
                  fill="black"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                >
                  F
                </text>
              </svg>
              <a
                href="https://fr.fiverr.com/s/VYLxr75"
                className="hover:text-cyan-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir mon offre Fiverr
              </a>
            </div>
          </div>

          {/* Formulaire à droite */}
          <form
            action="https://formspree.io/f/your-id" // remplace si besoin
            method="POST"
            className="flex-1 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-neutral-400 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-neutral-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-neutral-400 mb-1"
              >
                Objet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-neutral-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-neutral-900 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
