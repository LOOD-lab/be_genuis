import useInView from '../hooks/useInView'

const activities = [
  { label: "Parainnage", img: "/rapport1.png" },
  { label: "Seances de mentorat", img: "/rapport2.png" },
  { label: "Competition", img: "/rapport3.png" },
]

const Rapport = () => {
  const [ref, isVisible] = useInView()
  return (
    <section ref={ref} className="py-20 px-8 md:px-12 bg-white">
      <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14 animate-fade-up ${isVisible ? 'visible' : ''}`}>
        Rapport d&apos;activite 2025/26
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-14">
        {activities.map((item, i) => (
          <div
            key={item.label}
            className={`flex-1 max-w-xs animate-fade-up animate-delay-${(i + 1) * 100} ${isVisible ? 'visible' : ''}`}
          >
            <div className="w-full h-52 bg-gray-200 overflow-hidden mb-4 group">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-bold text-sm text-gray-900 mb-2">{item.label}</p>
            <div className="w-10 h-0.5 bg-yellow-400"></div>
          </div>
        ))}
      </div>
      <div className={`flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto border-l-4 border-yellow-400 bg-gray-50 p-6 gap-4 animate-fade-up animate-delay-400 ${isVisible ? 'visible' : ''}`}>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
        </p>
        <button className="bg-gray-800 text-white text-xs font-bold px-6 py-3 uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap">
          TELECHARGER
        </button>
      </div>
    </section>
  )
}

export default Rapport
