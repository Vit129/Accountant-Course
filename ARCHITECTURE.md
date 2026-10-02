# Accountant Learning — System Architecture

> Status: **active**. Companion to `PRODUCT.md` (vision/scope), `DESIGN.md` (visual language), and `CONTEXT.md` (domain terms).

## Constraints

- **Static deployment:** Pure client-side HTML/CSS/Vanilla JS with zero backend, zero database, and zero build step. Deploys to GitHub Pages.
- **Offline & Local Execution:** Runs directly from `file://` or any local HTTP server (`npx serve`, `python3 -m http.server`).
- **Data sovereignty:** User progress, exam attempts, and streak records are stored strictly in client-side `localStorage`.
- **Test invariant:** `npm test` (`tests/selftest.mjs`) must pass before releasing, guaranteeing that every lesson's solution passes and initial template fails.

## Architecture & File Organization

```
/
├── index.html                  # Landing hub & track selector
├── shared/                     # Reusable core engines
│   ├── engine.js               # Lesson state runner, validation & hints
│   ├── exam-engine.js          # Mixed timed mock exam controller
│   ├── gamification.js         # Streak counter, certificates & milestones
│   ├── checkin.js              # Daily active study tracker
│   └── style.css               # Global theme & typography
├── 01-financial-accounting-1/  # Track folders: index.html + lessons.js
├── 02-financial-accounting-2/
├── 03-auditing-1/
├── 04-auditing-2/
├── 05-law/
├── 06-taxation/
├── 07-cost-accounting/
├── 08-financial-management/
├── Final-Project/              # Integrated Capstone case study
├── exam/                       # Timed mock exam workspace
└── docs/
    ├── adr/                    # Architecture Decision Records
    └── agents/                 # Agent skills configuration
```

## Core Engines

1. **Lesson Engine (`shared/engine.js`):**
   - Parses `lessons.js` definitions.
   - Evaluates input answers using deterministic string matching and regular expressions.
   - Manages progressive disclosure: template ➔ hint ➔ solution.
2. **Mock Exam Engine (`shared/exam-engine.js`):**
   - Pools questions across tracks 1–8 (Capstone is excluded due to sequential dependencies).
   - Enforces countdown timer and calculates weighted performance score.
3. **Automated Selftest Suite (`tests/selftest.mjs`):**
   - Headless Node.js test runner executing before release.
   - Asserts that for all 208 lessons, the `solution` evaluates to passing and the starter `template` evaluates to non-passing, preventing silent evaluation regressions.
