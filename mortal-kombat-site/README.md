# Mortal Kombat Fan Site

A comprehensive, interactive Mortal Kombat fan site built with React, React Router, Vite, and Tailwind CSS.

## Project Overview

This is a fully functional fan site dedicated to the legendary Mortal Kombat franchise. It features:

- **Hero Section**: Eye-catching landing page with animated text and character graphics
- **Character Encyclopedia**: 12 iconic MK characters with detailed cards featuring backstory, signature moves, and fatalities
- **Gallery**: 24+ images organized by 4 historical eras with full-screen modal viewer
- **Interactive Quiz**: 15-question quiz with difficulty levels and MK-themed score rankings
- **Timeline**: Chronological history of Mortal Kombat from 1992 to present with scroll animations
- **Background Music**: Optional theme music with persistent user preferences
- **Responsive Design**: Mobile-first approach working perfectly on all devices
- **Custom Tailwind Theme**: MK-themed colors (blood red, gold, black) with glow effects

## Tech Stack

- **Frontend Framework**: React 18+
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 with custom theme
- **Data**: Static/hardcoded (no external APIs)

## Project Structure

```
mortal-kombat-site/
├── public/
│   └── audio/
│       └── mk-theme.mp3         # Background music (add placeholder)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Navigation & audio toggle
│   │   │   ├── Footer.jsx        # Footer with links
│   │   │   └── Layout.jsx        # Main layout wrapper
│   │   ├── home/
│   │   │   ├── HeroSection.jsx   # Hero with animations
│   │   │   ├── CharacterCard.jsx # Flip card component
│   │   │   └── CharacterEncyclopedia.jsx # Grid layout
│   │   ├── gallery/
│   │   │   ├── GalleryView.jsx   # Main gallery with tabs
│   │   │   ├── GalleryGrid.jsx   # Image grid
│   │   │   └── ImageModal.jsx    # Full-screen modal viewer
│   │   ├── quiz/
│   │   │   ├── QuizContainer.jsx # Quiz logic & state
│   │   │   ├── QuestionCard.jsx  # Question display
│   │   │   └── ResultsScreen.jsx # Score results
│   │   └── timeline/
│   │       ├── TimelineView.jsx  # Timeline container
│   │       └── TimelineEvent.jsx # Individual events
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── Quiz.jsx
│   │   └── Timeline.jsx
│   ├── data/
│   │   ├── characters.js         # 12 character data objects
│   │   ├── galleryData.js        # 24 images across 4 eras
│   │   ├── quizQuestions.js      # 15 questions with difficulty
│   │   └── timelineData.js       # 15 timeline events
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 16+ (includes npm)
- npm or yarn

### Installation

1. **Clone/Navigate to the repository:**

```bash
cd mortal-kombat-site
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Features in Detail

### 1. Home Page

**Hero Section:**
- Animated MK logo with glow effects
- Animated tagline
- CTA buttons to other pages
- Scroll indicator

**Character Encyclopedia:**
- 12 character cards in responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Click cards to flip and see detailed information:
  - Backstory
  - Signature moves
  - Fatalities
- Smooth flip animations with CSS transforms

Characters included:
- Scorpion, Sub-Zero, Raiden, Liu Kang
- Sonya Blade, Kitana, Jax, Shao Kahn
- Kung Lao, Mileena, Johnny Cage, Ermac

### 2. Gallery Page

**4 Historical Eras:**
1. **1992 Console Era** - Original arcade/console screenshots
2. **Movies** - Film stills and posters (1995 & 2021 films)
3. **2000-2015 Era** - Mid-period game screenshots
4. **Modern Era** - Recent game images

**Features:**
- Tabbed interface to switch between eras
- Responsive image grid with hover effects
- Full-screen modal image viewer with:
  - Previous/Next navigation buttons
  - Keyboard navigation (arrow keys, ESC to close)
  - Image info display
  - Era context

### 3. Quiz Page

**15 Interactive Questions:**
- Questions 1-10: Easy/Medium difficulty
- Questions 11-15: Hard difficulty (obscure fatalities, deep lore)
- Multiple choice with 4 options each

**Features:**
- Progress bar showing question count and score
- Visual feedback on answer selection (correct/incorrect)
- Explanation display after answer
- Score calculation as percentage
- MK-themed rankings:
  - 90-100%: 👑 Grandmaster
  - 80-89%: 🥇 Champion
  - 70-79%: ⚔️ Warrior
  - 60-69%: 🥊 Fighter
  - 50-59%: 💀 Mortal
  - 0-49%: 💣 Fatality

### 4. Timeline Page

**15 Major Events** from 1992 to 2023:
- Game releases (MK1-11, MK1 2023)
- Movie releases (1995, 2021)
- Major updates and reboots

**Features:**
- Vertical timeline with alternating left/right layout (desktop)
- Scroll-triggered fade-in animations using Intersection Observer
- Responsive stacked layout on mobile
- Event type badges (game, movie, update)
- Year markers and descriptions

### 5. Header/Navigation

**Features:**
- Fixed header with backdrop blur
- MK-themed styling
- Navigation links to all pages
- Music toggle button (visible on desktop)
- Mobile hamburger menu (hidden on desktop)
- Active link underline animation

### 6. Audio Integration

**Background Music:**
- Mortal Kombat theme plays optionally
- User-controlled play/pause toggle
- Preference saved to localStorage
- Volume set to 30% for comfort
- Only loads when user interacts (respects browser auto-play policies)

## Tailwind CSS Customization

The site uses a custom Tailwind theme defined in `tailwind.config.js`:

### Custom Colors

```javascript
mk: {
  red: '#D91414',      // Blood red
  gold: '#FFD700',     // Gold accents
  black: '#000000',    // Pure black
  yellow: '#FFEB3B',   // Yellow highlights
  darkGray: '#1a1a1a',
  charcoal: '#2a2a2a',
}
```

### Custom Animations

- `glow-pulse`: Text glow pulsing effect
- `slide-up`: Fade in with slide up animation
- `flip`: 180° rotation (for character cards)
- `fade-in`: Simple opacity animation

### Custom Utilities

- `.mk-glow`: Red text glow
- `.mk-glow-lg`: Larger red glow
- `.mk-button`: Standard MK button with hover effects
- `shadow-glow`: Red glow shadow

## Responsive Breakpoints

The site is fully responsive using Tailwind's standard breakpoints:

- **Mobile**: < 640px (single column, stacked navigation)
- **Tablet**: 640px - 1024px (2 columns, sidebar nav)
- **Desktop**: > 1024px (3 columns, full nav, enhanced effects)

## Data Files

All data is hardcoded in the `src/data/` directory:

### characters.js
12 character objects with:
- name, tagline, realm
- imageUrl (via placeholder service)
- backstory (2-3 sentences)
- signatureMoves (array)
- fatalities (array)

### galleryData.js
Organized by era with 6 images each:
- title, description
- imageUrl (via placeholder service)

### quizQuestions.js
15 question objects with:
- question text, 4 options
- correctAnswer (index), difficulty
- explanation text

### timelineData.js
15 event objects with:
- year, title, description
- type (game, movie, update)
- icon for visual identification

## Placeholder Images

The site uses `https://via.placeholder.com/` for all images:

```
Format: https://via.placeholder.com/[WIDTH]x[HEIGHT]/[BG_COLOR]/[TEXT_COLOR]?text=[TEXT]
Example: https://via.placeholder.com/300x400/8B0000/FFD700?text=Scorpion
```

**To add real images:**
1. Add image files to `public/images/`
2. Update image URLs in data files from `/images/filename.jpg`
3. Use a CDN or local hosting as needed

## Audio Implementation

The `mk-theme.mp3` file needs to be added to `public/audio/`:

**To add your own audio:**
1. Place `mk-theme.mp3` in `public/audio/`
2. The app will automatically load and play it when user clicks the music toggle
3. Volume is controlled in `Layout.jsx` (currently 30%)

Alternatively, use a royalty-free MK theme from:
- YouTube Audio Library
- FreeSound.org
- Freepd.com

## Key Design Patterns

### Component Structure
- Page components in `src/pages/`
- Feature components in `src/components/[feature]/`
- Layout components in `src/components/layout/`
- All data in `src/data/`

### State Management
- React hooks (useState, useEffect) for local state
- localStorage for audio preferences
- No global state needed (simple app)

### Styling Approach
- Utility-first with Tailwind CSS
- Custom CSS classes for complex effects
- Consistent use of MK color theme
- Responsive classes for mobile-first design

### Animations
- Tailwind built-in animations where possible
- CSS transforms for flip animations
- Intersection Observer for scroll animations
- CSS transitions for smooth interactions

## Performance Optimizations

- Images use `loading="lazy"` attribute
- No external API calls
- Minimal JavaScript bundle
- Production build: ~269KB (84KB gzipped)
- CSS: ~7.7KB (1.9KB gzipped)

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation (quiz, modal, menu)
- Focus states on all buttons
- Sufficient color contrast
- Alt text on images

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Testing Instructions

1. **Home Page**:
   - Click character cards to flip and see details
   - Test responsive grid at different breakpoints
   - Verify animations play smoothly

2. **Gallery**:
   - Click era tabs to switch galleries
   - Click images to open modal
   - Use arrow keys to navigate in modal
   - Press ESC to close modal

3. **Quiz**:
   - Answer all 15 questions
   - Verify score calculation
   - Check difficulty badges (questions 11-15 are hard)
   - Test retake button

4. **Timeline**:
   - Scroll down to trigger fade-in animations
   - Test responsive layout (desktop vs mobile)
   - Verify year markers display correctly

5. **Audio**:
   - Click music toggle in header
   - Refresh page - preference should persist
   - Check volume level is comfortable

## Future Enhancement Ideas

- Dark/light mode toggle
- Character comparison tool
- Fatality move tutorial videos
- User ratings/reviews system
- Share quiz results on social media
- API integration for latest MK news
- Multi-language support
- Fight simulator mini-game
- Character search/filter
- Advanced statistics page

## Credits

- **Framework**: React, React Router, Vite
- **Styling**: Tailwind CSS v4
- **Fonts**: System fonts (Arial, sans-serif)
- **Colors**: MK-inspired palette
- **Images**: Placeholder service (replace with real images)
- **Music**: Mortal Kombat theme (add your own file)

## License

This is a fan-made tribute site. Mortal Kombat is a trademark of NetherRealm Studios and Warner Bros. Games. Use responsibly and respect intellectual property rights.

## Notes for Development

### Adding New Characters
1. Add character object to `src/data/characters.js`
2. Component automatically renders in grid
3. Flip animation works out of the box

### Adding New Gallery Images
1. Add image objects to respective era in `src/data/galleryData.js`
2. Modal automatically handles navigation

### Adding New Quiz Questions
1. Add question object to `src/data/quizQuestions.js`
2. Quiz container automatically includes in rotation
3. Ensure correct answer index is accurate

### Customizing Colors
1. Edit `tailwind.config.js` theme colors
2. Update `index.css` custom property values
3. Search and replace hex codes where needed

### Performance Tips
- Keep component count manageable
- Use React.lazy() for code splitting if expanded
- Cache images aggressively in production
- Consider CDN for audio files
- Monitor bundle size with vite build analysis

---

Built with ❤️ as a tribute to Mortal Kombat
