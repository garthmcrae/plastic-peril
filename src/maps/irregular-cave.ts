import type { MapConfig } from './index';

export const irregularCave: MapConfig = {
  title: 'Irregular Cave',
  map: [
    'OLOLNW--------EN--NE',
    'NW--SE    **      ||',
    '||**              ||',
    'SW--------NE    **||',
    'OLOLNW----SE  **  ||',
    'NW--SE    **    NWSE',
    '||  **  NW------SEOL',
    '||**    SW--NEOLOLOL',
    'SWNE      NWSEOLOLOL',
    'OLSWEX----SEOLOLOLOL',
  ].join('\n'),
  narrative:
    "Enter top-right, drop down the right corridor past two jagged shelves jutting in from the left, then turn west across the bottom and slip out the south exit. The cave's south and east walls fray into open rock — there is no clean perimeter on that side.",
};
