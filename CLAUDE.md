# Accountant Learning (CPA prep portal) — Claude Instructions

## What this is

Static site (HTML/CSS/vanilla JS, no build step, no backend) — Thai CPA exam prep with 8 subject tracks + a Final-Project capstone, 208 lessons total, plus a timed mixed mock exam. See `PRODUCT.md` for vision/scope and `DESIGN.md` for visual system — read both before UI or content-structure work.

## Structure

- `0N-<subject>/` — one folder per subject track, each with its own `index.html` + `lessons.js`
- `Final-Project/` — one continuous case study integrating all 8 subjects; lessons reference prior-lesson answers, so **do not** treat it like the independently-shuffleable subject lessons
- `exam/` — timed mixed mock exam (subjects 1-8 only, Final-Project excluded — see README for why)
- `shared/` — the actual engine: `engine.js` (lesson runner), `exam-engine.js`, `gamification.js`, `checkin.js`, `style.css`, `selftest.mjs`
- `scripts/release.sh` — release flow (also `npm start`)

## Before changing lesson/engine logic

Run `npm test` (`shared/selftest.mjs`) — it verifies every lesson has both a passing `solution` and a non-passing `template`, catching silently-broken answer regexes. Don't skip this after editing `lessons.js` in any subject folder.

## Agent memory

`agent-memory/` here is tracked in-repo (not gitignored) — `knowledge/`, `PLAYBOOK.md`, `INDEX.md`. Check `PLAYBOOK.md` for accumulated lessons before starting non-trivial work.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<ClassName/FileName>"` for a known symbol/file (name match, not free-form concept search - use `query` for that). These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- After judging a query/path/explain result useful, a dead end, or wrong, run `graphify save-result --question "Q" --answer "A" --outcome useful|dead_end|corrected --nodes N1 N2` - this accumulates across sessions so the same dead end or vocabulary mismatch isn't re-derived every time. At the start of a session, check `graphify-out/reflections/LESSONS.md` if it exists (built via `graphify reflect`) for preferred sources, known dead ends, and past corrections.
