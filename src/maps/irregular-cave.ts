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
  introduction:
    "You crawl in through the top-right gap. The cave smells of old bat. Something in the dark is humming a song it does not know all the words to.",
  spells: [
    'Pebble Punch — chuck a rock, enemy ducks and joins you as a companion',
    'Glowworm — light up one room, GM names what is in it',
    'Stinkbreath — next enemy is too grossed out to attack',
    'Bat Friend — a bat dive-bombs the enemy, it faints and is removed',
    'Rock Slip — slide one extra square in any direction',
    'Cave Burp — everyone laughs, fight pauses, you heal one life',
  ],
  combat: [
    'You swing and miss — bonk a stalactite instead — fight pauses one turn',
    'You trip on your own boot, land on the enemy (you take a wound)',
    'Solid whack — enemy is stunned, joins you as a companion',
    'You offer it your snack — enemy is charmed, joins you as a companion',
    'Pocket sand! Enemy is blinded for their next roll',
    'Critical hit — enemy puffs into smoke, remove the mini',
  ],
  enemy: [
    'Poos pants — falls over backwards, no attack this turn',
    'Wild swing — you take a wound',
    'Glares so hard you forget your next move — lose your next move',
    'Stomps in place — no effect, but loud',
    'Yells for its mum — another tiny enemy appears next turn on the entrance tile',
    'Shrugs it off — nothing happens, roll again next turn',
  ],
  events: [
    'A wet drip in the dark — nothing else happens',
    'Distant rumble — the cave groans, dust falls',
    'A bat flaps past your face — flinch, lose your next move',
    'Eerie humming starts up again, louder this time',
    'A small rock pings off your head — take a wound',
    'Boulder thuds in the next chamber — GM moves any one enemy one square',
  ],
  conclusion:
    'You squeeze out the bottom hole into daylight. There is a single damp sock on the grass. It is yours now. You earned it.',
};
