const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Be Genius Logo" className="h-20 w-auto" />
      </div>
      <nav className="flex items-center gap-10">
        <a href="#" className="text-sm font-bold border-b-2 border-black pb-0.5">Accueil</a>
        <a href="#" className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition-colors">Missions</a>
        <a href="#" className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition-colors">Programmes</a>
        <a href="#" className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition-colors">Evenements</a>
        <a href="#" className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition-colors">Contact</a>
      </nav>
    </header>
  )
}

export default Header
