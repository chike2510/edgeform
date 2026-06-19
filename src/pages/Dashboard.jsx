import { useState } from 'react'
import PredCard from '../components/ui/PredCard'

const ALL_CARDS = [
  { domain: 'FOOTBALL / WC',   event: 'Argentina vs France — WIN',    marketPct: 44, modelPct: 62, ev: 1.24, kelly: 0.08, timeLabel: '2h 14m',   status: 'PRE',  tab: 'Sports'  },
  { domain: 'NBA / SEASON',    event: 'Lakers vs Celtics — O 224.5',  marketPct: 51, modelPct: 59, ev: 1.08, kelly: 0.03, timeLabel: '45m',      status: 'PRE',  tab: 'Sports'  },
  { domain: 'TENNIS / ATP',    event: 'Djokovic vs Alcaraz — SET 3',  marketPct: 32, modelPct: 54, ev: 1.41, kelly: 0.12, timeLabel: 'IN PLAY',  status: 'LIVE', tab: 'Sports'  },
  { domain: 'FOREX / MAJORS',  event: 'EUR / USD — LONG 1.0850',      marketPct: 48, modelPct: 51, ev: 1.02, kelly: 0.01, timeLabel: '5m',       status: 'LIVE', tab: 'Forex'   },
  { domain: 'FOREX / CROSS',   event: 'GBP / JPY — SHORT 195.5',      marketPct: 42, modelPct: 55, ev: 1.19, kelly: 0.06, timeLabel: '15m',      status: 'LIVE', tab: 'Forex'   },
  { domain: 'CRYPTO / BTC',    event: 'BTC > $70K by Friday',         marketPct: 40, modelPct: 57, ev: 1.31, kelly: 0.09, timeLabel: 'FRI EOD',  status: 'PRE',  tab: 'Crypto'  },
  { domain: 'CRYPTO / ETH',    event: 'ETH / USDT — LONG 3.2K',       marketPct: 45, modelPct: 60, ev: 1.22, kelly: 0.07, timeLabel: '1h',       status: 'LIVE', tab: 'Crypto'  },
  { domain: 'STOCKS / TECH',   event: 'NVDA Q2 Revenue Beat',         marketPct: 55, modelPct: 71, ev: 1.38, kelly: 0.11, timeLabel: 'AUG 28',   status: 'PRE',  tab: 'Stocks'  },
  { domain: 'POLYMARKET',      event: '"Will X win the election?"',    marketPct: 38, modelPct: 52, ev: 1.22, kelly: 0.07, timeLabel: 'JUN 30',   status: 'PRE',  tab: 'Markets' },
]

const TABS = ['Sports', 'Forex', 'Crypto', 'Stocks', 'Markets']

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Sports')
  const cards = ALL_CARDS.filter(c => c.tab === activeTab)

  return (
    <main className="max-w-[1280px] mx-auto px-8 pt-28 pb-32 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="font-display text-5xl uppercase leading-none mb-2">Intelligence Terminal</h1>
          <p className="text-mute text-sm">Visualizing the gap between market pricing and objective reality.</p>
        </div>
        <div className="flex items-center gap-3 border border-hairline px-4 py-2" style={{ background: '#16191F' }}>
          <div className="w-2 h-2 rounded-full bg-market animate-pulse" />
          <span className="font-mono text-[10px] text-market tracking-widest">OPERATIONAL</span>
          <span className="font-mono text-[10px] text-mute ml-4">14ms</span>
        </div>
      </div>

      {/* Domain tabs */}
      <div className="flex gap-1 border-b border-hairline mb-8 overflow-x-auto">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`domain-tab font-mono text-[11px] tracking-widest px-5 py-3 transition-colors ${activeTab === tab ? 'active text-paper' : 'text-mute hover:text-paper'}`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <PredCard key={card.event} {...card} index={i} />
        ))}
        {cards.length === 0 && (
          <div className="col-span-3 text-center py-24 text-mute font-mono text-sm">
            No significant edge detected. Checking markets...
          </div>
        )}
      </div>
    </main>
  )
}
