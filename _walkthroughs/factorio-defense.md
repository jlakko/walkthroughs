---
title: "Defense Systems"
description: "Protect your factory from biter attacks. Build effective turret defenses, walls, and automated ammunition production."
walkthrough: "factorio"
walkthrough_title: "Factorio Guide"
chapter_order: 4
estimated_time: "45 minutes"
breadcrumbs:
  - title: "Home"
    url: "/"
  - title: "Factorio Guide"
    url: "/factorio/"
  - title: "Defense Systems"
tips:
  - "Pollution attracts biters - manage it strategically"
  - "Automate ammo production early"
  - "Walls alone won't save you - you need turrets"
  - "Leave space for defense upgrades"
tags: [factorio, defense, turrets, biters, walls]
---

Your growing factory is creating pollution, and the local wildlife isn't happy about it. Biters, spitters, and worms will attack your base with increasing frequency. Time to build defenses that can protect your factory while you focus on production!

<div class="tip-box">
  <div class="tip-title">☮️ Peaceful Mode</div>
  <strong>Playing with enemies disabled?</strong> You can skip this chapter! Peaceful mode lets you focus purely on factory building without defensive concerns. But if biters are enabled, read on!
</div>

## Understanding the Threat (10 minutes)

### How Biters Work

**Enemy Types:**
- **Biters** - Melee attackers that swarm and bite structures
- **Spitters** - Ranged attackers that spit acid from a distance
- **Worms** - Stationary turret-like enemies that guard nests

**Evolution Mechanics:**
Enemies get stronger over time based on:
1. **Time passed** (slow evolution)
2. **Pollution absorbed** by nests (medium evolution)
3. **Nests destroyed** (fast evolution!)

<div class="tip-box warning">
  <div class="tip-title">⚠️ Evolution Warning</div>
  <strong>Don't attack nests too early!</strong> Destroying biter nests accelerates evolution significantly. Build strong defenses first, then clear nests when you're ready for tougher enemies.
</div>

### Pollution: The Real Problem

**How Pollution Works:**
- Your machines generate pollution (shown as red cloud on map)
- Pollution spreads across the map
- When it reaches biter nests, they send attack waves
- More pollution = more frequent and larger attacks

**High Pollution Sources:**
- Mining drills (especially burner drills)
- Stone furnaces (electric furnaces are cleaner!)
- Assembling machines
- Boilers for steam power

**Reducing Pollution:**
- Switch to electric furnaces
- Use efficiency modules (late game)
- Build solar panels instead of steam power
- Place production away from base perimeter

## Gun Turrets: Your First Defense (15 minutes)

### Basic Gun Turret

**Gun Turret Stats:**
- Range: 18 tiles
- Ammo capacity: 10 magazines
- Automated targeting
- Requires ammunition

**Research Required:**
- **Turrets** technology (red science)

### Turret Placement Strategy

**The Golden Rules:**
1. **Overlapping coverage** - Turrets should support each other
2. **Behind walls** - Walls absorb damage while turrets shoot
3. **Ammo supply** - Automate ammo delivery with belts/inserters
4. **Spacing** - 10-12 tiles apart for good coverage

**Basic Defense Layout:**

```
[Wall][Wall][Wall][Wall][Wall]
      [Turret]  [Turret]
[Wall][Wall][Wall][Wall][Wall]
      [Turret]  [Turret]
```

<div class="tip-box success">
  <div class="tip-title">🎯 Defense Positioning</div>
  <strong>Place turrets in a checkerboard pattern</strong> behind walls with 10-tile spacing. This ensures overlapping fire while keeping costs reasonable.
</div>

### Ammunition Production

**Standard Magazine Recipe:**
- 4x Iron Plates → 1x Firearm Magazine (10 rounds)

**Automation Setup:**

```
[Iron Plates] → [Assembler: Magazines] → [Inserter] → [Ammo Belt]
                                                          ↓
                                                    [Turret Line]
```

**Magazine Types (in order of power):**
1. **Regular Magazines** - Basic, iron only
2. **Piercing Magazines** - Better vs armor (needs copper + steel)
3. **Uranium Magazines** - Extremely powerful (late game)

**Recommended Production:**
- 1-2 assemblers for regular magazines (early defense)
- Scale to 4-6 assemblers by mid-game
- Add piercing magazine production when biters evolve

### Automated Ammo Delivery

**Don't hand-feed turrets!** Automate it:

**Method 1: Belt System**
Run a belt behind your turret line with inserters feeding each turret.

```
[Ammo Belt] ════════════════
               ↓    ↓    ↓
           [Turret][Turret][Turret]
```

**Method 2: Requester Chests (Late Game)**
Use logistic network to automatically supply turrets.

<div class="tip-box">
  <div class="tip-title">🔫 Ammo Management</div>
  <strong>Buffer ammo production!</strong> Keep a chest with 1000+ magazines near your defense perimeter. When attacks happen, you'll have plenty of ammo ready.
</div>

## Walls and Barriers (10 minutes)

### Stone Walls

**Stone Wall Recipe:**
- 5x Stone Bricks → 1x Wall

**Wall Basics:**
- High health (350 HP, more with upgrades)
- Blocks enemy movement
- Absorbs damage before turrets/base
- Can be repaired

**Wall Construction Tips:**
1. **Build a complete perimeter** - No gaps!
2. **Place walls 1 tile apart** - They connect automatically
3. **Leave gate spaces** for your access
4. **Double-wall critical areas** for extra protection

### Gates

**Gate Recipe:**
- 1x Wall + 2x Steel Plates + 5x Electronic Circuits

**Gate Features:**
- Opens automatically when you approach
- Opens for your vehicles
- Enemies can't open them
- Acts as walls when closed

**Gate Placement:**
- Every 20-30 tiles for easy access
- At belt/pipe crossings
- Near production areas you visit often

<div class="tip-box warning">
  <div class="tip-title">⚠️ Common Mistake</div>
  <strong>Gates are weak points!</strong> Place extra turrets near gates since biters will attack them. Consider building turret clusters at gate locations.
</div>

## Defending Key Areas (15 minutes)

### Perimeter Defense Strategy

**Priority Defense Zones:**
1. **Main base perimeter** - Complete wall + turret coverage
2. **Power generation** - Extra protection for boilers/solar
3. **Oil fields** - Remote outposts need self-sufficient defense
4. **Chokepoints** - Narrow areas between lakes/cliffs

**Building a Secure Perimeter:**

```
Step 1: Scout your base and plan the wall line
Step 2: Build complete wall circuit (use fast blueprints)
Step 3: Place turrets every 10-12 tiles behind walls
Step 4: Connect ammo supply belt
Step 5: Add gates for access points
Step 6: Keep radar coverage (spots attacks early)
```

### Remote Outpost Defense

**Oil Fields and Mining Outposts Need:**
- Small wall perimeter (just around the facility)
- 6-10 turrets with ammo supply
- Radar for visibility
- Consider laser turrets (no ammo needed but high power)

**Ammo Delivery Options:**
- Train delivery (advanced)
- Requester chests (logistic network)
- Manual restocking (early game, tedious)

## Advanced Defensive Options

### Laser Turrets (Mid-Late Game)

**Laser Turret Benefits:**
- No ammunition needed!
- Just requires power
- Good damage and range
- Easy to maintain

**Laser Turret Drawbacks:**
- High power consumption (5-8 MW during combat)
- Requires advanced technology
- More expensive to build

**When to Switch:**
- After researching **Laser Turrets** (blue science)
- When you have excess power generation
- For remote outposts (no ammo logistics)

### Flamethrower Turrets (Heavy Defense)

**For Seriously Tough Areas:**
- Very high damage
- Area effect (hits multiple enemies)
- Needs crude oil or light oil supply
- Effective vs large swarms

**Use Cases:**
- High pollution areas under constant attack
- Defending against behemoth biters (late game)
- Chokepoint defense

<div class="tip-box success">
  <div class="tip-title">💡 Mixed Defense</div>
  <strong>Use turret combinations!</strong> Gun turrets for general defense, laser turrets for outposts, and flamethrowers at chokepoints. Each has strengths!
</div>

## Artillery (End Game Offensive)

### Going on the Offensive

Once your defenses are solid, artillery lets you clear biter nests from safety:

**Artillery Turret:**
- Extreme range (224 tiles!)
- Automated targeting of biter bases
- Requires artillery shells
- Triggers massive retaliation attacks

**Artillery Train:**
- Mobile artillery platform
- Can automatically patrol and clear nests
- Requires rail network

<div class="tip-box warning">
  <div class="tip-title">⚠️ Artillery Warning</div>
  <strong>Artillery triggers massive attacks!</strong> Only use artillery when your defenses are very strong. The biters WILL retaliate in force.
</div>

## Defense Checklist

Track your defensive preparations:

- [ ] Researched Turrets technology
- [ ] Automated magazine production (2+ assemblers)
- [ ] Built complete wall perimeter around base
- [ ] Placed gun turrets every 10-12 tiles
- [ ] Automated ammo delivery to turret line
- [ ] Added gates for base access
- [ ] Built radar coverage for early warning
- [ ] Defended remote oil outposts
- [ ] Stockpiled repair packs for wall repairs
- [ ] Considered laser turret upgrade path

<div class="tip-box success">
  <div class="tip-title">🎯 Next Steps</div>
  <strong>Base secure?</strong> Perfect! In Chapter 5, we'll tackle the end game: preparing for and launching the rocket. Victory is within reach!
</div>

## Common Defense Problems

### "Biters keep breaking through!"
- Add more turrets (double the density)
- Upgrade to piercing magazines
- Build double walls in weak spots
- Check for gaps in wall perimeter
- Add flamethrower turrets for trouble areas

### "I keep running out of ammo!"
- Scale up magazine production (4-6 assemblers)
- Add ammo buffer chests
- Switch to laser turrets (no ammo needed)
- Reduce pollution to decrease attack frequency

### "My walls are always damaged!"
- Carry repair packs and manually repair
- Use construction robots (late game auto-repair)
- Add more turrets so walls take less damage
- Consider building defensive buffer zones

### "Attacks are overwhelming my power grid!"
- Laser turrets consume massive power during fights
- Build excess power capacity
- Keep coal/fuel stockpiled for emergency steam
- Consider separate power grid for laser defenses

### "I'm afraid to expand because of biters!"
- Build a mobile defense perimeter (walls + turrets)
- Clear nests with military science weapons
- Use vehicles (car, tank) for exploration
- Bring repair packs and extra ammo

<div class="tip-box">
  <div class="tip-title">🛡️ Defense is Iterative</div>
  <strong>Your first defensive line will have weaknesses</strong> - that's normal! Watch where attacks hit hardest, then reinforce those areas. Defense evolves as your factory grows!
</div>

Your factory is now protected! Time to focus on the final goal: launching that rocket!
