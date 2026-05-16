import { Story } from './Story';
import { Status } from './Status';
import type { MapConfig } from '../maps';

type Props = Pick<MapConfig, 'title' | 'narrative' | 'spells' | 'combat' | 'enemy' | 'events' | 'ending'>;

export function Sidebar({ title, narrative, spells, combat, enemy, events, ending }: Props) {
  return (
    <div style={{ flex: 1, padding: '8mm 10mm 8mm 5mm', display: 'flex', flexDirection: 'column', fontSize: '2.5mm' }}>
      <Story title={title} narrative={narrative} ending={ending} />
      <Status spells={spells} combat={combat} enemy={enemy} events={events} />
    </div>
  );
}
