const BASE_URL = 'http://localhost:8000/api'
const MEDIA_URL = 'http://localhost:8000'

const getToken = () => localStorage.getItem('token')

const headers = () => ({
  'Content-Type': 'application/json',
  ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
})

export const api = {
  get: (path) => fetch(`${BASE_URL}${path}`, { headers: headers() }).then(r => r.json()),
  post: (path, body) => fetch(`${BASE_URL}${path}`, { method: 'POST', headers: headers(), body: JSON.stringify(body) }).then(r => r.json()),
  put: (path, body) => fetch(`${BASE_URL}${path}`, { method: 'PUT', headers: headers(), body: JSON.stringify(body) }).then(r => r.json()),
  delete: (path) => fetch(`${BASE_URL}${path}`, { method: 'DELETE', headers: headers() }),
  upload: async (file) => {
    const form = new FormData()
    form.append('file', file)
    const res = await fetch(`${BASE_URL}/upload/`, {
      method: 'POST',
      headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : {},
      body: form,
    })
    return res.json()
  },
  listImages: () => fetch(`${BASE_URL}/upload/list`, { headers: headers() }).then(r => r.json()),
  deleteImage: (filename) => fetch(`${BASE_URL}/upload/${filename}`, { method: 'DELETE', headers: headers() }),
}

export const mediaUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${MEDIA_URL}${path}`
}

export const login = async (email, password) => {
  const form = new URLSearchParams()
  form.append('username', email)
  form.append('password', password)
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
  })
  return res.json()
}
