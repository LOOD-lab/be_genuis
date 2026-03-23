const EventBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full h-72 bg-gray-800 overflow-hidden">
        <img
          src="/event-banner.png"
          alt="Be Genius 5e Edition"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1 opacity-90">
          SOUS LE HAUT PATRONAGE DE MADAME
        </p>
        <h2 className="text-yellow-400 text-5xl md:text-7xl font-black tracking-wide">
          BELINDA AYESSA
        </h2>
        <p className="text-white text-xs uppercase tracking-widest mt-3 opacity-90">
          BE GENIUS 5e EDITION — MEMORIAL PIERRE SAVORGNAN DE BRAZZA
        </p>
      </div>
    </section>
  )
}

export default EventBanner
