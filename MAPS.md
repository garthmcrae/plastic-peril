# Map authoring

10×10 tile grid. Entrance on row 0, exit on row 9. Movement up/down/left/right.

Obstacles are placed on interior floor tiles only. Each obstacle tile becomes an encounter at play time (the kid places a toy on it before play). `OL` fills out-of-bounds cells — obstacle placement needs no bounds check, just avoid non-floor cells.

## Character → asset mapping

- `NW NE SW SE` → `corner-{nw|ne|sw|se}-##.svg`
- `--` → `wall-h-##.svg`
- `||` → `wall-v-##.svg`
- `**` → `obstacle-##.svg` (10 variants)
- `  ` → `floor.svg`
- `EN` → `entrance.svg`
- `EX` → `exit.svg`
- `OL` → off limits, rendered as `floor.svg`

## Steps to generate a map

Build the playable floor first, then derive the walls from that shape.

1. Start with a 10x10 code block filled entirely with `OL`.
2. Add one `EN` cell on row 0 and one `EX` cell on row 9.
3. Carve the playable floor by changing `OL` cells to the floor token, two spaces: `  `.
4. Make sure the floor creates a clear up/down/left/right path from `EN` to `EX`.
5. Shape the map theme by expanding or narrowing the floor:
   - caves should have uneven chambers, shelves, and organic edges
   - corridors should use tight, connected floor paths with deliberate turns and loops
6. Add corners around the carved floor wherever the wall outline turns:
   - `NW` connects south to east
   - `NE` connects south to west
   - `SW` connects north to east
   - `SE` connects north to west
7. Add straight walls between corners:
   - `--` for horizontal wall runs
   - `||` for vertical wall runs
8. Check that wall pieces form continuous outlines. Loose corners, isolated wall cells, and broken wall runs should be fixed before adding obstacles.
9. Add obstacles last by changing selected interior floor cells to `**`. Aim for 5–10 obstacles per map — every one is a fight at play time.
10. Check that obstacles do not block the required path from `EN` to `EX`.
11. Final validation:
    - exactly 10 rows
    - exactly 10 two-character cells per row
    - `EN` is on row 0
    - `EX` is on row 9
    - every token is valid
    - obstacles are placed only on interior floor cells
    - walls are continuous, with intentional openings only at entrance and exit

## Per-map content

Each map exports a `MapConfig` (see `src/maps/index.ts`):

```ts
type MapConfig = {
  title: string;
  map: string;                // the 10x10 grid above
  narrative: string;          // setup paragraph + inline GM prompts tied to dice
  spells: [string, string, string, string, string, string];   // d6
  combat: [string, string, string, string, string, string];   // d6
  enemy:  [string, string, string, string, string, string];   // d6
  ending: string;             // read aloud when kid reaches EX
};
```

Authoring rules for the four content fields live in `AGENTS.md`.

## Examples

```irregular-cave
OLOLNW--------EN--NE
NW--SE    **      ||
||**              ||
SW--------NE    **||
OLOLNW----SE  **  ||
NW--SE    **    NWSE
||  **  NW------SEOL
||**    SW--NEOLOLOL
SWNE      NWSEOLOLOL
OLSWEX----SEOLOLOLOL
```

```creepy-cave
OLOLNW----EN----NEOL
NW--SE      **  SWNE
||**    **        ||
SW------NE    **  ||
OLOLNW--SE        ||
NW--SE      **  NWSE
||      NW------SEOL
||**    SW--NEOLOLOL
SWNE    **NWSEOLOLOL
OLSW--EX--SEOLOLOLOL
```

```narrow-corridors
NWEN--------------NE
||              **||
SW------------NE  ||
NW------------SE  ||
||**            **||
||  NW------------SE
||  SW------------NE
||    **        **||
||**              ||
SW--------------EXSE
```
