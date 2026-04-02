/**
 * Generates placeholder SVGs and data.json for each of the 14 tables.
 * Run with: node scripts/generate-placeholders.js
 *
 * Structure created:
 *   public/tables/{dir}/0.svg ... 9.svg + data.json
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..', 'public', 'tables');

// Must match TABLE_DIRS in src/data/tables.js
const TABLES = [
  { dir: '00-element',      name: 'Element',     color: '#e74c3c' },
  { dir: '01-number-meaning', name: 'Mix',       color: '#e67e22' },
  { dir: '02-rhyme-phrase',  name: 'Tricks',      color: '#f1c40f' },
  { dir: '03-symbol',       name: 'Table 4',      color: '#2ecc71' },
  { dir: '04-letter',       name: 'Table 5',      color: '#1abc9c' },
  { dir: '05-theme',        name: 'Mythos',        color: '#3498db' },
  { dir: '06-twist',        name: 'Begins with',   color: '#9b59b6' },
  { dir: '07-dungeon',      name: 'Table 8',       color: '#e84393' },
  { dir: '08-modifier',     name: 'Twist',         color: '#fd79a8' },
  { dir: '09-dungeon-full', name: 'Dungeon',       color: '#00cec9' },
  { dir: '10-mythos',       name: 'Weather',       color: '#6c5ce7' },
  { dir: '11-weather',      name: 'Archetype',     color: '#636e72' },
  { dir: '12-terrain',      name: 'Terrain',       color: '#55a630' },
  { dir: '13-archetype',    name: 'Oracle',        color: '#b5838d' },
];

function makeSvg(color, number, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <rect width="80" height="80" rx="12" fill="${color}" opacity="0.15"/>
  <circle cx="40" cy="32" r="20" fill="${color}" opacity="0.85"/>
  <text x="40" y="34" text-anchor="middle" dominant-baseline="central"
        fill="#fff" font-size="22" font-weight="700" font-family="monospace">${number}</text>
  <text x="40" y="66" text-anchor="middle" fill="${color}" font-size="10"
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

  const entries = [];
  for (let i = 0; i < 10; i++) {
    entries.push({ shortText: `${table.name} #${i}`, tooltip: `${table.name} entry ${i} — placeholder tooltip text` });
    const svg = makeSvg(table.color, i, table.name);
    writeFileSync(join(dir, `${i}.svg`), svg);
    totalFiles++;
  }

  writeFileSync(join(dir, 'data.json'), JSON.stringify({ name: table.name, color: table.color, entries }, null, 2));
  totalFiles++;
}

console.log(`Done. Generated ${totalFiles} files in ${TABLES.length} directories.`);
