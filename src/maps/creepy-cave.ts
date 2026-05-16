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
  introduction:
    "You step through the top arch. The walls have faces. The faces have opinions. None of them are good.",
  spells: [
    'Boop — flick the nearest face on the nose, it shuts up',
    'Eye Closer — every face in the cave closes its eyes for one turn',
    'Pocket Mirror — the enemy sees itself and joins you as a companion',
    'Soft Whisper — turn a face into a friend for one fight',
    'Spider Friend — a spider scuttles in, the enemy faints and is removed',
    'Cave Yawn — the whole cave yawns, you heal one life',
  ],
  combat: [
    'You swing wide — clip a face on the wall, it goes "OW!" — fight pauses one turn',
    'You slip on something wet — fall into the enemy (you take a wound)',
    'Clean smack — enemy is dazed, joins you as a companion',
    'You sing a daft song — enemy is charmed, joins you as a companion',
    'You headbutt — both stunned, fight pauses one turn',
    'Critical thunk — enemy goes up in a puff of smoke, remove the mini',
  ],
  enemy: [
    'Poos pants — sits down to think about it, no attack',
    'Wild claw — you take a wound',
    'Looks at you funny — nothing happens, but it is weird',
    'Stares so hard you forget your next move — lose your next move',
    'Calls a friend — another tiny enemy appears next turn on the entrance tile',
    'Snickers — no effect, but you feel judged',
  ],
  events: [
    'A face on the wall whispers your name — keep going, nothing happens',
    'All the eyes blink at once — you stop, lose your next move',
    'A face sneezes — wet, loud, harmless',
    'The walls hum a sad song — you take a wound from sheer dread',
    'A tooth-shaped rock falls from the ceiling — GM moves any one enemy one square',
    'One of the faces grins at you — heal one life, you needed that',
  ],
  conclusion:
    'You stumble out the bottom crack. The last face you pass winks at you. Outside, someone has left a slightly squashed cupcake on a rock. It has your name on it. Probably.',
};
