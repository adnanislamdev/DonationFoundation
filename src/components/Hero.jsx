import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section
      style={{ backgroundImage: 'url("/bangladeshpovertyimg1.webp")' }}
      className="bg-center bg-cover"
    >
      <div className="bg-gradient-to-r from-[#181847]/90 via-[#303090]/75 to-[#303090]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 text-gray-100">
          <p className="uppercase tracking-[0.22em] text-sm text-[#d7d7f4] mb-4">Seikh Foundation</p>
          <h1 className="text-4xl md:text-6xl max-w-3xl leading-tight">
            Help bring comfort to villages in Bangladesh
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-200 leading-relaxed">
            We raise support for communities in need and work with the East Mathurapur Human Welfare Organization to put it to use locally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="bg-white text-[#303090] px-6 py-3 rounded-full font-semibold hover:bg-[#d9d9f5] transition"
            >
              Donate now
            </Link>
            <Link
              to="/about"
              className="border border-white/70 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
