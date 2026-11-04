import process from 'node:process'
import Stripe from 'stripe'

// Lets the confirmation page show verified payment details. The client secret
// proves the caller made this payment, so nobody can look one up by ID alone.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const clientSecret = String(req.body?.clientSecret || '')
    const id = clientSecret.match(/^(pi_[A-Za-z0-9]+)_secret_/)?.[1]
    if (!id) {
      return res.status(400).json({ error: 'Invalid payment reference.' })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const paymentIntent = await stripe.paymentIntents.retrieve(id, { expand: ['latest_charge'] })
    if (paymentIntent.client_secret !== clientSecret) {
      return res.status(403).json({ error: 'Invalid payment reference.' })
    }

    return res.status(200).json({
      status: paymentIntent.status,
      amount: paymentIntent.amount / 100,
      email: paymentIntent.receipt_email,
      receiptUrl: paymentIntent.latest_charge?.receipt_url || null,
      livemode: paymentIntent.livemode,
    })
  } catch (err) {
    if (err.code === 'resource_missing') {
      return res.status(404).json({ error: 'Invalid payment reference.' })
    }
    console.error(err)
    return res.status(500).json({ error: 'Unable to load this payment.' })
  }
}
