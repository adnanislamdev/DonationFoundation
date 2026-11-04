function DonationCard({ amount, title, detail, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`text-left rounded-2xl p-6 shadow-sm transition border-2 ${
        selected ? 'bg-white border-[#303090]' : 'bg-white/70 border-transparent hover:bg-white'
      }`}
    >
      <p className="text-3xl font-serif text-[#303090]">${amount}</p>
      <p className="mt-2 font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-[#2c2c5a]">{detail}</p>
    </button>
  )
}

export default DonationCard
