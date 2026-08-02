# Design System

## Design Direction
Light cream-theme study portal — warm, paper-like, calm and focused, minimal distraction from lesson content. (Switched from dark theme 2026-08-01.)

## Colors
Source: `shared/style.css` (canonical), duplicated with minor drift in `index.html` — worth consolidating later
- Background: `--bg-primary: #F5F0E6` (warm cream page bg), `--bg-secondary: #FAF4E7` (cards/sidebar — deliberately NOT pure white, stays cream), `--bg-tertiary: #EDE6D8` (subtle contrast surfaces)
- Text: `--text-primary: #2B2620` (warm near-black), `--text-secondary: #6B6259`, `--text-muted: #9C9284`
- Accents (unchanged from dark theme, still pass contrast on cream): `--accent-blue #3b82f6`, `--accent-emerald #10b981`, `--accent-amber #f59e0b`, `--accent-rose #f43f5e` (plus `--accent-violet`/`--accent-teal` in `index.html`'s copy)
- Editor/code surfaces (hardcoded, not variables — `shared/style.css`): editor/terminal panels `#FBF8F1`/`#EDE6D8`/`#F0E9DA`, code blocks `#F3ECDD` bg with `#2B2620` text, inline code color `#B45309`
- Modal scrim: `rgba(43, 38, 32, 0.45)` (dark warm overlay behind dialogs, regardless of light theme — standard modal-dimming pattern)

## Typography
- UI: Inter (`--font-sans`)
- Code/mono: Fira Code (`--font-mono`, defined in `shared/style.css` only)

## Components
- Border-radius: 6-8px (buttons), 8-12px (cards/blocks), 16-20px (course cards, overlay cards)
- Shadows: soft warm drop-shadow on hover (`0 20px 40px -15px rgba(43,38,32,0.15)`), glow shadow on button hover (`0 0 16px rgba(accent,0.4)`, unchanged)
- Gradients: progress bars (`linear-gradient(90deg, blue, emerald)`), hero text/CTA backgrounds
- Cards: `border: 1px solid` subtle warm-black 12% opacity (was white 8% on dark), colored top-border accent revealed on hover
- Glassmorphism (`backdrop-filter: blur`) on overlays — frosted surface now `rgba(250,244,231,0.75)` (cream-tinted, was dark `rgba(18,24,36,0.5)`)
- Daily check-in banner/mini badge (`shared/checkin.js`, 2026-08-01): warm amber/emerald gradient banner on home page, compact `🔥 N วัน` text in each track's sidebar footer
- Sequential lesson lock removed (2026-08-02) — every lesson in the sidebar is clickable regardless of completion order; `getFirstIncompleteIndex()` still resumes to the first unfinished lesson on page load, it just no longer blocks manual navigation

## Avoid
- Letting `--font-mono` and accent tokens drift further between `shared/style.css` and `index.html` — consolidate into one file when touched next
- Overstating exam authenticity in copy/UI — the "not real past papers" honesty note (index.html) is a product-integrity requirement, not just content
- Reintroducing light-text-on-light-bg combos left over from the dark-theme era (e.g. `#a7f3d0`/`#d1d5db`/`#e6edf3`) — always pair a light accent tint with a *darkened* version of that accent for text, not the light mint/pastel variant that only worked on a dark background
- **Pure white (`#fff`/`#FFFFFF`) anywhere** — explicit user requirement (2026-08-01): every surface must read as cream, light or dark shade is fine, but never neutral white. Applies to CSS background-colors AND inline styles (e.g. `shared/gamification.js`'s certificate overlay)

---
Sourced from `shared/style.css` and `index.html` as of 2026-08-01 (light cream theme migration).
