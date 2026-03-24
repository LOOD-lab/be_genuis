import { useState, useEffect, useRef } from 'react'
import { api, mediaUrl } from '../../services/api'

const SITE_SLOTS = [
  { key: 'hero', label: 'Hero - Image principale', hint: 'Affichee dans la section hero du site' },
  { key: 'hero2', label: 'Hero - Image 2', hint: 'Slider hero' },
  { key: 'hero3', label: 'Hero - Image 3', hint: 'Slider hero' },
  { key: 'vision', label: 'Notre Vision', hint: 'Section vision' },
  { key: 'rapport1', label: 'Rapport - Parainnage', hint: 'Section rapport activite' },
  { key: 'rapport2', label: 'Rapport - Mentorat', hint: 'Section rapport activite' },
  { key: 'rapport3', label: 'Rapport - Competition', hint: 'Section rapport activite' },
  { key: 'event-banner', label: 'Banniere evenement 1', hint: 'Slider banniere' },
  { key: 'event-banner2', label: 'Banniere evenement 2', hint: 'Slider banniere' },
  { key: 'event-banner3', label: 'Banniere evenement 3', hint: 'Slider banniere' },
]

const ImageSlot = ({ slot, onUpload }) => {
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(null)
  const inputRef = useRef()

  const handleFile = async (file) => {
    if (!file) return
    setUploading(true)
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    const result = await api.upload(file)
    setUploading(false)
    if (result.url) {
      onUpload(slot.key, result.url)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const currentUrl = `http://localhost:5173/${slot.key}.png`

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <p className="font-bold text-sm text-gray-900">{slot.label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{slot.hint}</p>
      </div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative cursor-pointer transition-all ${dragging ? 'bg-yellow-50 border-2 border-dashed border-yellow-400' : 'hover:bg-gray-50'}`}
      >
        <div className="w-full h-40 bg-gray-100 overflow-hidden">
          {preview ? (
            <img src={preview} alt={slot.label} className="w-full h-full object-cover" />
          ) : (
            <img
              src={`/public/${slot.key}.png`}
              alt={slot.label}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          )}
        </div>
        <div className="p-4 flex items-center justify-between">
          {uploading ? (
            <span className="text-xs text-yellow-600 font-medium">Chargement...</span>
          ) : (
            <span className="text-xs text-gray-500">
              {dragging ? 'Deposez ici' : 'Glisser-deposer ou cliquer'}
            </span>
          )}
          <span className="text-xs bg-yellow-400 text-black font-bold px-3 py-1">Choisir</span>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  )
}

const Images = () => {
  const [uploaded, setUploaded] = useState({})
  const [allImages, setAllImages] = useState([])
  const [tab, setTab] = useState('slots')

  useEffect(() => {
    api.listImages().then(data => {
      if (data.images) setAllImages(data.images)
    })
  }, [])

  const handleUpload = (key, url) => {
    setUploaded(prev => ({ ...prev, [key]: url }))
    api.listImages().then(data => { if (data.images) setAllImages(data.images) })
  }

  const handleDelete = async (filename) => {
    if (!confirm('Supprimer cette image ?')) return
    await api.deleteImage(filename)
    api.listImages().then(data => { if (data.images) setAllImages(data.images) })
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Gestion des images</h1>
        <p className="text-sm text-gray-500 mt-1">Modifiez les images du site sans toucher au code</p>
      </div>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab('slots')}
          className={`px-5 py-2 text-sm font-bold transition-colors ${tab === 'slots' ? 'bg-yellow-400 text-black' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        >
          Images du site
        </button>
        <button
          onClick={() => setTab('library')}
          className={`px-5 py-2 text-sm font-bold transition-colors ${tab === 'library' ? 'bg-yellow-400 text-black' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        >
          Bibliotheque ({allImages.length})
        </button>
      </div>

      {tab === 'slots' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_SLOTS.map((slot) => (
            <ImageSlot key={slot.key} slot={slot} onUpload={handleUpload} />
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
                    <img src={`http://localhost:8000${img.url}`} alt={img.filename} className="w-full h-full object-cover" />
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
