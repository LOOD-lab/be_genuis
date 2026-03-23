import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between px-8 md:px-12 py-3 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div>
        <img src="/logo.png" alt="Be Genius Logo" className="h-16 md:h-20 w-auto" />
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-bold border-b-2 border-black pb-0.5 transition-colors hover:border-yellow-400">Accueil</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-yellow-500 transition-colors">Missions</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-yellow-500 transition-colors">Programmes</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-yellow-500 transition-colors">Evenements</a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-yellow-500 transition-colors">Contact</a>
      </nav>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col px-8 py-6 gap-5 z-50">
          <a href="#" className="text-sm font-bold">Accueil</a>
          <a href="#" className="text-sm font-semibold text-gray-700">Missions</a>
          <a href="#" className="text-sm font-semibold text-gray-700">Programmes</a>
          <a href="#" className="text-sm font-semibold text-gray-700">Evenements</a>
          <a href="#" className="text-sm font-semibold text-gray-700">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header
