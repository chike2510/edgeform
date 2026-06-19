import { motion } from 'framer-motion'
import EdgeMeter from './EdgeMeter'
import { CountUp } from '../../animations/TextAnimations'

const EDGE_COLOR = { high: '#FF3D6E', mid: '#FFA94D', low: '#2A2E36' }

export default function PredCard({ domain, event, marketPct, modelPct, ev, kelly, timeLabel, status, index = 0 }) {
  const edge = modelPct - marketPct
  const level = edge > 15 ? 'high' : edge > 6 ? 'mid' : 'low'

  return (
    <motion.div
      className="pred-card border border-hairline hover:border-edge/30 transition-colors overflow-hidden"
      style={{ background: '#16191F' }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="left-bar" style={{ background: EDGE_COLOR[level] }} />
      <div className="p-6 pl-8">
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-[10px] bg-market/10 text-market border border-market/20 px-2 py-1 uppercase">{domain}</span>
          <span className={`font-mono text-[10px] ${status === 'LIVE' ? 'text-edge' : 'text-mute'}`}>{timeLabel}</span>
        </div>
        <h3 className="font-semibold uppercase mb-5 text-sm leading-snug">{event}</h3>
        <EdgeMeter marketPct={marketPct} modelPct={modelPct} animate={false} compact />
        <div className="grid grid-cols-3 gap-4 pt-4 mt-4 border-t border-hairline">
          <div>
            <div className="font-mono text-[10px] text-mute mb-1">EDGE</div>
            <div className="font-mono text-lg" style={{ color: EDGE_COLOR[level] }}>
              +<CountUp end={edge} suffix="%" />
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] text-mute mb-1">EV</div>
            <div className="font-mono text-lg"><CountUp end={ev} decimals={2} /></div>
          </div>
          <div>
            <div className="font-mono text-[10px] text-mute mb-1">KELLY</div>
            <div className="font-mono text-lg"><CountUp end={kelly} decimals={2} /></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
