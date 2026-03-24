import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const Inscriptions = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/inscriptions/').then(data => { if (Array.isArray(data)) setItems(data) })
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Inscriptions</h1>
        <p className="text-sm text-gray-500 mt-1">{items.length} inscription(s)</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Nom</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Prenom</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Email</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Telephone</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-gray-600 uppercase">Date</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={5} className="text-center py-10 text-gray-400 text-sm">Aucune inscription</td></tr>
            )}
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-4 font-medium text-gray-900">{item.nom}</td>
                <td className="px-5 py-4 text-gray-700">{item.prenom}</td>
                <td className="px-5 py-4 text-gray-500">{item.email}</td>
                <td className="px-5 py-4 text-gray-500">{item.telephone || '-'}</td>
                <td className="px-5 py-4 text-gray-400">{new Date(item.created_at).toLocaleDateString('fr-FR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Inscriptions
