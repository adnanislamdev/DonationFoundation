import { Link } from 'react-router-dom'

const steps = [
  { title: 'You give', text: 'Choose a suggested amount or enter your own. Checkout is handled by Stripe.' },
  { title: 'We partner locally', text: 'Seikh Foundation works with the East Mathurapur Human Welfare Organization.' },
  { title: 'Communities are supported', text: 'Funds are used for people in villages in Bangladesh who need financial help.' },
]

function About() {
  return (
    <div>
      <section
        style={{ backgroundImage: 'url("/bangladeshpovertyimg2.jpg")' }}
        className="bg-cover bg-[center_40%]"
      >
        <div className="bg-[#181847]/75">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-gray-100">
            <p className="uppercase tracking-[0.18em] text-sm text-[#d7d7f4]">About</p>
            <h1 className="text-4xl md:text-5xl mt-3 max-w-3xl">Funding support for villages in Bangladesh</h1>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        <div>
          <h2 className="text-3xl text-[#303090]">Who we are</h2>
          <p className="mt-4 leading-relaxed text-lg">
            Seikh Foundation is focused on funding the poor and needy villages in Bangladesh. The work is done in collaboration with the East Mathurapur Human Welfare Organization, a local partner close to the communities we want to reach.
          </p>
          <p className="mt-4 leading-relaxed">
            This site is a place to learn about that effort and to give. We keep the path simple: a clear purpose, a local partnership, and a secure way to contribute.
          </p>
        </div>
        <aside className="bg-white/75 rounded-2xl p-6 h-fit">
          <h3 className="text-2xl text-[#303090]">At a glance</h3>
          <ul className="mt-4 space-y-3">
            <li><span className="font-semibold">Focus:</span> Villages in Bangladesh</li>
            <li><span className="font-semibold">Partner:</span> East Mathurapur Human Welfare Organization</li>
            <li><span className="font-semibold">Contact:</span> Maimuna Seikh</li>
          </ul>
        </aside>
      </section>
      <section className="bg-white/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl text-[#303090]">How a gift moves</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {steps.map((step, index) => (
              <article key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#303090]">0{index + 1}</p>
                <h3 className="text-2xl mt-2">{step.title}</h3>
                <p className="mt-3 leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
          <Link to="/donate" className="inline-block mt-10 bg-[#303090] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#181847] transition">
            Donate
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
