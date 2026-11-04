import { useEffect, useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import DonationSection from '../components/DonationSection'
import DonationHero from '../components/DonationHero'
import InputBar from '../components/InputBar'
import CheckoutForm from '../components/CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const presets = [
  { amount: 25, title: 'Essentials', detail: 'Food, clothing, and household supplies.' },
  { amount: 50, title: 'Family care', detail: 'Support for a household in need.' },
  { amount: 100, title: 'Community', detail: 'Broader help through our village partner.' },
]

function Donate() {
  const [amount, setAmount] = useState(25)
  const [custom, setCustom] = useState('')
  const [customActive, setCustomActive] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [lockedAmount, setLockedAmount] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const checkoutRef = useRef(null)

  useEffect(() => {
    if (!clientSecret) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    checkoutRef.current?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [clientSecret])

  const selected = customActive ? Number(custom) : amount
  const valid = Number.isFinite(selected) && selected >= 1 && selected <= 10000

  function selectPreset(value) {
    setAmount(value)
    setCustomActive(false)
    setClientSecret('')
    setError('')
  }

  function editCustom(event) {
    setCustom(event.target.value)
    setCustomActive(true)
    setClientSecret('')
    setError('')
  }

  async function startCheckout() {
    if (!valid) {
      setError('Enter an amount between $1 and $10,000.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selected }),
      })
      const data = await response.json()
      if (!response.ok || !data.clientSecret) {
        throw new Error(data.error || 'Checkout could not be started.')
      }
      setLockedAmount(selected)
      setClientSecret(data.clientSecret)
    } catch (err) {
      setError(err.message || 'Checkout could not be started.')
    } finally {
      setLoading(false)
    }
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#303090',
        borderRadius: '12px',
        fontFamily: 'Outfit, sans-serif',
      },
    },
  }

  return (
    <div>
      <DonationHero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
        <div>
          <h2 className="text-3xl text-[#303090]">Choose an amount</h2>
          <div className="mt-6">
            <DonationSection
              presets={presets}
              selectedAmount={amount}
              customActive={customActive}
              onSelect={selectPreset}
            />
          </div>
          <div className="mt-4">
            <InputBar value={custom} onChange={editCustom} active={customActive} />
          </div>
          <button
            type="button"
            onClick={startCheckout}
            disabled={loading}
            className="mt-6 bg-[#303090] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#181847] transition disabled:opacity-60"
          >
            {loading ? 'Starting checkout…' : valid ? `Continue with $${selected}` : 'Enter a valid amount'}
          </button>
          {error && <p className="mt-3 text-sm text-red-800">{error}</p>}
        </div>
        <div ref={checkoutRef} className="scroll-mt-24">
          {clientSecret ? (
            <Elements key={clientSecret} stripe={stripePromise} options={options}>
              <CheckoutForm amount={lockedAmount} />
            </Elements>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#303090]/40 bg-white/50 p-6 text-[#2c2c5a]">
              <h2 className="text-2xl text-[#303090]">Secure checkout</h2>
              <p className="mt-2 leading-relaxed">Select a gift, then continue. The payment form appears here.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Donate
