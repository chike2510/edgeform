import { motion } from 'framer-motion'

export default function SplitText({ text, className = '', delay = 0, duration = 0.05 }) {
  const words = text.split(' ')
  return (
    <span className={className} style={{ display: 'inline' }} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              style={{ display: 'inline-block' }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: delay + (wi * word.length + ci) * duration,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}
