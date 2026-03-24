import { useState } from 'react'
import useInView from '../hooks/useInView'
import { api } from '../services/api'

const Contact = () => {
  const [ref, isVisible] = useInView()
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const res = await api.post('/contact/', form)
    setLoading(false)
    if (res.id) {
      setStatus('success')
      setForm({ nom: '', email: '', telephone: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <section ref={ref} className="py-16 px-8 md:px-12 bg-white">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
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
            <p className="text-xs text-gray-500 leading-relaxed">Avenue Pierre Savorgnan de Brazza, Pointe-Noire, Module 2</p>
          </div>
        </div>
        <div className={`flex-1 animate-fade-right ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-5">Contactez Be Genius</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">T</div>
            <span className="font-semibold text-gray-900">04 454 2364</span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">@</div>
            <span className="text-gray-600 text-sm">contact@begenius.cg</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Nom *</label>
                <input required value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Email *</label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Telephone</label>
              <input value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Message *</label>
              <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none" />
            </div>
            {status === 'success' && (
              <p className="text-sm text-green-600 font-medium">Message envoye avec succes !</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">Une erreur est survenue. Reessayez.</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-black font-bold px-8 py-3 text-xs uppercase tracking-widest hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              {loading ? 'Envoi...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
