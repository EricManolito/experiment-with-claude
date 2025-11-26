import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audio, setAudio] = useState(null)

  // Initialize audio on mount
  useEffect(() => {
    // Try local file first, fallback to external source
    const audioElement = new Audio()
    audioElement.loop = true
    audioElement.volume = 0.3

    // Try local file first
    audioElement.src = '/audio/mk-theme.mp3'

    // Fallback: Use a free audio source if local file fails
    audioElement.addEventListener('error', () => {
      console.log('Local audio not found, using placeholder')
      audioElement.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    }, { once: true })

    setAudio(audioElement)

    // Load preference from localStorage
    const savedState = localStorage.getItem('mkMusicPlaying')
    if (savedState === 'true') {
      audioElement.play().catch((e) => console.log('Auto-play prevented:', e))
      setIsMusicPlaying(true)
    }

    return () => {
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }, [])

  // Handle music toggle
  const handleMusicToggle = (shouldPlay) => {
    if (!audio) return

    if (shouldPlay) {
      audio.play().catch((e) => console.log('Play failed:', e))
      setIsMusicPlaying(true)
      localStorage.setItem('mkMusicPlaying', 'true')
    } else {
      audio.pause()
      setIsMusicPlaying(false)
      localStorage.setItem('mkMusicPlaying', 'false')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-mk-black">
      <Header onMusicToggle={handleMusicToggle} />
      <main className="flex-1 pt-20 pb-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
