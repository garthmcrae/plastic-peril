import { parseMap } from '../lib/parseMap';
import { resolveAsset } from '../lib/resolveAsset';
import { hashString } from '../lib/seededRandom';
import { Tile } from './Tile';

type Props = { map: string; title: string };

export function Map({ map, title }: Props) {
  const cells = parseMap(map);
  const seed = hashString(title);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {cells.map((row, r) => (
        <div key={r} style={{ display: 'flex' }}>
          {row.map((tok, c) => (
            <Tile key={c} src={resolveAsset(tok, r, c, seed)} />
          ))}
        </div>
      ))}
    </div>
  );
}
