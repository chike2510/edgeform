import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BlurText } from '../animations/TextAnimations'
import EdgeMeter from '../components/ui/EdgeMeter'

// ── PRICING ──────────────────────────────────────────────────────────
const TIERS = [
  {
    key: 'free', label: 'STARTER', name: 'FREE', price: '$0', sub: '/mo',
    desc: 'Entry-level intelligence for newcomers.', accent: '#2A2E36',
    features: ['5 Edge Signals/Day','Basic Market Visualizer','Weekly Probability Report'],
    locked: ['Advanced Model Parameters','Live Odds Integration'],
    cta: 'INITIALIZE ACCOUNT', featured: false,
  },
  {
    key: 'pro', label: 'TACTICAL', name: 'PRO', price: '$149', sub: '/mo',
    desc: 'High-frequency signals with full model transparency.', accent: '#FF3D6E',
    features: ['Unlimited Real-time Signals','Full Edge Meter + Kelly Sizing','Live Odds via API','Historical Backtester','Calibration Dashboard'],
    locked: [], cta: 'EXECUTE UPGRADE', featured: true,
  },
  {
    key: 'api', label: 'INSTITUTIONAL', name: 'API', price: '$499', sub: '/mo',
    desc: 'Raw probability streams for algorithmic execution.', accent: '#FFA94D',
    features: ['Full JSON/WebSocket Access','400ms Polling Frequency','White-label Model Hosting','Priority Quant Support','Custom Domain Integration'],
    locked: [], cta: 'REQUEST API KEY', featured: false,
  },
]

export function Pricing() {
  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-32 min-h-screen">
      <div className="text-center mb-16">
        <div className="font-mono text-[10px] text-market tracking-widest mb-4">PRICING ARCHITECTURE</div>
        <h1 className="font-display text-6xl uppercase mb-4">
          Precision <span className="text-edge">Advantage</span>
        </h1>
        <p className="text-mute max-w-xl mx-auto text-sm">Access the mathematical gap between market pricing and objective reality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.key}
            className="relative overflow-hidden"
            style={{
              background: '#16191F',
              border: `1px solid ${tier.featured ? '#FF3D6E' : '#2A2E36'}`,
              boxShadow: tier.featured ? '0 0 40px -10px rgba(255,61,110,0.25)' : 'none',
              padding: 32,
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22,1,0.36,1] }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: tier.accent }} />
            {tier.featured && (
              <div className="absolute top-0 right-0 font-mono text-[9px] bg-edge text-white px-3 py-1 tracking-widest">RECOMMENDED</div>
            )}
            <div className="pl-4">
              <div className="font-mono text-[10px] tracking-widest mb-2" style={{ color: tier.accent }}>{tier.label}</div>
              <div className="font-display text-4xl mb-1">{tier.name}</div>
              <div className="font-mono text-3xl text-market mb-2">{tier.price}<span className="text-mute text-sm">{tier.sub}</span></div>
              <p className="text-mute text-sm mb-8">{tier.desc}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 font-mono text-xs">
                    <span className="material-symbols-outlined text-base" style={{ color: tier.accent, fontVariationSettings: "'FILL' 1" }}>check_circle</span>{f}
                  </li>
                ))}
                {tier.locked.map(f => (
                  <li key={f} className="flex items-center gap-3 font-mono text-xs opacity-30">
                    <span className="material-symbols-outlined text-base">lock</span>{f}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 font-mono text-xs tracking-widest transition-all"
                style={{
                  border: `1px solid ${tier.featured ? '#FF3D6E' : '#2A2E36'}`,
                  color: tier.featured ? '#FF3D6E' : '#ECEAE3',
                  background: tier.featured ? 'rgba(255,61,110,0.08)' : 'transparent',
                }}
              >
                {tier.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 pt-12 border-t border-hairline">
        <h3 className="font-display text-3xl uppercase mb-8">System Protocols</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            ['How accurate is the "Edge"?', 'Our historical backtests show a 64.2% hit rate on signals with Edge > 12%. Accuracy scales with sample size.'],
            ['Can I cancel anytime?', 'Yes. Billing is monthly. Canceling preserves access until the end of your current billing epoch.'],
            ['What domains are covered?', 'Sports (football, tennis, basketball), crypto, forex, stocks, and prediction markets (Polymarket, Kalshi).'],
            ['How is "quantProb" calculated?', 'Elo rating gaps feed a Poisson distribution for sports; momentum + volatility bands for crypto/forex; Bayesian priors for prediction markets.'],
          ].map(([q, a]) => (
            <div key={q}>
              <div className="font-mono text-xs text-paper mb-2">{q}</div>
              <p className="text-mute text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

// ── ABOUT ─────────────────────────────────────────────────────────────
export function About() {
  const navigate = useNavigate()
  const pipeline = [
    { icon: 'database', color: '#4FC3F7', num: '01', title: 'RAW INGESTION', body: 'Real-time feeds from global sportsbooks, exchanges, and sentiment clusters.', status: 'SYNCED', statusColor: '#4FC3F7' },
    { icon: 'functions', color: '#FFA94D', num: '02', title: 'QUANT TIER', body: 'Elo ratings, Poisson models, and volatility scripts filter the noise into a number.', status: 'RUNNING', statusColor: '#FFA94D' },
    { icon: 'neurology', color: '#FF3D6E', num: '03', title: 'LLM TIER', body: 'Groq-powered reasoning synthesizes injuries, motivation, and news into probabilistic weightings.', status: 'ANALYZING', statusColor: '#FF3D6E' },
    { icon: 'analytics', color: '#ECEAE3', num: '04', title: 'THE EDGE', body: 'Final blended probability vs market price. The gap is your advantage.', status: 'OUTPUT', statusColor: '#FF3D6E', meter: true },
  ]

  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-32 min-h-screen">
      <section className="mb-24">
        <div className="font-mono text-xs text-market tracking-widest mb-4">THE GENESIS</div>
        <h1 className="font-display leading-none uppercase mb-8" style={{ fontSize: 'clamp(2.5rem,8vw,6rem)' }}>
          A platform built on<br />the same math{' '}
          <span className="text-edge">hedge funds</span> use.
        </h1>
        <p className="text-mute text-lg max-w-2xl leading-relaxed">
          In the markets, the difference between a gamble and an investment is the "Edge." We spent years in the quant trenches of high-frequency trading. Now we've distilled those algorithms into a tool for individual intelligence.
        </p>
      </section>

      {/* Pipeline */}
      <section className="mb-24">
        <h2 className="font-display text-3xl uppercase mb-2">
          <BlurText text="The Architecture of Truth" />
        </h2>
        <div className="w-16 h-[2px] bg-edge mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pipeline.map((step, i) => (
            <motion.div
              key={step.num}
              className="border p-6 transition-all hover:shadow-[0_0_24px_rgba(79,195,247,0.08)]"
              style={{
                background: '#16191F',
                border: step.meter ? '2px solid #FF3D6E' : '1px solid #2A2E36',
                boxShadow: step.meter ? '0 0 32px -8px rgba(255,61,110,0.2)' : 'none',
                position: 'relative',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22,1,0.36,1] }}
            >
              {step.meter && (
                <div className="absolute top-0 right-0 font-mono text-[8px] bg-edge text-white px-2 py-1">FINAL OUTPUT</div>
              )}
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined" style={{ color: step.color }}>{step.icon}</span>
                <span className="font-mono text-[10px] text-mute">{step.num}</span>
              </div>
              <h3 className="font-display text-xl mb-2">{step.title}</h3>
              <p className="text-mute text-sm mb-4">{step.body}</p>
              {step.meter ? (
                <EdgeMeter marketPct={52} modelPct={68} animate={false} compact />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: step.statusColor }} />
                  <span className="font-mono text-[10px]" style={{ color: step.statusColor }}>{step.status}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why the gap matters */}
      <section className="mb-24">
        <h2 className="font-display text-4xl uppercase mb-8">Why the gap matters</h2>
        <div className="space-y-8 max-w-2xl">
          {[
            ['01', 'ASYMMETRIC INFORMATION', 'Markets price on common knowledge. Edgeform looks for signal decay in that knowledge, finding value before the correction.'],
            ['02', 'EMOTIONAL DECOUPLING', 'Our LLM tier strips sentiment out of narrative data, producing a cold, clinical probability that ignores panic and hype.'],
            ['03', 'RECURSIVE REFINEMENT', 'Every outcome feeds back into the model via Brier-score calibration. Weights adapt between quant and LLM tiers based on which proved more accurate.'],
          ].map(([num, title, body]) => (
            <div key={num} className="flex gap-6">
              <div className="font-display text-3xl text-edge shrink-0">{num}</div>
              <div>
                <div className="font-mono text-xs text-paper mb-2">{title}</div>
                <p className="text-mute text-sm">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-hairline py-20 text-center">
        <h2 className="font-display text-4xl uppercase mb-8">Ready to find your edge?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button onClick={() => navigate('/dashboard')} className="bg-edge text-white font-mono text-xs tracking-widest py-4 px-12 hover:brightness-110 transition-all">VIEW LIVE MARKETS</button>
          <button onClick={() => navigate('/pricing')} className="border border-hairline font-mono text-xs tracking-widest py-4 px-12 hover:bg-white/5 transition-all">EXPLORE PLANS</button>
        </div>
      </section>
    </main>
  )
}
