export default function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
  showExplanation,
  disabled,
}) {
  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <div className="bg-mk-charcoal border-3 border-mk-red rounded-lg p-8 shadow-glow animate-slide-up">
      {/* Difficulty Badge */}
      <div className="mb-4 inline-block">
        <span
          className={`px-3 py-1 rounded-full font-bold text-sm ${
            question.difficulty === 'hard'
              ? 'bg-mk-red text-black'
              : question.difficulty === 'medium'
                ? 'bg-mk-gold text-black'
                : 'bg-green-600 text-white'
          }`}
        >
          {question.difficulty.toUpperCase()}
        </span>
      </div>

      {/* Question Text */}
      <h2 className="text-2xl md:text-3xl font-bold text-mk-gold mb-8 leading-relaxed">
        {question.question}
      </h2>

      {/* Answer Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={disabled}
            className={`w-full p-4 rounded-lg font-bold transition-all duration-300 text-left flex items-center space-x-4 border-2 ${
              selectedAnswer === undefined
                ? 'bg-mk-charcoal border-mk-gold text-white hover:bg-mk-red hover:border-mk-red hover:text-black cursor-pointer'
                : selectedAnswer === index
                  ? isCorrect
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'bg-mk-red border-mk-red text-black'
                  : index === question.correctAnswer
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'bg-mk-charcoal border-mk-gold text-white opacity-50'
            }`}
          >
            {/* Checkbox indicator */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
              {selectedAnswer === index && (
                <div className="w-3 h-3 rounded-full bg-current"></div>
              )}
            </div>

            {/* Option text */}
            <span className="flex-1">{option}</span>

            {/* Result indicator */}
            {selectedAnswer !== undefined && (
              <span className="flex-shrink-0 text-xl">
                {selectedAnswer === index && isCorrect && '✓'}
                {selectedAnswer === index && !isCorrect && '✗'}
                {index === question.correctAnswer &&
                  selectedAnswer !== index &&
                  '✓'}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div
          className={`mt-8 p-4 rounded-lg border-l-4 animate-slide-up ${
            isCorrect
              ? 'bg-green-900 bg-opacity-30 border-green-600'
              : 'bg-mk-red bg-opacity-20 border-mk-red'
          }`}
        >
          <p className="font-bold mb-2">
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-gray-300">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
