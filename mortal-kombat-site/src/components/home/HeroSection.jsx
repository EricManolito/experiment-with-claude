import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mk-black via-mk-black to-mk-charcoal">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-mk-red opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-mk-gold opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title with animation */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-up">
          <span className="block text-mk-red mk-glow-lg drop-shadow-lg">
            MORTAL
          </span>
          <span className="block text-mk-gold drop-shadow-lg">
            KOMBAT
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-mk-gold font-bold mb-4 animate-slide-up">
          The Ultimate Fan Experience
        </p>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Explore the legendary world of Mortal Kombat. Discover iconic characters, relive epic moments, test your knowledge, and experience the evolution of the greatest fighting game franchise of all time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
          <Link
            to="/gallery"
            className="mk-button text-lg hover:shadow-glow-lg"
          >
            Explore Gallery
          </Link>
          <Link
            to="/quiz"
            className="mk-button text-lg bg-mk-gold text-mk-black hover:bg-mk-red hover:text-white hover:shadow-glow-lg"
          >
            Take the Quiz
          </Link>
          <Link
            to="/timeline"
            className="mk-button text-lg hover:shadow-glow-lg"
          >
            MK History
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="text-mk-red mk-glow text-3xl">↓</div>
          <p className="text-gray-500 text-sm mt-2">Scroll to discover characters</p>
        </div>
      </div>
    </section>
  )
}
