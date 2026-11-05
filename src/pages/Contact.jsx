import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:info@seikhfoundation.com?subject=${subject}&body=${body}`
    setError('')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-[0.18em] text-sm text-[#303090]">Contact</p>
      <h1 className="text-4xl md:text-5xl mt-2">Questions and messages</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed">
        Write to us about the foundation, a gift, or how to get involved. We read every note.
      </p>
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 mt-10">
        <div className="bg-[#303090] text-gray-100 rounded-2xl p-6 h-fit">
          <h2 className="text-2xl">Reach us</h2>
          <dl className="mt-5 space-y-4 text-[#e4e4f6]">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#b7b7e4]">Name</dt>
              <dd>Maimuna Seikh</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#b7b7e4]">Email</dt>
              <dd><a href="mailto:info@seikhfoundation.com" className="hover:underline">info@seikhfoundation.com</a></dd>
            </div>
          </dl>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/80 rounded-2xl p-6 shadow-sm space-y-4">
          <label className="block">
            <span className="text-sm font-semibold">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={update}
              className="mt-1 w-full rounded-xl border border-[#303090]/20 bg-white px-3 py-2 outline-none focus:border-[#303090]"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              className="mt-1 w-full rounded-xl border border-[#303090]/20 bg-white px-3 py-2 outline-none focus:border-[#303090]"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              className="mt-1 w-full rounded-xl border border-[#303090]/20 bg-white px-3 py-2 outline-none focus:border-[#303090]"
            />
          </label>
          {error && <p className="text-sm text-red-800">{error}</p>}
          <button type="submit" className="bg-[#303090] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#181847] transition">
            Send message
          </button>
          <p className="text-sm text-[#3a3a68]">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </div>
  )
}

export default Contact
