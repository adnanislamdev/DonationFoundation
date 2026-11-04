function DonationHero() {
  return (
    <section
      style={{ backgroundImage: 'url("/bangladeshpovertyimg2.jpg")' }}
      className="bg-cover bg-[center_45%]"
    >
      <div className="bg-gradient-to-r from-[#181847]/88 to-[#303090]/55">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-gray-100">
          <p className="uppercase tracking-[0.18em] text-sm text-[#d7d7f4]">Donate</p>
          <h1 className="text-4xl md:text-5xl mt-3 max-w-2xl">Make a gift to Seikh Foundation</h1>
          <p className="mt-4 max-w-xl text-[#e4e4f6] leading-relaxed">
            Choose an amount, then pay securely with Stripe. Your gift supports villages in Bangladesh through our local partnership.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DonationHero
