import useInView from '../hooks/useInView'

const Vision = () => {
  const [ref, isVisible] = useInView()
  return (
    <section ref={ref} className="py-20 px-8 md:px-12 bg-gray-50">
      <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14 animate-fade-up ${isVisible ? 'visible' : ''}`}>
        Notre vision
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
        <div className={`flex-1 animate-fade-left ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6 border-l-4 border-yellow-400 pl-4">
            BE GENIUS L&apos;INTELLIGENCE POUR SUBLIMER LE SAVOIR
          </h3>
          <p className="text-gray-600 text-sm leading-loose">
            Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Bee genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire gence pour sublimoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
          </p>
        </div>
        <div className={`flex-1 w-full animate-fade-right ${isVisible ? 'visible' : ''}`}>
          <div className="w-full h-72 bg-gray-200 overflow-hidden shadow-lg">
            <img src="/vision.png" alt="Notre vision" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
