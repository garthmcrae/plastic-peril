import type { D6 } from '../maps';

type Props = {
  spells: D6;
  combat: D6;
  enemy: D6;
  events: D6;
};

export function Status({ spells, combat, enemy, events }: Props) {
  const table = (label: string, rows: D6) => (
    <div>
      <div style={{ marginBottom: '1.5mm' }}>{label}</div>
      <div style={{ lineHeight: 1.35 }}>
        {rows.map((r, i) => (
          <div key={i}>{i + 1} — {r}</div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '3mm' }}>
      <div>
        <div style={{ marginBottom: '2mm' }}>Life</div>
        <div>[ ] [ ] [ ]</div>
      </div>
      {table('Spells (d6)', spells)}
      {table('Combat (d6)', combat)}
      {table('Enemy (d6)', enemy)}
      {table('Events (d6)', events)}
    </div>
  );
}
