import { PenLine, Sparkles, Leaf, Sprout, Building2, GraduationCap, Recycle, Scale, MapPin, Lock, CircleHelp, ShieldAlert } from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how' },
  { label: 'Impact', href: '#impact' },
  { label: 'About AI', href: '#about-ai' },
]

export const STEPS = [
  { number: '01', title: 'Describe', text: 'Tell AI what waste you have.', Icon: PenLine },
  { number: '02', title: 'Analyze', text: 'AI identifies the likely category and relevant disposal guidance.', Icon: Sparkles },
  { number: '03', title: 'Act', text: 'Follow responsible disposal recommendations and sustainability tips.', Icon: Leaf },
]

export const SDGS = {
  primary: {
    number: '12',
    title: 'Responsible Consumption and Production',
    text: 'Helps people sort waste correctly so materials can be recycled, composted or reused instead of wasted.',
  },
  secondary: [
    {
      number: '11',
      title: 'Sustainable Cities and Communities',
      text: 'Supports cleaner neighbourhoods through better everyday segregation habits.',
      tone: 'orange',
    },
    {
      number: '13',
      title: 'Climate Action',
      text: 'Highlights how waste choices, such as composting and recycling, relate to greenhouse gas emissions.',
      tone: 'green',
    },
  ],
}

export const IMPACTS = [
  { title: 'Better Segregation', text: 'Helps users understand waste categories.', Icon: Recycle },
  { title: 'Environmental Awareness', text: 'Makes sustainability information easier to understand.', Icon: Sprout },
  { title: 'Cleaner Communities', text: 'Encourages responsible disposal practices.', Icon: Building2 },
  { title: 'Accessible Education', text: 'Provides simple sustainability guidance to everyday users.', Icon: GraduationCap },
]

export const RESPONSIBLE_AI = [
  { title: 'Advisory only', text: 'AI recommendations are advisory. They support your judgment and never replace it.', Icon: Scale },
  { title: 'Local rules come first', text: 'Local waste-management rules should always take priority over any suggestion here.', Icon: MapPin },
  { title: 'No personal information', text: 'The system does not ask for or require any personal information.', Icon: Lock },
  { title: 'Verify when uncertain', text: 'Uncertain classifications are labelled clearly and should be verified before you act.', Icon: CircleHelp },
  { title: 'Hazardous waste', text: 'Hazardous waste should be handled according to official guidance.', Icon: ShieldAlert },
]

// Static sample shown in the "About AI" section so viewers can see the structured output.
export const SAMPLE_OUTPUT = `{
  "category": "Recyclable",
  "wasteType": "Plastic",
  "disposal": "Empty and rinse it, then place it in
    dry/recyclable waste.",
  "recyclability": "High",
  "environmentalImpact": "Improper disposal can
    contribute to plastic pollution.",
  "sustainabilityTip": "Reuse refillable bottles
    whenever possible.",
  "confidence": 94,
  "safety": "Follow local waste-management
    guidelines."
}`
