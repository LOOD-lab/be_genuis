const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white px-12 py-12 gap-8 min-h-screen-50">
      <div className="flex-1 max-w-lg">
        <h1 className="text-5xl font-black leading-tight text-gray-900 mb-6">
          Be genuis Celebre l&apos;intelligence pour sublimer le savoir-faire
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mb-10">
          Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-yellow-500 transition-colors"
        >
          DECOUVRIR BE GENIUS
        </a>
      </div>
      <div className="flex-1 relative w-full max-w-xl">
        <img
          src="/hero.png"
          alt="Be Genius orateur"
          className="w-full h-auto object-cover"
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 transition-colors w-14 h-20 flex items-center justify-center">
          <span className="text-black font-black text-2xl">&#62;</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
