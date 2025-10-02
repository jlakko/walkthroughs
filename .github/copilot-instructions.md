# 🎮 Walkthrough Writing Guide for Gamers

## Overview
This guide provides instructions for creating comprehensive, engaging, and humorous game walkthroughs that help gamers master their favorite games. Our goal is to make complex gaming concepts accessible, enjoyable, and memorable.

## 🛠️ Repository Structure & Technical Setup

### Project Overview
This is a Jekyll-based static site hosted on GitHub Pages. The site features:
- **Jekyll Collections** for organizing walkthrough content
- **Responsive design** with mobile-first approach
- **Theme switching** (Light, Dark, Minecraft, Ocean)
- **Progress tracking** for readers
- **Spoiler system** for story-sensitive content

### Directory Structure
```
/
├── _walkthroughs/          # Individual chapter markdown files
├── _layouts/               # Jekyll layout templates
├── _sass/                  # SCSS stylesheets
├── assets/                 # JavaScript, images, and other assets
├── [game-name]/           # Game-specific landing pages (e.g., fallout4/, minecraft/)
├── _config.yml            # Jekyll configuration
└── .github/
    └── copilot-instructions.md
```

### Working with Jekyll Collections
- All walkthrough chapters go in `_walkthroughs/` directory
- Each game has a landing page in its own directory (e.g., `fallout4/index.md`)
- Collections are configured in `_config.yml` with `output: true`
- Chapters automatically get `/walkthroughs/[filename]/` URLs

### Building and Testing Locally
```bash
# Install dependencies
bundle install

# Run Jekyll development server
bundle exec jekyll serve

# Access at http://localhost:4000/walkthroughs/
```

### Key Files to Update When Adding Content
1. **New chapter file**: Add to `_walkthroughs/` with proper front matter
2. **Game landing page**: Create or update `[game-name]/index.md`
3. **Homepage**: Update `index.md` to add new walkthrough card
4. **Navigation**: Update `_layouts/default.html` if adding new game section

### File Naming Conventions
- Chapter files: `[game-name]-[chapter-name].md` (e.g., `fallout4-introduction.md`)
- Use lowercase with hyphens
- Keep names descriptive but concise

## 📋 Front Matter Requirements

Every chapter file must include complete front matter:

```yaml
---
title: "Chapter Title"                      # Required: Display title
description: "Brief chapter description"    # Required: For SEO and navigation
walkthrough: "game-name"                   # Required: Collection identifier (lowercase, hyphenated)
walkthrough_title: "Game Complete Guide"   # Required: Display name for breadcrumbs
chapter_order: 1                           # Required: Numeric order for sorting (integer)
estimated_time: "30 minutes"               # Optional: Reading time estimate
breadcrumbs:                               # Optional: Navigation breadcrumbs
  - title: "Home"
    url: "/"
  - title: "Game Guide"
    url: "/game/"
  - title: "Chapter Title"
tips:                                      # Optional: Quick tips for sidebar
  - "Helpful tip 1"
  - "Helpful tip 2"
tags: [game-name, category]                # Optional: SEO tags
---
```

### Front Matter Best Practices
- **walkthrough**: Must match across all chapters of the same game
- **chapter_order**: Use integers (1, 2, 3...) for proper sorting
- **estimated_time**: Help readers plan their reading sessions
- **breadcrumbs**: Maintain consistent hierarchy across chapters
- **tips**: Include 2-4 actionable tips relevant to the chapter

## 🎯 Core Principles

### 1. Write for Real Gamers
- **Assume some gaming knowledge** but explain mechanics clearly
- **Use gaming terminology** that feels natural to the community
- **Address common pain points** that every player experiences
- **Include both newbie-friendly and advanced strategies**

### 2. Inject Personality & Humor
- **Be conversational**, not robotic or overly formal
- **Use gaming humor** and references that resonate with players
- **Share relatable gaming experiences** ("We've all been there...")
- **Add personality** without overwhelming the core information
- **Use emojis strategically** to break up text and add visual interest

### 3. Structure for Success
- **Break content into digestible chunks** (5-10 minute sections)
- **Use clear headings** that describe exactly what players will learn
- **Include time estimates** for each major section
- **Provide checklists** so players can track their progress
- **Add navigation aids** between related sections

## 📝 Content Guidelines

### Writing Style
- **Tone**: Friendly, knowledgeable, and slightly humorous
- **Voice**: Second person ("you") to directly address the player
- **Length**: Comprehensive but scannable - use bullet points and short paragraphs
- **Accessibility**: Mobile-friendly formatting with plenty of whitespace

### Essential Elements to Include

#### Opening Hook
Start each section with why this matters:
```markdown
## Mining Your First Diamonds
You've probably died in lava more times than you'd like to admit while searching for these blue beauties. Let's change that with some proven strategies that actually work.
```

#### Step-by-Step Instructions
Break complex tasks into numbered steps:
```markdown
**Diamond Mining Strategy:**
1. Dig down to Y-level 11 (press F3 to check coordinates)
2. Create branch mines with 2-block spacing
3. Listen for lava before breaking blocks
4. Always bring a water bucket (trust us on this one)
```

#### Pro Tips & Warnings
Use formatted boxes for crucial information:
```markdown
<div class="tip-box">
  <div class="tip-title">💎 Pro Tip</div>
  Never dig straight down. Seriously. That's how you meet lava face-first.
</div>

<div class="warning-box">
  <div class="warning-title">⚠️ Common Mistake</div>
  Don't mine diamonds with a stone pickaxe - you'll just destroy them!
</div>
```

#### Progress Milestones
Include checkboxes for tracking progress:
```markdown
## Chapter Milestones
- [ ] Survived your first night without rage-quitting
- [ ] Built a house that doesn't look like a dirt cube
- [ ] Found your first diamond (screenshot it, we won't judge)
- [ ] Defeated the Ender Dragon (legendary status achieved)
```

### 🎪 Adding Humor & Personality

#### Gaming References
- Reference common gaming experiences everyone relates to
- Use popular gaming memes and terminology appropriately
- Acknowledge the shared struggles of gaming

#### Relatable Scenarios
```markdown
We've all been that player who spends 3 hours building the perfect house only to realize we forgot to add a door. Or the one who carefully plans a mining expedition but forgets to bring food and starves 5 blocks from home.
```

#### Self-Deprecating Humor
```markdown
After approximately 47 failed attempts at beating this boss (not that anyone's counting), here's what actually works...
```

#### Community Inside Jokes
Reference well-known gaming phenomena that players will immediately recognize:
```markdown
Remember, this isn't Dark Souls - dying here just means you lose your stuff, not your sanity.
```

### 💡 Tips & Tricks Integration

#### Timing is Everything
- **Early tips**: Focus on survival and avoiding common mistakes
- **Mid-game tips**: Efficiency improvements and quality of life
- **Late-game tips**: Advanced strategies and optimization

#### Types of Tips to Include

**Safety Tips**
```markdown
💡 **Safety First**: Always carry a water bucket when mining. Lava lakes are not hot tubs.
```

**Efficiency Tips**
```markdown
⚡ **Time Saver**: Craft multiple tools at once. Nothing worse than your pickaxe breaking mid-diamond-vein.
```

**Quality of Life Tips**
```markdown
🏠 **Life Hack**: Build your chests in alphabetical order. Future you will thank present you.
```

**Advanced Strategies**
```markdown
🧠 **Pro Strat**: Use F3+G to see chunk borders for optimal mob farm placement.
```

## 📱 Mobile Optimization

### Formatting for Small Screens
- **Short paragraphs** (2-3 sentences max)
- **Bullet points** instead of long sentences
- **Clear section breaks** with plenty of whitespace
- **Collapsible sections** for optional advanced content

### Touch-Friendly Design
- **Large buttons** for navigation
- **Easy-to-tap links** between chapters
- **Swipe-friendly** image galleries
- **Readable font sizes** without zooming

## 🎨 Visual Elements

### When to Include Images
- **Key locations** (important landmarks, biomes)
- **Complex builds** (step-by-step construction guides)
- **UI elements** (inventory layouts, crafting recipes)
- **Before/after comparisons** (base improvements)

### Image Guidelines
```markdown
<div class="screenshot">
  <img src="{{ '/assets/images/game-screenshot.png' | relative_url }}" 
       alt="Descriptive alt text for accessibility" 
       loading="lazy">
  <div class="caption">Clear, helpful caption explaining what we're looking at</div>
</div>
```

## 🎨 Custom Components & CSS Classes

### Available Tip Box Types
```html
<!-- Standard tip box (blue border) -->
<div class="tip-box">
  <div class="tip-title">💡 Pro Tip</div>
  Content here...
</div>

<!-- Warning box (red border) -->
<div class="tip-box warning">
  <div class="tip-title">⚠️ Warning</div>
  Content here...
</div>

<!-- Success box (green border) -->
<div class="tip-box success">
  <div class="tip-title">✅ Success</div>
  Content here...
</div>
```

### Spoiler System
```html
<div class="spoiler-box warning">
  <div class="spoiler-header">
    <div class="spoiler-title">⚠️ Spoiler Warning</div>
    <div class="spoiler-toggle">▼</div>
  </div>
  <div class="spoiler-content">
    <p>Hidden content that reveals plot points...</p>
    <!-- Can include any markdown/HTML content -->
    <!-- Supports nested tip-boxes, lists, etc. -->
  </div>
</div>
```

### Walkthrough Cards (for index pages)
```html
<div class="walkthrough-grid">
  <div class="walkthrough-card">
    <h3>Chapter Title</h3>
    <div class="card-meta">Estimated time or metadata</div>
    <div class="card-description">Brief description</div>
    <a href="link" class="btn">Read Chapter</a>
  </div>
</div>
```

### Breadcrumbs
Automatically rendered from front matter when using the chapter layout.

### Progress Tracking
Interactive JavaScript components automatically handle:
- Theme switching
- Spoiler toggle states (persisted in localStorage)
- Mobile navigation
- Progress tracking
- Lazy image loading

## 📚 Chapter Structure Template

### Chapter Opening
```markdown
---
title: "Chapter Title That Tells Players What They'll Learn"
description: "One-sentence summary of the chapter's main goal"
walkthrough: "game-name"
chapter_order: 1
estimated_time: "30 minutes"
tips:
  - "Key tip that applies to this whole chapter"
  - "Another important tip"
  - "One more for good measure"
---

Brief intro paragraph that hooks the reader and explains why this chapter matters. Address a common problem or exciting goal.
```

### Section Structure
```markdown
## Main Goal (Time Estimate)

Brief explanation of what we're about to accomplish and why it's important.

### Step-by-Step Process
1. **Clear action** with explanation
2. **Next action** with helpful context
3. **Final action** with expected outcome

<div class="tip-box">
  <div class="tip-title">💡 Pro Tip</div>
  Helpful tip that makes this easier or prevents common mistakes.
</div>

### Troubleshooting Common Issues
**Problem:** Common issue players face
**Solution:** How to fix it, with personality

## Milestones & Next Steps
- [ ] Checkpoint 1
- [ ] Checkpoint 2
- [ ] Ready for next chapter
```

## 🚀 Quality Checklist

Before publishing any walkthrough content, verify:

### Content Quality
- [ ] **Clear learning objectives** for each section
- [ ] **Accurate information** verified through testing
- [ ] **Logical progression** from basic to advanced
- [ ] **Complete coverage** of the topic without overwhelming detail

### Readability
- [ ] **Conversational tone** that feels natural
- [ ] **Appropriate humor** that enhances rather than distracts
- [ ] **Mobile-friendly formatting** with short paragraphs
- [ ] **Clear headings** that help scanning

### Gaming Community Standards
- [ ] **Respectful of all skill levels** (no gatekeeping)
- [ ] **Inclusive language** that welcomes everyone
- [ ] **Current information** (no outdated strategies)
- [ ] **Community-tested strategies** (not just theoretical)

### Technical Elements
- [ ] **Working internal links** between chapters
- [ ] **Optimized images** with proper alt text
- [ ] **Consistent formatting** throughout
- [ ] **Mobile responsive** design elements
- [ ] **Valid front matter** with all required fields
- [ ] **Proper file naming** following conventions

## 📝 Markdown & Formatting Rules

### Heading Hierarchy
- Use `##` for main sections (H2)
- Use `###` for subsections (H3)
- Use `####` for minor subsections (H4)
- Never skip heading levels
- Keep headings descriptive and scannable

### Lists
- Use `-` for unordered lists (consistent across site)
- Use `1.` for ordered lists
- Include space after list marker
- Keep list items concise

### Links
- Use relative URLs for internal links: `[link text](/game/chapter/)`
- Use Liquid tags for asset URLs: `{{ '/assets/images/file.png' | relative_url }}`
- Always include descriptive link text (avoid "click here")

### Code Blocks
Use triple backticks with language identifier:
````markdown
```yaml
# Your code here
```
````

### Emphasis
- Use `**bold**` for important terms and actions
- Use `*italic*` for emphasis (sparingly)
- Use emojis strategically for visual breaks

## 🔧 Common Tasks

### Adding a New Walkthrough

1. **Create game directory**: `mkdir [game-name]`
2. **Create index page**: `[game-name]/index.md` with landing page content
3. **Add chapter files**: `_walkthroughs/[game-name]-chapter-name.md`
4. **Update homepage**: Add card to `index.md`
5. **Update navigation**: Add link in `_layouts/default.html` if needed
6. **Test locally**: Run `bundle exec jekyll serve` and verify all links work

### Adding a New Chapter

1. Create file in `_walkthroughs/` with naming convention
2. Add complete front matter
3. Write content following style guide
4. Update chapter_order of other chapters if inserting
5. Add navigation links to/from adjacent chapters
6. Test rendering and navigation

### Updating Existing Content

1. Maintain existing structure unless improving
2. Preserve front matter consistency
3. Keep existing chapter_order unless reordering
4. Update estimated_time if significantly changed
5. Verify links still work after changes

## 🎯 Remember: We're Here to Help Gamers Win

Every walkthrough should make players feel more confident and capable. We're not just providing information - we're being the helpful friend who knows all the tricks and shares them with enthusiasm. 

When in doubt, ask yourself: "Would this help me when I was stuck at 2 AM trying to figure this out?" If the answer is yes, you're on the right track!

Happy gaming! 🎮