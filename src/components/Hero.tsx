export default function Hero() {
    return (
      <section className="relative bottom-10 flex flex-col items-start justify-center text-left px-6 sm:px-12 py-12 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white mb-6">
          Spécialisé en <span className="text-pink-400">Next.js</span> et{" "}
          <span className="text-cyan-400">React</span>, je développe des interfaces modernes tout en maîtrisant les bases d’une architecture backend avec{" "}
          <span className="text-red-500">NestJS</span> et{" "}
          <span className="text-yellow-400">Docker</span>.
        </h1>
  
        <p className="text-sm sm:text-lg text-neutral-400 mb-8 max-w-2xl">
          Des composants bien structurés, un rendu rapide côté client comme côté serveur, et une approche modulaire pour des projets solides.
        </p>
  
        <a
          href="#projets"
          className="px-6 py-3 bg-cyan-600 text-white text-sm sm:text-lg rounded-md hover:bg-cyan-500 transition"
        >
          Voir mes projets
        </a>
      </section>
    )
  }
  