import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import VideoCard from '../components/VideoCard'

const focuses = [
  {
    title: 'Essentials',
    text: 'Gifts help with food, clothing, and everyday household needs.',
  },
  {
    title: 'Family care',
    text: 'Support is directed toward households living with financial hardship.',
  },
  {
    title: 'Local partnership',
    text: 'We collaborate with the East Mathurapur Human Welfare Organization, which works in the community.',
  },
]

const videos = [
  { src: '/donationdemo1.mp4', title: 'Community footage' },
  { src: '/donationdemo2.mp4', title: 'Community footage' },
  { src: '/donationdemo3.mp4', title: 'Community footage' },
]

function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-sm uppercase tracking-[0.18em] text-[#303090]">What we support</p>
        <h2 className="text-3xl md:text-4xl mt-2 max-w-2xl">A foundation for villages that need a steadier footing</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {focuses.map((item) => (
            <article key={item.title} className="bg-white/75 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl text-[#303090]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#2c2c5a]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#303090] text-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl md:text-4xl">From the field</h2>
          <p className="mt-3 max-w-2xl text-[#d7d7f4]">
            Recordings from work alongside the East Mathurapur Human Welfare Organization.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {videos.map((video) => (
              <VideoCard key={video.src} vids={video.src} title={video.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-3xl bg-[#181847] text-gray-100 px-6 py-12 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl">Give where it is needed</h2>
            <p className="mt-3 text-[#d7d7f4] max-w-xl">
              Choose an amount and complete your gift securely. Every contribution supports this work.
            </p>
          </div>
          <Link to="/donate" className="bg-white text-[#303090] px-6 py-3 rounded-full font-semibold text-center hover:bg-[#d9d9f5] transition">
            Make a gift
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
