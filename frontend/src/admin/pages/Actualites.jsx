import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const empty = { titre: '', contenu: '', resume: '', image_url: '', publie: false }

const Actualites = () => {
  const [items, setItems] = useState([])
  const [form, setForm] = useState(empty)
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const load = async () => {
    const data = await api.get('/actualites/admin/all')
    if (Array.isArray(data)) setItems(data)
  }

  useEffect(() => { load() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editing) {
      await api.put(`/actualites/${editing}`, form)
    } else {
      await api.post('/actualites/', form)
    }
    setForm(empty)
    setEditing(null)
    setShowForm(false)
    load()
  }

  const handleEdit = (item) => {
    setForm(item)
    setEditing(item.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cette actualite ?')) return
    await api.delete(`/actualites/${id}`)
    load()
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Actualites</h1>
          <p className="text-sm text-gray-500 mt-1">{items.length} article(s)</p>
        </div>
        <button onClick={() => { setForm(empty); setEditing(null); setShowForm(true) }} className="bg-yellow-400 text-black font-bold px-5 py-2 text-sm hover:bg-yellow-500 transition-colors">
          + Ajouter
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="font-bold text-gray-900 mb-5">{editing ? 'Modifier' : 'Nouvelle actualite'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Titre *</label>
              <input required value={form.titre} onChange={e => setForm({...form, titre: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Resume</label>
              <input value={form.resume} onChange={e => setForm({...form, resume: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Contenu</label>
              <textarea value={form.contenu} onChange={e => setForm({...form, contenu: e.target.value})} rows={5} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={form.publie} onChange={e => setForm({...form, publie: e.target.checked})} id="publie" />
              <label htmlFor="publie" className="text-sm text-gray-700">Publier immediatement</label>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-2 text-sm hover:bg-yellow-500 transition-colors">
                {editing ? 'Modifier' : 'Creer'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="border border-gray-300 text-gray-600 px-6 py-2 text-sm hover:bg-gray-50">
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Titre</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Statut</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Date</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={4} className="text-center py-10 text-gray-400 text-sm">Aucune actualite</td></tr>
            )}
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-4 font-medium text-gray-900">{item.titre}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.publie ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {item.publie ? 'Publie' : 'Brouillon'}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-500">{new Date(item.created_at).toLocaleDateString('fr-FR')}</td>
                <td className="px-5 py-4 flex gap-2">
                  <button onClick={() => handleEdit(item)} className="text-xs text-blue-600 hover:underline">Modifier</button>
                  <button onClick={() => handleDelete(item.id)} className="text-xs text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Actualites
