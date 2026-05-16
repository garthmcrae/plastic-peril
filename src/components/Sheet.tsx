import { Map } from './Map';
import { Sidebar } from './Sidebar';
import type { MapConfig } from '../maps';

export function Sheet({ config }: { config: MapConfig }) {
  return (
    <div
      style={{
        width: '297mm',
        height: '210mm',
        display: 'flex',
        background: 'white',
        padding: '2.5mm',
        boxSizing: 'border-box',
      }}
    >
      <Map map={config.map} title={config.title} />
      <Sidebar
        title={config.title}
        narrative={config.narrative}
        spells={config.spells}
        combat={config.combat}
        enemy={config.enemy}
        events={config.events}
        ending={config.ending}
      />
    </div>
  );
}
