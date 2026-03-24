import { useState, useEffect } from 'react'
import { api } from '../../services/api'

const StatCard = ({ label, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-3">
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${color}`}>{label}</span>
    </div>
    <p className="text-4xl font-black text-gray-900">{value}</p>
  </div>
)

const Dashboard = () => {
  const [stats, setStats] = useState({ evenements: 0, actualites: 0, inscriptions: 0, messages: 0, rapports: 0 })

  useEffect(() => {
    const load = async () => {
      const [ev, ac, ins, msg, rap] = await Promise.all([
        api.get('/evenements/'),
        api.get('/actualites/admin/all'),
        api.get('/inscriptions/'),
        api.get('/contact/'),
        api.get('/rapports/'),
      ])
      setStats({
        evenements: Array.isArray(ev) ? ev.length : 0,
        actualites: Array.isArray(ac) ? ac.length : 0,
        inscriptions: Array.isArray(ins) ? ins.length : 0,
        messages: Array.isArray(msg) ? msg.length : 0,
        rapports: Array.isArray(rap) ? rap.length : 0,
      })
    }
    load()
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Vue d ensemble Be Genius Institut</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <StatCard label="Evenements" value={stats.evenements} color="bg-yellow-100 text-yellow-700" />
        <StatCard label="Actualites" value={stats.actualites} color="bg-blue-100 text-blue-700" />
        <StatCard label="Inscriptions" value={stats.inscriptions} color="bg-green-100 text-green-700" />
        <StatCard label="Messages" value={stats.messages} color="bg-purple-100 text-purple-700" />
        <StatCard label="Rapports" value={stats.rapports} color="bg-orange-100 text-orange-700" />
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h2 className="font-bold text-gray-900 mb-4">Acces rapide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Ajouter un evenement', 'Publier une actualite', 'Voir les inscriptions', 'Lire les messages'].map((a) => (
            <div key={a} className="border border-dashed border-gray-300 rounded-lg p-4 text-xs text-gray-500 text-center hover:border-yellow-400 hover:text-yellow-600 cursor-pointer transition-colors">
              {a}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard