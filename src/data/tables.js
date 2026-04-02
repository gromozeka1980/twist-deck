// 14 tables, each with 10 entries (indices 0-9).
// Images live in public/tables/{dir}/{roll}.svg
// Texts and tooltips are inline here but also mirrored in public/tables/{dir}/data.json

const TABLE_DIRS = [
  '00-element',        // Table 1
  '01-number-meaning', // Table 2 (diagonal top)
  '02-rhyme-phrase',   // Table 3 (diagonal bottom)
  '03-symbol',         // Table 4
  '04-letter',         // Table 5
  '05-theme',          // Table 6
  '06-twist',          // Table 7
  '07-dungeon',        // Table 8
  '08-modifier',       // Table 9
  '09-dungeon-full',   // Table 10 (full-width row)
  '10-mythos',         // Table 11
  '11-weather',        // Table 12
  '12-terrain',        // Table 13
  '13-archetype',      // Table 14
];

const TABLE_COLORS = [
  '#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#1abc9c',
  '#3498db', '#9b59b6', '#e84393', '#fd79a8', '#00cec9',
  '#6c5ce7', '#636e72', '#55a630', '#b5838d',
];

const tables = [
  // 0 — Element (Table 1)
  {
    name: 'Element', dir: TABLE_DIRS[0], color: TABLE_COLORS[0],
    entries: [
      { id: 0, shortText: 'Wind',  tooltip: 'Wind — Speed, Mind, Words, Purity, Honor, Trust' },
      { id: 1, shortText: 'Wind',  tooltip: 'Wind — Speed, Mind, Words, Purity, Honor, Trust' },
      { id: 2, shortText: 'Earth', tooltip: 'Earth — Wild, Surprise, Power, Spirit, Heal, Poison' },
      { id: 3, shortText: 'Earth', tooltip: 'Earth — Wild, Surprise, Power, Spirit, Heal, Poison' },
      { id: 4, shortText: 'Water', tooltip: 'Water — Cold, Calm, Sadness, Intuition, Deceit, Memory' },
      { id: 5, shortText: 'Water', tooltip: 'Water — Cold, Calm, Sadness, Intuition, Deceit, Memory' },
      { id: 6, shortText: 'Fire',  tooltip: 'Fire — Enemy, Blood, Aggression, Freedom, Passion, Heart' },
      { id: 7, shortText: 'Light', tooltip: 'Light — Sun, Joy, Gift, Wealth, Luck, Virtue' },
      { id: 8, shortText: 'Light', tooltip: 'Light — Sun, Joy, Gift, Wealth, Luck, Virtue' },
      { id: 9, shortText: 'Dark',  tooltip: 'Dark — Mystery, Loss, Fear, Death, Threat, Barrier' },
    ],
  },
  // 1 — Mix/Good (Table 2, diagonal top)
  {
    name: 'Mix', dir: TABLE_DIRS[1], color: TABLE_COLORS[1],
    entries: [
      { id: 0, shortText: '0 is Hero',  tooltip: '0 is HERO / 0 is BELOW — "Zero Effort"' },
      { id: 1, shortText: '1 is Sun',   tooltip: '1 is SUN / 1 is RUN / STUN — "One God"' },
      { id: 2, shortText: '2 is Clue',  tooltip: '2 is CLUE / 2 is ZOO — "Two Sides"' },
      { id: 3, shortText: '3 is Tree',  tooltip: '3 is TREE / FREE / 3 is SPREE — "Three Rings"' },
      { id: 4, shortText: '4 is Lore',  tooltip: '4 is LORE / MORE / 4 is GORE — "Four Corners"' },
      { id: 5, shortText: '5 is Life',  tooltip: '5 is LIFE / 5 is KNIFE — "Five Stars"' },
      { id: 6, shortText: '6 is Mix',   tooltip: '6 is MIX / FIX / 6 is TRICKS — "Six Senses"' },
      { id: 7, shortText: '7 is Heaven', tooltip: '7 is HEAVEN / 7 is FELON — "Seven Wonders"' },
      { id: 8, shortText: '8 is Gate',  tooltip: '8 is GATE / 8 is HATE / LATE — "Eight Hundred Pound Gorilla"' },
      { id: 9, shortText: '9 is Shine', tooltip: '9 is SHINE / 9 is MINE / SWINE — "Nine Hells"' },
    ],
  },
  // 2 — Tricks/Bad (Table 3, diagonal bottom)
  {
    name: 'Tricks', dir: TABLE_DIRS[2], color: TABLE_COLORS[2],
    entries: [
      { id: 0, shortText: 'Zero Effort',   tooltip: '"Zero Effort" — GLOBE' },
      { id: 1, shortText: 'One God',        tooltip: '"One God" — ARROW' },
      { id: 2, shortText: 'Two Sides',      tooltip: '"Two Sides" — HOOK' },
      { id: 3, shortText: 'Three Rings',    tooltip: '"Three Rings" — SPIRAL' },
      { id: 4, shortText: 'Four Corners',   tooltip: '"Four Corners" — SAIL' },
      { id: 5, shortText: 'Five Stars',     tooltip: '"Five Stars" — PATH' },
      { id: 6, shortText: 'Six Senses',     tooltip: '"Six Senses" — FRUIT (?)' },
      { id: 7, shortText: 'Seven Wonders',  tooltip: '"Seven Wonders" — SCYTHE' },
      { id: 8, shortText: 'Eight Hundred',  tooltip: '"Eight Hundred Pound Gorilla" — EYES' },
      { id: 9, shortText: 'Nine Hells',     tooltip: '"Nine Hells" — HEAD' },
    ],
  },
  // 3 — Table 4
  {
    name: 'Table 4', dir: TABLE_DIRS[3], color: TABLE_COLORS[3],
    entries: [
      { id: 0, shortText: 'Globe',   tooltip: 'Globe — round, whole, world, completeness' },
      { id: 1, shortText: 'Arrow',   tooltip: 'Arrow — direction, aim, precision, attack' },
      { id: 2, shortText: 'Hook',    tooltip: 'Hook — catch, trap, pull, connection' },
      { id: 3, shortText: 'Spiral',  tooltip: 'Spiral — cycle, growth, descent, hypnosis' },
      { id: 4, shortText: 'Sail',    tooltip: 'Sail — journey, wind, trade, escape' },
      { id: 5, shortText: 'Path',    tooltip: 'Path — branching, maze, burrow, erosion' },
      { id: 6, shortText: 'Fruit',   tooltip: 'Fruit — reward, temptation, nature, sweetness' },
      { id: 7, shortText: 'Scythe',  tooltip: 'Scythe — harvest, death, time, labor' },
      { id: 8, shortText: 'Eyes',    tooltip: 'Eyes — sight, truth, surveillance, wisdom' },
      { id: 9, shortText: 'Head',    tooltip: 'Head — intellect, leadership, identity, thought' },
    ],
  },
  // 4 — Table 5
  {
    name: 'Table 5', dir: TABLE_DIRS[4], color: TABLE_COLORS[4],
    entries: [
      { id: 0, shortText: 'Z', tooltip: 'Z — begins with Z' },
      { id: 1, shortText: 'O', tooltip: 'O — begins with O' },
      { id: 2, shortText: 'T', tooltip: 'T — begins with T' },
      { id: 3, shortText: 'Θ', tooltip: 'Θ (Theta) — begins with Th' },
      { id: 4, shortText: 'F', tooltip: 'F — begins with F' },
      { id: 5, shortText: 'V', tooltip: 'V — begins with V' },
      { id: 6, shortText: 'X', tooltip: 'X — begins with X' },
      { id: 7, shortText: 'S', tooltip: 'S — begins with S' },
      { id: 8, shortText: 'E', tooltip: 'E — begins with E' },
      { id: 9, shortText: 'N', tooltip: 'N — begins with N' },
    ],
  },
  // 5 — Mythos (Table 6)
  {
    name: 'Mythos', dir: TABLE_DIRS[5], color: TABLE_COLORS[5],
    entries: [
      { id: 0, shortText: 'Zeus',   tooltip: 'Zeus — king of gods, lightning, authority, judgment' },
      { id: 1, shortText: 'Odin',   tooltip: 'Odin — wisdom, sacrifice, war, ravens' },
      { id: 2, shortText: 'Theia',  tooltip: 'Theia — sight, heavenly light, precious metals' },
      { id: 3, shortText: 'Thor',   tooltip: 'Thor — thunder, strength, protection, storm' },
      { id: 4, shortText: 'Freya',  tooltip: 'Freya — love, beauty, fertility, war' },
      { id: 5, shortText: 'Fate',   tooltip: 'Fate — destiny, inevitability, the three Norns' },
      { id: 6, shortText: 'Styx',   tooltip: 'Styx — river in the land of the dead, oaths, boundaries' },
      { id: 7, shortText: 'Selena', tooltip: 'Selena — the moon, tides, madness, night' },
      { id: 8, shortText: 'Ægir',   tooltip: 'Ægir — the sea, feasts, brewing, waves' },
      { id: 9, shortText: 'Nyx',    tooltip: 'Nyx — primordial night, shadow, fear, dreams' },
    ],
  },
  // 6 — Letter (Table 7)
  {
    name: 'Begins with', dir: TABLE_DIRS[6], color: TABLE_COLORS[6],
    entries: [
      { id: 0, shortText: 'Something missing',     tooltip: '0 — something important is missing here' },
      { id: 1, shortText: 'Unique / never seen',    tooltip: '1 — something is unique / never seen or heard of before' },
      { id: 2, shortText: 'Reflection / double',    tooltip: '2 — something is a reflection / doppelganger' },
      { id: 3, shortText: 'May spring to action',   tooltip: '3 — something may / will spring to action' },
      { id: 4, shortText: 'Delicate balance',       tooltip: '4 — delicate balance / lightness / fragility' },
      { id: 5, shortText: 'Not what it seems',      tooltip: '5 — it is not what it seems / lies / hidden / illusion' },
      { id: 6, shortText: 'Unlocked / revealed',    tooltip: '6 — something is unlocked / revealed' },
      { id: 7, shortText: 'Sharp turn / danger',    tooltip: '7 — situation takes a sharp turn / danger' },
      { id: 8, shortText: 'Magical / inexplicable', tooltip: '8 — it is magical / inexplicable / mind-bending' },
      { id: 9, shortText: 'Spirals out of control', tooltip: '9 — it spirals out of control' },
    ],
  },
  // 7 — Creature (Table 8)
  {
    name: 'Table 8', dir: TABLE_DIRS[7], color: TABLE_COLORS[7],
    entries: [
      { id: 0, shortText: 'Devil',       tooltip: 'Devil — cunning, deal, temptation' },
      { id: 1, shortText: 'Beast',       tooltip: 'Beast — savage, wild, untameable' },
      { id: 2, shortText: 'Spirit',      tooltip: 'Spirit — ethereal, haunting, ancient' },
      { id: 3, shortText: 'Construct',   tooltip: 'Construct — crafted, golem, mechanical' },
      { id: 4, shortText: 'Dragon',      tooltip: 'Dragon — fire, hoard, ancient wisdom' },
      { id: 5, shortText: 'Undead',      tooltip: 'Undead — death, resurrection, decay' },
      { id: 6, shortText: 'Fey',         tooltip: 'Fey — trickery, beauty, otherworldly' },
      { id: 7, shortText: 'Giant',       tooltip: 'Giant — strength, size, primal force' },
      { id: 8, shortText: 'Aberration',  tooltip: 'Aberration — alien, unknowable, madness' },
      { id: 9, shortText: 'Shapeshifter', tooltip: 'Shapeshifter — deception, identity, flux' },
    ],
  },
  // 8 — Twist (Table 9)
  {
    name: 'Twist', dir: TABLE_DIRS[8], color: TABLE_COLORS[8],
    entries: [
      { id: 0, shortText: 'Something missing',     tooltip: '0 — something important is missing here' },
      { id: 1, shortText: 'Unique / never seen',    tooltip: '1 — something is unique / never seen or heard of before' },
      { id: 2, shortText: 'Reflection / double',    tooltip: '2 — something is a reflection / doppelganger' },
      { id: 3, shortText: 'May spring to action',   tooltip: '3 — something may / will spring to action' },
      { id: 4, shortText: 'Delicate balance',       tooltip: '4 — delicate balance / lightness / fragility' },
      { id: 5, shortText: 'Not what it seems',      tooltip: '5 — it is not what it seems / lies / hidden / illusion' },
      { id: 6, shortText: 'Unlocked / revealed',    tooltip: '6 — something is unlocked / revealed' },
      { id: 7, shortText: 'Sharp turn / danger',    tooltip: '7 — situation takes a sharp turn / danger' },
      { id: 8, shortText: 'Magical / inexplicable', tooltip: '8 — it is magical / inexplicable / mind-bending' },
      { id: 9, shortText: 'Spirals out of control', tooltip: '9 — it spirals out of control' },
    ],
  },
  // 9 — Dungeon full-width (Table 10)
  {
    name: 'Dungeon', dir: TABLE_DIRS[9], color: TABLE_COLORS[9],
    entries: [
      { id: 0, shortText: 'Myst. hole, shaft, pool, window, portal',  tooltip: 'Mysterious hole, shaft, pool, window, portal — even:3 4 5' },
      { id: 1, shortText: 'Corridor',                                  tooltip: 'Corridor — straight passage — odd' },
      { id: 2, shortText: '2-way junction',                            tooltip: '2-way junction — fork in the path — even:3' },
      { id: 3, shortText: '3-way junction',                            tooltip: '3-way junction — three paths diverge — odd:3' },
      { id: 4, shortText: 'Rectangle, mural, object, trapdoor',       tooltip: 'Rectangular room, mural, object, trapdoor — even:4' },
      { id: 5, shortText: 'Branching, maze, burrow, erosion',         tooltip: 'Branching, maze, burrow, erosion — odd:5' },
      { id: 6, shortText: 'Hex room, magic, rotation, secrets',       tooltip: 'Hex room, magic, rotation, secrets — even:3' },
      { id: 7, shortText: 'Crossing, river, lava, abyss',             tooltip: 'Crossing, river, lava, abyss — odd' },
      { id: 8, shortText: 'Pillared hall, tomb, temple, gallery',     tooltip: 'Pillared hall, tomb, temple, gallery — max even:4' },
      { id: 9, shortText: 'Winding stairs (up/down), weird, pit',     tooltip: 'Winding stairs (up/down), weird, pit — max odd:3' },
    ],
  },
  // 10 — Weather (Table 11)
  {
    name: 'Weather', dir: TABLE_DIRS[10], color: TABLE_COLORS[10],
    entries: [
      { id: 0, shortText: 'Clear skies',  tooltip: 'Clear skies — visibility, openness, calm' },
      { id: 1, shortText: 'Light breeze', tooltip: 'Light breeze — gentle movement, whispers' },
      { id: 2, shortText: 'Overcast',     tooltip: 'Overcast — gloom, anticipation, cover' },
      { id: 3, shortText: 'Fog / mist',   tooltip: 'Fog / mist — limited visibility, mystery' },
      { id: 4, shortText: 'Light rain',   tooltip: 'Light rain — melancholy, cleansing, dripping' },
      { id: 5, shortText: 'Heavy rain',   tooltip: 'Heavy rain — obscured paths, floods, noise' },
      { id: 6, shortText: 'Thunderstorm', tooltip: 'Thunderstorm — drama, danger, electricity' },
      { id: 7, shortText: 'Snow',         tooltip: 'Snow — silence, cold, beauty, slowing' },
      { id: 8, shortText: 'Hail / sleet', tooltip: 'Hail / sleet — hostility, stinging, shelter needed' },
      { id: 9, shortText: 'Unnatural',    tooltip: 'Unnatural weather — magical, ominous, defying nature' },
    ],
  },
  // 11 — Archetype (Table 12)
  {
    name: 'Archetype', dir: TABLE_DIRS[11], color: TABLE_COLORS[11],
    entries: [
      { id: 0, shortText: 'The Fool',      tooltip: 'The Fool — innocence, new beginnings, leap of faith' },
      { id: 1, shortText: 'The Hero',       tooltip: 'The Hero — courage, quest, triumph over adversity' },
      { id: 2, shortText: 'The Trickster',  tooltip: 'The Trickster — cunning, chaos, breaking rules' },
      { id: 3, shortText: 'The Sage',       tooltip: 'The Sage — wisdom, knowledge, truth-seeking' },
      { id: 4, shortText: 'The Shadow',     tooltip: 'The Shadow — hidden self, repressed desires, dark side' },
      { id: 5, shortText: 'The Mentor',     tooltip: 'The Mentor — guidance, teaching, sacrifice' },
      { id: 6, shortText: 'The Outlaw',     tooltip: 'The Outlaw — rebellion, revolution, forbidden' },
      { id: 7, shortText: 'The Lover',      tooltip: 'The Lover — passion, devotion, connection' },
      { id: 8, shortText: 'The Ruler',      tooltip: 'The Ruler — control, order, responsibility' },
      { id: 9, shortText: 'The Orphan',     tooltip: 'The Orphan — abandonment, resilience, belonging' },
    ],
  },
  // 12 — Terrain (Table 13)
  {
    name: 'Terrain', dir: TABLE_DIRS[12], color: TABLE_COLORS[12],
    entries: [
      { id: 0, shortText: 'Grass Lands',   tooltip: 'Grasslands — open, expected, rolling hills' },
      { id: 1, shortText: 'Forest',        tooltip: 'Forest — cover, wildlife, ancient trees' },
      { id: 2, shortText: 'Mountains',     tooltip: 'Mountains — height, difficulty, echoes' },
      { id: 3, shortText: 'Swamp',         tooltip: 'Swamp — sticky, hidden dangers, decay' },
      { id: 4, shortText: 'Desert',        tooltip: 'Desert — heat, mirages, desolation' },
      { id: 5, shortText: 'Coast / Shore', tooltip: 'Coast / shore — boundary, tides, driftwood' },
      { id: 6, shortText: 'Underground',   tooltip: 'Underground — darkness, echoes, minerals' },
      { id: 7, shortText: 'Ruins',         tooltip: 'Ruins — past civilization, treasure, traps' },
      { id: 8, shortText: 'Tundra / Ice',  tooltip: 'Tundra / ice — frozen, barren, endurance' },
      { id: 9, shortText: 'Volcanic',      tooltip: 'Volcanic — fire, lava, unstable ground' },
    ],
  },
  // 13 — Oracle (Table 14)
  {
    name: 'Oracle', dir: TABLE_DIRS[13], color: TABLE_COLORS[13],
    entries: [
      { id: 0, shortText: 'Yes, and...',  tooltip: 'Yes, and — goes better than expected, bonus outcome' },
      { id: 1, shortText: 'Yes',          tooltip: 'Yes — goes as expected, straightforward success' },
      { id: 2, shortText: 'Yes',          tooltip: 'Yes — goes as expected' },
      { id: 3, shortText: 'Yes, but...',  tooltip: 'Yes, but — succeeds with a complication or cost' },
      { id: 4, shortText: 'Yes, but...',  tooltip: 'Yes, but — succeeds with a catch' },
      { id: 5, shortText: 'No, but...',   tooltip: 'No, but — fails but with a silver lining' },
      { id: 6, shortText: 'No, but...',   tooltip: 'No, but — fails with a consolation' },
      { id: 7, shortText: 'No',           tooltip: 'No — straightforward failure' },
      { id: 8, shortText: 'No',           tooltip: 'No — clear failure' },
      { id: 9, shortText: 'No, and...',   tooltip: 'No, and — fails and things get worse' },
    ],
  },
];

// Card layout definition.
// Each row defines its type and which table indices it uses.
// 'normal': two cells (left, right)
// 'diagonal': left cell normal, right cell split diagonally (two tables)
// 'full': single cell spanning full width
export const CARD_LAYOUT = [
  { type: 'diagonal', left: 0, rightTop: 1, rightBottom: 2 },
  { type: 'normal', left: 3, right: 4 },
  { type: 'normal', left: 5, right: 6 },
  { type: 'normal', left: 7, right: 8 },
  { type: 'full', cell: 9 },
  { type: 'normal', left: 10, right: 11 },
  { type: 'normal', left: 12, right: 13 },
];

/** Build path to SVG icon in public/tables/ (respects Vite base URL) */
export function getIconPath(tableIndex, roll) {
  const base = import.meta.env.BASE_URL;
  return `${base}tables/${tables[tableIndex].dir}/${roll}.svg`;
}

export default tables;
