import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const empty = { titre: '', annee: '', description: '', fichier_url: '' }

const Rapports = () => {
  const [items, setItems] = useState([])
  const [form, setForm] = useState(empty)
  const [showForm, setShowForm] = useState(false)

  const load = async () => {
    const data = await api.get('/rapports/')
    if (Array.isArray(data)) setItems(data)
  }

  useEffect(() => { load() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post('/rapports/', form)
    setForm(empty)
    setShowForm(false)
    load()
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce rapport ?')) return
    await api.delete(`/rapports/${id}`)
    load()
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Rapports d activite</h1>
          <p className="text-sm text-gray-500 mt-1">{items.length} rapport(s)</p>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-yellow-400 text-black font-bold px-5 py-2 text-sm hover:bg-yellow-500 transition-colors">
          + Ajouter
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="font-bold text-gray-900 mb-5">Nouveau rapport</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Titre *</label>
              <input required value={form.titre} onChange={e => setForm({...form, titre: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Annee</label>
              <input value={form.annee} onChange={e => setForm({...form, annee: e.target.value})} placeholder="2025/26" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">URL du fichier PDF</label>
              <input value={form.fichier_url} onChange={e => setForm({...form, fichier_url: e.target.value})} placeholder="https://..." className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-2 text-sm hover:bg-yellow-500 transition-colors">Creer</button>
              <button type="button" onClick={() => setShowForm(false)} className="border border-gray-300 text-gray-600 px-6 py-2 text-sm hover:bg-gray-50">Annuler</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.length === 0 && (
          <p className="text-gray-400 text-sm col-span-3 text-center py-10">Aucun rapport</p>
        )}
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-bold text-gray-900 text-sm">{item.titre}</p>
                <p className="text-xs text-yellow-600 font-bold mt-1">{item.annee}</p>
              </div>
              <span className="text-2xl">📄</span>
            </div>
            <div className="flex gap-3 mt-auto pt-3 border-t border-gray-100">
              {item.fichier_url && (
                <a href={item.fichier_url} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">Telecharger</a>
              )}
              <button onClick={() => handleDelete(item.id)} className="text-xs text-red-500 hover:underline ml-auto">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rapports
