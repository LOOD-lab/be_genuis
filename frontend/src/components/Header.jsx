const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      <div>
        <img src="/logo.png" alt="Be Genius Logo" className="h-16 w-auto" />
      </div>
      <nav className="flex items-center gap-8">
        <a href="#" className="text-sm font-semibold underline underline-offset-4">Accueil</a>
        <a href="#" className="text-sm font-semibold hover:text-yellow-400">Missions</a>
        <a href="#" className="text-sm font-semibold hover:text-yellow-400">Programmes</a>
        <a href="#" className="text-sm font-semibold hover:text-yellow-400">Evenements</a>
        <a href="#" className="text-sm font-semibold hover:text-yellow-400">Contact</a>
      </nav>
    </header>
  )
}

export default Header