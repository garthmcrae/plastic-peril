import { Map } from "./Map";
import { Sidebar } from "./Sidebar";
import type { MapConfig } from "../maps";

export function Sheet({ config }: { config: MapConfig }) {
  return (
    <div
      style={{
        width: "287mm",
        height: "200mm",
        display: "flex",
        background: "white",
        boxSizing: "border-box",
      }}
    >
      <Map map={config.map} title={config.title} />
      <Sidebar
        title={config.title}
        introduction={config.introduction}
        spells={config.spells}
        combat={config.combat}
        enemy={config.enemy}
        events={config.events}
        conclusion={config.conclusion}
      />
    </div>
  );
}
