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
    "You step through the top arch. The walls have faces. The faces have opinions. None of them are good.\n\n" +
    "[On Spell 2 (Eye Closer) every face in the cave shuts up — skip the next Enemy roll.]\n" +
    "[On Enemy 1 the face nearest the kid sneezes. Loudly. Move it to the floor and laugh.]\n" +
    "[If they make the SW exit with at least one life, read the ending.]",
  spells: [
    'Boop — flick the nearest face on the nose, it shuts up',
    'Eye Closer — every face in the cave closes its eyes for one turn',
    'Pocket Mirror — the enemy sees itself, rolls its d6 at -1 in your head',
    'Soft Whisper — turn a face into a friend for one fight',
    'Spider Friend — a spider scuttles in and bites the enemy (wound)',
    'Cave Yawn — the whole cave yawns, you heal one life',
  ],
  combat: [
    'You swing wide — clip a face on the wall, it goes "OW!"',
    'You slip on something wet — fall into the enemy (wound)',
    'Clean smack — enemy takes a wound',
    'Cast a spell — roll the Spells d6',
    'You headbutt — both stunned, fight pauses one turn',
    'Critical thunk — enemy is over, move on',
  ],
  enemy: [
    'Poos pants — sits down to think about it, no attack',
    'Wild claw — you take a wound',
    'Mortally wounded — slides slowly down the wall',
    'Runs into a face — face screams, both confused',
    'Calls a friend — another tiny enemy appears next turn',
    'Just stares at you — nothing happens, but it is weird',
  ],
  events: [
    'A face on the wall whispers your name — keep going, nothing happens',
    'All the eyes blink at once — you stop, lose your next move',
    'A face sneezes — wet, loud, harmless',
    'The walls hum a sad song — you take a wound from sheer dread',
    'A tooth-shaped rock falls from the ceiling — GM moves any one enemy one square',
    'One of the faces grins at you — heal one life, you needed that',
  ],
  ending:
    'You stumble out the bottom crack. The last face you pass winks at you. Outside, someone has left a slightly squashed cupcake on a rock. It has your name on it. Probably.',
};
