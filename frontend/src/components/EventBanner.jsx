const EventBanner = () => {
  return (
    <section className="relative w-full">
      <img
        src="/event-banner.png"
        alt="Be Genius 5e Edition"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
        <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1">SOUS LE HAUT PATRONAGE DE MADAME</p>
        <h2 className="text-white text-4xl md:text-6xl font-black">BELINDA AYESSA</h2>
        <p className="text-yellow-400 text-sm mt-2 uppercase tracking-widest">BE GENIUS 5e EDITION</p>
      </div>
    </section>
  )
}

export default EventBanner
