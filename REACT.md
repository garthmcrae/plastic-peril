# React Map App — Solution Design

## Goal
Replace hand-authored HTML in `example/` with a React app that renders the same printable A4 landscape sheet from a `{map, narrative}` config. Outputs print-identical layout in millimetres; no canvas, just `<img>` of existing SVG tiles.

## Stack
- **Runtime:** Bun + Vite + React + TypeScript.
- **Styling:** inline `style={{...}}` on every element. No CSS files, no classNames, no styling lib. There are no hover/focus/active states to express — inline covers everything. `index.html` keeps only the `<body>` reset and `@media print` rules (the two things inline styles can't reach).
- **Assets:** existing `assets/*.svg` served as static files.
- **No router, no state lib.** One config in, one sheet out.

## Data model
```ts
type MapConfig = {
  title: string;
  map: string;       // 10 lines × 20 chars, MAPS.md format
  narrative: string; // sidebar story text
};
```
Configs live as `.ts` modules under `src/maps/` (e.g. `src/maps/irregular-cave.ts`) and are imported by routes/pages. Agents author by writing one of these files.

## Token grammar
Parser splits the `map` string into 10 rows × 10 cells of 2 chars each. Token → asset:

| Token | Asset family               | Variants |
|-------|----------------------------|----------|
| `NW`  | `corner-nw-{nn}.svg`       | 04       |
| `NE`  | `corner-ne-{nn}.svg`       | 04       |
| `SW`  | `corner-sw-{nn}.svg`       | 04       |
| `SE`  | `corner-se-{nn}.svg`       | 04       |
| `--`  | `wall-h-{nn}.svg`          | 05       |
| `\|\|`| `wall-v-{nn}.svg`          | 05       |
| `**`  | `obstacle-{nn}.svg`        | 10       |
| `  `  | `floor.svg`                | —        |
| `OL`  | `floor.svg` (out-of-bounds)| —        |
| `EN`  | `entrance.svg`             | —        |
| `EX`  | `exit.svg`                 | —        |

**Variant selection:** seeded random per `{row, col, token}` so re-renders are stable for the same map. Seed = hash of `title`. Avoids print flicker and lets agents diff output deterministically.

**Validation:** parser throws on wrong row/col count or unknown token. Surfaced as a visible error banner, not a silent fallback — agents need the signal.

## Component tree
```
App
└── Sheet                       # .page, A4 landscape, flex row
    ├── Map                     # 10×10 grid of Tile
    │   └── Tile                # single <img>, 20mm × 20mm
    └── Sidebar
        ├── Story               # title + narrative paragraph
        └── Status              # life boxes, encounter table, spells
                                # (component name: "Status" — covers
                                #  hitpoints / spells / inventory)
```

- `Map` owns the parser + variant-picker; passes a resolved asset path to `Tile`.
- `Tile` is dumb — `<img src height="20mm" width="20mm">`.
- `Status` is initially a stub (3 life boxes, d6 table placeholder) — fleshed out as the game rules firm up.

## Print layout
All dimensions inline on the components:
- `Sheet`: `{ width: '297mm', height: '210mm', display: 'flex', background: 'white', padding: '2.5mm', boxSizing: 'border-box' }`
- `Map`: `{ display: 'flex', flexDirection: 'column' }`; each row `{ display: 'flex' }`.
- `Tile` `<img>`: `{ width: '20mm', height: '20mm', display: 'block' }`.
- `Sidebar`: `{ flex: 1, padding: '8mm 10mm 8mm 5mm', display: 'flex', flexDirection: 'column' }`.

`index.html` `<style>` holds only:
- `body { margin: 24px; background: whitesmoke; font-family: 'DM Mono', ui-monospace, monospace; font-size: 9pt; }`
- `@media print { body { margin: 0; background: white; } }`

## Agent workflow
Agents have three jobs, each isolated:

1. **Generate map** — produce the 10×20 ASCII per MAPS.md rules; reference `MAPS.md` for the grammar and path-validity constraint.
2. **Render** — drop config into `src/maps/<slug>.ts`, register in `src/maps/index.ts`, open the route. Visual review via `bun run dev`.
3. **Generate narrative** — write `narrative` field to match the map shape (entrance position, obstacles, exit).

Agents always edit a `MapConfig` object — never hand-write HTML. The existing `example/*.html` files are reference outputs and can be deleted once parity is confirmed.

## File layout
```
index.html
src/
  main.tsx
  App.tsx
  components/
    Sheet.tsx
    Map.tsx
    Tile.tsx
    Sidebar.tsx
    Story.tsx
    Status.tsx
  lib/
    parseMap.ts        # string → Cell[][]
    resolveAsset.ts    # (cell, row, col, seed) → asset path
    seededRandom.ts
  maps/
    index.ts           # registry
    irregular-cave.ts
    creepy-cave.ts
    narrow-corridors.ts
```

## Open questions
1. **Routing.** One sheet per URL (`/irregular-cave`) or a single sheet driven by a picker? Suggest URL-per-map — printable, shareable, agent-addressable.
2. **Status component scope.** Just life boxes for v1, or include the d6 encounter table now? NEW_IDEA.md implies the table matters early.
3. **Empty-grid variant.** NEW_IDEA.md says the child places obstacles. Do we need a `mode: "empty" | "full"` flag on `MapConfig` that drops `**` tokens at render time?
4. **Print CSS.** Confirm we want true print-to-paper, or is "looks right on screen at A4 dimensions" enough for v1?
