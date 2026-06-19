import { useEffect } from 'react'

// ── Spotlight (cursor-reactive glow across the whole page) ──
export function Spotlight() {
  useEffect(() => {
    const handler = (e) => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px')
      document.documentElement.style.setProperty('--my', e.clientY + 'px')
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return <div className="spotlight" aria-hidden="true" />
}

// ── Aurora — soft animated gradient blobs in the background ──
export function Aurora() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,195,247,0.07) 0%, transparent 65%)',
        animation: 'auroraA 18s ease-in-out infinite alternate',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%',
        width: '50vw', height: '50vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,169,77,0.06) 0%, transparent 65%)',
        animation: 'auroraB 22s ease-in-out infinite alternate',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '40%',
        width: '40vw', height: '40vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,61,110,0.04) 0%, transparent 65%)',
        animation: 'auroraC 14s ease-in-out infinite alternate',
      }} />
      <style>{`
        @keyframes auroraA { from{transform:translate(0,0) scale(1)} to{transform:translate(8vw,6vh) scale(1.15)} }
        @keyframes auroraB { from{transform:translate(0,0) scale(1)} to{transform:translate(-6vw,-8vh) scale(1.1)} }
        @keyframes auroraC { from{transform:translate(0,0) scale(1)} to{transform:translate(4vw,-5vh) scale(0.9)} }
      `}</style>
    </div>
  )
}
