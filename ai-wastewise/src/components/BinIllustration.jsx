import { Apple, Battery, CircleCheck, GlassWater, Recycle, ShieldAlert, Sprout } from 'lucide-react'

// Pure CSS/icon illustration for the hero: three sorting bins, each receiving an item once on load.
const BINS = [
  { id: 'recycle', label: 'Recyclable', tone: 'green', BinIcon: Recycle, ItemIcon: GlassWater, delay: 0.4 },
  { id: 'organic', label: 'Organic', tone: 'leaf', BinIcon: Sprout, ItemIcon: Apple, delay: 0.9 },
  { id: 'hazard', label: 'Hazardous', tone: 'red', BinIcon: ShieldAlert, ItemIcon: Battery, delay: 1.4 },
]

export default function BinIllustration() {
  return (
    <div className="bins">
      <div
        className="bins-stage"
        role="img"
        aria-label="Three sorting bins for recyclable, organic and hazardous waste"
      >
        <Recycle className="bins-watermark" size={96} strokeWidth={1.4} aria-hidden="true" />
        {BINS.map(({ id, label, tone, BinIcon, ItemIcon, delay }) => (
          <div key={id} className={`bin-col tone-${tone}`} style={{ '--delay': `${delay}s` }}>
            <span className="bin-item">
              <ItemIcon size={22} />
            </span>
            <div className="bin">
              <span className="bin-lid" />
              <span className="bin-body">
                <BinIcon size={28} />
              </span>
            </div>
            <span className="bin-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="bins-chip">
        <CircleCheck size={20} aria-hidden="true" />
        <div>
          <strong>Used plastic bottle</strong>
          <span>Recyclable, 94% confidence</span>
        </div>
      </div>
    </div>
  )
}
