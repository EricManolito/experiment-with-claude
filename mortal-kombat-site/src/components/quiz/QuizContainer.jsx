import { useState } from 'react'
import { quizQuestions } from '../../data/quizQuestions'
import QuestionCard from './QuestionCard'
import ResultsScreen from './ResultsScreen'

const RANKINGS = [
  { minScore: 90, title: 'Grandmaster', emoji: '👑' },
  { minScore: 80, title: 'Champion', emoji: '🥇' },
  { minScore: 70, title: 'Warrior', emoji: '⚔️' },
  { minScore: 60, title: 'Fighter', emoji: '🥊' },
  { minScore: 50, title: 'Mortal', emoji: '💀' },
  { minScore: 0, title: 'Fatality', emoji: '💣' },
]

export default function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [quizComplete, setQuizComplete] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const question = quizQuestions[currentQuestion]
  const totalQuestions = quizQuestions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswers[currentQuestion] !== undefined) {
      return // Already answered this question
    }

    const isCorrect = answerIndex === question.correctAnswer
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    })

    if (isCorrect) {
      setScore(score + 1)
    }

    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswers({})
    setQuizComplete(false)
    setShowExplanation(false)
  }

  const getRanking = () => {
    const percentage = (score / totalQuestions) * 100
    return RANKINGS.find((r) => percentage >= r.minScore)
  }

  if (quizComplete) {
    return (
      <ResultsScreen
        score={score}
        totalQuestions={totalQuestions}
        ranking={getRanking()}
        onRestart={handleRestartQuiz}
      />
    )
  }

  return (
    <section className="min-h-screen py-12 px-4 bg-mk-black pt-32">
      <div className="max-w-2xl mx-auto">
        {/* Quiz Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="text-mk-red mk-glow-lg">MK QUIZ</span>
          </h1>
          <p className="text-center text-gray-400">
            Test your knowledge of Mortal Kombat
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <span className="text-mk-gold font-bold">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-mk-red font-bold">
              Score: {score}/{totalQuestions}
            </span>
          </div>
          <div className="w-full bg-mk-charcoal rounded-full h-4 border-2 border-mk-red overflow-hidden shadow-glow">
            <div
              className="bg-gradient-to-r from-mk-red to-mk-gold h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={question}
          questionNumber={currentQuestion + 1}
          selectedAnswer={selectedAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          showExplanation={showExplanation}
          disabled={selectedAnswers[currentQuestion] !== undefined}
        />

        {/* Next Button */}
        {selectedAnswers[currentQuestion] !== undefined && (
          <div className="mt-8 flex justify-center animate-slide-up">
            <button
              onClick={handleNextQuestion}
              className="mk-button text-lg px-8 hover:shadow-glow-lg"
            >
              {currentQuestion === totalQuestions - 1
                ? 'See Results'
                : 'Next Question'}
            </button>
          </div>
        )}

        {/* Question Counter */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Questions 1-10: Easy/Medium | Questions 11-15: Hard
          </p>
        </div>
      </div>
    </section>
  )
}
