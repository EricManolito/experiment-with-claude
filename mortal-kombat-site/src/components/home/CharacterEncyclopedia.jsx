import CharacterCard from './CharacterCard'
import { characters } from '../../data/characters'

export default function CharacterEncyclopedia() {
  return (
    <section className="py-16 px-4 bg-mk-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-mk-gold">CHARACTER</span>
            <span className="text-mk-red mk-glow-lg block">ENCYCLOPEDIA</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Click any card to flip and learn more about these legendary warriors
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <div
              key={character.id}
              className="animate-slide-up"
              style={{
                animationDelay: `${(character.id - 1) * 0.1}s`,
              }}
            >
              <CharacterCard character={character} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-gray-400 mb-4">
            Want to test your knowledge of these warriors?
          </p>
          <a
            href="/quiz"
            className="inline-block mk-button text-lg hover:shadow-glow-lg"
          >
            Take the Mortal Kombat Quiz
          </a>
        </div>
      </div>
    </section>
  )
}
