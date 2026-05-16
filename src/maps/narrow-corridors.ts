import type { MapConfig } from "./index";

export const narrowCorridors: MapConfig = {
  title: "Narrow Corridors",
  map: [
    "NWEN--------------NE",
    "||              **||",
    "SW------------NE  ||",
    "NW------------SE  ||",
    "||**            **||",
    "||  NW------------SE",
    "||  SW------------NE",
    "||    **        **||",
    "||**              ||",
    "SW--------------EXSE",
  ].join("\n"),
  narrative:
    "Thin wall runs fold the dungeon into a looping route from the top opening to the south exit. The side passages double back just enough that every straight line starts to feel suspicious.",
};
