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
- On a fight: **sequential rolls**. Kid rolls **Combat d6** first, adult narrates the result, then adult rolls **Enemy d6** as the enemy's reaction. **Every Combat roll ends the fight** — the enemy mini always comes off the board.
- **Every Combat slot resolves the fight.** The mini is removed — either dead, or as a companion who walks with the kid. No "miss", no "stun", no "fight pauses". Slot 6 is the canonical puff-of-smoke kill.
- A Combat slot may wound the kid as a side effect of the kill (clumsy attack), but the enemy still goes.
- **Spells d6** is a GM toolbox, not a fixed slot. Pull from it when the fiction calls for magic.
- **Companions**: befriended enemies join the kid, move with their mini, are not obstacles, do not take wounds, do not die. Because every fight resolves in one Combat roll, companions don't roll extra dice — they're just along for the ride.
- Enemies never flee. Every fight ends in one Combat roll: they die or become companions.
- **Events d6**: adult rolls this **every turn**, fight or no fight. Ambient map happenings — drips, rumbles, falling rocks, whispers. The dungeon is always doing something.
- Life: 3 boxes. Wound results tick a box. Three wounds = out. (Only the kid has life; enemies do not.)
- Win: reach EX. Adult reads the **conclusion**.

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
  introduction: '...',
  spells: ['1', '2', '3', '4', '5', '6'],
  combat: ['1', '2', '3', '4', '5', '6'],
  enemy:  ['1', '2', '3', '4', '5', '6'],
  events: ['1', '2', '3', '4', '5', '6'],
  conclusion: '...',
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

### introduction

A short opening paragraph (2–4 sentences) that sets the scene. Plain prose. Read aloud at the start. No bracketed GM prompts — the d6 tables carry every per-turn outcome on their own.

### spells (d6)

Six themed spells. The Spells d6 is a GM toolbox — the adult pulls from it when the fiction calls for magic (a Combat or Enemy result that mentions a spell, an Events roll that sparks one, the kid saying "I cast a spell"). Format each entry as `Name — effect`. Effects should be small, narrate-able, and skew silly. At least one should heal, skip a fight, or befriend an enemy; at least one should remove an enemy outright.

### combat (d6)

Six reactions to the kid's attack. **Every slot ends the fight — the mini comes off the board.** Rules:

- **Every slot removes the mini.** No "miss", no "stun", no "fight pauses", no "next turn". The enemy is either dead or a companion by the end of the kid's roll.
- Aim for **roughly 4 dead slots and 2 companion slots** per map. Slot 6 is the canonical puff-of-smoke kill.
- At most one slot may wound the kid as a side effect of the kill (clumsy attack). The enemy still goes.
- Do not chip away at enemy "wounds" — enemies have no HP. They die or become companions.
- No "Cast a spell" slot. Spells are GM-discretion (see `spells` above).
- No turn-tracking language anywhere ("this turn", "next turn", "lose your next move", "pauses one turn", "roll again next turn"). Outcomes are immediate.

### enemy (d6)

Six reactions the enemy has to the kid's just-narrated Combat roll. Skew silly (poos pants, calls mum, bonks ceiling, stares). Rules:

- At least one slot must **wound the kid** (life box gets ticked).
- At least one slot must be **"calls a friend"** / summons help — describe a new mini appearing **now** on the entrance tile.
- At least one slot is a non-event so not every round is dramatic.
- **No fleeing, no retreats, no "runs into the next room".** Enemies do not run away.
- **No "mortally wounded" / "takes a wound" entries.** Death only happens via Combat.
- **No turn-tracking language** — no "no attack this turn", "lose your next move", "roll again next turn". Pure flavour slots stay pure; mechanical slots resolve immediately.

### events (d6)

Six ambient things the dungeon does. The adult rolls this **every turn**, whether or not the kid is fighting — the dungeon is alive. Themed to the map: rumbles in a cave, slamming doors in a corridor, whispering faces in a creepy cave. Mix of:

- Pure flavour (a drip, a distant noise, a whisper) — no mechanical effect.
- Small consequences that resolve immediately (GM nudges an enemy one square, an obstacle shifts). **No "lose your next move" or other turn-tracking.**
- One wound slot — the dungeon itself can hurt the kid.
- One heal/good slot — sometimes the dungeon is kind.

Keep each entry to a single short line. The adult reads them aloud every turn, so brevity matters.

### conclusion

One or two sentences. Read aloud when the kid reaches EX. No treasure economy — survival is the reward. Flavour rewards only: damp socks, slightly squashed cupcake, biscuit-smelling shoes. Tone: kind, a little absurd.

### Tone rules across all four fields

- Silly skew. The table should laugh more than it groans.
- Short sentences. Adults read these aloud, mid-game, with a child waiting.
- No mechanics jargon kids don't have. "Take a wound", "skip a turn", "cast a spell" are fine. "DEX save" is not.
- It is fine to repeat a theme between Spells, Combat, and Enemy — coherence over variety.

### Content validation checklist

- [ ] `introduction` is plain prose (no brackets, no GM prompts)
- [ ] `spells` has 6 entries in `Name — effect` form
- [ ] `combat[5]` (slot 6) is a kill (puffs into smoke, mini removed)
- [ ] **Every `combat` slot removes the mini (dead or companion)** — no "miss", "stun", "fight pauses"
- [ ] `combat` has roughly 4 dead and 2 companion slots
- [ ] `combat` has no "cast a spell" slot
- [ ] `combat` has no "enemy takes a wound" entries
- [ ] `enemy` has at least one wound-the-kid slot
- [ ] `enemy[4]` (slot 5) is a "calls a friend / summons help" slot (mini appears **now** on entrance)
- [ ] `enemy` has at least one non-event slot
- [ ] `enemy` has no fleeing / retreating / "runs into the next room" entries
- [ ] `enemy` has no "mortally wounded" / "takes a wound" entries
- [ ] `events` has at least one wound slot, one heal/good slot, and one pure-flavour slot
- [ ] **No "this turn / next turn / lose your next move / pauses / roll again" phrasing anywhere in `spells`, `combat`, `enemy`, or `events`**
- [ ] `conclusion` is 1–2 sentences, kind, no treasure economy

## End-to-end verification

After adding a map:

```sh
bun run dev
# open http://localhost:5173/?map=<your-slug>
```

Confirm: map renders with the right shape, sidebar shows Life + Spells/Combat/Enemy/Events d6 tables + introduction + conclusion, layout fits a single A4 landscape page (Cmd+P preview).

```sh
bun run build
```

Must succeed with no TS errors.

## Runtime

`bun` for JS/TS. Never `npm`/`npx`/`node`.
