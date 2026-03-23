import useInView from '../hooks/useInView'

const Mission = () => {
  const [ref, isVisible] = useInView()
  return (
    <section ref={ref} className="py-20 px-8 md:px-12 bg-gray-50 text-center">
      <div className={`max-w-3xl mx-auto animate-fade-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Notre mission</h2>
        <div className="w-12 h-1 bg-yellow-400 mx-auto mb-10"></div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire Be genuis Celebrons l&apos;intelligence pour sublimer le savoir-faire
        </p>
      </div>
    </section>
  )
}

export default Mission
