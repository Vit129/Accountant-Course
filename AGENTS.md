# Accountant Learning (CPA prep portal) — Claude Instructions

## What this is

Static site (HTML/CSS/vanilla JS, no build step, no backend) — Thai CPA exam prep with 8 subject tracks + a Final-Project capstone, 208 lessons total, plus a timed mixed mock exam. See `PRODUCT.md` for vision/scope and `DESIGN.md` for visual system — read both before UI or content-structure work.

## Structure

- `0N-<subject>/` — one folder per subject track, each with its own `index.html` + `lessons.js`
- `Final-Project/` — one continuous case study integrating all 8 subjects; lessons reference prior-lesson answers, so **do not** treat it like the independently-shuffleable subject lessons
- `exam/` — timed mixed mock exam (subjects 1-8 only, Final-Project excluded — see README for why)
- `shared/` — the actual engine: `engine.js` (lesson runner), `exam-engine.js`, `gamification.js`, `checkin.js`, `style.css`
- `tests/selftest.mjs` — headless self-test (`npm test`)
- `scripts/release.sh` — release flow (also `npm start`)

## Before changing lesson/engine logic

Run `npm test` (`tests/selftest.mjs`) — it verifies every lesson has both a passing `solution` and a non-passing `template`, catching silently-broken answer regexes. Don't skip this after editing `lessons.js` in any subject folder.

## Agent Memory

Per-project memory lives centrally in `~/Git/Personal/unified-memory-vault/memory-vault/Accountant-Course/` (never in this repo). Resolve path via `python3 ~/.claude/scripts/lib/memory_root.py .` or search via `python3 ~/.claude/scripts/recall.py "<query>"`.

## Code search

- Use `project_search` first. One call returns text matches and code-graph hits together.
- `rg` plus `Read` is the primary method. Read the file before you edit it.
- If `project_search` reports a stale index, treat its graph hits as hints and confirm them with `rg` and `Read`.
- Code-index output is local. Never commit it.

## Agent skills

### Issue tracker
Issues live in GitHub Issues (Vit129/Accountant-Course), via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels
Default five canonical roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs
Single-context layout: `CONTEXT.md` + `docs/adr/` at repo root. See `docs/agents/domain.md`.

