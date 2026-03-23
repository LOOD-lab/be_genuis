const col1 = ["Accueil", "Mission", "Programmes", "Evenements"]
const col2 = ["Accueil", "Utiliser", "Programmes", "Evenements"]
const col3 = ["Accueil", "Utiliser", "Programmes", "Evenements"]

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 px-12">
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto mb-10">
        <div className="flex-1 min-w-32">
          <img src="/logo.png" alt="Be Genius" className="h-14 w-auto mb-4" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">INFORMATION</h4>
          <ul className="space-y-2">
            {col1.map((l) => (
              <li key={l}><a href="#" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">NAVIGATION</h4>
          <ul className="space-y-2">
            {col2.map((l) => (
              <li key={l}><a href="#" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">NOS ACTIVITES</h4>
          <ul className="space-y-2">
            {col3.map((l) => (
              <li key={l}><a href="#" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">NOUS SUIVRE</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-colors text-xs">YT</a>
            <a href="#" className="w-8 h-8 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-colors text-xs">FB</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-5 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <p className="text-xs text-gray-600">
          BE GENIUS Institut. Tous droits reserves. Mise a jour le 11/01/2126
        </p>
        <p className="text-xs text-gray-600 mt-2 md:mt-0">Membre par: CCCO</p>
      </div>
    </footer>
  )
}

export default Footer
