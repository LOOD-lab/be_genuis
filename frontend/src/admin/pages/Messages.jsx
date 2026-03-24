import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const Messages = () => {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(null)

  const load = async () => {
    const data = await api.get('/contact/')
    if (Array.isArray(data)) setItems(data)
  }

  useEffect(() => { load() }, [])

  const handleRead = async (id) => {
    await api.put(`/contact/${id}/lu`, {})
    load()
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Messages</h1>
        <p className="text-sm text-gray-500 mt-1">{items.filter(i => !i.lu).length} non lu(s)</p>
      </div>
      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-xl border border-gray-100 overflow-hidden">
          {items.length === 0 && (
            <p className="text-center py-10 text-gray-400 text-sm">Aucun message</p>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => { setSelected(item); if (!item.lu) handleRead(item.id) }}
              className={`flex items-center justify-between px-5 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${selected?.id === item.id ? 'bg-yellow-50 border-l-4 border-l-yellow-400' : ''}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {!item.lu && <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>}
                  <p className={`text-sm truncate ${!item.lu ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{item.nom}</p>
                </div>
                <p className="text-xs text-gray-400 truncate">{item.message}</p>
              </div>
              <p className="text-xs text-gray-400 ml-4 flex-shrink-0">{new Date(item.created_at).toLocaleDateString('fr-FR')}</p>
            </div>
          ))}
        </div>
        {selected && (
          <div className="w-96 bg-white rounded-xl border border-gray-100 p-6">
            <div className="mb-5 pb-5 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">{selected.nom}</h3>
              <p className="text-xs text-gray-500 mt-1">{selected.email}</p>
              {selected.telephone && <p className="text-xs text-gray-500">{selected.telephone}</p>}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{selected.message}</p>
            <p className="text-xs text-gray-400 mt-5">{new Date(selected.created_at).toLocaleString('fr-FR')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages
