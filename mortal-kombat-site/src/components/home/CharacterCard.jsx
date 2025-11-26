import { useState } from 'react'

export default function CharacterCard({ character }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-full cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-mk-charcoal border-2 border-mk-red rounded-lg overflow-hidden shadow-glow p-4 flex flex-col justify-between group"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Image */}
          <div className="relative h-64 rounded overflow-hidden mb-4">
            <img
              src={character.imageUrl}
              alt={character.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mk-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-mk-gold mb-1">
              {character.name}
            </h3>
            <p className="text-mk-red font-semibold italic mb-2">
              "{character.tagline}"
            </p>
            <p className="text-gray-400 text-sm">
              Realm: <span className="text-mk-gold">{character.realm}</span>
            </p>
          </div>

          {/* Click hint */}
          <p className="text-xs text-gray-500 mt-2 text-center group-hover:text-mk-gold transition-colors">
            Click for more details
          </p>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-mk-charcoal border-2 border-mk-gold rounded-lg overflow-hidden shadow-glow p-4 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Backstory */}
          <div className="flex-1 overflow-y-auto mb-4">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {character.backstory}
            </p>

            {/* Signature Moves */}
            <div className="mb-4">
              <h4 className="text-mk-red font-bold mb-2">Signature Moves:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                {character.signatureMoves.map((move, idx) => (
                  <li key={idx}>• {move}</li>
                ))}
              </ul>
            </div>

            {/* Fatalities */}
            <div>
              <h4 className="text-mk-gold font-bold mb-2">Fatalities:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                {character.fatalities.map((fatality, idx) => (
                  <li key={idx}>💀 {fatality}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Click hint */}
          <p className="text-xs text-gray-500 text-center">
            Click to return
          </p>
        </div>
      </div>
    </div>
  )
}
