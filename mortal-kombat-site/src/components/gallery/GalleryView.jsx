import { useState } from 'react'
import GalleryGrid from './GalleryGrid'
import ImageModal from './ImageModal'
import { galleryData } from '../../data/galleryData'

const ERAS = [
  { key: 'console1992', label: '1992 Console Era', icon: '🕹️' },
  { key: 'movies', label: 'Movies', icon: '🎬' },
  { key: 'era2000s', label: '2000-2015 Era', icon: '📱' },
  { key: 'modern', label: 'Modern Era', icon: '✨' },
]

export default function GalleryView() {
  const [activeEra, setActiveEra] = useState('console1992')
  const [selectedImage, setSelectedImage] = useState(null)

  const currentEraData = galleryData[activeEra] || []
  const currentEraLabel = ERAS.find((e) => e.key === activeEra)?.label

  const handlePrevImage = () => {
    const currentIndex = currentEraData.findIndex(
      (img) => img.id === selectedImage.id
    )
    if (currentIndex > 0) {
      setSelectedImage(currentEraData[currentIndex - 1])
    }
  }

  const handleNextImage = () => {
    const currentIndex = currentEraData.findIndex(
      (img) => img.id === selectedImage.id
    )
    if (currentIndex < currentEraData.length - 1) {
      setSelectedImage(currentEraData[currentIndex + 1])
    }
  }

  return (
    <section className="min-h-screen py-12 px-4 bg-mk-black pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-mk-red mk-glow-lg">GALLERY</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore legendary moments through the ages
          </p>
        </div>

        {/* Era Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ERAS.map((era) => (
            <button
              key={era.key}
              onClick={() => {
                setActiveEra(era.key)
                setSelectedImage(null)
              }}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeEra === era.key
                  ? 'bg-mk-red text-black shadow-glow-lg scale-105'
                  : 'bg-mk-charcoal text-mk-gold hover:bg-mk-red hover:text-black'
              }`}
            >
              <span className="mr-2">{era.icon}</span>
              {era.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid
          images={currentEraData}
          onImageClick={setSelectedImage}
        />

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            era={currentEraLabel}
            onClose={() => setSelectedImage(null)}
            onPrevious={handlePrevImage}
            onNext={handleNextImage}
            hasPrevious={
              currentEraData.findIndex((img) => img.id === selectedImage.id) > 0
            }
            hasNext={
              currentEraData.findIndex((img) => img.id === selectedImage.id) <
              currentEraData.length - 1
            }
          />
        )}
      </div>
    </section>
  )
}
