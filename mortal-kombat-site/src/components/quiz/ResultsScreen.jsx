import { Link } from 'react-router-dom'

export default function ResultsScreen({
  score,
  totalQuestions,
  ranking,
  onRestart,
}) {
  const percentage = (score / totalQuestions) * 100

  return (
    <section className="min-h-screen py-12 px-4 bg-mk-black pt-32 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-mk-charcoal border-4 border-mk-gold rounded-lg p-8 text-center shadow-glow-lg animate-slide-up">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-mk-gold">FATALITY</span>
          </h1>
          <p className="text-gray-400 mb-8">Quiz Complete</p>

          {/* Ranking Display */}
          <div className="mb-8 p-8 bg-mk-black rounded-lg border-2 border-mk-red">
            <div className="text-6xl mb-4">{ranking.emoji}</div>
            <h2 className="text-4xl md:text-5xl font-black text-mk-gold mb-2">
              {ranking.title}
            </h2>
            <p className="text-gray-400 text-lg">Rank Achieved</p>
          </div>

          {/* Score Display */}
          <div className="mb-8">
            <div className="text-6xl font-black text-mk-red mb-2 mk-glow-lg">
              {score}/{totalQuestions}
            </div>
            <p className="text-gray-400 text-lg mb-4">Correct Answers</p>

            {/* Percentage Bar */}
            <div className="w-full bg-mk-charcoal rounded-full h-6 border-2 border-mk-red overflow-hidden shadow-glow mb-4">
              <div
                className="bg-gradient-to-r from-mk-red to-mk-gold h-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <p className="text-mk-gold font-bold text-2xl">{percentage.toFixed(1)}%</p>
          </div>

          {/* Performance Message */}
          <div className="mb-8 p-4 bg-mk-black rounded border-2 border-mk-gold">
            <p className="text-lg text-gray-300">
              {percentage === 100
                ? '🏆 FLAWLESS VICTORY!'
                : percentage >= 90
                  ? 'Excellent mastery of MK lore!'
                  : percentage >= 80
                    ? 'Impressive knowledge, warrior!'
                    : percentage >= 70
                      ? 'Good understanding of the fighters!'
                      : percentage >= 60
                        ? 'You know the basics, continue learning!'
                        : 'Time to study the fighters more!'}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRestart}
              className="mk-button text-lg hover:shadow-glow-lg"
            >
              Retake Quiz
            </button>
            <Link
              to="/"
              className="mk-button text-lg bg-mk-gold text-mk-black hover:bg-mk-red hover:text-white hover:shadow-glow-lg flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>

          {/* Stats Footer */}
          <div className="mt-8 pt-8 border-t border-mk-gold">
            <p className="text-gray-500 text-sm">
              Challenge yourself with the gallery and timeline to learn more MK lore!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
