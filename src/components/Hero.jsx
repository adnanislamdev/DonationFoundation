import { Link } from 'react-router-dom'
function Hero(){
    return(
        <div style = {{ backgroundImage: 'url("/bangladeshpovertyimg1.webp")'}}className = "bg-center bg-cover h-96">
            <div className = "flex justify-center flex-col items-center text-gray-100 h-full bg-black/80 pt-50">
                <h1 className="text-4xl text-center">Help bring financial comfort to the hungry villages in Bangladesh</h1>
                <Link to="/donate" className = "text-gray-100 p-2 hover:bg-purple-400 transition duration-400 rounded-sm m-2 bg-[#303090]">Donate Now </Link>
            </div>
        </div>
    )
}
export default Hero