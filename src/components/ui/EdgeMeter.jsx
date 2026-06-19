import { useEffect, useRef, useState } from 'react'

export default function EdgeMeter({ marketPct = 38, modelPct = 54, animate = true, compact = false }) {
  const [mkt, setMkt] = useState(animate ? 0 : marketPct)
  const [mdl, setMdl] = useState(animate ? 0 : modelPct)
  const [showFill, setShowFill] = useState(!animate)
  const [showLabel, setShowLabel] = useState(!animate)
  const started = useRef(false)

  useEffect(() => {
    if (!animate || started.current) return
    started.current = true
    // count up
    const start = performance.now()
    const dur = 900
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      setMkt(Math.round(marketPct * p))
      setMdl(Math.round(modelPct * p))
      if (p < 1) requestAnimationFrame(tick)
      else {
        setTimeout(() => setShowFill(true), 100)
        setTimeout(() => setShowLabel(true), 700)
      }
    }
    requestAnimationFrame(tick)
  }, [animate, marketPct, modelPct])

  const edge = modelPct - marketPct
  const trackH = compact ? '4px' : '6px'
  const dotSize = compact ? '8px' : '10px'

  return (
    <div>
      <div className="flex justify-between font-mono mb-2" style={{ fontSize: compact ? 10 : 12 }}>
        <span className="text-market">MARKET <strong>{mkt}%</strong></span>
        <span className="text-model">MODEL <strong>{mdl}%</strong></span>
      </div>
      <div className="edge-track" style={{ height: trackH, marginBottom: compact ? 6 : 12 }}>
        <div
          className="edge-fill bg-edge"
          style={{
            left: `${marketPct}%`,
            width: showFill ? `${edge}%` : '0%',
            transition: 'width 600ms ease',
          }}
        />
        <div className="edge-dot bg-market" style={{ left: `${mkt}%`, width: dotSize, height: dotSize, boxShadow: '0 0 8px rgba(79,195,247,.5)' }} />
        <div className="edge-dot bg-model" style={{ left: `${mdl}%`, width: dotSize, height: dotSize, boxShadow: '0 0 8px rgba(255,169,77,.5)' }} />
      </div>
      {!compact && (
        <div
          className="text-center font-mono text-edge text-sm"
          style={{ opacity: showLabel ? 1 : 0, transition: 'opacity 400ms ease', letterSpacing: '0.04em' }}
        >
          +{edge}% EDGE
        </div>
      )}
    </div>
  )
}
