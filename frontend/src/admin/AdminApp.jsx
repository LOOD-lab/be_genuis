import { useState, useEffect } from 'react'
import AdminLogin from './pages/AdminLogin'
import AdminLayout from './AdminLayout'

const AdminApp = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const handleLogin = (t) => {
    localStorage.setItem('token', t)
    setToken(t)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  if (!token) return <AdminLogin onLogin={handleLogin} />
  return <AdminLayout onLogout={handleLogout} />
}

export default AdminApp
