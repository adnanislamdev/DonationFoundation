import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoMark from './LogoMark'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#303090] text-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-serif text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          Seikh Foundation
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[15px]">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `transition duration-300 ${isActive ? 'text-white underline underline-offset-8' : 'text-gray-200 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            className="bg-white text-[#303090] px-4 py-2 rounded-full font-semibold hover:bg-[#d9d9f5] transition"
          >
            Donate
          </NavLink>
        </div>
        <button
          className="md:hidden p-2"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/15 px-4 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className="py-1">
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            onClick={() => setOpen(false)}
            className="bg-white text-[#303090] text-center px-4 py-2 rounded-full font-semibold"
          >
            Donate
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
