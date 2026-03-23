import { useState, useEffect } from 'react'

const slides = [
  { img: "/event-banner.png", alt: "Be Genius 5e Edition" },
  { img: "/event-banner2.png", alt: "Be Genius Edition 2" },
  { img: "/event-banner3.png", alt: "Be Genius Edition 3" },
]

const EventBanner = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-80 md:h-96">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === current ? 'bg-yellow-400' : 'bg-white opacity-60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default EventBanner