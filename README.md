# Walkthroughs

A comprehensive collection of game walkthroughs and guides, featuring responsive design and mobile-optimized reading experience.

## Features

- 📱 **Mobile-First Design**: Optimized for reading on any device
- 🎨 **Theme Switching**: Choose from Light, Dark, Minecraft, or Ocean themes  
- 📖 **Chapter Navigation**: Easy progression through walkthrough sections
- 🎯 **Progress Tracking**: Keep track of your completion status
- 🔗 **Rich Content**: Images, tips, and helpful links throughout
- ⚠️ **Spoiler System**: Collapsible content warnings for story-sensitive games

## Current Walkthroughs

### Minecraft Complete Guide
A comprehensive walkthrough for completing Minecraft, covering:
- Early game survival and tool progression
- Mid game exploration and diamond acquisition  
- Nether exploration and preparation
- End game dragon fight and post-game content

### Fallout 4: Paths to Completion (Base Game)
A comprehensive guide to all four faction endings and Commonwealth mastery, featuring:
- Character creation with faction-aligned archetypes
- Spoiler-safe faction analysis and decision guidance
- Settlement building and resource management
- Complete main quest paths with choice consequences
- Post-game content and achievement completion

## Adding New Walkthroughs

This site uses Jekyll collections for walkthrough content. To add a new game walkthrough:

### 1. Directory Structure
Create the following structure (using Fallout 4 as example):

```
/fallout4/
  index.md                    # Main walkthrough landing page
/_walkthroughs/
  game-chapter-1.md          # Individual chapter files
  game-chapter-2.md
  ...
```

### 2. Chapter File Format
Each chapter uses this front matter template:

```yaml
---
title: "Chapter Title"
description: "Brief chapter description for SEO and navigation"
walkthrough: "game-name"           # Collection identifier
walkthrough_title: "Game Guide"   # Display name for navigation
chapter_order: 1                  # Numeric order for sorting
estimated_time: "30 minutes"      # Reading time estimate
breadcrumbs:                      # Navigation breadcrumbs
  - title: "Home"
    url: "/"
  - title: "Game Guide"
    url: "/game/"
  - title: "Chapter Title"
tips:                             # Quick tips for sidebar
  - "Helpful tip 1"
  - "Helpful tip 2"
tags: [game-name, category, etc]  # SEO tags
---
```

### 3. Spoiler System Usage
For games with story elements, use the spoiler component:

```html
<div class="spoiler-box warning">
  <div class="spoiler-header">
    <div class="spoiler-title">⚠️ Spoiler Warning</div>
    <div class="spoiler-toggle">▼</div>
  </div>
  <div class="spoiler-content">
    <p>Hidden content that reveals plot points...</p>
  </div>
</div>
```

### 4. Navigation Integration
Update these files to include new walkthroughs:

- `_layouts/default.html`: Add navigation link
- `index.md`: Add walkthrough card to homepage
- Update stats if desired

### 5. Content Guidelines
Follow the established patterns:
- **Mobile-first**: Short paragraphs, clear headings
- **Gaming tone**: Conversational, knowledgeable, slightly humorous
- **Practical focus**: Clear objectives and actionable advice
- **Progress tracking**: Logical chapter progression with checkpoints
- **Accessibility**: Proper heading hierarchy and alt text

## Getting Started

This site is built with Jekyll and hosted on GitHub Pages. Visit the live site to start reading the walkthroughs with full functionality including theme switching and mobile optimization.

## Contributing

Suggestions for new walkthroughs or improvements to existing guides are welcome! Please follow the structure outlined above for consistency.
