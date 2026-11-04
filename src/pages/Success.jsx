import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Success() {
  const [params] = useSearchParams()
  const clientSecret = params.get('payment_intent_client_secret')
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(Boolean(clientSecret))

  useEffect(() => {
    if (!clientSecret) return
    let active = true
    fetch('/api/payment-summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientSecret }),
    })
      .then((response) => (response.ok ? response.json() : null))
      .catch(() => null)
      .then((data) => {
        if (!active) return
        setSummary(data)
        setLoading(false)
      })
    return () => {
      active = false
    }
  }, [clientSecret])

  // Stripe's answer via our server wins; the URL value is only a fallback.
  const status = summary?.status || params.get('redirect_status')
  const succeeded = status === 'succeeded'

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-lg">Confirming your gift…</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <p className="uppercase tracking-[0.18em] text-sm text-[#303090]">Thank you</p>
      <h1 className="text-4xl md:text-5xl mt-3">
        {succeeded
          ? 'Your gift was received'
          : status === 'processing'
            ? 'Your gift is processing'
            : status
              ? 'We could not confirm this gift'
              : 'Thank you for supporting this work'}
      </h1>
      <p className="mt-4 text-lg leading-relaxed">
        {status === 'processing'
          ? 'Stripe is still confirming the payment. You do not need to give again.'
          : succeeded || !status
            ? 'Seikh Foundation is grateful for your support of communities in Bangladesh.'
            : 'If money left your account, contact us and we will help sort it out. Otherwise you can try again.'}
      </p>

      {succeeded && summary && (
        <div className="mt-8 mx-auto max-w-md rounded-2xl bg-white p-6 text-left shadow-sm">
          <h2 className="text-xl text-[#303090]">Confirmation</h2>
          <dl className="mt-3 space-y-2">
            <div className="flex justify-between gap-4">
              <dt>Amount</dt>
              <dd className="font-semibold">${summary.amount.toFixed(2)}</dd>
            </div>
            {summary.email && (
              <div className="flex justify-between gap-4">
                <dt>{summary.livemode ? 'Receipt sent to' : 'Receipt email'}</dt>
                <dd className="font-semibold break-all text-right">{summary.email}</dd>
              </div>
            )}
          </dl>
          {summary.receiptUrl && (
            <a
              href={summary.receiptUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-semibold text-[#303090] underline"
            >
              View your receipt
            </a>
          )}
          {!summary.livemode && (
            <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
              Test mode: no money moved, and Stripe does not email receipts for test payments. The
              link above shows the receipt a donor would get.
            </p>
          )}
        </div>
      )}

      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="bg-[#303090] text-white px-6 py-3 rounded-full font-semibold">Back home</Link>
        <Link to="/contact" className="border border-[#303090] px-6 py-3 rounded-full font-semibold">Contact us</Link>
      </div>
    </div>
  )
}

export default Success
