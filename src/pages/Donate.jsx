import DonationSection from "../components/DonationSection";
import DonationHero from "../components/DonationHero";
import InputBar from "../components/InputBar";
import CheckoutForm from "../components/CheckoutForm";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
function Donate(){
    const [clientSecret, setClientSecret] = useState("")
    const options = { clientSecret }
    useEffect(() => {
        fetch("http://localhost:3000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 10 }) // hardcode for now
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        }, [])
    return(
        <div>
            <DonationHero/>
            <DonationSection/>
            <InputBar/>
            {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}
export default Donate