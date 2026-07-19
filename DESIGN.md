# Design System

## Design Direction
Dark-theme study portal — calm, focused, minimal distraction from lesson content.

## Colors
Source: `shared/style.css` (canonical), duplicated with minor drift in `index.html` — worth consolidating later
- Background: `--bg-primary: #0a0d14`, `--bg-secondary: #121824`, `--bg-tertiary: #1a2332`
- Text: `--text-primary: #f3f4f6`, `--text-secondary: #9ca3af`, `--text-muted: #4e5666`
- Accents: `--accent-blue #3b82f6`, `--accent-emerald #10b981`, `--accent-amber #f59e0b`, `--accent-rose #f43f5e` (plus `--accent-violet`/`--accent-teal` in `index.html`'s copy)

## Typography
- UI: Inter (`--font-sans`)
- Code/mono: Fira Code (`--font-mono`, defined in `shared/style.css` only)

## Components
- Border-radius: 6-8px (buttons), 8-12px (cards/blocks), 16-20px (course cards, overlay cards)
- Shadows: soft dark drop-shadow on hover (`0 20px 40px -15px rgba(0,0,0,0.5)`), glow shadow on button hover (`0 0 16px rgba(accent,0.4)`)
- Gradients: progress bars (`linear-gradient(90deg, blue, emerald)`), hero text/CTA backgrounds
- Cards: `border: 1px solid` subtle white 8% opacity, colored top-border accent revealed on hover
- Glassmorphism (`backdrop-filter: blur`) on overlays

## Avoid
- Letting `--font-mono` and accent tokens drift further between `shared/style.css` and `index.html` — consolidate into one file when touched next
- Overstating exam authenticity in copy/UI — the "not real past papers" honesty note (index.html) is a product-integrity requirement, not just content

---
Sourced from `shared/style.css` and `index.html` as of 2026-07-18.
