import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav>
            <div className = "flex justify-between items-center bg-[#303090] p-2">
                <Link to="/" className = "text-gray-100 text-2xl ml-4 hover:text-gray-600 transition duration-300">Seikh Foundation</Link>
                <div className = "flex gap-6 text-lg text-gray-100 mr-8">
                    <Link to="/" className = "btn">Home</Link>
                    <Link to="/about" className = "btn">About</Link>
                    <Link to="/donate" className = "btn">Donate</Link>
                    <Link to="/contact" className = "btn">Contact</Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar