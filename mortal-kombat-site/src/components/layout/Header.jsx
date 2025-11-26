import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ onMusicToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  const handleMusicToggle = () => {
    setIsMusicPlaying(!isMusicPlaying)
    onMusicToggle?.(!isMusicPlaying)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Timeline', path: '/timeline' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-mk-black bg-opacity-90 backdrop-blur-md border-b-2 border-mk-red shadow-glow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="text-4xl font-bold text-mk-red group-hover:text-mk-gold transition-colors duration-300 mk-glow-lg">
              MK
            </div>
            <div className="hidden sm:block text-2xl font-bold text-mk-gold">
              KOMBAT
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xl font-semibold text-white hover:text-mk-gold transition-colors duration-300 hover:mk-glow-lg relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mk-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Music Toggle */}
            <button
              onClick={handleMusicToggle}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-mk-red hover:bg-mk-gold text-black font-bold transition-all duration-300 hover:shadow-glow-lg"
              title={isMusicPlaying ? 'Mute' : 'Play Music'}
              aria-label="Toggle background music"
            >
              {isMusicPlaying ? '🔊' : '🔇'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded bg-mk-red hover:bg-mk-gold text-black transition-all duration-300"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-mk-red pt-4 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 px-4 text-lg font-semibold text-white hover:bg-mk-red hover:text-black transition-colors duration-300 rounded"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleMusicToggle()
                closeMenu()
              }}
              className="w-full mt-4 py-3 px-4 bg-mk-red hover:bg-mk-gold text-black font-bold text-lg rounded transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>{isMusicPlaying ? '🔊' : '🔇'}</span>
              <span>{isMusicPlaying ? 'Mute Music' : 'Play Music'}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
