export function hashString(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

export function pickVariant(seed: number, row: number, col: number, token: string, count: number): number {
  let h = seed ^ hashString(`${row},${col},${token}`);
  h ^= h << 13; h >>>= 0;
  h ^= h >>> 17;
  h ^= h << 5; h >>>= 0;
  return (h % count) + 1;
}
