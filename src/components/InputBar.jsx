export default function InputBar({ value, onChange, active }) {
  return (
    <label className={`block rounded-2xl p-5 border-2 ${active ? 'bg-white border-[#303090]' : 'bg-white/70 border-transparent'}`}>
      <span className="font-semibold">Or enter your own amount</span>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-xl text-[#303090]">$</span>
        <input
          type="number"
          min="1"
          step="1"
          inputMode="decimal"
          value={value}
          onChange={onChange}
          placeholder="75"
          className="w-full bg-transparent text-2xl outline-none"
        />
      </div>
    </label>
  )
}
