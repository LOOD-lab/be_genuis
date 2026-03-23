const Contact = () => {
  return (
    <section className="py-16 px-12 bg-white">
      <div className="flex flex-col md:flex-row gap-16 max-w-4xl mx-auto">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Localisations</h3>
          <div className="w-full h-44 bg-gray-200 mb-5 flex items-center justify-center text-gray-400 text-sm">
            Google Maps
          </div>
          <div className="mb-3">
            <p className="font-bold text-sm text-gray-900">Brazzaville</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Avenue Pierre Savorgnan de Brazza, Brazzaville, Module 2
            </p>
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">Pointe - Noire</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Avenue Pierre Savorgnan de Brazza, Brazzaville, Module 2
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-5">
            Contactez<br />Be Genius
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm">
              &#128222;
            </div>
            <span className="font-semibold text-gray-900">04 454 2364</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm">
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
