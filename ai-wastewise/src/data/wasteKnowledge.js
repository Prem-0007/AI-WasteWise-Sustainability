// Curated knowledge base used by the built-in (offline) analysis engine.
// Each entry describes one common waste type. Keep advice general and advisory:
// local rules always take priority (see the Responsible AI section in the UI).
//
// keywords      – strong phrases that identify the item
// weakKeywords  – ambiguous words (e.g. "bottle"); they lower confidence and add a clarification note
// family        – related entries share a family so they are not reported as "multiple items"

export const WASTE_KNOWLEDGE = [
  {
    id: 'plastic-bottle',
    family: 'plastic',
    categoryId: 'recyclable',
    wasteType: 'Plastic',
    keywords: [
      'plastic water bottle', 'plastic bottle', 'water bottle', 'pet bottle', 'soda bottle',
      'cold drink bottle', 'soft drink bottle', 'juice bottle', 'shampoo bottle',
    ],
    weakKeywords: ['bottle'],
    clarifyNote:
      'You did not say what the bottle is made of. This answer assumes plastic. If it is glass, choose “Glass bottle”; if it is broken, treat it as broken glass.',
    disposal: 'Empty and rinse it, then place it in dry/recyclable waste and follow local recycling guidelines.',
    recyclability: 'High',
    recyclabilityScore: 90,
    environmentalImpact:
      'Improper disposal can contribute to plastic pollution and landfill waste. Bottles that reach drains and waterways break into microplastics.',
    sustainabilityTip:
      'Reuse refillable bottles whenever possible and recycle the bottle when it can no longer be reused.',
    confidence: 94,
    safety: 'Follow local waste-management guidelines.',
  },
  {
    id: 'plastic-container',
    family: 'plastic',
    categoryId: 'recyclable',
    wasteType: 'Plastic (rigid packaging)',
    keywords: [
      'plastic container', 'plastic cup', 'plastic box', 'plastic tub', 'plastic packaging',
      'plastic jar', 'plastic bucket', 'plastic straw', 'tupperware', 'food container', 'plastic',
    ],
    disposal:
      'Rinse off food residue, check the recycling number in the triangle against your local accepted list, and place it in dry/recyclable waste.',
    recyclability: 'Medium',
    recyclabilityScore: 65,
    environmentalImpact:
      'Plastics can persist in the environment for hundreds of years, and food-soiled items can contaminate a whole batch of recyclables.',
    sustainabilityTip: 'Choose reusable containers and cups over single-use ones, and rinse items before recycling.',
    confidence: 82,
    safety: 'Follow local waste-management guidelines.',
  },
  {
    id: 'plastic-bag',
    family: 'plastic',
    categoryId: 'recyclable',
    wasteType: 'Plastic film',
    keywords: [
      'plastic bag', 'polythene bag', 'polythene', 'carry bag', 'shopping bag', 'plastic wrapper',
      'food wrapper', 'snack wrapper', 'chips packet', 'cling film', 'plastic film', 'bubble wrap',
    ],
    weakKeywords: ['bag', 'wrapper', 'packet'],
    clarifyNote:
      'The material was not specified. This answer assumes thin plastic film. Paper and cloth bags follow different rules.',
    disposal:
      'Reuse it first. Keep clean, dry bags together and take them to a soft-plastic collection point if one exists nearby; otherwise place them in dry waste. Never mix with wet waste or throw into drains.',
    recyclability: 'Low',
    recyclabilityScore: 30,
    environmentalImpact:
      'Light plastic film escapes easily into drains, rivers and oceans, where it harms wildlife and blocks drainage.',
    sustainabilityTip: 'Carry a reusable cloth bag and say no to single-use bags at checkout.',
    confidence: 88,
    safety: 'Never burn plastic; it releases toxic fumes. Keep bags away from small children.',
  },
  {
    id: 'banana-peel',
    family: 'organic',
    categoryId: 'organic',
    wasteType: 'Organic (biodegradable)',
    keywords: [
      'banana peel', 'fruit peel', 'vegetable peel', 'orange peel', 'potato peel', 'peel',
      'fruit scraps', 'vegetable scraps', 'fruit waste', 'vegetable waste', 'egg shell', 'eggshell',
      'coffee grounds', 'tea leaves', 'garden waste', 'yard waste', 'dry leaves', 'grass clippings',
    ],
    disposal:
      'Place it in wet/organic waste. Better still, compost it at home or in a community composting unit, and keep it free of plastic and packaging.',
    recyclability: 'Compostable',
    recyclabilityScore: 90,
    environmentalImpact:
      'In landfills, food scraps rot without oxygen and release methane, a potent greenhouse gas. Composting returns nutrients to the soil instead.',
    sustainabilityTip: 'Start a small compost bin or bucket. Finished compost can feed garden plants and potted herbs.',
    confidence: 96,
    safety: 'No special hazards. Keep organic waste separate from dry recyclables so they stay clean.',
  },
  {
    id: 'food-waste',
    family: 'organic',
    categoryId: 'organic',
    wasteType: 'Organic (food waste)',
    keywords: [
      'food waste', 'food scraps', 'kitchen waste', 'leftover food', 'leftovers', 'cooked food',
      'rotten food', 'spoiled food', 'stale food', 'expired food', 'rice', 'bread', 'vegetables',
      'fruits', 'meat', 'bones', 'food',
    ],
    disposal:
      'Put it in wet/organic waste. Home compost bins suit raw scraps; cooked food, meat and dairy usually belong in municipal organic collection or biogas systems where available.',
    recyclability: 'Compostable',
    recyclabilityScore: 85,
    environmentalImpact:
      'Wasted food carries the energy, water and land used to grow it, and rotting food in landfills releases methane.',
    sustainabilityTip:
      'Plan meals, store food properly and use leftovers before they spoil. Composting is the last step, not the first.',
    confidence: 90,
    safety: 'Seal strongly smelling waste to avoid pests, and never mix it with dry recyclables.',
  },
  {
    id: 'cardboard',
    family: 'paper',
    categoryId: 'recyclable',
    wasteType: 'Paper / Cardboard',
    keywords: [
      'cardboard box', 'cardboard', 'carton', 'corrugated box', 'corrugated', 'shipping box',
      'delivery box', 'pizza box', 'cereal box', 'packaging box',
    ],
    weakKeywords: ['box'],
    clarifyNote:
      'A “box” can be cardboard, plastic or wood. This answer assumes cardboard.',
    disposal:
      'Remove tape and labels if easy, flatten the box and keep it dry, then place it in dry/recyclable waste. Tear off greasy parts, such as the base of a pizza box, and put them in wet or general waste.',
    recyclability: 'High',
    recyclabilityScore: 92,
    environmentalImpact:
      'Recycling cardboard saves trees and energy, while wet or greasy cardboard often ends up in landfill.',
    sustainabilityTip: 'Reuse boxes for storage or shipping before recycling, and choose products with minimal packaging.',
    confidence: 95,
    safety: 'Follow local waste-management guidelines.',
  },
  {
    id: 'paper',
    family: 'paper',
    categoryId: 'recyclable',
    wasteType: 'Paper',
    keywords: [
      'office paper', 'printer paper', 'waste paper', 'scrap paper', 'newspaper', 'magazine',
      'notebook', 'paper', 'book', 'envelope', 'brochure', 'flyer', 'junk mail',
    ],
    disposal:
      'Keep it clean and dry, then place it in dry/recyclable waste. Wet, greasy or coated paper, such as tissues, paper cups and thermal receipts, usually cannot be recycled.',
    recyclability: 'High',
    recyclabilityScore: 88,
    environmentalImpact:
      'Recycling paper reduces demand for virgin wood pulp, while paper in landfills can release methane as it decomposes.',
    sustainabilityTip: 'Print on both sides or go digital, and use scrap paper for notes before recycling it.',
    confidence: 93,
    safety: 'Follow local waste-management guidelines. Shred paper that shows personal details before recycling.',
  },
  {
    id: 'glass-bottle',
    family: 'glass',
    categoryId: 'recyclable',
    wasteType: 'Glass',
    keywords: [
      'glass bottle', 'glass jar', 'wine bottle', 'beer bottle', 'jam jar', 'pickle jar',
      'glass container', 'jar',
    ],
    weakKeywords: ['glass'],
    clarifyNote:
      'If the glass is broken, treat it as broken glass and handle it carefully.',
    disposal:
      'Empty and rinse it, remove lids, and place it in dry/recyclable waste or a glass collection bin if your area has one. Do not mix it with ceramics, mirrors or window glass.',
    recyclability: 'High',
    recyclabilityScore: 92,
    environmentalImpact:
      'Glass can be recycled again and again without losing quality, but it does not biodegrade in landfill.',
    sustainabilityTip: 'Reuse jars for storage, or return deposit bottles where a refund scheme exists.',
    confidence: 92,
    safety: 'Handle carefully to avoid chips and cuts, and never put broken pieces loose into a recycling bin.',
  },
  {
    id: 'broken-glass',
    family: 'glass',
    categoryId: 'hazardous',
    wasteType: 'Glass (sharp)',
    keywords: [
      'broken glass bottle', 'broken glass jar', 'broken glass', 'broken bottle', 'broken jar',
      'broken mirror', 'broken cup', 'broken plate', 'shattered glass', 'cracked glass', 'glass shards',
      'glass pieces', 'glass splinters', 'smashed glass',
    ],
    disposal:
      'Wear gloves and closed shoes, pick up large pieces carefully and sweep small shards with a brush. Wrap everything in thick newspaper or cardboard, seal it, label it “Broken glass” and hand it over as your local rules direct.',
    recyclability: 'Low',
    recyclabilityScore: 25,
    environmentalImpact:
      'Loose shards can injure waste workers and animals, and mixed broken glass can contaminate recyclable batches.',
    sustainabilityTip:
      'Repair, reuse or upcycle glass items where possible, and always wrap sharp waste so it never injures the people who collect it.',
    confidence: 93,
    safety:
      'Sharp hazard: never pick up shards with bare hands or put loose glass into any bin. Keep children and pets away until it is cleaned up.',
  },
  {
    id: 'battery',
    family: 'electronics',
    categoryId: 'hazardous',
    wasteType: 'Battery (hazardous / e-waste)',
    keywords: [
      'old battery', 'used battery', 'dead battery', 'battery', 'aa battery', 'aaa battery',
      'lithium battery', 'lithium ion', 'button cell', 'coin cell', 'dry cell', 'power bank',
      'rechargeable battery', 'laptop battery', 'phone battery', 'mobile battery',
    ],
    disposal:
      'Do not put batteries in household bins. Cover the terminals of lithium and button cells with tape, store them in a dry container, and drop them at an authorised e-waste or battery collection point, or a retailer take-back bin.',
    recyclability: 'Medium',
    recyclabilityScore: 60,
    environmentalImpact:
      'Some batteries contain metals such as lead, cadmium, mercury or lithium that can leach into soil and water, and damaged cells can start fires in waste trucks and landfills.',
    sustainabilityTip:
      'Choose rechargeable batteries to cut how many you throw away, and keep a small box at home to collect used ones for drop-off.',
    confidence: 95,
    safety:
      'Fire and chemical hazard: do not crush, puncture or burn batteries. Keep swollen or leaking ones away from heat and follow official hazardous-waste guidance.',
  },
  {
    id: 'mobile-phone',
    family: 'electronics',
    categoryId: 'ewaste',
    wasteType: 'Electronic waste (mobile device)',
    keywords: [
      'mobile phone', 'old phone', 'old mobile', 'smartphone', 'smart phone', 'cell phone',
      'cellphone', 'feature phone', 'iphone', 'android phone', 'phone', 'mobile',
    ],
    disposal:
      'Back up your data, factory reset it and remove the SIM and memory card. Donate, sell or repair it if it still works; otherwise hand it to an authorised e-waste recycler or a manufacturer or retailer take-back program.',
    recyclability: 'Medium',
    recyclabilityScore: 70,
    environmentalImpact:
      'Phones contain valuable metals and hazardous materials. Recycling recovers resources and keeps toxic components out of landfill.',
    sustainabilityTip:
      'Keep phones longer, repair batteries or screens when possible, and pass working devices on instead of replacing them.',
    confidence: 93,
    safety:
      'Erase personal data before handing it over. Never put phones in regular bins, and keep any swollen or damaged battery away from heat.',
  },
  {
    id: 'electronic-waste',
    family: 'electronics',
    categoryId: 'ewaste',
    wasteType: 'Electronic waste',
    keywords: [
      'electronic waste', 'e waste', 'ewaste', 'electronics', 'electronic', 'laptop', 'computer',
      'tablet computer', 'ipad', 'charger', 'cable', 'wire', 'headphone', 'earphone', 'earbud',
      'keyboard', 'television', 'tv', 'remote control', 'circuit board', 'printer', 'adapter',
      'router', 'speaker', 'camera', 'smartwatch',
    ],
    disposal:
      'Do not throw electronics into household bins. Repair, donate or sell working devices; otherwise take them to an authorised e-waste collection centre or a producer take-back program.',
    recyclability: 'Medium',
    recyclabilityScore: 65,
    environmentalImpact:
      'E-waste holds recoverable metals alongside substances that can harm soil, water and health if dumped or burned.',
    sustainabilityTip:
      'Repair before replacing, buy durable or refurbished devices, and keep old cables and chargers together for one drop-off trip.',
    confidence: 90,
    safety: 'Unplug and power down devices, wipe personal data, and never open or burn electronics.',
  },
  {
    id: 'aluminum-can',
    family: 'metal',
    categoryId: 'recyclable',
    wasteType: 'Metal (aluminium)',
    keywords: [
      'aluminum can', 'aluminium can', 'soda can', 'cola can', 'beer can', 'drink can',
      'beverage can', 'cold drink can', 'energy drink can', 'aluminum foil', 'aluminium foil',
      'foil', 'aluminum', 'aluminium',
    ],
    disposal:
      'Empty and rinse it, then place it in dry/recyclable waste. Scrunch clean foil into a ball so it is easier to sort.',
    recyclability: 'High',
    recyclabilityScore: 95,
    environmentalImpact:
      'Aluminium can be recycled repeatedly, and recycling it uses far less energy than making new metal from ore.',
    sustainabilityTip: 'Choose refillable bottles or reusable cups when you can, and recycle cans every time.',
    confidence: 95,
    safety: 'Crushed cans and torn foil have sharp edges. Handle them carefully.',
  },
  {
    id: 'metal',
    family: 'metal',
    categoryId: 'recyclable',
    wasteType: 'Metal',
    keywords: [
      'scrap metal', 'metal', 'steel', 'iron', 'tin can', 'steel can', 'tin', 'copper', 'brass',
      'utensil', 'metal lid',
    ],
    disposal:
      'Rinse off food residue, wrap sharp pieces, and place it in dry/recyclable waste. Large or heavy scrap is best sold to a local scrap dealer or metal recycler.',
    recyclability: 'High',
    recyclabilityScore: 90,
    environmentalImpact:
      'Metals are highly recyclable, and recycling avoids the mining and energy needed to make new metal.',
    sustainabilityTip: 'Repair or reuse metal items before discarding them, and sell or donate useful scrap.',
    confidence: 88,
    safety: 'Sharp or rusty edges can cause cuts. Wear gloves and wrap sharp pieces before disposal.',
  },
  {
    id: 'clothes',
    family: 'textile',
    categoryId: 'reusable',
    wasteType: 'Textile',
    keywords: [
      'old clothes', 'clothes', 'clothing', 'textile', 'fabric', 'shirt', 't shirt', 'tshirt',
      'jeans', 'trousers', 'dress', 'saree', 'jacket', 'sweater', 'shoes', 'socks', 'towel',
      'bedsheet', 'curtain', 'cloth',
    ],
    disposal:
      'Donate or pass on clothes that are still wearable. Reuse worn fabric as cleaning cloths, or take it to a textile recycling or take-back drop-off. Only fully unusable or soiled items go to dry waste.',
    recyclability: 'Medium',
    recyclabilityScore: 55,
    environmentalImpact:
      'Textiles take a lot of water and energy to make, and discarded clothing piles up in landfills where synthetic fibres last a very long time.',
    sustainabilityTip:
      'Buy less and choose durable pieces, swap or donate clothes, and repair small damage before replacing.',
    confidence: 90,
    safety: 'Wash items before donating, and keep damp textiles out of dry recyclables.',
  },
  {
    id: 'medicine',
    family: 'medicine',
    categoryId: 'hazardous',
    wasteType: 'Pharmaceutical waste',
    keywords: [
      'expired medicine', 'old medicine', 'unused medicine', 'medicine', 'medication', 'pill',
      'capsule', 'syrup', 'cough syrup', 'ointment', 'drug', 'antibiotic', 'painkiller',
    ],
    weakKeywords: ['tablet'],
    clarifyNote:
      '“Tablet” can mean medicine or a device. This answer assumes medicine. If it is a computer tablet, treat it as e-waste.',
    disposal:
      'Do not flush medicines or throw them loose in the trash. Take unused or expired medicines to a pharmacy, hospital or authorised take-back point. If none exists, follow your local health authority’s instructions.',
    recyclability: 'Not recyclable',
    recyclabilityScore: 5,
    environmentalImpact:
      'Medicines that reach drains or landfill can contaminate water and soil and affect aquatic life.',
    sustainabilityTip:
      'Buy only the quantity you need, check expiry dates, and never share prescription medicines.',
    confidence: 92,
    safety:
      'Keep medicines away from children and pets, leave them in their original packaging, and follow official pharmaceutical-waste guidance.',
  },
  {
    id: 'cooking-oil',
    family: 'oil',
    categoryId: 'special',
    wasteType: 'Fats, oils and grease',
    keywords: [
      'used cooking oil', 'cooking oil', 'frying oil', 'fry oil', 'vegetable oil', 'edible oil',
      'leftover oil', 'waste oil',
    ],
    weakKeywords: ['oil'],
    clarifyNote:
      'This answer assumes cooking oil. Motor oil and other industrial oils are hazardous and need a dedicated collection point.',
    disposal:
      'Let it cool, then pour it into a sealed container. Never pour it down the sink or toilet. Hand it to a used-cooking-oil collection or biodiesel program if available; otherwise follow local rules, or absorb small amounts with paper before placing them in wet/general waste.',
    recyclability: 'Medium',
    recyclabilityScore: 65,
    environmentalImpact:
      'Oil poured down drains hardens, blocks pipes and pollutes rivers, while collected used oil can be turned into biodiesel and other products.',
    sustainabilityTip:
      'Measure oil before cooking and wipe greasy pans with paper before washing to keep drains clear.',
    confidence: 91,
    safety: 'Let hot oil cool completely before moving it to avoid burns, and keep it away from open flames.',
  },
  {
    id: 'chemicals',
    family: 'chemicals',
    categoryId: 'hazardous',
    wasteType: 'Household hazardous waste',
    keywords: [
      'chemical', 'paint', 'paint can', 'thinner', 'pesticide', 'insecticide', 'herbicide', 'bleach',
      'acid', 'cleaning chemical', 'drain cleaner', 'motor oil', 'engine oil', 'lubricant', 'aerosol',
      'spray paint', 'solvent', 'nail polish', 'fertilizer', 'fluorescent', 'cfl', 'tube light',
    ],
    disposal:
      'Keep the product in its original, tightly closed container. Never pour it down drains, onto soil or into regular bins. Take it to a household hazardous-waste collection point or an authorised handler, following the label and local guidance.',
    recyclability: 'Low',
    recyclabilityScore: 15,
    environmentalImpact:
      'Chemicals can poison soil and water, harm wildlife, and put waste workers at risk if they reach ordinary landfill or drains.',
    sustainabilityTip:
      'Buy only what you will use, choose lower-toxicity alternatives, and share leftover paint or products with someone who can use them.',
    confidence: 90,
    safety:
      'Never mix chemicals. Wear gloves, keep them away from children, pets, heat and flames, and follow the label and official guidance.',
  },
]

// Returned when nothing in the knowledge base matches. Honest by design:
// it asks for more detail instead of guessing.
export const UNKNOWN_RESULT = {
  categoryId: 'unknown',
  wasteType: 'Unidentified item',
  disposal:
    'Do not guess. Check the item’s label or recycling symbol, or ask your local municipal waste service. Until you know, keep it separate from recyclables so it does not contaminate them.',
  recyclability: 'Unknown',
  recyclabilityScore: 0,
  environmentalImpact:
    'Placing an item in the wrong bin can contaminate a whole batch of recyclables or send reusable material to landfill.',
  sustainabilityTip:
    'Describe the material, size and condition (for example “greasy cardboard pizza box”) for a better answer, and check your local recycling guide.',
  confidence: 25,
  safety:
    'If the item might contain batteries, chemicals, liquids or sharp parts, treat it as hazardous until verified.',
}
