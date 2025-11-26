import { useEffect } from 'react'

export default function ImageModal({
  image,
  era,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasPrevious, hasNext, onClose, onPrevious, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-95 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 max-w-4xl w-full mx-4 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-mk-gold hover:text-mk-red transition-colors text-3xl font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Image Container */}
        <div className="relative bg-mk-charcoal border-4 border-mk-red rounded-lg overflow-hidden shadow-glow-lg">
          {/* Main Image */}
          <img
            src={image.imageUrl}
            alt={image.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />

          {/* Navigation Buttons */}
          {hasPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-mk-red hover:bg-mk-gold text-black font-bold rounded-full transition-all duration-300 text-xl shadow-glow hover:shadow-glow-lg hover:scale-110"
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-mk-red hover:bg-mk-gold text-black font-bold rounded-full transition-all duration-300 text-xl shadow-glow hover:shadow-glow-lg hover:scale-110"
              aria-label="Next image"
            >
              →
            </button>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-6 bg-mk-charcoal border-2 border-mk-gold rounded-lg p-6">
          <div className="mb-4">
            <p className="text-mk-gold font-bold text-sm mb-2">ERA: {era}</p>
            <h2 className="text-3xl font-black text-mk-red mb-2">
              {image.title}
            </h2>
            <p className="text-gray-300 text-lg">{image.description}</p>
          </div>

          {/* Navigation Info */}
          <div className="flex justify-between items-center pt-4 border-t border-mk-gold text-sm text-gray-500">
            <p>Use arrow keys or buttons to navigate</p>
            <p>Press ESC to close</p>
          </div>
        </div>
      </div>
    </div>
  )
}
