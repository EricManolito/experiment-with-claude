# Mortal Kombat Audio Setup Guide

## Current Status

The audio toggle button is fully integrated and working! The app currently uses a fallback audio file for demonstration. Here's how to add your own Mortal Kombat theme:

## Option 1: Add Local Audio File (Recommended)

### Steps:

1. **Get a Mortal Kombat theme MP3:**
   - Download a royalty-free MK theme from:
     - YouTube Audio Library (https://www.youtube.com/audiolibrary)
     - Free Music Archive (https://freemusicarchive.org)
     - Pixabay Music (https://pixabay.com/music)
     - Search for "Mortal Kombat theme" - many royalty-free versions available

2. **Place the file in the audio directory:**
   ```
   mortal-kombat-site/public/audio/mk-theme.mp3
   ```

3. **Test the app:**
   - The app will automatically detect the local file and use it
   - Click the 🔊 button in the header to toggle music on/off
   - Music preference is saved to browser's localStorage

### File Format:
- **Name:** `mk-theme.mp3`
- **Location:** `public/audio/mk-theme.mp3`
- **Format:** MP3 (works best with HTML5 audio)
- **Recommended:** 30-60 seconds loop for smooth looping

## Option 2: Use External URL

If you want to use a pre-hosted audio file:

1. **Find a Mortal Kombat theme URL** (must support CORS or cross-origin access)

2. **Edit `src/components/layout/Layout.jsx`:**
   ```javascript
   audioElement.src = 'YOUR_AUDIO_URL_HERE'
   ```

## Option 3: Use a Music Service

Options include:
- **Spotify Web API** - requires authentication
- **YouTube Data API** - retrieve video metadata
- **Soundcloud** - embed player

## How the Audio Works

### Toggle Button
- Located in the header (🔊 icon on desktop, music button in mobile menu)
- Click to play/pause background music
- Preference persists across page refreshes (localStorage)

### Volume Control
- Currently set to 30% (comfortable listening level)
- Edit in `src/components/layout/Layout.jsx` line 14:
  ```javascript
  audioElement.volume = 0.3  // Change 0.3 to 0.5 for 50%, etc.
  ```

### Loop Control
- Audio automatically loops when it ends
- Looping is enabled by default

## Recommended MK Themes

### Official Sources:
- **MK1 (2023) Theme** - Epic orchestral arrangement
- **MK11 Theme** - Modern remix of classic theme
- **MK9 Theme** - Reboot version
- **Classic MK1 Theme** - Original 1992 arcade theme

### Free Options:
- Search YouTube Audio Library for "Mortal Kombat"
- Check "Mortal Kombat" on Free Music Archive
- Pixabay has several MK-inspired instrumental tracks

## Troubleshooting

### Audio not playing?
1. Check browser console (F12) for errors
2. Ensure file path is correct: `public/audio/mk-theme.mp3`
3. Verify file format is MP3
4. Try with a different audio file to test
5. Check browser autoplay policies

### Fallback Audio
If no local file is found, the app uses a placeholder audio:
- `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`
- This ensures the toggle button always works
- Replace with your own audio file to use MK theme

### Browser Compatibility
- Works on: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile (with user interaction)
- Autoplay may be blocked by browser - user must click button first

## Implementation Details

### Audio File Location:
```
mortal-kombat-site/
├── public/
│   └── audio/
│       └── mk-theme.mp3    ← Place your audio file here
```

### Code Location:
- Main logic: `src/components/layout/Layout.jsx`
- Toggle button: `src/components/layout/Header.jsx`
- Styling: `src/index.css`

### Key Variables:
- Volume: Line 14 in Layout.jsx
- Audio source: Line 17 in Layout.jsx
- Loop setting: Automatic via `audioElement.loop = true`

## Getting a Real MK Theme

### Best Free Options:

**1. YouTube Audio Library**
- Go to: https://www.youtube.com/audiolibrary
- Search: "Mortal Kombat"
- Sign in with Google account
- Download and use freely

**2. FreeSound.org**
- Search: "Mortal Kombat theme"
- Filter by "Creative Commons" licenses
- Download and use

**3. Make Your Own**
- Use software like:
  - LMMS (free, open-source)
  - FL Studio (paid, trial available)
  - Audacity (free audio editor)
  - Ableton Live (paid)

## File Size Recommendations

- **Optimal:** 2-5 MB (30-60 second loop)
- **Acceptable:** Up to 10 MB
- **Too Large:** Anything over 15 MB (slows down initial load)

## After Adding Audio

1. Place `mk-theme.mp3` in `public/audio/`
2. Refresh the browser
3. Click the music toggle in the header
4. Audio should play!

---

**Note:** The audio toggle is already fully functional. You just need to add the actual audio file to make it play the Mortal Kombat theme instead of the placeholder.
