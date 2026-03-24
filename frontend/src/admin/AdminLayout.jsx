import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Evenements from './pages/Evenements'
import Actualites from './pages/Actualites'
import Inscriptions from './pages/Inscriptions'
import Messages from './pages/Messages'
import Rapports from './pages/Rapports'
import Images from './pages/Images'

const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: '▦' },
  { id: 'evenements', label: 'Evenements', icon: '◈' },
  { id: 'actualites', label: 'Actualites', icon: '◉' },
  { id: 'inscriptions', label: 'Inscriptions', icon: '◎' },
  { id: 'messages', label: 'Messages', icon: '◇' },
  { id: 'rapports', label: 'Rapports', icon: '◻' },
  { id: 'images', label: 'Images', icon: '◱' },
]

const pages = {
  dashboard: Dashboard,
  evenements: Evenements,
  actualites: Actualites,
  inscriptions: Inscriptions,
  messages: Messages,
  rapports: Rapports,
  images: Images,
}

const AdminLayout = ({ onLogout }) => {
  const [active, setActive] = useState('dashboard')
  const Page = pages[active]

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="px-6 py-6 border-b border-gray-800">
          <img src="/logo.png" alt="Be Genius" className="h-12 w-auto brightness-0 invert mb-1" />
          <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest">Admin Panel</p>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                active === item.id
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-6 py-5 border-t border-gray-800">
          <button
            onClick={onLogout}
            className="w-full text-xs text-gray-500 hover:text-red-400 transition-colors text-left"
          >
            Se deconnecter
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <Page />
      </main>
    </div>
  )
}

export default AdminLayout
