import type { MapConfig } from "./index";

export const creepyCave: MapConfig = {
  title: "Creepy Cave",
  map: [
    "OLOLNW----EN----NEOL",
    "NW--SE      **  SWNE",
    "||**    **        ||",
    "SW------NE    **  ||",
    "OLOLNW--SE        ||",
    "NW--SE      **  NWSE",
    "||      NW------SEOL",
    "||**    SW--NEOLOLOL",
    "SWNE    **NWSEOLOLOL",
    "OLSW--EX--SEOLOLOLOL",
  ].join("\n"),
  narrative:
    "Enter through the broken upper wall, pick your way between paired rock clusters, then hook left to the low south exit. The cave keeps making faces in the corners. Try not to look at the same one twice.",
};
