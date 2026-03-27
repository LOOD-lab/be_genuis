import useInView from '../hooks/useInView'

const col1 = ["Accueil", "Mission", "Programmes", "Evenements"]
const col2 = ["Accueil", "Utiliser", "Programmes", "Evenements"]
const col3 = ["Accueil", "Utiliser", "Programmes", "Evenements"]

const Footer = () => {
  const [ref, isVisible] = useInView()
  return (
    <footer ref={ref} className="bg-black text-white overflow-hidden">
      <div className="relative border-b border-gray-800 py-10 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400"></div>
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
            Celebrons l&apos;intelligence<br />
            <span className="text-yellow-400">pour sublimer le savoir-faire</span>
          </h3>
        </div>
        <a
          href="#"
          className="inline-block border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-3 text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap"
        >
          DECOUVRIR BE GENIUS
        </a>
      </div>
      <div className={`flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-8 md:px-16 py-14 animate-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="flex-1 min-w-32">
          <img src="/logo.png" alt="Be Genius" className="h-14 w-auto mb-4 brightness-0 invert" />
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
            Institut des Genies d&apos;Art Oratoire — Celebrons l&apos;intelligence pour sublimer le savoir-faire.
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-6">INFORMATION</h4>
          <ul className="space-y-3">
            {col1.map((l) => (
              <li key={l}>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-yellow-400 transition-all duration-300 inline-block"></span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-6">NAVIGATION</h4>
          <ul className="space-y-3">
            {col2.map((l) => (
              <li key={l}>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-yellow-400 transition-all duration-300 inline-block"></span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-6">NOS ACTIVITES</h4>
          <ul className="space-y-3">
            {col3.map((l) => (
              <li key={l}>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-yellow-400 transition-all duration-300 inline-block"></span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-6">NOUS SUIVRE</h4>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:border-yellow-400 group-hover:text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all text-xs font-bold">YT</div>
              <span className="text-xs text-gray-500 group-hover:text-white transition-colors">YouTube</span>
            </a>
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:border-yellow-400 group-hover:text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all text-xs font-bold">FB</div>
              <span className="text-xs text-gray-500 group-hover:text-white transition-colors">Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-600">BE GENIUS Institut &copy; 2026. Tous droits reserves.</p>
        <p className="text-xs text-gray-700">Mise a jour le 11/01/2026</p>
      </div>
    </footer>
  )
}

export default Footer
