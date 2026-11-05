import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-2xl mb-3">Seikh Foundation</h3>
          <p className="text-[var(--footer-text)] leading-relaxed">
            Giving back to communities in Bangladesh, together with the East Mathurapur Human Welfare Organization.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-[var(--footer-text)]">
            <li>Maimuna Seikh</li>
            <li>
              <a href="mailto:info@seikhfoundation.com" className="hover:text-white">info@seikhfoundation.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold mb-3">Visit</h4>
          <div className="flex flex-col gap-2 text-[var(--footer-text)]">
            <Link to="/about" className="hover:text-white w-fit">About</Link>
            <Link to="/donate" className="hover:text-white w-fit">Donate</Link>
            <Link to="/contact" className="hover:text-white w-fit">Contact</Link>
            <a
              href="https://www.facebook.com/groups/3916143341984389/user/100007602376353/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white w-fit mt-2"
            >
              <FaFacebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--footer-border)] text-center text-sm text-[var(--footer-text)] py-5">
        <p>&copy; {new Date().getFullYear()} Seikh Foundation. All rights reserved.</p>
      </div>
    </footer>
  )
}
