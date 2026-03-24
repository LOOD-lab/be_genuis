import { useState } from 'react'
import { login } from '../../services/api'

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const data = await login(email, password)
    setLoading(false)
    if (data.access_token) {
      onLogin(data.access_token)
    } else {
      setError('Identifiants incorrects')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-10">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Be Genius" className="h-16 mx-auto mb-4" />
          <h1 className="text-xl font-black text-gray-900">Espace Admin</h1>
          <p className="text-xs text-gray-500 mt-1">Be Genius Institut</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
              placeholder="admin@begenius.cg"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-bold py-3 text-sm uppercase tracking-widest hover:bg-yellow-500 transition-colors disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
