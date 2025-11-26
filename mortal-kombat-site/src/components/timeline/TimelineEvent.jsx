export default function TimelineEvent({ event, index }) {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`flex items-center mb-8 ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 px-4`}>
        <div
          className={`bg-mk-charcoal border-2 rounded-lg p-6 shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:border-mk-gold ${
            isLeft ? 'border-mk-red md:mr-auto' : 'border-mk-gold md:ml-auto'
          }`}
        >
          {/* Year Badge */}
          <div className="inline-block mb-3">
            <span className="bg-mk-red text-black px-4 py-1 rounded-full font-bold">
              {event.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black text-mk-gold mb-3">
            {event.icon} {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-3">
            {event.description}
          </p>

          {/* Type badge */}
          <div className="inline-block">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                event.type === 'game'
                  ? 'bg-mk-gold bg-opacity-20 text-mk-gold'
                  : event.type === 'movie'
                    ? 'bg-mk-red bg-opacity-20 text-mk-red'
                    : 'bg-purple-900 bg-opacity-20 text-purple-400'
              }`}
            >
              {event.type.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Center dot on desktop */}
      <div className="hidden md:flex md:w-2/12 justify-center">
        <div className="relative flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full border-4 ${
              isLeft ? 'border-mk-red' : 'border-mk-gold'
            } bg-mk-black shadow-glow`}
          ></div>
        </div>
      </div>

      {/* Empty space on desktop */}
      <div className="hidden md:w-5/12 md:block"></div>

      {/* Mobile timeline dot */}
      <div className="md:hidden flex justify-center w-full my-4">
        <div className="w-3 h-3 rounded-full bg-mk-red shadow-glow"></div>
      </div>
    </div>
  )
}
