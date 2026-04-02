import tables, { CARD_LAYOUT, getIconPath } from './tables';

function rollCell(tableIndex) {
  const roll = Math.floor(Math.random() * 10);
  const table = tables[tableIndex];
  const entry = table.entries[roll];
  return {
    tableIndex,
    tableName: table.name,
    tableColor: table.color,
    roll,
    shortText: entry.shortText,
    tooltip: entry.tooltip,
    iconPath: getIconPath(tableIndex, roll),
  };
}

/**
 * Generate a card based on CARD_LAYOUT.
 * Returns { id, timestamp, rows: [ { type, ...cells } ] }
 */
export function generateCard(layout = CARD_LAYOUT) {
  const rows = layout.map((rowDef) => {
    if (rowDef.type === 'diagonal') {
      return {
        type: 'diagonal',
        left: rollCell(rowDef.left),
        rightTop: rollCell(rowDef.rightTop),
        rightBottom: rollCell(rowDef.rightBottom),
      };
    }
    if (rowDef.type === 'full') {
      return {
        type: 'full',
        cell: rollCell(rowDef.cell),
      };
    }
    // normal
    return {
      type: 'normal',
      left: rollCell(rowDef.left),
      right: rollCell(rowDef.right),
    };
  });

  return {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    rows,
  };
}
