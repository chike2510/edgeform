import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SplitText from '../animations/SplitText'
import { BlurText, DecryptedText, ShinyText } from '../animations/TextAnimations'
import EdgeMeter from '../components/ui/EdgeMeter'

// Column slider
function ColumnSlider() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => {
      Array.from(el.children).forEach(col => { col.style.transform = 'translateY(-100%)' })
      setTimeout(() => { el.style.display = 'none' }, 1100)
    }, 200)
  }, [])

  return (
    <div ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', pointerEvents: 'none' }}>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="slider-col"
          style={{ flex: 1, background: i % 2 === 0 ? '#0D0F13' : '#16191F' }}
        />
      ))}
    </div>
  )
}

// How-it-works cards with layer transform
function HowCard({ num, numColor, title, body, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="border border-hairline p-8 hover:border-market/40 transition-colors"
      style={{ background: '#16191F' }}
      initial={{ opacity: 0, y: 52, scale: 0.72 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-display text-5xl mb-4" style={{ color: numColor, opacity: 0.5 }}>{num}</div>
      <h3 className="text-lg font-semibold uppercase mb-4">{title}</h3>
      <p className="text-mute text-sm leading-relaxed">{body}</p>
    </motion.div>
  )
}

export default function Landing() {
  const navigate = useNavigate()

  return (
    <>
      <ColumnSlider />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-8 pt-32 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="font-mono text-xs tracking-[0.2em] text-market mb-6">
            <DecryptedText text="PROBABILITY ENGINE" speed={35} />
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-none uppercase mb-6">
            <SplitText text="See the gap" delay={0.6} />
            <br />
            <span className="text-edge">
              <SplitText text="before it closes." delay={1.1} />
            </span>
          </h1>
          <motion.p
            className="text-lg text-mute max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Edgeform compares what the market prices in against what the model believes — across sports, crypto, forex, stocks, and prediction markets — and shows you exactly where they disagree.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <button
              onClick={() => navigate('/dashboard')}
              className="border border-edge font-mono text-xs tracking-widest px-8 py-4 hover:bg-edge/10 transition-all active:scale-95"
            >
              <ShinyText text="VIEW LIVE EDGES →" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border border-hairline font-mono text-xs tracking-widest px-8 py-4 text-mute hover:text-paper hover:border-paper/30 transition-all"
            >
              READ THE METHODOLOGY
            </button>
          </motion.div>
        </div>

        {/* Live Edge Card */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-hairline p-8 relative" style={{ background: '#16191F' }}>
            <div className="absolute top-0 left-0 w-[3px] h-full bg-edge" />
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-mono text-[10px] text-mute tracking-widest mb-1">CURRENT OPPORTUNITY</div>
                <div className="text-lg font-semibold">Argentina vs France — WIN</div>
              </div>
              <span className="font-mono text-[10px] bg-edge/10 text-edge border border-edge/20 px-3 py-1">HIGH EDGE</span>
            </div>
            <EdgeMeter marketPct={38} modelPct={54} animate />
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-hairline mt-4">
              <div><div className="font-mono text-[10px] text-mute mb-1">EDGE</div><div className="font-mono text-lg text-edge">+16%</div></div>
              <div><div className="font-mono text-[10px] text-mute mb-1">EV</div><div className="font-mono text-lg">1.24</div></div>
              <div><div className="font-mono text-[10px] text-mute mb-1">KELLY</div><div className="font-mono text-lg">6.7%</div></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="border-y border-hairline py-4 overflow-hidden my-8">
        <div className="ticker-track flex gap-12 font-mono text-xs text-mute tracking-widest" style={{ width: 'max-content', whiteSpace: 'nowrap' }}>
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex gap-12">
              <span>ARG vs FRA · WIN</span><span className="text-edge">+8.4%</span>
              <span>BTC &gt; $70K · FRI</span><span className="text-market">+12.1%</span>
              <span>LAKERS ML</span><span className="text-model">+4.2%</span>
              <span>EUR/USD &gt; 1.10</span><span className="text-edge">+7.9%</span>
              <span>NVDA Q2 BEAT</span><span className="text-market">+15.7%</span>
            </span>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="mb-12">
          <div className="font-mono text-xs text-edge tracking-widest mb-3">METHODOLOGY</div>
          <h2 className="font-display text-5xl uppercase">
            <BlurText text="The Architecture of Edge" />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HowCard num="01" numColor="#4FC3F7" title="Quant Tier" body="Elo ratings, Poisson goal models, and price-action math turn historical results into a probability number." delay={0} />
          <HowCard num="02" numColor="#FFA94D" title="Reasoning Tier" body="An AI layer reads context pure numbers miss — injuries, motivation, sentiment, news." delay={0.18} />
          <HowCard num="03" numColor="#FF3D6E" title="Blended Edge" body="The two combine into one calibrated probability, checked against the market price, sized with Kelly criterion." delay={0.36} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-hairline py-12 mt-8">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-display text-2xl text-market mb-3">EDGEFORM</div>
            <p className="text-mute text-xs font-mono max-w-xs">Institutional-grade probability intelligence for the sophisticated operator.</p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div>
              <div className="font-mono text-[10px] text-edge tracking-widest mb-4">PRODUCT</div>
              <ul className="space-y-2 text-sm text-mute">
                <li><button onClick={() => navigate('/dashboard')} className="hover:text-paper transition-colors">Markets</button></li>
                <li><button onClick={() => navigate('/pricing')} className="hover:text-paper transition-colors">Pricing</button></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] text-edge tracking-widest mb-4">COMPANY</div>
              <ul className="space-y-2 text-sm text-mute">
                <li><button onClick={() => navigate('/about')} className="hover:text-paper transition-colors">About</button></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] text-edge tracking-widest mb-4">STATUS</div>
              <div className="flex items-center gap-2 font-mono text-xs text-market">
                <div className="w-2 h-2 rounded-full bg-market animate-pulse" />LIVE
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-8 mt-8 pt-6 border-t border-hairline flex justify-between font-mono text-[10px] text-mute/40">
          <span>© 2025 EDGEFORM LABS</span><span>LATENCY: 12ms</span>
        </div>
      </footer>
    </>
  )
}
