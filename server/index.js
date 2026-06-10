const express = require('express')
const cors = require('cors')
require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


const app = express()
app.use(cors())
app.use(express.json())

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
    })
  
    res.send({ clientSecret: paymentIntent.client_secret })
  })
  
  app.listen(3000, () => console.log('Server running on port 3000'))