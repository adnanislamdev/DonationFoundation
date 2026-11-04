import { Link, useSearchParams } from 'react-router-dom'

function Success() {
  const [params] = useSearchParams()
  const status = params.get('redirect_status')
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <p className="uppercase tracking-[0.18em] text-sm text-[#303090]">Thank you</p>
      <h1 className="text-4xl md:text-5xl mt-3">
        {status === 'succeeded'
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
          : status === 'succeeded' || !status
            ? 'Seikh Foundation is grateful for your support of communities in Bangladesh.'
            : 'If money left your account, contact us and we will help sort it out. Otherwise you can try again.'}
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="bg-[#303090] text-white px-6 py-3 rounded-full font-semibold">Back home</Link>
        <Link to="/contact" className="border border-[#303090] px-6 py-3 rounded-full font-semibold">Contact us</Link>
      </div>
    </div>
  )
}

export default Success
