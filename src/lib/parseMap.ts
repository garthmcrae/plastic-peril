export type Token = 'NW' | 'NE' | 'SW' | 'SE' | '--' | '||' | '**' | '  ' | 'OL' | 'EN' | 'EX';

const VALID: ReadonlySet<string> = new Set([
  'NW', 'NE', 'SW', 'SE', '--', '||', '**', '  ', 'OL', 'EN', 'EX',
]);

export function parseMap(src: string): Token[][] {
  const lines = src.replace(/\r\n/g, '\n').split('\n').filter(l => l.length > 0);
  if (lines.length !== 10) {
    throw new Error(`parseMap: expected 10 rows, got ${lines.length}`);
  }
  return lines.map((line, r) => {
    if (line.length !== 20) {
      throw new Error(`parseMap: row ${r} has ${line.length} chars, expected 20`);
    }
    const row: Token[] = [];
    for (let c = 0; c < 10; c++) {
      const tok = line.slice(c * 2, c * 2 + 2);
      if (!VALID.has(tok)) {
        throw new Error(`parseMap: row ${r} col ${c}: unknown token "${tok}"`);
      }
      row.push(tok as Token);
    }
    return row;
  });
}
