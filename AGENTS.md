# AGENTS.md

Canonical authoring guide for this repository. If you are an agent (Claude, Codex, anything else) creating new maps or narratives, this file is the single source of truth. `CLAUDE.md` points here.

## Project

A printable dungeon-sheet builder. Vite + React renders an A4-landscape sheet: a 10×10 SVG map on the left, a story sidebar on the right with life boxes and three d6 tables. Hand-authored SVG tiles live in `public/assets/`. Each map is a TypeScript module in `src/maps/`.

Preview: `bun run dev`, then `/?map=<slug>` (e.g. `/?map=irregular-cave`).

Always create new maps as a module in `src/maps/` and register them in `src/maps/index.ts`.

## How the game plays (for context)

- A4 landscape, printed.
- 10×10 grid. Entrance on row 0, exit on row 9. Always a clear path between.
- Obstacles printed on the map. Before play, the kid puts a toy/mini on every obstacle tile — those are the encounters. **Obstacle tiles are not enterable**; the kid fights from an adjacent square.
- Kid rolls a d6 to move, up to that many squares **or stops on a square adjacent to an obstacle's mini** (= encounter).
- On a fight: kid rolls **Combat d6**, adult rolls **Enemy d6**, both effects apply.
- Combat slot 4 = "cast a spell" → roll **Spells d6**.
- Combat slot 6 = kill, ends the fight.
- **Events d6**: adult rolls this **every turn**, fight or no fight. Ambient map happenings — drips, rumbles, falling rocks, whispers. The dungeon is always doing something.
- Life: 3 boxes. Wound results tick a box. Three wounds = out.
- Win: reach EX. Adult reads the **ending**.

Tone: silly with real teeth. Pants get pooed. Bones get clean kills. The adult is allowed to fudge rolls. Kids should laugh more than they cry.

## Tile contract

- **Grid**: every map is 10×10. Tiles render at 20mm × 20mm (`viewBox="0 0 20 20"`). A 10-wide map fits an A4 landscape with margins.
- **Seam contract**: tiles must align across edges.
  - Horizontal walls always cross at `y=10`.
  - Vertical walls always cross at `x=10`.
  - Corners join those midpoints.
  - Break this and the map's outline breaks. Preserve it when adding/editing tiles.
- **Drawing style**: thin black strokes (`stroke-width="0.2"`) on white, faint `#eee` border rect. Obstacles use jagged polylines/polygons (asteroid-style irregular shapes).
- **Asset naming**:
  - `corner-{nw|ne|sw|se}-NN.svg`
  - `wall-h-NN.svg`, `wall-v-NN.svg`
  - `obstacle-NN.svg` (10 variants)
  - `floor.svg`, `entrance.svg`, `exit.svg`

## Map ASCII format

Two-character cells. One row per line, exactly 10 cells per row, exactly 10 rows.

| Token | Meaning |
|-------|---------|
| `NW` `NE` `SW` `SE` | wall corners |
| `--` | horizontal wall |
| `||` | vertical wall |
| `**` | obstacle (becomes an encounter) |
| `  ` (two spaces) | floor |
| `EN` | entrance (row 0) |
| `EX` | exit (row 9) |
| `OL` | off-limits / out of bounds (renders as floor; lets you carve irregular shapes) |

### Build a map (in order)

1. Start with a 10×10 grid filled with `OL`.
2. Add one `EN` on row 0, one `EX` on row 9.
3. Carve playable floor by replacing `OL` cells with `  ` (two spaces). Keep a clear up/down/left/right path between `EN` and `EX`.
4. Shape the theme. Caves get organic chambers and shelves. Corridors get tight turns and loops.
5. Wrap the carved floor with corners (`NW`/`NE`/`SW`/`SE`) wherever the wall turns.
6. Fill straight wall runs with `--` and `||` between corners.
7. Verify walls form continuous outlines. No loose corners, no isolated wall cells, no broken runs.
8. Place obstacles (`**`) on interior floor cells. **Aim for 5–10 per map** — every one is a fight, so balance the kid's life total against the count.
9. Confirm obstacles do not block the required path from `EN` to `EX`.

### Validation checklist

- [ ] Exactly 10 rows
- [ ] Exactly 10 two-character cells per row
- [ ] `EN` is on row 0, `EX` is on row 9
- [ ] Every token is valid
- [ ] Walls are continuous, openings only at `EN` and `EX`
- [ ] Obstacles are only on interior floor cells
- [ ] Path from `EN` to `EX` exists with obstacles in place
- [ ] 5–10 obstacles total

## MapConfig

Each map is a TypeScript module exporting:

```ts
import type { MapConfig } from './index';

export const slug: MapConfig = {
  title: 'Display Title',
  map: [
    /* 10 rows of 10 two-char cells */
  ].join('\n'),
  narrative: '...',
  spells: ['1', '2', '3', '4', '5', '6'],
  combat: ['1', '2', '3', '4', '5', '6'],
  enemy:  ['1', '2', '3', '4', '5', '6'],
  events: ['1', '2', '3', '4', '5', '6'],
  ending: '...',
};
```

Register it in `src/maps/index.ts`:

```ts
import { slug } from './slug';
// ...
export const maps: Record<string, MapConfig> = {
  'slug': slug,
  // ...
};
```

### narrative

A short opening paragraph (2–4 sentences) that sets the scene, then 2–4 bracketed GM prompts tied to specific dice outcomes. Format:

```
[Opening paragraph in plain prose.]

[On Spell N (Name) ...what happens...]
[On Enemy N ...what happens...]
[If they make it to the exit, read the ending.]
```

Prompts should reference the map's actual Spell or Enemy slots by index and name. Keep prompts short — the adult is reading mid-game.

### spells (d6)

Six themed spells the kid can cast when their Combat d6 lands on slot 4. Format each entry as `Name — effect`. Effects should be small, narrate-able, and skew silly. At least one should heal or skip a fight; at least one should hurt the enemy.

### combat (d6)

Six things that happen when the kid attacks. **Slot 4 must be "Cast a spell — roll the Spells d6"**. **Slot 6 must be a kill that ends the fight.** The other four slots are free; mix slapstick (miss, trip, headbutt) with the occasional self-inflicted wound or solid hit. At least one of the remaining slots should wound the enemy without killing it (creates multi-turn fights).

### enemy (d6)

Six things the enemy does. Skew silly (poos pants, calls mum, bonks ceiling). At least one slot must wound the kid. At least one must be "mortally wounded" or equivalent so the adult can end a fight cleanly. At least one should be a non-event so not every round is dramatic.

### events (d6)

Six ambient things the dungeon does. The adult rolls this **every turn**, whether or not the kid is fighting — the dungeon is alive. Themed to the map: rumbles in a cave, slamming doors in a corridor, whispering faces in a creepy cave. Mix of:

- Pure flavour (a drip, a distant noise, a whisper) — no mechanical effect.
- Small consequences (lose your next move, GM nudges an enemy one square).
- One wound slot — the dungeon itself can hurt the kid.
- One heal/good slot — sometimes the dungeon is kind.

Keep each entry to a single short line. The adult reads them aloud every turn, so brevity matters.

### ending

One or two sentences. Read aloud when the kid reaches EX. No treasure economy — survival is the reward. Flavour rewards only: damp socks, slightly squashed cupcake, biscuit-smelling shoes. Tone: kind, a little absurd.

### Tone rules across all four fields

- Silly skew. The table should laugh more than it groans.
- Short sentences. Adults read these aloud, mid-game, with a child waiting.
- No mechanics jargon kids don't have. "Take a wound", "skip a turn", "cast a spell" are fine. "DEX save" is not.
- It is fine to repeat a theme between Spells, Combat, and Enemy — coherence over variety.

### Content validation checklist

- [ ] `narrative` opens with prose, then bracketed GM prompts that reference real Spell/Enemy slots
- [ ] `spells` has 6 entries in `Name — effect` form
- [ ] `combat[3]` (slot 4) is the cast-a-spell slot
- [ ] `combat[5]` (slot 6) is a kill that ends the fight
- [ ] `combat` has at least one wound-the-enemy slot that does not kill
- [ ] `enemy` has at least one wound-the-kid slot
- [ ] `enemy` has at least one clean kill-the-enemy slot ("mortally wounded" or similar)
- [ ] `enemy` has at least one non-event slot
- [ ] `events` has at least one wound slot, one heal/good slot, and one pure-flavour slot
- [ ] `ending` is 1–2 sentences, kind, no treasure economy

## End-to-end verification

After adding a map:

```sh
bun run dev
# open http://localhost:5173/?map=<your-slug>
```

Confirm: map renders with the right shape, sidebar shows Life + Spells/Combat/Enemy d6 tables + narrative + ending, layout fits a single A4 landscape page (Cmd+P preview).

```sh
bun run build
```

Must succeed with no TS errors.

## Runtime

`bun` for JS/TS. Never `npm`/`npx`/`node`.
