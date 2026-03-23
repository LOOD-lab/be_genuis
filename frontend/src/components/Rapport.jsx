const activities = [
  { label: "Parainnage", img: "/rapport1.png" },
  { label: "Seances de mentorat", img: "/rapport2.png" },
  { label: "Competition", img: "/rapport3.png" },
]

const Rapport = () => {
  return (
    <section className="py-20 px-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Rapport d&apos;activite 2025/26
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
        {activities.map((item) => (
          <div key={item.label} className="flex-1 max-w-xs">
            <div className="w-full h-48 bg-gray-200 overflow-hidden mb-3">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-sm text-gray-900 mb-1">{item.label}</p>
            <div className="w-8 h-0.5 bg-gray-900"></div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between max-w-3xl mx-auto border-l-4 border-yellow-400 bg-gray-50 p-5">
        <p className="text-sm text-gray-600 leading-relaxed flex-1 pr-6">
          Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
        </p>
        <button className="bg-gray-300 hover:bg-gray-400 transition-colors text-black text-xs font-bold px-5 py-3 uppercase tracking-wider whitespace-nowrap">
          TELECHARGER
        </button>
      </div>
    </section>
  )
}

export default Rapport
