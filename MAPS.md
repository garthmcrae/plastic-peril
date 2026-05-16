# Room-Template Approach

10×10 tile grid.
Entrance on row 0, exit on row 9.
Movement: up, down, left, right.
Obstacles block the path; placed on interior floor tiles only.
`OL` fills out-of-bounds cells — obstacle placement needs no bounds check, just avoid non-floor cells.

## Room template examples

Character → asset mapping:
- `NW NE SW SE` → `corner-{nw|ne|sw|se}-##.svg`
- `--` → `wall-h-##.svg`
- `||` → `wall-v-##.svg`
- `**` → `obstacle-##.svg` (10 variants)
- `  ` → `floor.svg` or exit gap
- `EN` → `entrance.svg`
- `EX` → `exit.svg`
- `OL` → off limits use `floor.svg`

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
9. Add obstacles last by changing selected interior floor cells to `**`.
10. Check that obstacles do not block the required path from `EN` to `EX`.
11. Final validation:
   - exactly 10 rows
   - exactly 10 two-character cells per row
   - `EN` is on row 0
   - `EX` is on row 9
   - every token is valid
   - obstacles are placed only on interior floor cells
   - walls are continuous, with intentional openings only at entrance and exit

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
NW--EN------------NE
||              **||
SW------------NE  ||
NW------------SE  ||
||**            **||
||  NW------------SE
||  SW------------NE
||    **        **||
||**              ||
SW------------EX--SE
```
