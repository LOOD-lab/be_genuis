import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:8000'
let cache = null

export const useSettings = () => {
  const [settings, setSettings] = useState(cache || {})

  useEffect(() => {
    if (cache) return
    fetch(`${BASE_URL}/api/settings/`)
      .then(r => r.json())
      .then(data => {
        cache = data
        setSettings(data)
      })
      .catch(() => {})
  }, [])

  const img = (key, fallback = '') => {
    const val = settings[`img_${key}`]
    if (!val) return fallback
    if (val.startsWith('http')) return val
    return `${BASE_URL}${val}`
  }

  return { settings, img }
}
