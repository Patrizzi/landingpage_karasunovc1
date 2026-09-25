---
name: Karasuno Flight
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e5beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ac897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#ff5708'
  on-primary-container: '#511500'
  inverse-primary: '#aa3600'
  secondary: '#ffdb9f'
  on-secondary: '#422d00'
  secondary-container: '#ffb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#ffb68e'
  on-tertiary: '#542200'
  tertiary-container: '#eb6b01'
  on-tertiary-container: '#491d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822700'
  secondary-fixed: '#ffdea9'
  secondary-fixed-dim: '#ffba26'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4100'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#773300'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-hero:
    fontFamily: Oswald
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: 0.04em
  headline-hero-mobile:
    fontFamily: Oswald
    fontSize: 42px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  title-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.01em
  title-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-stat:
    fontFamily: Oswald
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an aggressive, high-energy modern sports aesthetic built on relentless forward momentum. Inspired by athletic spirit, fierce competitive drive, and the fiery rebirth of a volleyball powerhouse, the digital identity combines high-contrast dark tones with scorching athletic neon accents.

The target audience encompasses competitive athletes, club recruits, youth players, and passionate fans seeking a team culture defined by discipline, explosive verticality, and community excellence. 

### Visual Movement: High-Contrast Athletic Glassmorphism
The aesthetic fuses three core design disciplines:
- **Deep Obsidian Grounding:** Rich pitch blacks and dark smoked charcoals (`#0D0D0D`, `#161616`) create an infinite stadium-at-night backdrop that commands focus.
- **Fiery Luminescence:** Electric neon orange and molten fire yellow cut through dark layers like stadium floodlights, creating sharp focal beacons on high-priority CTAs, match schedules, and roster stats.
- **Precision Glassmorphism & Energetic Edge Work:** Semi-translucent obsidian panels with razor-thin luminous borders (`rgba(255, 102, 0, 0.25)` to `rgba(255, 255, 255, 0.08)`) deliver a sleek, contemporary sportswear feel without visual clutter.

## Colors

The color palette is engineered for extreme contrast, legibility under athletic environments, and visual intensity.

### Palette Breakdown
- **Primary Athletic Orange (`#FF5500` / `#FF6600`):** The beating heart of the club. Applied exclusively to top-level call-to-actions, victory highlights, active states, and energetic badges.
- **Secondary Flame Gold (`#FFB700`):** Secondary accent providing fiery warmth. Reserved for match countdowns, MVP tags, training tier callouts, and hover gradient shifts.
- **Tertiary Blaze (`#FF7A1A`):** Mid-tone bridging primary orange and golden highlights, primarily leveraged for dynamic border glows, subtle radial gradient fills, and decorative court-line accents.
- **Neutral Dark Tiers:**
  - `Background Base`: `#0D0D0D` (true obsidian dark canvas)
  - `Surface Tier 1 (Cards & Modals)`: `#141414` (neutral deep charcoal)
  - `Surface Tier 2 (Interactive Floating Glass)`: `rgba(26, 26, 26, 0.72)` with backdrop blur
  - `Border / Hairlines`: `rgba(255, 255, 255, 0.12)` default, `rgba(255, 85, 0, 0.4)` active
- **Typography & Text Highlights:**
  - `Text Primary`: `#FFFFFF` (100% white for uncompromising legibility)
  - `Text Secondary`: `#A3A3A3` (cool neutral gray for metadata, timestamps, and subtitles)
  - `Text Muted`: `#666666` (structural labels and inactive cues)

## Typography

The typographic hierarchy is built on bold, condensed athletics paired with crystalline digital clarity:

- **Display & Headlines (Oswald):** Tall, condensed, and architectural. Oswald commands the page like a tournament scoreboard or court banner. All major hero titles, section headings, and category titles must be set in uppercase with slight positive tracking (`0.02em` to `0.04em`).
- **Body & Editorial (Inter):** Highly legible, neutral, and structurally pristine. Inter balances the aggressive display headers by offering fatigue-free readability on dark backgrounds for training details, registration guidelines, and schedule charts.
- **Accents, Tags & Navigation (Montserrat):** Bold geometric uppercase styling that anchors metadata badges, kicker titles (`label-caps`), button labels, and player stat overviews.

## Layout & Spacing

The layout operates on a 12-column responsive fluid grid designed to display dynamic tournament banners, mixed training category cards, schedule tables, and high-impact roster photography.

### Grid & Breakpoints
- **Desktop (1024px+):** 12 columns with `1.5rem` (`24px`) gutters and `3rem` (`48px`) outer margins. Max content container width is capped at `1280px` centered.
- **Tablet (768px – 1023px):** 8 columns with `1.25rem` (`20px`) gutters and `2rem` (`32px`) margins. Cards reflow from 3 or 4 per row to 2 per row.
- **Mobile (<768px):** 4 columns with `1rem` (`16px`) gutters and `1.25rem` (`20px`) margins. Layout stacks into single-column flows; schedule cards snap horizontally to edge-to-edge swipe containers.

### Rhythm & Alignment
Spacing follows an aggressive 8px core rhythm. Vertical section spacing is intentionally generous (`space-xl` scaled to `5rem` for major section divisions) to allow neon gradient accents and high-contrast imagery to breathe against the dark backdrop without colliding.

## Elevation & Depth

Visual hierarchy is established using layered glass surfaces, dark ambient depth, and luminous athletic fire glows rather than traditional light-source drop shadows:

1. **Floor (Level 0):** Pure dark background (`#0D0D0D`) with subtle, oversized radial gradients of muted ember (`rgba(255, 85, 0, 0.08)`) blooming behind key visual elements.
2. **Surface / Card (Level 1):** Solid dark charcoal base (`#141414`) layered with a crisp low-contrast perimeter outline (`border: 1px solid rgba(255, 255, 255, 0.08)`).
3. **Glassmorphic Interactive (Level 2):** Translucent backdrop surface (`background: rgba(22, 22, 22, 0.75)`, `backdrop-filter: blur(16px)`), combined with a top-lit inner border highlight (`1px solid rgba(255, 255, 255, 0.15)`).
4. **Active & Neon Glow (Level 3):** Active cards, CTA buttons, and floating registration badges project an ambient, fire-tinted energy glow: `box-shadow: 0 10px 30px -5px rgba(255, 85, 0, 0.4), 0 0 15px rgba(255, 183, 0, 0.2)`.
5. **Overlays & Drawers (Level 4):** Deep dimmed backdrop blur (`rgba(0, 0, 0, 0.85)` + `backdrop-filter: blur(20px)`), with front-facing floating modal surfaces outlined in bright fiery perimeter borders.

## Shapes

The design system employs a **Soft Athletic (`1`)** shape language, utilizing tight, assertive corner radiuses (`0.25rem` / `4px` base to `0.5rem` / `8px` for larger cards). 

Rounded forms are intentionally restrained to maintain an aggressive, disciplined, and court-ready edge. Pill shapes are banned for content containers and reserved strictly for micro-status badges, category chips, and live availability indicators. Angled accents—such as diagonal 45-degree corner chamfers on primary hero elements or decorative divider slashes—reinforce the trajectory of an aerial volleyball spike.

## Components

### Buttons
- **Primary CTA ("Join the Club" / "Inscribirme"):** Solid `#FF5500` background with pure white bold Montserrat text (`label-caps`), subtle upward gradient into `#FF6600`, tight `4px` border radius, and active neon bloom shadow. On hover: rises 2px with an intensified `#FFB700` rim highlight.
- **Secondary Action:** Ghost style featuring a dark glass surface (`rgba(255, 255, 255, 0.04)`), a 1.5px border of `rgba(255, 85, 0, 0.5)`, and crisp white text. Hover triggers an inner orange flame wash.
- **WhatsApp Direct Action:** Deep emerald glass surface (`#128C7E` tint or solid `#25D366` accent icon) with crisp white display text, highlighting quick instant contact.

### Chips & Badges
- **Category Badge ("CATEGORÍA MIXTO"):** High-visibility pill badge with `rgba(255, 183, 0, 0.15)` fill, `1px solid #FFB700`, and vivid golden-yellow text in `label-caps`.
- **Status Indicator ("CUPOS DISPONIBLES"):** Translucent black chip with a pulsating neon green or neon orange dot to signal real-time class registration status.

### Cards & Schedule Containers
- Built on Level 1 & Level 2 glass surfaces with `8px` (`rounded-lg`) curvature.
- Training schedules feature distinct calendar/clock icon clusters illuminated in `#FF5500`.
- Top borders feature a dual-tone glowing gradient hairline transitioning from `#FF5500` on the left to `#FFB700` in the center, tapering to transparent on the right.

### Input Fields
- Form backgrounds utilize `#161616` with an inset border of `rgba(255, 255, 255, 0.12)`.
- Input text is crisp white `#FFFFFF` in `body-md`. Placeholder text is set in `#666666`.
- Focus state instantly activates a sharp 1.5px `#FF5500` border paired with an ambient `rgba(255, 85, 0, 0.25)` drop glow.

### Checkboxes & Radio Selectors
- Custom square (`4px` radius) dark charcoal boxes with `1.5px solid rgba(255, 255, 255, 0.3)`.
- Checked state fills with solid `#FF5500`, displaying a sharp geometric white checkmark.

### Additional Sports System Components
- **Stat Counter Block:** Displays numerical volleyball stats (e.g., "100+ ATLETAS", "15 TORNEOS") using `label-stat` in Oswald, stacked atop a muted gray uppercase Montserrat label.
- **Player & Roster Card:** High-contrast photographic card with an angled bottom color block in deep obsidian and neon orange jersey numbers stamped in ghosted opacity in the background.