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
    'Wall Hug — press into the bricks, the enemy walks past and is gone — remove the mini',
    'Pebble Trail — drop pebbles, next obstacle you reach is empty',
    'Silent Boots — sneak past the next obstacle, skip its encounter',
    'Tiny Lantern — see one square ahead, GM tells you what is on it',
    'Snore Spell — enemy falls asleep, joins you as a companion',
  ],
  combat: [
    'You swing and clonk the wall — a brick falls on the enemy, both of you wince. Take a wound; remove the mini',
    'You drop your sword — enemy steps on it, trips, lands head-first on a brick. Remove the mini',
    'Stab between the bricks — enemy yelps, joins you as a companion',
    'You whisper its true name — enemy is charmed, joins you as a companion',
    'You sneeze so loudly the enemy faints from fright — remove the mini',
    'Critical run-through — enemy puffs into smoke, remove the mini',
  ],
  enemy: [
    'Poos pants — too embarrassed to look at you',
    'Wild jab — you take a wound',
    'Bonks head on ceiling — stares at the ceiling, confused',
    'Glares down the corridor — silent, unsettling, nothing happens',
    'Calls down the corridor — another tiny enemy appears now on the entrance tile',
    'Stares — silent, terrifying, nothing happens',
  ],
  events: [
    'Footsteps echo behind you — but no one is there',
    'A door slams somewhere — every enemy on the map twitches',
    'Cold draft — you shiver, a loose brick clips you. Take a wound',
    'A whisper repeats your last word — creepy but harmless',
    'Loose brick falls from the ceiling — take a wound',
    'A lantern flickers on ahead — heal one life',
  ],
  conclusion:
    'You pop out the south-east opening into a wide quiet room. There is a pair of mismatched socks on a small stool. One smells of biscuit. Both are yours.',
};
