import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audio, setAudio] = useState(null)

  // Initialize audio on mount
  useEffect(() => {
    const audioElement = new Audio()
    audioElement.loop = true
    audioElement.volume = 0.4
    audioElement.crossOrigin = 'anonymous'

    // Try local file first
    audioElement.src = '/audio/mk-theme.mp3'

    // Handle audio loading and errors
    audioElement.addEventListener('canplay', () => {
      console.log('Audio loaded successfully from local file')
    })

    audioElement.addEventListener('error', (e) => {
      console.log('Local audio file not found, attempting fallback...')
      // Fallback to external source
      audioElement.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    }, { once: true })

    setAudio(audioElement)

    // Load preference from localStorage and restore playback state
    const savedState = localStorage.getItem('mkMusicPlaying')
    if (savedState === 'true') {
      // Attempt to play on page load (may be blocked by browser autoplay policy)
      audioElement.play().catch((e) => {
        console.log('Autoplay prevented by browser policy:', e.message)
        // User will need to click the button to start playing
      })
      setIsMusicPlaying(true)
    }

    return () => {
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }, [])

  // Handle music toggle
  const handleMusicToggle = (shouldPlay) => {
    if (!audio) {
      console.log('Audio element not initialized yet')
      return
    }

    if (shouldPlay) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio playing')
            setIsMusicPlaying(true)
            localStorage.setItem('mkMusicPlaying', 'true')
          })
          .catch((e) => {
            console.log('Play failed:', e.message)
            setIsMusicPlaying(false)
          })
      }
    } else {
      audio.pause()
      setIsMusicPlaying(false)
      localStorage.setItem('mkMusicPlaying', 'false')
      console.log('Audio paused')
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
