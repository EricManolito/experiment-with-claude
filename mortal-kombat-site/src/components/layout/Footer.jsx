export default function Footer() {
  return (
    <footer className="bg-mk-black border-t-2 border-mk-red py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-mk-gold mb-4">About</h3>
            <p className="text-gray-400">
              A tribute fan site celebrating the legendary Mortal Kombat franchise with character encyclopedias, galleries, quizzes, and historical timelines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-mk-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-mk-red transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-mk-red transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/quiz"
                  className="hover:text-mk-red transition-colors duration-300"
                >
                  Quiz
                </a>
              </li>
              <li>
                <a
                  href="/timeline"
                  className="hover:text-mk-red transition-colors duration-300"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold text-mk-gold mb-4">Legal</h3>
            <p className="text-gray-400 text-sm">
              This is a fan-made tribute site. Mortal Kombat is a trademark of NetherRealm Studios and Warner Bros. Games.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-mk-red py-4"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Mortal Kombat Fan Site. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-mk-red hover:text-mk-gold transition-colors duration-300"
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a
              href="#"
              className="text-mk-red hover:text-mk-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="text-mk-red hover:text-mk-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
