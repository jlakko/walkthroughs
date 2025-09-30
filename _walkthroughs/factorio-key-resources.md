---
title: "Key Resources"
description: "Master steel production, scale iron and copper, and conquer oil processing. Learn to produce the materials that power advanced technology."
walkthrough: "factorio"
walkthrough_title: "Factorio Guide"
chapter_order: 3
estimated_time: "60 minutes"
breadcrumbs:
  - title: "Home"
    url: "/"
  - title: "Factorio Guide"
    url: "/factorio/"
  - title: "Key Resources"
tips:
  - "Oil processing is complex but essential - take it slow"
  - "Steel production needs LOTS of iron"
  - "Plan for massive scale - you'll need more than you think"
  - "Coal becomes critical for plastic and explosives"
tags: [factorio, oil, steel, resources, production]
---

Your factory is growing, and basic iron and copper aren't enough anymore. This chapter covers the critical resources that unlock advanced technology: steel for strong structures, and oil for everything else.

## Steel Production (15 minutes)

### Understanding Steel

**Steel Plate Recipe:**
- 5x Iron Plates → 1x Steel Plate (in a furnace)

Steel is expensive but essential for:
- Rails and trains
- Heavy armor and weapons
- Advanced buildings
- Rocket components

### Setting Up Steel Smelting

**The Challenge:** Steel requires 5 iron plates per steel plate, so it's iron-intensive!

**Simple Steel Setup:**

```
[Iron Plate Belt] → [Inserter] → [Steel Furnace] → [Inserter] → [Steel Belt]
                                        ↑
                                  (Needs fuel!)
```

**Recommended Setup:**
1. **Dedicate 8-12 furnaces** to steel production
2. **Use electric furnaces** (faster and cleaner)
3. **Feed from your main iron bus**
4. **Add steel to your main bus** (1-2 belts)

<div class="tip-box warning">
  <div class="tip-title">⚠️ Resource Drain</div>
  <strong>Steel consumes iron FAST!</strong> You'll need to scale up iron production significantly. If your factory slows down after adding steel, it's probably iron-starved.
</div>

### Steel Production Ratios

For efficient production:
- **1 Steel Furnace needs the output of 5 Iron Furnaces**
- Start with 10 steel furnaces
- Scale up to 20-30 for late game

<div class="tip-box">
  <div class="tip-title">🔥 Furnace Upgrade Path</div>
  <strong>Stone Furnace:</strong> Slow but cheap (early game)<br>
  <strong>Steel Furnace:</strong> 2x faster (mid game)<br>
  <strong>Electric Furnace:</strong> Fastest + no fuel needed (late game)
</div>

## Scaling Iron and Copper (20 minutes)

### Why Scale Matters

By mid-game, you need MASSIVE amounts of iron and copper:
- Green circuits need tons of copper
- Everything needs iron
- Steel multiplies iron demand by 5x

### Expansion Strategy

**Phase 1: More Miners**
- Add 20-30 more electric mining drills
- Utilize multiple ore patches
- Use underground belts to merge outputs

**Phase 2: Smelting Arrays**

**Efficient Smelting Setup (per column):**
```
[Ore Belt] →
    [Inserter] → [Furnace] →
    [Inserter] → [Furnace] →  
    [Inserter] → [Furnace] →
    [Inserter] → [Furnace] → [Plate Belt]
    
    (Repeat for 24-48 furnaces per metal)
```

**Tips:**
- Build furnace columns in pairs (easier to belt)
- Use direct insertion when possible (faster)
- Keep coal/fuel supply consistent

### Production Targets

**Mid-game production goals:**
- **Iron Plates:** 4 full yellow belts (60 items/sec each)
- **Copper Plates:** 4 full yellow belts
- **Steel Plates:** 1-2 full yellow belts

<div class="tip-box success">
  <div class="tip-title">💡 Pro Tip</div>
  <strong>Can't find more ore?</strong> Press M for the map and explore! Ore patches get larger and richer the farther from spawn you go. Consider building outposts with train delivery (covered in later gameplay).
</div>

## Oil Processing: The Game Changer (45 minutes)

### Why Oil Matters

Oil unlocks:
- **Plastic** (for red circuits and advanced items)
- **Sulfur** (for explosives and ammunition)
- **Batteries** (for advanced technology)
- **Lubricant** (for efficient production)
- **Rocket Fuel** (guess what that's for!)

Without oil, you can't launch the rocket. Let's conquer it!

### Finding and Extracting Oil

**Step 1: Locate Oil**
- Look for **black patches with oil derricks** on the map
- Usually far from spawn (exploration time!)
- You need multiple oil fields (they deplete over time)

**Step 2: Research Oil Processing**
- Required tech: **Oil Processing** (uses red and green science)
- Unlocks: Pumpjack, Oil Refinery, Chemical Plant

**Step 3: Set Up Pumpjacks**

```
[Oil Field] ← [Pumpjack] → [Pipes] → [Storage Tanks]
                  ↑
            (Needs power!)
```

- Place pumpjacks on oil spots (they snap to position)
- Connect with pipes (they auto-connect)
- Oil flows through pipes like water

<div class="tip-box">
  <div class="tip-title">🛢️ Oil Depletion</div>
  <strong>Oil fields deplete!</strong> They start at 100% yield and drop to 20-40% over time. They never run completely dry, but you'll need multiple fields for consistent production. Plan accordingly!
</div>

### Basic Oil Refining

**The Refinery Outputs:**

```
[Crude Oil] → [Oil Refinery: Basic Processing] → [Petroleum Gas]
                                                → [Heavy Oil]
                                                → [Light Oil]
```

**What each oil product does:**
- **Petroleum Gas** → Plastic, Sulfur (most useful early!)
- **Heavy Oil** → Lubricant, cracking to light oil
- **Light Oil** → Solid fuel, cracking to petroleum

**First Refinery Setup:**
1. **Pipe crude oil from pumpjacks** to refineries
2. **Place Oil Refineries** (3-5 to start)
3. **Set recipe to "Basic Oil Processing"**
4. **Pipe outputs to separate storage tanks** (one for each product)

### Making Plastic (Your First Goal)

Plastic is critical for advanced circuits!

**Plastic Bar Recipe:**
- 20 Petroleum Gas + 1 Coal → 2 Plastic Bars (in Chemical Plant)

**Setup:**

```
[Petroleum Gas Tank] → [Chemical Plant: Plastic] → [Plastic Belt]
                              ↑
                        [Coal Belt]
```

**Building it:**
1. **Place Chemical Plant** near petroleum storage
2. **Set recipe to "Plastic Bar"**
3. **Pipe in petroleum gas**
4. **Belt in coal**
5. **Output plastic to your main bus**

<div class="tip-box warning">
  <div class="tip-title">⚠️ Oil Can Back Up!</div>
  <strong>Problem:</strong> If one oil product fills up, the refinery stops!<br>
  <strong>Solution:</strong> Use all three products OR crack excess heavy/light oil into petroleum gas. We'll cover advanced oil in a moment!
</div>

### Advanced Oil Processing (Essential!)

**Basic processing is inefficient.** Once you research **Advanced Oil Processing**, switch immediately!

**Advanced Processing Benefits:**
- 30% more petroleum gas output
- Uses water input for better conversion
- Allows oil cracking to balance products

**Advanced Refinery Setup:**

```
[Water] → [Refinery: Advanced Processing] → [Petroleum] → [Plastic Production]
[Crude] →                                 → [Light Oil] → [Solid Fuel or Crack]
                                          → [Heavy Oil] → [Lubricant or Crack]
```

### Oil Cracking (Solving the Backup)

**The Problem:** Heavy and light oil fill up, stopping production.

**The Solution:** Crack them into petroleum gas!

**Cracking Recipes:**
- **Heavy Oil Cracking:** 40 Heavy Oil + 30 Water → 30 Light Oil
- **Light Oil Cracking:** 30 Light Oil + 30 Water → 20 Petroleum Gas

**Cracking Setup:**

```
[Heavy Oil Tank] → [Chemical Plant: Heavy Crack] → [Light Oil Tank]
                          ↑
                    [Water Pipe]

[Light Oil Tank] → [Chemical Plant: Light Crack] → [Petroleum Tank]
                          ↑
                    [Water Pipe]
```

**Pro Setup:** Use circuit conditions to only crack when storage is too full (advanced topic).

<div class="tip-box success">
  <div class="tip-title">🎯 Oil Processing Goal</div>
  <strong>Working oil setup checklist:</strong>
  <ul>
    <li>✓ Multiple pumpjacks extracting crude oil</li>
    <li>✓ 5+ refineries with advanced processing</li>
    <li>✓ Cracking plants to convert excess oil</li>
    <li>✓ Plastic production running consistently</li>
    <li>✓ Storage tanks for all three oil products</li>
  </ul>
</div>

## Sulfur and Explosives

### Making Sulfur

**Sulfur Recipe:**
- 30 Water + 30 Petroleum Gas → 2 Sulfur (in Chemical Plant)

**Uses:**
- Sulfuric Acid (for battery and uranium processing)
- Explosives (for military and construction)

**Simple Setup:** Just like plastic production, but with petroleum gas and water.

### Making Explosives

**Explosives Recipe:**
- 1 Sulfur + 1 Coal + 10 Water → 2 Explosives

**Uses:**
- Cliff explosives (clearing terrain)
- Artillery shells
- Grenades and rockets
- Not immediately critical, but important later

## Coal: The Forgotten Resource

### Coal's Expanding Role

Early game: Coal is just fuel.
Mid-game: Coal is critical for:
- Plastic production (1 coal per 2 plastic)
- Explosives production
- Grenades and military
- Still needed as backup fuel

### Scaling Coal Production

**Recommendation:**
- Dedicate one full belt to coal on your main bus
- Set up 20+ electric mining drills on coal patches
- Consider solid fuel from oil as backup power later

<div class="tip-box">
  <div class="tip-title">⚡ Power Transition</div>
  <strong>Coal power → Solar power:</strong> Many players transition to solar panels in late game to stop consuming coal for electricity. This frees up coal for production!
</div>

## Key Resources Checklist

Track your resource scaling progress:

- [ ] Steel production running (8-12 furnaces minimum)
- [ ] Scaled iron production (4 full belts)
- [ ] Scaled copper production (4 full belts)
- [ ] Located and connected oil fields
- [ ] Built oil refinery array with advanced processing
- [ ] Plastic production online (1-2 chemical plants)
- [ ] Oil cracking setup to prevent backups
- [ ] Sulfur production started
- [ ] Coal scaled up to support plastic production
- [ ] Added steel and plastic to main bus

<div class="tip-box success">
  <div class="tip-title">🎯 Next Steps</div>
  <strong>Resources flowing?</strong> Excellent! In Chapter 4, we'll tackle defense systems. Those biters won't know what hit them when you've got automated turret production!
</div>

## Common Resource Problems

### "I can't make enough steel!"
- Steel needs 5x iron input
- Scale up iron mining significantly
- Dedicate 10-20 furnaces just to steel
- Check if iron is backing up elsewhere

### "My oil refinery stopped working!"
- Check all three oil products - if one is full, refinery stops
- Set up oil cracking to convert excess
- Use heavy oil for lubricant
- Increase plastic/sulfur consumption

### "I ran out of crude oil!"
- Oil fields deplete to 20-40% (but never empty)
- Find and connect additional oil fields
- Use productivity modules (late game) for efficiency

### "Everything needs plastic and I can't keep up!"
- Scale petroleum gas production (more refineries)
- Add more chemical plants for plastic
- Ensure cracking is working to maximize petroleum
- You'll need 4-6 chemical plants just for plastic

<div class="tip-box warning">
  <div class="tip-title">📈 Scale Expectations</div>
  <strong>By late game, you'll need:</strong>
  <ul>
    <li>100+ iron furnaces</li>
    <li>50+ copper furnaces</li>
    <li>20+ steel furnaces</li>
    <li>10+ oil refineries</li>
    <li>Dozens of chemical plants</li>
  </ul>
  Don't be afraid to build BIG! The rocket requires massive production.
</div>

Excellent work! You've mastered the critical resources. Time to protect your factory!
