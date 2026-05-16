import type { MapConfig } from "./index";

export const narrowCorridors: MapConfig = {
  title: "Narrow Corridors",
  map: [
    "NWEN--------------NE",
    "||              **||",
    "SW------------NE  ||",
    "NW------------SE  ||",
    "||**            **||",
    "||  NW------------SE",
    "||  SW------------NE",
    "||    **        **||",
    "||**              ||",
    "SW--------------EXSE",
  ].join("\n"),
  introduction:
    "Tight passages, hard turns, no good place to swing a sword. The walls listen. Footsteps come back as whispers.",
  spells: [
    'Echo Yell — your shout bounces, enemy faints and is removed',
    'Wall Hug — vanish for one turn, enemy skips its roll',
    'Pebble Trail — drop pebbles, next obstacle you reach is empty',
    'Silent Boots — no whispers, no encounters next turn',
    'Tiny Lantern — see one square ahead, GM tells you what is on it',
    'Snore Spell — enemy falls asleep, joins you as a companion',
  ],
  combat: [
    'You swing and clonk the wall — your ears ring — fight pauses one turn',
    'You drop your sword — enemy steps on it (you take a wound)',
    'Stab between the bricks — enemy yelps, joins you as a companion',
    'You whisper its true name — enemy is charmed, joins you as a companion',
    'You sneeze loudly — both flinch, fight pauses one turn',
    'Critical run-through — enemy puffs into smoke, remove the mini',
  ],
  enemy: [
    'Poos pants — too embarrassed to fight, no attack',
    'Wild jab — you take a wound',
    'Bonks head on ceiling — stunned, no attack',
    'Glares down the corridor — you lose your next move',
    'Calls down the corridor — another tiny enemy appears next turn on the entrance tile',
    'Stares — silent, terrifying, nothing happens',
  ],
  events: [
    'Footsteps echo behind you — but no one is there',
    'A door slams somewhere — every enemy on the map twitches',
    'Cold draft — you shiver, lose your next move',
    'A whisper repeats your last word — creepy but harmless',
    'Loose brick falls from the ceiling — take a wound',
    'A lantern flickers on ahead — heal one life',
  ],
  conclusion:
    'You pop out the south-east opening into a wide quiet room. There is a pair of mismatched socks on a small stool. One smells of biscuit. Both are yours.',
};
