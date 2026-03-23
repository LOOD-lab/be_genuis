const Contact = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">Localisations</h3>
          <div className="bg-gray-100 h-48 mb-4 flex items-center justify-center text-gray-400 text-sm">
            Carte Google Maps
          </div>
          <p className="font-semibold text-sm">Brazzaville</p>
          <p className="text-xs text-gray-500 mb-2">Memorial Pierre Savorgnan de brazza, Brazzaville, Module 2</p>
          <p className="font-semibold text-sm">Pointe - Noire</p>
          <p className="text-xs text-gray-500">Memorial Pierre Savorgnan de brazza, Brazzaville, Module 2</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">Contactez Be Genius</h3>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-yellow-400 text-xl">&#128222;</span>
            <span className="font-semibold">04 454 2364</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 text-xl">&#9993;</span>
            <span className="text-gray-500 text-sm">email@begenius.cg</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
