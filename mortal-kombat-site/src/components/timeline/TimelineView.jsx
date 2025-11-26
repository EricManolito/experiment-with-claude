import { useEffect, useState } from 'react'
import TimelineEvent from './TimelineEvent'
import { timelineData } from '../../data/timelineData'

export default function TimelineView() {
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-timeline-item]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen py-16 px-4 bg-mk-black pt-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-mk-gold">MORTAL KOMBAT</span>
            <span className="text-mk-red mk-glow-lg block">HISTORY</span>
          </h1>
          <p className="text-gray-400 text-lg">
            From 1992 to Present - A Journey Through the Realms
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mk-red via-mk-gold to-mk-red shadow-glow"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineData.map((event, index) => (
              <div
                key={event.id}
                id={`timeline-${event.id}`}
                data-timeline-item
                className={`transition-all duration-700 ${
                  visibleItems.has(`timeline-${event.id}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <TimelineEvent event={event} index={index} />
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-12 text-center">
            <div className="text-4xl text-mk-gold animate-pulse">⚔️</div>
            <p className="text-gray-500 mt-4">
              The saga continues... More history to come!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
