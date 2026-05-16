# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static SVG dungeon-map builder inspired by the vector style of the original Asteroids game. No build, no tests, no package manager — just hand-authored SVG tiles in `assets/` and HTML pages in `example/` that compose them into 10x10 maps.

Preview a map: open `example/<name>.html` directly in a browser.

ALways create maps in `example/`.

## Architecture

- **Tile grid**: each map is 10x10. Tiles render at 20mm × 20mm (`viewBox="0 0 20 20"`) so a 10-wide map fits an A4 landscape page with margins (see `.page` styles in the example HTML).
- **Tile-seam contract**: tiles must align across edges. Horizontal walls always cross at `y=10`; vertical walls always cross at `x=10`. Corners join those midpoints. Preserve these conventions when adding/editing tiles or seams will break.
- **Drawing style**: thin black strokes (`stroke-width="0.3"`) on white, with a faint `#eee` border rect. Obstacles use jagged polylines/polygons (asteroid-style irregular shapes).
- **Asset naming** (referenced by the character grids in `MAPS.md`):
  - `corner-{nw|ne|sw|se}-NN.svg`
  - `wall-h-NN.svg`, `wall-v-NN.svg`
  - `obstacle-NN.svg` (10 variants)
  - `floor.svg`, `entrance.svg`, `exit.svg`
- **Map authoring**: `MAPS.md` defines an ASCII format (2-char cells: `NW`, `--`, `||`, `**`, `EN`, `EX`, spaces for floor). Example HTML files in `example/` are the rendered form — each `<div class="row">` is one grid row of `<img>` tags pointing at `assets/`.

## Constraints from GOAL.md

- Entrance on row 0, exit on row 9; a clear path must exist through obstacles.
