# Product

## Vision
Interactive web study portal for Thailand's CPA exam (สภาวิชาชีพบัญชี) — lesson content + a timed mock exam, static site, no backend.

## Target Users
Thai CPA exam candidates studying the 6 official subjects.

## Core Problems
- CPA study material is scattered, not structured as bite-size lessons
- No easy way to self-test under exam time pressure before the real exam
- Free/lightweight study tools for the Thai CPA exam are scarce

## Core Features
- 8 tracks total: the 6 real TFAC exam subjects (Financial Accounting 1 & 2, Auditing 1 & 2, Law — merges the real Law 1 & 2 papers into one track) plus 3 supplementary knowledge tracks (Taxation, Cost Accounting, Financial Management) that are not standalone TFAC exam subjects — their real content lives inside Financial Accounting/Auditing and Law 2 (ประมวลรัษฎากร)
- Lesson runner (`shared/engine.js`) — per-subject `index.html` + `lessons.js`
- Timed mixed mock exam (`exam/`, `shared/exam-engine.js`)
- Deployed static at `vit129.github.io/Accountant-Course`

## Out of Scope
- Real past exam papers (explicitly disclosed: questions are topic-representative only, not official past papers)
- Full statutory/standards coverage — bounded to representative topic coverage
- Backend, accounts, progress persistence across devices (no build step, no framework, no server)

## Success Metrics
- Learner completes all 8 tracks (6 real exam subjects + 3 supplementary)
- Mock exam score reflects readiness for the real CPA exam structure/timing

---
Sourced from README.md and index.html as of 2026-07-18.
