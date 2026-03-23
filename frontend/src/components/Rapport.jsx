const activities = [
  { label: "Parainnage", img: "/rapport1.png" },
  { label: "Seances de mentorat", img: "/rapport2.png" },
  { label: "Competition", img: "/rapport3.png" },
]

const Rapport = () => {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Rapport d activite 2025/26</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
        {activities.map((item) => (
          <div key={item.label} className="flex-1 max-w-xs">
            <img src={item.img} alt={item.label} className="w-full h-48 object-cover mb-3" />
            <p className="font-semibold text-sm">{item.label}</p>
            <div className="w-8 h-0.5 bg-black mt-1"></div>
          </div>
        ))}
      </div>
      <div className="border-l-4 border-yellow-400 pl-4 flex items-center justify-between max-w-2xl mx-auto bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          Be genuis Celebrons l intelligence pour sublimer le savoir-faire Be genuis Celebrons l intelligence pour sublimer le savoir-faire
        </p>
        <button className="ml-6 bg-gray-200 text-black text-xs font-bold px-4 py-2 uppercase hover:bg-gray-300 whitespace-nowrap">
          TELECHARGER
        </button>
      </div>
    </section>
  )
}

export default Rapport
