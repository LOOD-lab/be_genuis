import useInView from '../hooks/useInView'

const Contact = () => {
  const [ref, isVisible] = useInView()
  return (
    <section ref={ref} className="py-16 px-8 md:px-12 bg-white">
      <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
        <div className={`flex-1 animate-fade-left ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-5">Localisations</h3>
          <div className="w-full h-44 bg-gray-200 mb-5 flex items-center justify-center text-gray-400 text-sm">
            Google Maps
          </div>
          <div className="mb-3">
            <p className="font-bold text-sm text-gray-900">Brazzaville</p>
            <p className="text-xs text-gray-500 leading-relaxed">Avenue Pierre Savorgnan de Brazza, Brazzaville, Module 2</p>
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">Pointe - Noire</p>
            <p className="text-xs text-gray-500 leading-relaxed">Avenue Pierre Savorgnan de Brazza, Brazzaville, Module 2</p>
          </div>
        </div>
        <div className={`flex-1 animate-fade-right ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-5">Contactez<br />Be Genius</h3>
          <div className="flex items-center gap-4 mb-4 group cursor-pointer">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center text-black text-base group-hover:bg-black group-hover:text-yellow-400 transition-colors">
              &#128222;
            </div>
            <span className="font-semibold text-gray-900">04 454 2364</span>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center text-black text-base group-hover:bg-black group-hover:text-yellow-400 transition-colors">
              &#9993;
            </div>
            <span className="text-gray-600 text-sm">contact@begenius.cg</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
