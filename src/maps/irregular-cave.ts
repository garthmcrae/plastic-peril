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
    "You crawl in through the top-right gap. The cave smells of old bat. Something in the dark is humming a song it does not know all the words to.\n\n" +
    "[On Spell 3 (Stinkbreath) the cave gets very quiet and the next enemy skips its roll.]\n" +
    "[On Enemy 5 the rocks shift — move one obstacle one square in any direction.]\n" +
    "[If they reach the SW exit with at least one life, read the ending out loud.]",
  spells: [
    'Pebble Punch — chuck a rock, enemy rolls again at -1 in your head',
    'Glowworm — light up one room, GM names what is in it',
    'Stinkbreath — next enemy is too grossed out to attack',
    'Bat Friend — a bat fights for you on the next combat roll',
    'Rock Slip — slide one extra square in any direction',
    'Cave Burp — everyone laughs, fight pauses, you heal one life',
  ],
  combat: [
    'You swing and miss — bonk a stalactite instead',
    'You trip on your own boot, land on the enemy (counts as a wound)',
    'Solid whack — enemy takes a wound',
    'Cast a spell — roll the Spells d6',
    'Pocket sand! Enemy is blinded for their next roll',
    'Critical hit — enemy is done, move on',
  ],
  enemy: [
    'Poos pants — falls over backwards, no attack this turn',
    'Wild swing — you take a wound',
    'Mortally wounded — flop, gurgle, gone',
    'Trips and rolls into the next room — GM moves the mini',
    'Yells for its mum — another tiny enemy appears next turn',
    'Shrugs it off and glares — nothing happens, roll again next turn',
  ],
  ending:
    'You squeeze out the bottom hole into daylight. There is a single damp sock on the grass. It is yours now. You earned it.',
};
