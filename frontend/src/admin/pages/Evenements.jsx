import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const empty = { titre: '', description: '', date_evenement: '', lieu: '', edition: '', entree_gratuite: true, image_url: '', actif: true }

const Evenements = () => {
  const [items, setItems] = useState([])
  const [form, setForm] = useState(empty)
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const load = async () => {
    const data = await api.get('/evenements/')
    if (Array.isArray(data)) setItems(data)
  }

  useEffect(() => { load() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editing) {
      await api.put(`/evenements/${editing}`, form)
    } else {
      await api.post('/evenements/', form)
    }
    setForm(empty)
    setEditing(null)
    setShowForm(false)
    load()
  }

  const handleEdit = (item) => {
    setForm({ ...item, date_evenement: item.date_evenement?.slice(0, 16) })
    setEditing(item.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cet evenement ?')) return
    await api.delete(`/evenements/${id}`)
    load()
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Evenements</h1>
          <p className="text-sm text-gray-500 mt-1">{items.length} evenement(s)</p>
        </div>
        <button onClick={() => { setForm(empty); setEditing(null); setShowForm(true) }} className="bg-yellow-400 text-black font-bold px-5 py-2 text-sm hover:bg-yellow-500 transition-colors">
          + Ajouter
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="font-bold text-gray-900 mb-5">{editing ? 'Modifier' : 'Nouvel evenement'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Titre *</label>
              <input required value={form.titre} onChange={e => setForm({...form, titre: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Date *</label>
              <input required type="datetime-local" value={form.date_evenement} onChange={e => setForm({...form, date_evenement: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Lieu</label>
              <input value={form.lieu} onChange={e => setForm({...form, lieu: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Edition</label>
              <input value={form.edition} onChange={e => setForm({...form, edition: e.target.value})} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div className="flex items-center gap-2 pt-5">
              <input type="checkbox" checked={form.entree_gratuite} onChange={e => setForm({...form, entree_gratuite: e.target.checked})} id="gratuit" />
              <label htmlFor="gratuit" className="text-sm text-gray-700">Entree gratuite</label>
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Description</label>
              <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div className="col-span-2 flex gap-3">
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
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Date</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Lieu</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Edition</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={5} className="text-center py-10 text-gray-400 text-sm">Aucun evenement</td></tr>
            )}
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-4 font-medium text-gray-900">{item.titre}</td>
                <td className="px-5 py-4 text-gray-500">{new Date(item.date_evenement).toLocaleDateString('fr-FR')}</td>
                <td className="px-5 py-4 text-gray-500">{item.lieu}</td>
                <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">{item.edition}</span></td>
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

export default Evenements
