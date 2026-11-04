import process from 'node:process'
import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const dollars = Number(req.body?.amount)
    if (!Number.isFinite(dollars) || dollars < 1 || dollars > 10000) {
      return res.status(400).json({ error: 'Enter an amount between $1 and $10,000.' })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(dollars * 100),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    })

    return res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Unable to start checkout. Please try again.' })
  }
}
