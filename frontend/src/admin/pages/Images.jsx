import { useState, useEffect, useRef } from 'react'
import { api } from '../../services/api'

const BASE_URL = 'https://be-genius-backend.onrender.com'

const SITE_SLOTS = [
  { key: 'hero', label: 'Hero - Image 1', hint: 'Slider hero, 1ere image' },
  { key: 'hero2', label: 'Hero - Image 2', hint: 'Slider hero, 2e image' },
  { key: 'hero3', label: 'Hero - Image 3', hint: 'Slider hero, 3e image' },
  { key: 'vision', label: 'Notre Vision', hint: 'Section vision' },
  { key: 'rapport1', label: 'Rapport - Parainnage', hint: 'Section rapport' },
  { key: 'rapport2', label: 'Rapport - Mentorat', hint: 'Section rapport' },
  { key: 'rapport3', label: 'Rapport - Competition', hint: 'Section rapport' },
  { key: 'event-banner', label: 'Banniere evenement 1', hint: 'Slider banniere' },
  { key: 'event-banner2', label: 'Banniere evenement 2', hint: 'Slider banniere' },
  { key: 'event-banner3', label: 'Banniere evenement 3', hint: 'Slider banniere' },
]

const ImageSlot = ({ slot, currentUrl, onSaved }) => {
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState(null)
  const [pendingUrl, setPendingUrl] = useState(null)
  const [status, setStatus] = useState(null)
  const inputRef = useRef()

  useEffect(() => {
    if (currentUrl) setPreview(currentUrl)
  }, [currentUrl])

  const handleFile = async (file) => {
    if (!file) return
    setStatus(null)
    setUploading(true)
    setPreview(URL.createObjectURL(file))
    const result = await api.upload(file)
    setUploading(false)
    if (result.url) {
      setPendingUrl(result.url)
      setStatus('pending')
    } else {
      setStatus('error')
      setPreview(currentUrl)
    }
  }

  const handleSave = async () => {
    if (!pendingUrl) return
    setSaving(true)
    await fetch(`${BASE_URL}/api/settings/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ [`img_${slot.key}`]: pendingUrl }),
    })
    setSaving(false)
    setStatus('saved')
    setPreview(`${BASE_URL}${pendingUrl}`)
    setPendingUrl(null)
    onSaved && onSaved()
    setTimeout(() => setStatus(null), 3000)
  }

  const handleCancel = () => {
    setPendingUrl(null)
    setStatus(null)
    setPreview(currentUrl)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  return (
    <div className={`bg-white rounded-xl border overflow-hidden transition-all ${status === 'pending' ? 'border-yellow-400' : 'border-gray-100'}`}>
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <p className="font-bold text-sm text-gray-900">{slot.label}</p>
          <p className="text-xs text-gray-400 mt-0.5">{slot.hint}</p>
        </div>
        {status === 'saved' && <span className="text-xs text-green-600 font-bold">Enregistre</span>}
        {status === 'error' && <span className="text-xs text-red-500 font-bold">Erreur upload</span>}
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => !status || status === 'saved' ? inputRef.current?.click() : null}
        className={`cursor-pointer transition-all ${dragging ? 'bg-yellow-50' : 'hover:bg-gray-50'}`}
      >
        <div className={`w-full h-36 bg-gray-100 overflow-hidden border-2 border-dashed transition-colors ${dragging ? 'border-yellow-400' : 'border-transparent'}`}>
          {preview ? (
            <img src={preview} alt={slot.label} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 border-2 border-gray-300 flex items-center justify-center text-gray-400 text-xl font-light">+</div>
              <span className="text-xs text-gray-400">Aucune image</span>
            </div>
          )}
          {uploading && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
              <span className="text-xs font-bold text-yellow-600">Chargement...</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-3">
        {status === 'pending' ? (
          <div className="flex items-center gap-2">
            <p className="text-xs text-yellow-600 font-medium flex-1">Image prete — cliquez Enregistrer</p>
            <button
              onClick={handleCancel}
              className="text-xs text-gray-500 px-3 py-1.5 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="text-xs bg-yellow-400 text-black font-bold px-4 py-1.5 hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              {saving ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {dragging ? 'Deposez ici' : 'Glisser ou cliquer pour changer'}
            </span>
            <button
              onClick={() => inputRef.current?.click()}
              className="text-xs bg-gray-900 text-white font-bold px-3 py-1 hover:bg-yellow-400 hover:text-black transition-colors"
            >
              Choisir
            </button>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  )
}

const Images = () => {
  const [siteSettings, setSiteSettings] = useState({})
  const [allImages, setAllImages] = useState([])
  const [tab, setTab] = useState('slots')

  const loadSettings = () => {
    fetch(`${BASE_URL}/api/settings/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then(r => r.json())
      .then(setSiteSettings)
      .catch(() => {})
  }

  useEffect(() => {
    loadSettings()
    api.listImages().then(data => { if (data.images) setAllImages(data.images) })
  }, [])

  const handleDelete = async (filename) => {
    if (!confirm('Supprimer cette image ?')) return
    await api.deleteImage(filename)
    api.listImages().then(data => { if (data.images) setAllImages(data.images) })
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Gestion des images</h1>
        <p className="text-sm text-gray-500 mt-1">
          Selectionnez ou glissez une image — puis cliquez Enregistrer pour appliquer sur le site
        </p>
      </div>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab('slots')}
          className={`px-5 py-2 text-sm font-bold transition-colors ${tab === 'slots' ? 'bg-yellow-400 text-black' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        >
          Images du site
        </button>
        <button
          onClick={() => { setTab('library'); api.listImages().then(d => d.images && setAllImages(d.images)) }}
          className={`px-5 py-2 text-sm font-bold transition-colors ${tab === 'library' ? 'bg-yellow-400 text-black' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        >
          Bibliotheque ({allImages.length})
        </button>
      </div>

      {tab === 'slots' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_SLOTS.map((slot) => (
            <ImageSlot
              key={slot.key}
              slot={slot}
              currentUrl={siteSettings[`img_${slot.key}`] ? `${BASE_URL}${siteSettings[`img_${slot.key}`]}` : null}
              onSaved={loadSettings}
            />
          ))}
        </div>
      )}

      {tab === 'library' && (
        <div>
          {allImages.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-16">Aucune image uploadee</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allImages.map((img) => (
                <div key={img.filename} className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="w-full h-32 bg-gray-100">
                    <img src={`${BASE_URL}${img.url}`} alt={img.filename} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2">
                    <p className="text-xs text-gray-500 truncate">{img.filename}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(img.filename)}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Sup.
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Images
