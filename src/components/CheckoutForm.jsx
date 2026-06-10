import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
export default function CheckoutForm(){
    const stripe = useStripe()
    const elements = useElements()
    async function handleSubmit(e) {
        e.preventDefault()
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:5173/success'
            }
        })
    }   
    return(
        <form onSubmit= {handleSubmit}>
            <PaymentElement/>
            <button>Submit</button>
        </form>
        

    )
}