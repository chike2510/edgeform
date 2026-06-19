import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const TABS = [
  { to: '/',          icon: 'home',      label: 'HOME'   },
  { to: '/dashboard', icon: 'analytics', label: 'EDGES'  },
  { to: '/pricing',   icon: 'diamond',   label: 'PLANS'  },
  { to: '/about',     icon: 'info',      label: 'ABOUT'  },
]

export default function MobileNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const innerRef = useRef(null)
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const btnRefs = useRef([])

  useEffect(() => {
    const idx = TABS.findIndex(t => t.to === pathname)
    const btn = btnRefs.current[idx]
    const inner = innerRef.current
    if (!btn || !inner) return
    const bRect = btn.getBoundingClientRect()
    const iRect = inner.getBoundingClientRect()
    setPill({ left: bRect.left - iRect.left, width: bRect.width })
  }, [pathname])

  return (
    <nav
      className="md:hidden fixed bottom-6 left-1/2 z-50"
      style={{ transform: 'translateX(-50%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 999, padding: 6, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(22,25,31,0.75)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
    >
      <div ref={innerRef} style={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>
        {/* sliding pill */}
        <div
          className="nav-pill"
          style={{ position: 'absolute', top: 0, height: '100%', background: '#FF3D6E', borderRadius: 999, zIndex: 0, left: pill.left, width: pill.width }}
        />
        {TABS.map(({ to, icon, label }, i) => {
          const active = pathname === to
          return (
            <button
              key={to}
              ref={el => btnRefs.current[i] = el}
              onClick={() => navigate(to)}
              style={{
                position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 2, padding: '8px 16px', borderRadius: 999,
                border: 'none', background: 'none',
                color: active ? '#fff' : '#8B92A0',
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.08em',
                cursor: 'pointer', transition: 'color 200ms', minWidth: 60,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
              {label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
