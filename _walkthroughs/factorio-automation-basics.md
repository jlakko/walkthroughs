---
title: "Automation Basics"
description: "Master conveyor belts, assemblers, and production chains. Learn to design efficient factories that run themselves."
walkthrough: "factorio"
walkthrough_title: "Factorio Guide"
chapter_order: 2
estimated_time: "60 minutes"
breadcrumbs:
  - title: "Home"
    url: "/"
  - title: "Factorio Guide"
    url: "/factorio/"
  - title: "Automation Basics"
tips:
  - "Main bus design solves many organization problems"
  - "Underground belts are your friend for clean layouts"
  - "Always leave room to expand production"
  - "Use splitters to divide resources evenly"
tags: [factorio, automation, belts, assemblers, production]
---

Welcome to the heart of Factorio! Hand-crafting is behind you - now it's time to let machines do all the work. This chapter will teach you how to design production lines that turn raw materials into everything you need.

## Understanding Conveyor Belts (15 minutes)

### Belt Basics

Belts are the bloodstream of your factory. They transport items from place to place.

**Belt Types (unlocked progressively):**
- **Yellow Belt** - Basic, moves 15 items/second (per side)
- **Red Belt** - Fast, 30 items/second (unlocked with research)
- **Blue Belt** - Express, 45 items/second (late game)

<div class="tip-box">
  <div class="tip-title">🎨 Visual Learning</div>
  Press <strong>ALT</strong> to show item labels on belts! This is incredibly helpful for debugging production lines and seeing what's moving where.
</div>

### Belt Tricks Every Engineer Needs

**Side Loading:**
Items can be placed on one side of a belt, leaving the other side empty for different items.

```
[Iron Plates] →  ====== → [Both sides full of iron]
                   ↓
[Copper Plates] → [Copper on left, Iron on right]
```

**Underground Belts:**
Pass belts under other entities - essential for clean factory layouts!
- Yellow: 4 tiles max
- Red: 6 tiles max  
- Blue: 8 tiles max

**Splitters:**
Split or merge belts evenly. Perfect for dividing resources between multiple production lines.

<div class="tip-box success">
  <div class="tip-title">💡 Pro Tip</div>
  <strong>Input balancing:</strong> When two belts merge into one, use a splitter to evenly distribute items. This prevents one side from backing up while the other starves!
</div>

## Inserters: The Robotic Arms (15 minutes)

### Inserter Types

Inserters grab items from one location and place them in another.

**Inserter Family:**
- **Burner Inserter** - Slowest, needs coal fuel (avoid these after early game)
- **Standard Inserter** - Good for most tasks, powered by electricity
- **Long-Handed Inserter** - Reaches 2 tiles instead of 1 (useful for specific layouts)
- **Fast Inserter** - Moves items quickly (for high-throughput production)
- **Stack Inserter** - Grabs multiple items at once (late game, very fast)

### Smart Inserter Usage

**When to use what:**
- **Standard Inserters**: Most assembly machines, basic production
- **Long-Handed**: Loading/unloading train cars, crossing belts
- **Fast/Stack**: High-speed production lines, late game

**Inserter Direction:**
Click to rotate! The arrow shows where it will place items.

<div class="tip-box warning">
  <div class="tip-title">⚠️ Common Mistake</div>
  Inserters placed backwards won't work as expected! Always check the arrow direction. The inserter picks up from its "hand" side and places on its "arm" side.
</div>

## Your First Assembly Line (20 minutes)

### Making Iron Gear Wheels (Simple Example)

Let's automate iron gear wheel production:

```
[Iron Plate Belt] → [Inserter] → [Assembler: Gear Wheels] → [Inserter] → [Output Belt]
                                          ↑
                                    (Set recipe)
```

**Step-by-step:**
1. **Place an Assembling Machine 1**
2. **Click it and select "Iron Gear Wheel" recipe**
3. **Place an inserter** to grab iron plates from a belt
4. **Place an inserter** on the output to place gears on another belt
5. **Connect power poles**

That's it! The assembler will continuously craft gears as long as iron plates arrive.

### Chaining Production (Making Green Circuits)

Green circuits (Electronic Circuits) need copper cables AND iron plates. Let's chain production:

**Recipe:**
- 3x Copper Cable (made from copper plates)
- 1x Iron Plate

**Setup:**

```
[Copper Plates] → [Assembler: Copper Cables] → [Inserter] ↓
                                                           
[Iron Plates] → [Inserter] → [Assembler: Green Circuits] → [Output]
```

**Building it:**
1. **Set one assembler to produce Copper Cables**
2. **Place a second assembler for Electronic Circuits**
3. **Use an inserter** to feed copper cables directly from the first to second assembler
4. **Use another inserter** to feed iron plates from a belt
5. **Output inserter** moves finished circuits to a belt or chest

<div class="tip-box">
  <div class="tip-title">⚙️ Production Ratio</div>
  <strong>Copper Cable to Green Circuit ratio:</strong> 3:2<br>
  For every 2 assemblers making green circuits, you need 3 making copper cables to keep up! Don't worry about perfect ratios early on - just scale up what's bottlenecking.
</div>

## The Main Bus Concept (30 minutes)

### What is a Main Bus?

A "main bus" is the backbone of your factory - a wide highway of belts carrying your most common resources.

**Typical Main Bus Contents:**
- 4 belts of Iron Plates
- 4 belts of Copper Plates
- 2 belts of Steel Plates (later)
- 2 belts of Green Circuits
- 1 belt of Stone Bricks
- 1 belt of Coal

**Why use a bus?**
- Organized resource distribution
- Easy to tap resources for new production
- Scales naturally as you expand
- Everyone understands the layout (including future-you!)

### Building Your First Bus

**Layout Strategy:**

```
                    [Production Areas]
                           ↓
============================  (4 Iron belts)
============================
============================  (4 Copper belts)  
============================
===========                   (2 Steel belts)
===========
                           ↓
                    [More Production]
```

**Construction Steps:**
1. **Choose a direction** (usually horizontal or vertical through your base)
2. **Lay down parallel belts** (4 iron, 4 copper to start)
3. **Leave gaps every 2 belts** for underground crossing
4. **Leave space on one side** for production buildings
5. **Tap resources** using splitters or side-loading

<div class="tip-box success">
  <div class="tip-title">🚌 Bus Benefits</div>
  <strong>Easy expansion:</strong> When you need more of something, just tap into the bus!<br>
  <strong>Clean layout:</strong> Resources flow in one direction, making debugging easier.<br>
  <strong>Scalable:</strong> Add more belts when production increases.
</div>

### Tapping the Bus

**Method 1: Splitters**
Use a splitter to divert 50% of a belt to your production line.

**Method 2: Side-loading**  
Use an inserter to grab items from the bus and place them on a perpendicular belt.

**Method 3: Underground Magic**
Run production belts under the bus using underground belts!

## Science Production (Scaling Up)

### Automating Red Science

Now that you understand belts and assemblers, let's scale up science production:

**Red Science (Automation Science Pack):**
- Needs: Iron Gear Wheels + Copper Plates

**Production Layout:**

```
[Iron Belt] → [Assembler: Gears] → [Inserter] ↓
                                               
[Copper Belt] → [Inserter] → [Assembler: Red Science] → [Inserter] → [Belt to Labs]
```

**Scale goal:** 
Aim for 30-60 science packs per minute for steady research progress.

### Starting Green Science

Green science (Logistic Science Pack) is more complex:

**Recipe:**
- 1x Transport Belt
- 1x Inserter

Both require iron gears and iron plates, so you'll need a bigger production chain!

<div class="tip-box warning">
  <div class="tip-title">⚙️ Production Planning</div>
  <strong>Don't build everything at once!</strong> Start small, then expand when bottlenecks appear. It's easier to add more assemblers than to redesign a cramped factory.
</div>

## Automation Checklist

Track your automation journey:

- [ ] Set up basic belt system to transport items
- [ ] Automated production of iron gear wheels
- [ ] Automated production of green circuits (electronic circuits)
- [ ] Built a basic main bus (at least iron and copper)
- [ ] Automated red science pack production (30+ per minute)
- [ ] Started automating green science pack production
- [ ] Learned to use splitters and underground belts
- [ ] Connected multiple assemblers in production chains

<div class="tip-box success">
  <div class="tip-title">🎯 Next Steps</div>
  <strong>Feeling confident?</strong> In Chapter 3, we'll tackle key resources including steel production and the complex world of oil processing. Your factory is about to get a lot more sophisticated!
</div>

## Common Automation Problems

### "My production keeps stopping!"
- Check if input belts have materials
- Verify inserters are powered and facing correct direction
- Make sure the recipe is set in assemblers
- Look for output backing up (output chest/belt full)

### "Items are going the wrong direction!"
- Belts have a direction (the arrows on them)
- Inserters have a pickup and drop side
- Use underground belts to route around obstacles

### "My factory is a spaghetti mess!"
- This happens to everyone! It's called "spaghetti base"
- Consider rebuilding with a main bus design
- Plan more space between production areas
- Use underground belts to reduce crossing

### "Production is too slow!"
- Add more assemblers working in parallel
- Upgrade to Assembling Machine 2 (faster)
- Check if input resources are sufficient
- Research speed modules (much later)

<div class="tip-box">
  <div class="tip-title">🍝 Embrace the Spaghetti</div>
  <strong>Your first factory will be messy</strong> - that's completely normal and part of the learning experience! Every Factorio player has built a spaghetti base. Learn from it, then rebuild better. That's the Factorio way!
</div>

Great work! You're now automating production like a pro. Time to tackle more advanced resources!
