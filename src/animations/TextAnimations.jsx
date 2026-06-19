import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// ── BlurText ─────────────────────────────────────────────
export function BlurText({ text, className = '', delay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// ── DecryptedText ─────────────────────────────────────────
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
export function DecryptedText({ text, className = '', speed = 40 }) {
  const [display, setDisplay] = useState(text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]))
  const resolved = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(prev => {
        const next = [...prev]
        // Resolve one more character
        next[resolved.current] = text[resolved.current]
        // Scramble unrevealed ones
        for (let i = resolved.current + 1; i < text.length; i++) {
          next[i] = text[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
        }
        return next
      })
      resolved.current++
      if (resolved.current >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={className}>{display.join('')}</span>
}

// ── CountUp ───────────────────────────────────────────────
export function CountUp({ end, decimals = 0, duration = 1200, suffix = '', className = '' }) {
  const [val, setVal] = useState(0)
  const startTime = useRef(null)
  const raf = useRef(null)

  useEffect(() => {
    const animate = (ts) => {
      if (!startTime.current) startTime.current = ts
      const progress = Math.min((ts - startTime.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(+(end * eased).toFixed(decimals))
      if (progress < 1) raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [end, duration, decimals])

  return <span className={className}>{val.toFixed(decimals)}{suffix}</span>
}

// ── ShinyText ─────────────────────────────────────────────
export function ShinyText({ text, className = '' }) {
  return <span className={`shiny-text ${className}`}>{text}</span>
}
