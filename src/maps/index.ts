import { irregularCave } from './irregular-cave';
import { creepyCave } from './creepy-cave';
import { narrowCorridors } from './narrow-corridors';

export type D6 = [string, string, string, string, string, string];

export type MapConfig = {
  title: string;
  map: string;
  introduction: string;
  spells: D6;
  combat: D6;
  enemy: D6;
  events: D6;
  conclusion: string;
};

export const maps: Record<string, MapConfig> = {
  'irregular-cave': irregularCave,
  'creepy-cave': creepyCave,
  'narrow-corridors': narrowCorridors,
};

export const mapSlugs = Object.keys(maps);
