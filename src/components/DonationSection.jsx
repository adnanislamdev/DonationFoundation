import DonationCard from './DonationCard'

function DonationSection({ presets, selectedAmount, customActive, onSelect }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {presets.map((preset) => (
        <DonationCard
          key={preset.amount}
          amount={preset.amount}
          title={preset.title}
          detail={preset.detail}
          selected={!customActive && selectedAmount === preset.amount}
          onSelect={() => onSelect(preset.amount)}
        />
      ))}
    </div>
  )
}

export default DonationSection
