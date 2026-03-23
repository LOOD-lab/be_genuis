import { useState, useEffect } from 'react'
import useInView from '../hooks/useInView'

const slides = [
  { img: "/hero.png" },
  { img: "/hero2.png" },
  { img: "/hero3.png" },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [ref, isVisible] = useInView()

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={ref} className="flex flex-col md:flex-row items-center bg-white px-8 md:px-12 py-12 md:py-20 gap-10 overflow-hidden">
      <div className={`flex-1 max-w-lg animate-fade-left ${isVisible ? 'visible' : ''}`}>
        <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6">
          Be genuis Celebre l&apos;intelligence pour sublimer le savoir-faire
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 text-xs uppercase tracking-widest hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
        >
          DECOUVRIR BE GENIUS
        </a>
      </div>
      <div className={`flex-1 relative w-full max-w-xl animate-fade-right ${isVisible ? 'visible' : ''}`}>
        <div className="relative w-full h-80 md:h-96 overflow-hidden">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.img}
              alt="Be Genius"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((p) => (p + 1) % slides.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 w-12 h-20 flex items-center justify-center transition-colors z-10"
        >
          <span className="text-black font-black text-xl">&#62;</span>
        </button>
        <div className="flex gap-2 justify-center mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-yellow-400' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
