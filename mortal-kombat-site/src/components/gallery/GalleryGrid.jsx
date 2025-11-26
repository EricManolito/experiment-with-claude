export default function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="cursor-pointer group"
          onClick={() => onImageClick(image)}
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          <div className="relative overflow-hidden rounded-lg aspect-video bg-mk-charcoal border-2 border-mk-red hover:border-mk-gold transition-all duration-300 shadow-glow group-hover:shadow-glow-lg">
            {/* Image */}
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-mk-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              {/* Title and Description */}
              <h3 className="text-lg font-bold text-mk-gold mb-1">
                {image.title}
              </h3>
              <p className="text-sm text-gray-300">{image.description}</p>

              {/* Click hint */}
              <p className="text-xs text-mk-red mt-2">Click to expand</p>
            </div>

            {/* Border glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 border-2 border-mk-gold rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
