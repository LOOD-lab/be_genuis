const footerLinks = {
  "INFORMATION": ["Accueil", "Mission", "Programmes", "Evenements"],
  "NAVIGATION": ["Accueil", "Utiliser", "Programmes", "Evenements"],
  "NOS ACTIVITES": ["Accueil", "Utiliser", "Programmes", "Evenements"],
  "NOUS SUIVRE": [],
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto mb-10">
        <div className="flex-1">
          <img src="/logo.png" alt="Be Genius" className="h-12 w-auto mb-4" />
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="flex-1">
            <h4 className="text-xs font-bold uppercase mb-4 text-yellow-400">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
              {title === "NOUS SUIVRE" && (
                <li className="flex gap-3 mt-2">
                  <a href="#" className="text-gray-400 hover:text-white text-lg">&#9654;</a>
                  <a href="#" className="text-gray-400 hover:text-white text-lg">f</a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-xs text-gray-500">BE GENIUS Institut. Tous droits reserves. Mise a jour le 11/01/2126</p>
      </div>
    </footer>
  )
}

export default Footer
