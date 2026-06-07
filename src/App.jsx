import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className = "bg-[#8f8fda] min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
      
  )
}

export default App