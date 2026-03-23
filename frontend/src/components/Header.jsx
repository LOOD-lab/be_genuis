const navLinks = ['Accueil', 'Missions', 'Programmes', 'Événements', 'Contact']

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Be Genius Logo" className="h-16 w-auto" />
      </div>
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          
            key={link}
            href="#"
            className={`text-sm font-semibold hover:text-yellow-400 transition-colors ${
              link === 'Accueil' ? 'underline underline-offset-4' : ''
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
