const Vision = () => {
  return (
    <section className="py-20 px-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Notre vision</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
        <div className="flex-1">
          <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-5">
            BE GENIUS L&apos;INTELLIGENCE POUR SUBLIMER LE SAVOIR
          </h3>
          <p className="text-gray-600 text-sm leading-loose">
            Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Bee genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire gence pour sublimoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="w-full h-72 bg-gray-200 overflow-hidden">
            <img
              src="/vision.png"
              alt="Notre vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
