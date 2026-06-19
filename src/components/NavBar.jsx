import { Link, useLocation } from 'react-router-dom'
import Logo from './ui/Logo'

const LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/dashboard', label: 'DASHBOARD' },
  { to: '/pricing', label: 'PRICING' },
  { to: '/about', label: 'ABOUT' },
]

export default function NavBar() {
  const { pathname } = useLocation()

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-hairline"
      style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'rgba(22,25,31,0.85)' }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-[1280px] mx-auto">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <Logo />
          <span className="font-display text-xl tracking-wide text-market">EDGEFORM</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-mono text-xs tracking-widest no-underline transition-colors ${pathname === to ? 'text-paper' : 'text-mute hover:text-paper'}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="font-mono text-xs tracking-widest text-mute hover:text-paper transition-colors">LOGIN</button>
          <Link
            to="/dashboard"
            className="font-mono text-xs tracking-widest border border-edge text-paper px-5 py-2 no-underline hover:bg-edge/10 transition-all"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </div>
    </nav>
  )
}
