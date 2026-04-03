/**
 * Generates placeholder SVGs for decks that don't have real images yet.
 * Skips directories that already have real images (07-higher-icon).
 * Run with: node scripts/generate-placeholders.js
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..', 'public', 'tables');

const TABLES = [
  { dir: '00-element',      name: 'Element',      color: '#e74c3c', labels: ['Wind','Wind','Earth','Earth','Water','Water','Fire','Light','Light','Dark'] },
  { dir: '01-rhyme-good',   name: 'Rhyme Good',   color: '#2ecc71', labels: ['hero','sun','clue','tree','lore','life','mix','heaven','gate','shine'] },
  { dir: '02-rhyme-bad',    name: 'Rhyme Bad',     color: '#e74c3c', labels: ['below','run','zoo','spree','gore','knife','tricks','felon','hate','mine'] },
  { dir: '03-cliche',       name: 'Cliché',        color: '#f39c12', labels: ['effort','god','sides','rings','corners','stars','senses','wonders','gorilla','hells'] },
  { dir: '04-lesser-icon',  name: 'Lesser Icon',   color: '#3498db', labels: ['globe','arrow','hook','spiral','sail','path','fruit','scythe','eyes','head'] },
  { dir: '05-deity',        name: 'Deity',         color: '#8e44ad', labels: ['Zeus','Odin','Theia','Thor','Freya','Fate','Styx','Selena','Ægir','Nyx'] },
  { dir: '06-rune',         name: 'Rune',          color: '#1abc9c', labels: ['Z','O','T','Θ','F','V','X','S','E','N'] },
  { dir: '07-higher-icon',  name: 'Higher Icon',   color: '#2c3e50', labels: ['Wheel','Tower','Lovers','Lights','Seasons','Flow','Devil','Gibbet','Time','Cat'], skip: true },
  { dir: '08-twist',        name: 'Twist',         color: '#c0392b', labels: ['missing','unique','double','spring','fragile','illusion','unlock','danger','magic','chaos'] },
  { dir: '09-dungeon',      name: 'Dungeon',       color: '#7f8c8d', labels: ['hole','corridor','2-way','3-way','rect','maze','hex','crossing','hall','stairs'] },
  { dir: '10-weather',      name: 'Weather',       color: '#636e72', labels: ['clear','breeze','overcast','fog','drizzle','rain','storm','snow','hail','weird'] },
  { dir: '11-archetype',    name: 'Archetype',     color: '#b5838d', labels: ['Fool','Hero','Trickster','Sage','Shadow','Mentor','Outlaw','Lover','Ruler','Orphan'] },
  { dir: '12-terrain',      name: 'Terrain',       color: '#55a630', labels: ['grass','forest','mountain','swamp','desert','coast','cave','ruins','tundra','lava'] },
  { dir: '13-oracle',       name: 'Oracle',        color: '#d4a373', labels: ['yes and','yes','yes','yes but','yes but','no but','no but','no','no','no and'] },
];

function makeSvg(color, number, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <rect width="80" height="80" rx="12" fill="${color}" opacity="0.15"/>
  <circle cx="40" cy="32" r="20" fill="${color}" opacity="0.85"/>
  <text x="40" y="34" text-anchor="middle" dominant-baseline="central"
        fill="#fff" font-size="22" font-weight="700" font-family="monospace">${number}</text>
  <text x="40" y="66" text-anchor="middle" fill="${color}" font-size="9"
        font-weight="600" font-family="sans-serif">${escapeXml(label)}</text>
</svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

let totalFiles = 0;

for (const table of TABLES) {
  const dir = join(ROOT, table.dir);
  mkdirSync(dir, { recursive: true });

  if (table.skip) {
    console.log(`Skipping ${table.dir} (has real images)`);
    continue;
  }

  for (let i = 0; i < 10; i++) {
    const svg = makeSvg(table.color, i, table.labels[i]);
    writeFileSync(join(dir, `${i}.svg`), svg);
    totalFiles++;
  }
}

console.log(`Generated ${totalFiles} placeholder SVGs.`);
