import { useEffect, useRef } from 'react'

export default function SplashCursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = window.innerWidth, H = window.innerHeight
    canvas.width = W; canvas.height = H

    const COLORS = ['#FF3D6E', '#4FC3F7', '#FFA94D']
    const particles = []

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight
      canvas.width = W; canvas.height = H
    }
    window.addEventListener('resize', resize)

    const spawn = (x, y) => {
      const count = 8
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5
        const speed = 1.5 + Math.random() * 3
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          size: 2 + Math.random() * 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    const onMove = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX
      const y = e.clientY ?? e.touches?.[0]?.clientY
      if (Math.random() > 0.6) spawn(x, y)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })

    let raf
    const tick = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy
        p.vy += 0.08
        p.life -= p.decay
        if (p.life <= 0) { particles.splice(i, 1); continue }
        ctx.globalAlpha = p.life
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  )
}
