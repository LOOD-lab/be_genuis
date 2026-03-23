const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white gap-10">
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
          Be genuis Celebre l intelligence pour sublimer le savoir-faire
        </h1>
        <p className="text-gray-600 mb-8 text-base leading-relaxed">
          Be genuis Celebrons l intelligence pour sublimer le savoir-faire Be genuis Celebrons l intelligence pour sublimer le savoir-faire
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 text-sm uppercase tracking-wide hover:bg-yellow-500 transition-colors"
        >
          DECOUVRIR BE GENIUS
        </a>
      </div>
      <div className="flex-1 relative max-w-xl w-full">
        <img
          src="/hero.png"
          alt="Be Genius"
          className="w-full h-auto object-cover"
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold text-2xl w-12 h-16 flex items-center justify-center hover:bg-yellow-500">
          &gt;
        </button>
      </div>
    </section>
  )
}

export default Hero
