// 14 decks from the Daydreamer RPG PDF.
// Images: public/tables/{dir}/{roll}.svg (placeholders) or .png (real icons)

const tables = [
  // 0 — Element (Table 1)
  {
    name: 'Element', dir: '00-element', ext: 'svg', color: '#e74c3c',
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

  // 1 — Rhyme Good (Table 2, diagonal top-left)
  {
    name: 'Good', dir: '01-rhyme-good', ext: 'svg', color: '#2ecc71',
    entries: [
      { id: 0, shortText: '0 is Hero',    tooltip: '0 is Hero — the protagonist, the one who acts' },
      { id: 1, shortText: '1 is Sun',     tooltip: '1 is Sun — light, warmth, singular brilliance' },
      { id: 2, shortText: '2 is Clue',    tooltip: '2 is Clue — discovery, evidence, insight' },
      { id: 3, shortText: '3 is Tree',    tooltip: '3 is Tree — growth, roots, branching paths' },
      { id: 4, shortText: '4 is Lore',    tooltip: '4 is Lore — knowledge, history, secrets' },
      { id: 5, shortText: '5 is Life',    tooltip: '5 is Life — vitality, breath, survival' },
      { id: 6, shortText: '6 is Mix',     tooltip: '6 is Mix — combination, blend, alchemy' },
      { id: 7, shortText: '7 is Heaven',  tooltip: '7 is Heaven — divine, transcendent, blessed' },
      { id: 8, shortText: '8 is Gate',    tooltip: '8 is Gate — passage, opportunity, threshold' },
      { id: 9, shortText: '9 is Shine',   tooltip: '9 is Shine — brilliance, glory, radiance' },
    ],
  },

  // 2 — Rhyme Bad (Table 3, diagonal bottom-right)
  {
    name: 'Bad', dir: '02-rhyme-bad', ext: 'svg', color: '#e74c3c',
    entries: [
      { id: 0, shortText: '0 is Below',   tooltip: '0 is Below — beneath, underground, fallen' },
      { id: 1, shortText: '1 is Run',     tooltip: '1 is Run — flee, chase, escape' },
      { id: 2, shortText: '2 is Zoo',     tooltip: '2 is Zoo — caged, wild, chaotic' },
      { id: 3, shortText: '3 is Spree',   tooltip: '3 is Spree — uncontrolled, reckless, excess' },
      { id: 4, shortText: '4 is Gore',    tooltip: '4 is Gore — violence, blood, horror' },
      { id: 5, shortText: '5 is Knife',   tooltip: '5 is Knife — danger, betrayal, sharp edge' },
      { id: 6, shortText: '6 is Tricks',  tooltip: '6 is Tricks — deception, cunning, traps' },
      { id: 7, shortText: '7 is Felon',   tooltip: '7 is Felon — criminal, outlaw, condemned' },
      { id: 8, shortText: '8 is Hate',    tooltip: '8 is Hate — enmity, grudge, hostility' },
      { id: 9, shortText: '9 is Mine',    tooltip: '9 is Mine — possessive, greed, buried treasure' },
    ],
  },

  // 3 — Cliché (Table 4)
  {
    name: 'Cliché', dir: '03-cliche', ext: 'svg', color: '#f39c12',
    entries: [
      { id: 0, shortText: 'Zero Effort',             tooltip: '"Zero Effort" — effortless, lazy, natural' },
      { id: 1, shortText: 'One God',                  tooltip: '"One God" — singular authority, monotheism, the absolute' },
      { id: 2, shortText: 'Two Sides',                tooltip: '"Two Sides" — duality, conflict, two perspectives' },
      { id: 3, shortText: 'Three Rings',              tooltip: '"Three Rings" — power, binding, trilogy' },
      { id: 4, shortText: 'Four Corners',             tooltip: '"Four Corners" — completeness, directions, everywhere' },
      { id: 5, shortText: 'Five Stars',               tooltip: '"Five Stars" — excellence, fame, the best' },
      { id: 6, shortText: 'Six Senses',               tooltip: '"Six Senses" — perception, intuition, the uncanny' },
      { id: 7, shortText: 'Seven Wonders',            tooltip: '"Seven Wonders" — marvel, awe, the impossible made real' },
      { id: 8, shortText: '800-lb Gorilla',           tooltip: '"800-pound Gorilla" — unstoppable force, dominance' },
      { id: 9, shortText: 'Nine Hells',               tooltip: '"Nine Hells" — damnation, layers of torment, the abyss' },
    ],
  },

  // 4 — Lesser Icon (Table 5)
  {
    name: 'Lesser Icon', dir: '04-lesser-icon', ext: 'svg', color: '#3498db',
    entries: [
      { id: 0, shortText: 'Globe',   tooltip: 'Globe — icons resemble number figures visually. 0 = circle, wholeness' },
      { id: 1, shortText: 'Arrow',   tooltip: 'Arrow — direction, aim, straightforward. Resembles 1' },
      { id: 2, shortText: 'Hook',    tooltip: 'Hook — catching, pulling, connection. Resembles 2' },
      { id: 3, shortText: 'Spiral',  tooltip: 'Spiral — cycle, descent, growth. Resembles 3' },
      { id: 4, shortText: 'Sail',    tooltip: 'Sail — journey, wind, trade. Resembles 4' },
      { id: 5, shortText: 'Path',    tooltip: 'Path — branching, choice, erosion. Resembles 5' },
      { id: 6, shortText: 'Fruit',   tooltip: 'Fruit — reward, temptation, ripeness. Resembles 6' },
      { id: 7, shortText: 'Scythe',  tooltip: 'Scythe — harvest, death, reaping. Resembles 7' },
      { id: 8, shortText: 'Eyes',    tooltip: 'Eyes — sight, truth, surveillance. Resembles 8' },
      { id: 9, shortText: 'Head',    tooltip: 'Head — intellect, identity, thought. Resembles 9' },
    ],
  },

  // 5 — Deity (Table 6)
  {
    name: 'Deity', dir: '05-deity', ext: 'svg', color: '#8e44ad',
    entries: [
      { id: 0, shortText: 'Zeus',   tooltip: 'Zeus — king of gods, lightning, authority, judgment' },
      { id: 1, shortText: 'Odin',   tooltip: 'Odin — wisdom, sacrifice, war, ravens' },
      { id: 2, shortText: 'Theia',  tooltip: 'Theia — sight, heavenly light, precious metals' },
      { id: 3, shortText: 'Thor',   tooltip: 'Thor — thunder, strength, protection, storm' },
      { id: 4, shortText: 'Freya',  tooltip: 'Freya — love, beauty, fertility, war' },
      { id: 5, shortText: 'Fate',   tooltip: 'Fate — destiny, inevitability, the three Norns' },
      { id: 6, shortText: 'Styx',   tooltip: 'Styx — river of the dead, oaths, boundaries' },
      { id: 7, shortText: 'Selena', tooltip: 'Selena — the moon, tides, madness, night' },
      { id: 8, shortText: 'Ægir',   tooltip: 'Ægir — the sea, feasts, brewing, waves' },
      { id: 9, shortText: 'Nyx',    tooltip: 'Nyx — primordial night, shadow, fear, dreams' },
    ],
  },

  // 6 — Rune (Table 7)
  {
    name: 'Rune', dir: '06-rune', ext: 'svg', color: '#1abc9c',
    entries: [
      { id: 0, shortText: 'Z', tooltip: 'Z — rune starts with the first letter of the numeral (Zero)' },
      { id: 1, shortText: 'O', tooltip: 'O — first letter of One' },
      { id: 2, shortText: 'T', tooltip: 'T — first letter of Two' },
      { id: 3, shortText: 'Θ', tooltip: 'Θ (Theta) — TH, first letters of Three' },
      { id: 4, shortText: 'F', tooltip: 'F — first letter of Four' },
      { id: 5, shortText: 'V', tooltip: 'V — first letter of Five (Roman V)' },
      { id: 6, shortText: 'X', tooltip: 'X — first letter of siX' },
      { id: 7, shortText: 'S', tooltip: 'S — first letter of Seven' },
      { id: 8, shortText: 'E', tooltip: 'E — first letter of Eight' },
      { id: 9, shortText: 'N', tooltip: 'N — first letter of Nine' },
    ],
  },

  // 7 — Higher Icon (Table 8) — has real PNG images
  {
    name: 'Higher Icon', dir: '07-higher-icon', ext: 'png', color: '#2c3e50',
    entries: [
      { id: 0, shortText: 'The Wheel',       tooltip: 'The Wheel — looks like a 0. Cycles, fortune, destiny' },
      { id: 1, shortText: 'The Tower',        tooltip: 'The Burning Tower — resembles a 1. Destruction, upheaval, revelation' },
      { id: 2, shortText: 'Two Lovers',       tooltip: 'Two Lovers — resembles a pair. Union, choice, passion' },
      { id: 3, shortText: 'Luminaries',       tooltip: 'Three Luminaries: Sun, Moon and Stars. Guidance, celestial forces' },
      { id: 4, shortText: '4 Seasons',        tooltip: 'Four Seasons — cycle of nature, time passing, change' },
      { id: 5, shortText: 'The Flow',         tooltip: 'The Flow — shaped like a 5. Current, movement, momentum' },
      { id: 6, shortText: 'The Devil',        tooltip: 'The Devil — 6 looks like the Devil. Temptation, chains, shadow self' },
      { id: 7, shortText: 'The Gibbet',       tooltip: 'The Gibbet — looks like a 7. Consequence, hanging, sacrifice' },
      { id: 8, shortText: 'The Hourglass',    tooltip: 'The Hourglass — 8 resembles an hourglass. Time, mortality, urgency' },
      { id: 9, shortText: 'The Cat',          tooltip: 'The Cat — 9 kinda looks like a cat with a tail. Mystery, independence, nine lives' },
    ],
  },

  // 8 — Twist (Table 9)
  {
    name: 'Twist', dir: '08-twist', ext: 'svg', color: '#c0392b',
    entries: [
      { id: 0, shortText: 'Something is missing',       tooltip: '0 — something important is missing here' },
      { id: 1, shortText: 'Unique / never seen',         tooltip: '1 — something is unique / never seen or heard of before' },
      { id: 2, shortText: 'Reflection / double',         tooltip: '2 — something is a reflection / doppelganger' },
      { id: 3, shortText: 'May spring to action',        tooltip: '3 — something may / will spring to action' },
      { id: 4, shortText: 'Delicate balance / fragility', tooltip: '4 — delicate balance / lightness / fragility' },
      { id: 5, shortText: 'Not what it seems',           tooltip: '5 — it is not what it seems / lies / hidden / illusion' },
      { id: 6, shortText: 'Unlocked / revealed',         tooltip: '6 — something is unlocked / revealed' },
      { id: 7, shortText: 'Sharp turn / danger',         tooltip: '7 — situation takes a sharp turn / danger' },
      { id: 8, shortText: 'Magical / inexplicable',      tooltip: '8 — it is magical / inexplicable / mind-bending' },
      { id: 9, shortText: 'Spirals out of control',      tooltip: '9 — it spirals out of control' },
    ],
  },

  // 9 — Dungeon (Table 10, full-width row)
  {
    name: 'Dungeon', dir: '09-dungeon', ext: 'svg', color: '#7f8c8d',
    entries: [
      { id: 0, shortText: 'Myst. hole, shaft, pool, window, portal',    tooltip: 'Mysterious hole, shaft, pool, window, portal. Even: features/puzzles. Div by 3: thematic. Div by 4: treasure/healing/exits' },
      { id: 1, shortText: 'Corridor',                                    tooltip: 'Corridor — straight passage. Odd: monsters and traps (loot value ≈ 1)' },
      { id: 2, shortText: '2-way junction',                              tooltip: '2-way junction — fork in the path. Even: features/puzzles' },
      { id: 3, shortText: '3-way junction',                              tooltip: '3-way junction — three paths diverge. Odd: monsters/traps. Div by 3: thematic/tied to previous encounter' },
      { id: 4, shortText: 'Rectangular room, mural, object, trapdoor',  tooltip: 'Rectangular room, mural, object, trapdoor. Even: features/puzzles. Div by 4: treasure/healing/helpers/exits' },
      { id: 5, shortText: 'Branching, maze, burrow, erosion',           tooltip: 'Branching, maze, burrow, erosion. Odd: monsters/traps (loot ≈ 5)' },
      { id: 6, shortText: 'Hex room, magic, rotation, secrets',         tooltip: 'Hex room, magic, rotation, secrets. Even: features/puzzles. Div by 3: thematic/tied to previous encounter' },
      { id: 7, shortText: 'Crossing, river, lava, abyss',               tooltip: 'Crossing, river, lava, abyss. Odd: monsters/traps (loot ≈ 7)' },
      { id: 8, shortText: 'Pillared hall, tomb, temple, gallery',       tooltip: 'Pillared hall, tomb, temple, gallery. Even: features/puzzles. Div by 4: treasure/healing/helpers/exits' },
      { id: 9, shortText: 'Winding stairs (up/down), weird, pit',       tooltip: 'Winding stairs (up/down), weird, pit. Odd: BOSS encounter with a prize. Div by 3: thematic/tied to previous' },
    ],
  },

  // 10 — Weather (Table 11)
  {
    name: 'Weather', dir: '10-weather', ext: 'svg', color: '#636e72',
    entries: [
      { id: 0, shortText: 'Clear skies',    tooltip: 'Clear skies — visibility, openness, calm' },
      { id: 1, shortText: 'Light breeze',   tooltip: 'Light breeze — gentle movement, whispers' },
      { id: 2, shortText: 'Overcast',       tooltip: 'Overcast — gloom, anticipation, cover' },
      { id: 3, shortText: 'Fog / mist',     tooltip: 'Fog / mist — limited visibility, mystery' },
      { id: 4, shortText: 'Light rain',     tooltip: 'Light rain — melancholy, cleansing' },
      { id: 5, shortText: 'Heavy rain',     tooltip: 'Heavy rain — obscured paths, floods, noise' },
      { id: 6, shortText: 'Thunderstorm',   tooltip: 'Thunderstorm — drama, danger, electricity' },
      { id: 7, shortText: 'Snow',           tooltip: 'Snow — silence, cold, beauty, slowing' },
      { id: 8, shortText: 'Hail / sleet',   tooltip: 'Hail / sleet — hostility, stinging, shelter needed' },
      { id: 9, shortText: 'Unnatural',      tooltip: 'Unnatural weather — magical, ominous, defying nature' },
    ],
  },

  // 11 — Archetype (Table 12)
  {
    name: 'Archetype', dir: '11-archetype', ext: 'svg', color: '#b5838d',
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
    name: 'Terrain', dir: '12-terrain', ext: 'svg', color: '#55a630',
    entries: [
      { id: 0, shortText: 'Grasslands',     tooltip: 'Grasslands — open, expected, rolling hills' },
      { id: 1, shortText: 'Forest',         tooltip: 'Forest — cover, wildlife, ancient trees' },
      { id: 2, shortText: 'Mountains',      tooltip: 'Mountains — height, difficulty, echoes' },
      { id: 3, shortText: 'Swamp',          tooltip: 'Swamp — sticky, hidden dangers, decay' },
      { id: 4, shortText: 'Desert',         tooltip: 'Desert — heat, mirages, desolation' },
      { id: 5, shortText: 'Coast / Shore',  tooltip: 'Coast / shore — boundary, tides, driftwood' },
      { id: 6, shortText: 'Underground',    tooltip: 'Underground — darkness, echoes, minerals' },
      { id: 7, shortText: 'Ruins',          tooltip: 'Ruins — past civilization, treasure, traps' },
      { id: 8, shortText: 'Tundra / Ice',   tooltip: 'Tundra / ice — frozen, barren, endurance' },
      { id: 9, shortText: 'Volcanic',       tooltip: 'Volcanic — fire, lava, unstable ground' },
    ],
  },

  // 13 — Oracle (Table 14)
  {
    name: 'Oracle', dir: '13-oracle', ext: 'svg', color: '#d4a373',
    entries: [
      { id: 0, shortText: 'Yes, and...',  tooltip: 'Yes, and — goes better than expected, bonus outcome. Even = yes. 0 = "Sort of?"' },
      { id: 1, shortText: 'Yes',          tooltip: 'Yes — goes as expected. Odd but low = mild yes' },
      { id: 2, shortText: 'Yes',          tooltip: 'Yes — goes as expected. Even = yes' },
      { id: 3, shortText: 'Yes, but...',  tooltip: 'Yes, but — succeeds with a complication or cost' },
      { id: 4, shortText: 'Yes, but...',  tooltip: 'Yes, but — succeeds with a catch' },
      { id: 5, shortText: 'No, but...',   tooltip: 'No, but — fails but with a silver lining' },
      { id: 6, shortText: 'No, but...',   tooltip: 'No, but — fails with a consolation' },
      { id: 7, shortText: 'No',           tooltip: 'No — straightforward failure' },
      { id: 8, shortText: 'No!',          tooltip: 'No! — "Hell, yes!" when even but here it\'s emphatic no. The higher the more radical' },
      { id: 9, shortText: 'No, and...',   tooltip: 'No, and — "Hell, no!" Fails and things get much worse. 9 = most radical' },
    ],
  },
];

// Card layout definition.
// 'normal': two cells (left, right)
// 'diagonal': left cell normal, right cell split diagonally (two tables)
// 'full': single cell spanning full width
export const CARD_LAYOUT = [
  { type: 'diagonal', left: 0, rightTop: 1, rightBottom: 2 },  // Element | Good / Bad
  { type: 'normal', left: 3, right: 4 },                        // Cliché | Lesser Icon
  { type: 'normal', left: 5, right: 6 },                        // Deity | Rune
  { type: 'normal', left: 7, right: 8 },                        // Higher Icon | Twist
  { type: 'full', cell: 9 },                                     // Dungeon (full width)
  { type: 'normal', left: 10, right: 11 },                      // Weather | Archetype
  { type: 'normal', left: 12, right: 13 },                      // Terrain | Oracle
];

/** Build path to icon in public/tables/ */
export function getIconPath(tableIndex, roll) {
  const base = import.meta.env.BASE_URL;
  const t = tables[tableIndex];
  // Higher Icon #5 (The Flow) is a placeholder SVG, rest are PNG
  const ext = (t.ext === 'png' && roll === 5) ? 'svg' : t.ext;
  return `${base}tables/${t.dir}/${roll}.${ext}`;
}

export default tables;
