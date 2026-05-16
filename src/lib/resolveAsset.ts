import type { Token } from './parseMap';
import { pickVariant } from './seededRandom';

const PAD = (n: number) => String(n).padStart(2, '0');

export function resolveAsset(token: Token, row: number, col: number, seed: number): string {
  switch (token) {
    case 'NW': return `/assets/corner-nw-${PAD(pickVariant(seed, row, col, token, 4))}.svg`;
    case 'NE': return `/assets/corner-ne-${PAD(pickVariant(seed, row, col, token, 4))}.svg`;
    case 'SW': return `/assets/corner-sw-${PAD(pickVariant(seed, row, col, token, 4))}.svg`;
    case 'SE': return `/assets/corner-se-${PAD(pickVariant(seed, row, col, token, 4))}.svg`;
    case '--': return `/assets/wall-h-${PAD(pickVariant(seed, row, col, token, 5))}.svg`;
    case '||': return `/assets/wall-v-${PAD(pickVariant(seed, row, col, token, 5))}.svg`;
    case '**': return `/assets/obstacle-${PAD(pickVariant(seed, row, col, token, 10))}.svg`;
    case 'EN': return `/assets/entrance.svg`;
    case 'EX': return `/assets/exit.svg`;
    case '  ':
    case 'OL': return `/assets/floor.svg`;
  }
}
