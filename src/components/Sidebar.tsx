import { Story } from './Story';
import { Status } from './Status';
import type { MapConfig } from '../maps';

type Props = Pick<MapConfig, 'title' | 'introduction' | 'spells' | 'combat' | 'enemy' | 'events' | 'conclusion'>;

export function Sidebar({ title, introduction, spells, combat, enemy, events, conclusion }: Props) {
  return (
    <div style={{ flex: 1, padding: '8mm 10mm 8mm 5mm', display: 'flex', flexDirection: 'column', fontSize: '2mm' }}>
      <Story title={title} introduction={introduction} conclusion={conclusion} />
      <Status spells={spells} combat={combat} enemy={enemy} events={events} />
    </div>
  );
}
