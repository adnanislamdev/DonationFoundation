import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'

export default function CheckoutForm({ amount }) {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (!stripe || !elements) return
    setSubmitting(true)
    setMessage('')
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email,
      },
    })
    if (result.error) {
      setMessage(result.error.message || 'Payment could not be completed.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl text-[#303090]">Pay ${amount}</h2>
      <p className="mt-1 mb-5 text-sm text-[#3a3a68]">Card details are handled by Stripe. Seikh Foundation does not store them.</p>
      <label className="block mb-4 text-sm font-medium text-[#303090]">
        Email for your receipt
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-1 block w-full rounded-xl border border-[#303090]/30 px-3 py-2.5 text-base font-normal text-[#2c2c5a] outline-none focus:border-[#303090]"
        />
      </label>
      <PaymentElement />
      {message && <p className="mt-4 text-sm text-red-800">{message}</p>}
      <button
        type="submit"
        disabled={!stripe || submitting}
        className="mt-6 w-full bg-[#303090] text-white py-3 rounded-full font-semibold hover:bg-[#181847] transition disabled:opacity-60"
      >
        {submitting ? 'Processing…' : `Give $${amount}`}
      </button>
    </form>
  )
}
