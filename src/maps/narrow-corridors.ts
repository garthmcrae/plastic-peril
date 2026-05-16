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
  narrative:
    "Tight passages, hard turns, no good place to swing a sword. The walls listen. Footsteps come back as whispers.\n\n" +
    "[On Spell 4 (Silent Boots) the whispers stop — skip the next Enemy roll.]\n" +
    "[On Enemy 3 the corridor echoes — the noise summons a tiny rat. Place a rat mini on any obstacle.]\n" +
    "[If they make it to the bottom-right exit, read the ending.]",
  spells: [
    'Echo Yell — your shout bounces, enemy takes a wound',
    'Wall Hug — vanish for one turn, enemy skips its roll',
    'Pebble Trail — drop pebbles, next obstacle you reach is empty',
    'Silent Boots — no whispers, no encounters next turn',
    'Tiny Lantern — see one square ahead, GM tells you what is on it',
    'Snore Spell — enemy falls asleep, free critical on next combat',
  ],
  combat: [
    'You swing and clonk the wall — your ears ring',
    'You drop your sword — enemy steps on it (wound)',
    'Stab between the bricks — enemy takes a wound',
    'Cast a spell — roll the Spells d6',
    'You sneeze loudly — both flinch, fight pauses one turn',
    'Critical run-through — enemy is finished',
  ],
  enemy: [
    'Poos pants — too embarrassed to fight, retreats',
    'Wild jab — you take a wound',
    'Mortally wounded — slumps against the wall',
    'Bonks head on ceiling — stunned, no attack',
    'Calls down the corridor — another tiny enemy appears next turn',
    'Stares — silent, terrifying, nothing happens',
  ],
  ending:
    'You pop out the south-east opening into a wide quiet room. There is a pair of mismatched socks on a small stool. One smells of biscuit. Both are yours.',
};
