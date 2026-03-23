import { useState, useEffect } from 'react'

const slides = [
  { img: "/event-banner.png", alt: "Be Genius 5e Edition" },
  { img: "/event-banner2.png", alt: "Be Genius Edition 2" },
  { img: "/event-banner3.png", alt: "Be Genius Edition 3" },
]

const EventBanner = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-72 md:h-96">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'bg-yellow-400 w-6 h-2' : 'bg-white opacity-60 w-2 h-2'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default EventBanner
