---
title: "Getting Started"
description: "Learn Factorio basics: spawning, hand-crafting, setting up your first miners and furnaces. Build the foundation for your factory empire."
walkthrough: "factorio"
walkthrough_title: "Factorio Guide"
chapter_order: 1
estimated_time: "45 minutes"
breadcrumbs:
  - title: "Home"
    url: "/"
  - title: "Factorio Guide"
    url: "/factorio/"
  - title: "Getting Started"
tips:
  - "Always research automation technologies first"
  - "Build with expansion in mind - leave space!"
  - "Coal is your friend in the early game"
  - "Press ALT to see what buildings do"
tags: [factorio, automation, tutorial, beginner]
---

Welcome to Factorio! You've crash-landed on an alien planet, and your goal is simple: build a factory, automate everything, and launch a rocket to escape. Sounds easy, right? Well, let's start with the basics and get your factory off the ground.

## Your First Steps (0-15 minutes)

### Understanding the Interface

When you spawn, you'll notice a few key things:

<div class="tip-box">
  <div class="tip-title">🎮 Essential Hotkeys</div>
  <strong>ALT</strong> - Shows what machines are producing/consuming<br>
  <strong>Q</strong> - Quick pipette tool (copies what you're hovering over)<br>
  <strong>E</strong> - Opens inventory/crafting menu<br>
  <strong>TAB</strong> - Opens the research/technology tree<br>
  <strong>M</strong> - Opens the map
</div>

### Hand-Crafting Your First Tools

You start with nothing but your hands. Time to fix that!

**Priority Crafts (in order):**
1. **Burner Mining Drill** (1x) - Your first automated miner
2. **Stone Furnace** (2x) - To smelt ores into usable materials  
3. **Additional Mining Drills** (3-4x) - Expand your mining operation
4. **Burner Inserters** (4-6x) - To feed furnaces automatically

<div class="tip-box success">
  <div class="tip-title">💡 Pro Tip</div>
  Don't craft too many items by hand! The entire point of Factorio is automation. Once you have a few basic machines, let them do the work while you build more infrastructure.
</div>

## Setting Up Your First Mining Operation (15-30 minutes)

### Finding Resources

Press **M** to open your map. You'll see colored patches nearby:
- **Brown patches** - Iron ore (your most important resource)
- **Orange patches** - Copper ore (needed for circuits and electricity)
- **Black patches** - Coal (fuel and later for plastics)
- **Gray patches** - Stone (for furnaces and infrastructure)

### The Burner Mining Setup

Here's your first automated mining operation:

```
[Burner Mining Drill] → [Coal Chest]
           ↓
    (Burns coal as fuel)
```

**Step-by-step setup:**
1. **Place a Burner Mining Drill** on a coal patch
2. **Manually fuel it** with coal you've hand-mined
3. **Place a wooden chest** next to the drill to collect coal
4. **Set up more drills** on iron and copper ore patches

<div class="tip-box warning">
  <div class="tip-title">⚠️ Common Mistake</div>
  Burner drills need fuel! Initially, you'll need to manually feed them coal until you set up inserters to automate the process. Don't walk away from an unfueled drill expecting magic to happen!
</div>

### Automating Smelting

Now let's turn that ore into usable plates:

```
[Mining Drill] → [Burner Inserter] → [Stone Furnace] → [Burner Inserter] → [Chest]
                         ↑                   ↑
                    (Feeds ore)      (Also needs coal!)
```

**Smelting Setup:**
1. **Place a Stone Furnace** near your iron ore miner
2. **Place a Burner Inserter** to grab ore from the miner and put it in the furnace
3. **Place another Burner Inserter** on the output side to collect iron plates
4. **Place a chest** for the inserter to deposit plates into
5. **Manually fuel** both the furnace and inserters with coal (for now)

**Repeat this setup for copper!** You'll need both iron and copper plates constantly.

## Power Generation Basics (30-45 minutes)

### Why You Need Electricity

Burner drills and furnaces work, but they're slow and need constant fuel. Electric versions are faster, cleaner, and easier to scale.

### Building Your First Steam Power Plant

**What You Need:**
- 1x Boiler (converts water to steam using coal)
- 2x Steam Engines (convert steam to electricity)  
- 1x Offshore Pump (extracts water from lakes)
- Pipes (to connect everything)
- Wooden Poles (to distribute electricity)

**The Setup:**

```
[Offshore Pump] → [Pipes] → [Boiler] → [Steam Engine] → [Wooden Poles]
                                ↑
                          (Needs coal)
```

**Step-by-step:**
1. **Find a body of water** (lake, ocean edge)
2. **Place the Offshore Pump** in the water
3. **Connect pipes** from the pump to the Boiler
4. **Place the Boiler** (it will auto-connect with pipes)
5. **Place Steam Engines** directly connected to the boiler (they auto-connect)
6. **Add coal** to the boiler to start generation
7. **Place Wooden Poles** to create a power grid

<div class="tip-box">
  <div class="tip-title">⚡ Power Ratio</div>
  <strong>Perfect ratio:</strong> 1 Offshore Pump → 20 Boilers → 40 Steam Engines<br>
  For now, 1 pump → 1 boiler → 2 engines is plenty! You can expand later.
</div>

### Switching to Electric Mining

Now that you have power:

1. **Research Automation** in the tech tree (TAB key)
2. **Craft Electric Mining Drills** (replace your burner drills)
3. **Craft Electric Furnaces** (much faster than stone furnaces)
4. **Connect everything with power poles**

No more manually feeding coal to every machine! Just keep your boilers fueled.

## Research Strategy (Your Science Journey Begins)

### Understanding Research

Press **TAB** to open the research tree. Technologies unlock new items and capabilities.

**Your first research priorities:**
1. **Automation** - Unlocks assembling machines (CRITICAL!)
2. **Logistics** - Unlocks underground belts and splitters
3. **Steel Processing** - Needed for many advanced items
4. **Turrets** - Basic defense against biters (if enemies are enabled)

### Setting Up Science Production

To research anything, you need **Science Packs**. Start with red science:

**Red Science (Automation Science Pack) Recipe:**
- 1x Copper Plate
- 1x Iron Gear Wheel (made from 2x Iron Plates)

**Simple red science setup:**
1. **Craft an Assembling Machine** (requires researching Automation first)
2. **Set it to produce Iron Gear Wheels**
3. **Craft another Assembling Machine**
4. **Set it to produce Automation Science Packs**
5. **Connect with inserters and belts** (we'll cover this more in Chapter 2)
6. **Feed the science packs into your Lab**

## Early Game Checklist

Track your getting started progress:

- [ ] Hand-crafted initial tools and machines
- [ ] Set up automated mining for iron, copper, and coal
- [ ] Built basic smelting arrays with inserters
- [ ] Constructed first power plant (boiler + steam engine)
- [ ] Switched to electric mining drills and furnaces
- [ ] Started producing red science packs
- [ ] Researched Automation technology
- [ ] Connected everything with power poles

<div class="tip-box success">
  <div class="tip-title">🎯 Next Steps</div>
  <strong>Ready for more?</strong> Once you've got basic mining, smelting, and power running smoothly, it's time to learn about belt systems and automated production chains in Chapter 2: Automation Basics!
</div>

## Common Early Game Problems

### "My drills stopped working!"
- Check if they have fuel (burner drills) or power (electric drills)
- Make sure they're placed on an ore patch (check with ALT)
- Verify power poles are connected in a network

### "I ran out of coal!"
- Set up dedicated coal mining early
- Coal is used for fuel AND later for plastic and other materials
- Consider setting up a buffer chest with lots of coal

### "Everything is so slow!"
- This is normal early game! Hand-crafting is tedious by design
- The solution is more automation (next chapter)
- Research more technologies to unlock faster machines

### "Where should I build my main base?"
- Look for an area with iron, copper, coal, and stone nearby
- Near water is helpful for power generation
- Leave LOTS of space - your factory will grow huge!

<div class="tip-box warning">
  <div class="tip-title">🏗️ Planning Tip</div>
  <strong>Build with space in mind!</strong> Every new player makes their initial base too cramped. Leave gaps between production areas - you'll thank yourself later when you need to expand or add new production lines.
</div>

Congratulations! You've laid the foundation for your factory. Time to scale up and automate everything in the next chapter!
