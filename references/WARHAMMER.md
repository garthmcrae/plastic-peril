# Warhammer 40,000: Quick Start Guide

Battles are played in a series of battle rounds. Each round both players take a turn through these phases in order:

1. Command Phase
2. Movement Phase
3. Shooting Phase
4. Charge Phase
5. Fight Phase

---

## 1. Command Phase

**Command:** Both players gain 1 Command point (spent on Stratagems). Resolve any Command phase rules.

**Battle-shock:** For every unit that has lost more than half its models (or wounds for single-model units), roll 2D6. If result < LD (Leadership), the unit is Battle-shocked until your next Command phase. Battle-shocked units have OC 0 and cannot be affected by friendly Stratagems.

---

## 2. Movement Phase

Units **not** within 1" of enemy models (Engagement Range) may:

- **Remain Stationary** – don't move.
- **Normal move** – move up to MV inches; cannot end within Engagement Range.
- **Advance move** – move up to MV + D6 inches. Cannot shoot (except Assault weapons) or charge this turn.

Units **within** Engagement Range may only:

- **Remain Stationary**
- **Fall Back** – like a Normal move, but cannot shoot or charge this turn.

---

## 3. Shooting Phase

One unit at a time, models fire ranged weapons at enemy units within range and visible. Models with multiple ranged weapons can target each at a different enemy, but must declare all targets simultaneously.

### Weapon Stats

| Column | Meaning |
|--------|---------|
| Range | Max distance to target (must also be visible) |
| A (Attacks) | Number of D6 rolled for attacks |
| BS (Ballistic Skill) | Hit roll target number |
| S (Strength) | Used to determine wound roll |
| AP (Armour Penetration) | Subtracted from opponent's saving throw |
| D (Damage) | Wounds lost on a failed save |

Melee weapons use **WS (Weapon Skill)** instead of BS.

**Example:**

| RANGED WEAPONS | RANGE | A | BS | S | AP | D |
|----------------|-------|---|----|---|----|---|
| Bolt pistol [PISTOL] | 12" | 1 | 3+ | 4 | 0 | 1 |

| MELEE WEAPONS | RANGE | A | WS | S | AP | D |
|---------------|-------|---|----|---|----|---|
| Astartes chainsword | Melee | 5 | 3+ | 4 | -1 | 1 |

---

## Making Attacks

### 1. Hit Roll
Roll one D6 per attack; equal or beat the BS to hit. Unmodified 6 = Critical Hit (always succeeds).

### 2. Wound Roll
Compare attack's Strength vs target's Toughness:

| Strength vs Toughness | D6 Required |
|-----------------------|-------------|
| Twice (or more) the Toughness | 2+ |
| Greater than Toughness | 3+ |
| Equal to Toughness | 4+ |
| Less than Toughness | 5+ |
| Half (or less) the Toughness | 6+ |

Unmodified 6 = Critical Wound (always succeeds).

### 3. Allocate Attack
Opponent chooses which model the attack might wound. Already-wounded models must be allocated first.

### 4. Saving Throw
Opponent rolls D6, subtracting the weapon's AP. If result ≥ model's SV, attack fails. Otherwise, damage is inflicted.

### 5. Inflict Damage
Model loses wounds equal to the attack's Damage characteristic.

---

## 4. Charge Phase

- Select units to charge (cannot charge if they Advanced, Fell Back, or are already in Engagement Range).
- Select one or more enemy units to charge at.
- Roll 2D6. If the result ≥ distance needed to move within 1" of every selected enemy unit, the charge succeeds.
- Move each model towards an enemy unit, ending base-to-base if possible.

---

## 5. Fight Phase

All units within Engagement Range of any enemy now fight. Units that charged fight first. Then, starting with the non-active player, players alternate fighting.

### 1. Pile In
Move each model in the fighting unit up to 3" towards the closest enemy model.

### 2. Make Attacks
Each model within Engagement Range (or base-to-base with a friendly model that is) fights with one melee weapon. Follow the same Making Attacks sequence (melee uses WS instead of BS).

### 3. Consolidate
After all models have fought, move each model not in base-to-base contact with an enemy up to 3" closer to the closest enemy model.

---

## Universal Abilities

**ANTI [ANTI-KEYWORD X+]:** Unmodified Wound roll of X+ against a target with the matching keyword scores a Critical Wound.

**ASSAULT:** Can be shot even if the bearer's unit Advanced.

**BLAST:**
- Add 1 to Attacks for every 5 models in the target unit (round down).
- Cannot target units within Engagement Range of any friendly units.

**DEADLY DEMISE X:** When destroyed, roll D6. On a 6, each unit within 6" suffers X mortal wounds.

**DEEP STRIKE:**
- Unit can be placed in Reserves instead of on the battlefield.
- Can be set up in your Movement phase, more than 9" horizontally from all enemy models.

**DEVASTATING WOUNDS:** A Critical Wound inflicts mortal wounds equal to Damage instead of normal damage.

**FEEL NO PAIN X+:** Each time this model would lose a wound, roll D6. If result ≥ X, the wound is not lost.

**FIGHTS FIRST:** Unit fights in the Fights First step of the Fight phase.

**HEAVY:** Add 1 to Hit rolls if the bearer's unit Remained Stationary this turn.

**IGNORES COVER:** Target cannot benefit from Cover against this weapon's attacks.

**INDIRECT FIRE:**
- Can target units not visible to the attacking unit.
- If no models are visible when target is selected: subtract 1 from Hit rolls and target has Benefit of Cover.

**INFILTRATORS:** During deployment, can be set up anywhere more than 9" from the enemy deployment zone and all enemy models.

**LEADER:** Character units that can attach to Bodyguard units (listed on datasheet) to form an Attached unit. Attached units can only contain one Leader. Attacks cannot be allocated to Character models in Attached units.

**LETHAL HITS:** A Critical Hit automatically wounds the target.

**LONE OPERATIVE:** Unless part of an Attached unit, can only be targeted by ranged attacks if the attacking model is within 12".

**PISTOL:**
- Can be shot even if within Engagement Range of enemy units (must target those units).
- Cannot be shot alongside non-Pistol weapons (except by a Monster or Vehicle).

**RAPID FIRE X:** Increase Attacks by X when targeting units within half range.

**SCOUTS X":** Unit can make a Normal move of up to X" before the first turn. If embarked in a Dedicated Transport, the Transport makes this move instead. Must end more than 9" from all enemy models.

**SUSTAINED HITS X:** Each Critical Hit scores X additional hits.

**TORRENT:** Attacks with this weapon automatically hit.

**TWIN-LINKED:** Can re-roll Wound rolls for attacks with this weapon.

---

## Core Stratagems

Command points are spent to use Stratagems.

### COMMAND RE-ROLL — 1CP
*Core – Battle Tactic | Either player's turn*
**When:** Any phase, just after making a Hit roll, Wound roll, Damage roll, saving throw, Advance roll, Charge roll, Desperate Escape test, Hazardous test, or rolling to determine number of attacks.
**Effect:** Re-roll that roll, test, or saving throw.

### COUNTER-OFFENSIVE — 2CP
*Core – Strategic Ploy | Either player's turn*
**When:** Fight phase, just after an enemy unit has fought.
**Target:** One unit from your army within Engagement Range of enemy units that hasn't fought this phase.
**Effect:** Your unit fights next.

### EPIC CHALLENGE — 1CP
*Core – Epic Deed | Your turn*
**When:** Fight phase, when a Character unit within Engagement Range of one or more Attached units is selected to fight.
**Target:** One Character model in your unit.
**Effect:** Until end of phase, all melee attacks by that model have the [PRECISION] ability.

### INSANE BRAVERY — 1CP
*Core – Epic Deed | Your turn*
**When:** Battle-shock step of your Command phase, just after failing a Battle-shock test.
**Target:** The unit that just failed (even though Battle-shocked units normally can't be affected by Stratagems).
**Effect:** Unit is treated as having passed that test and is not Battle-shocked.

### GRENADE — 1CP
*Core – Wargear | Your turn*
**When:** Your Shooting phase.
**Target:** One Grenades unit not within Engagement Range of any enemy and not yet selected to shoot.
**Effect:** Select one enemy unit not within Engagement Range of any friendly units, within 8" and visible. Roll 6D6: for each 4+, that enemy unit suffers 1 mortal wound.

### TANK SHOCK — 1CP
*Core – Strategic Ploy | Your turn*
**When:** Your Charge phase.
**Target:** One Vehicle unit from your army.
**Effect:** After your unit ends a Charge move, select one enemy unit within Engagement Range and one melee weapon. Roll D6s equal to that weapon's Strength (roll 2 extra D6 if Strength > target's Toughness). For each 5+, that enemy unit suffers 1 mortal wound (max 6).

### FIRE OVERWATCH — 1CP
*Core – Strategic Ploy | Opponent's turn*
**When:** Opponent's Movement or Charge phase, just after an enemy unit is set up or starts/ends a Normal, Advance, Fall Back, or Charge move.
**Target:** One unit from your army within 24" of that enemy unit that would be eligible to shoot.
**Effect:** Your unit shoots that enemy unit as if it were your Shooting phase.
**Restrictions:** Unmodified Hit roll of 6 required to score a hit, regardless of BS or modifiers. Once per turn only.

### RAPID INGRESS — 1CP
*Core – Strategic Ploy | Opponent's turn*
**When:** End of your opponent's Movement phase.
**Target:** One unit from your army in Reserves.
**Effect:** Unit arrives as if it were the Reinforcements step of your Movement phase.
**Restrictions:** Cannot use to arrive during a battle round the unit wouldn't normally be able to.

### SMOKESCREEN — 1CP
*Core – Wargear | Opponent's turn*
**When:** Opponent's Shooting phase, just after an enemy unit selects its targets.
**Target:** One Smoke unit from your army that was selected as a target.
**Effect:** Until end of phase, all models in your unit have Benefit of Cover and the Stealth ability.

### GO TO GROUND — 1CP
*Core – Battle Tactic | Opponent's turn*
**When:** Opponent's Shooting phase, just after an enemy unit selects its targets.
**Target:** One Infantry unit from your army that was selected as a target.
**Effect:** Until end of phase, all models in your unit have a 6+ invulnerable save and Benefit of Cover.

### HEROIC INTERVENTION — 2CP
*Core – Strategic Ploy | Opponent's turn*
**When:** Opponent's Charge phase, just after an enemy unit ends a Charge move.
**Target:** One unit from your army within 6" of that enemy unit that would be eligible to declare a charge against it.
**Effect:** Your unit declares a charge targeting only that enemy unit, resolved as if it were your Charge phase.
**Restrictions:** Vehicle units must be Walkers. Even if successful, your unit does not receive a Charge bonus this turn.
