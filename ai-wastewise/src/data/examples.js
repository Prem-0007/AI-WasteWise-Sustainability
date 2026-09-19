import { GlassWater, Apple, Battery, Smartphone, Package, Wine } from 'lucide-react'

// Short labels used by the quick-pick chips inside the analyzer card.
export const QUICK_CHIPS = ['Plastic bottle', 'Banana peel', 'Old battery', 'Cardboard box', 'Mobile phone']

// Cards for the "Try These Examples" section. `query` is what gets analyzed.
export const EXAMPLE_CARDS = [
  { id: 'plastic-bottle', title: 'Plastic Bottle', query: 'Used plastic water bottle', hint: 'Everyday packaging', Icon: GlassWater, tone: 'green' },
  { id: 'banana-peel', title: 'Banana Peel', query: 'Banana peel', hint: 'Kitchen scraps', Icon: Apple, tone: 'leaf' },
  { id: 'old-battery', title: 'Old Battery', query: 'Old AA battery', hint: 'Handle with care', Icon: Battery, tone: 'red' },
  { id: 'mobile-phone', title: 'Mobile Phone', query: 'Old mobile phone', hint: 'Electronics', Icon: Smartphone, tone: 'blue' },
  { id: 'cardboard-box', title: 'Cardboard Box', query: 'Cardboard box', hint: 'Delivery packaging', Icon: Package, tone: 'amber' },
  { id: 'glass-bottle', title: 'Glass Bottle', query: 'Glass bottle', hint: 'Reusable material', Icon: Wine, tone: 'teal' },
]
