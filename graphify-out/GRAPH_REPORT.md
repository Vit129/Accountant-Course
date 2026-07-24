# Graph Report - /Users/supavit.cho/Git/Personal/Accountant-Learning  (2026-07-24)

## Corpus Check
- Corpus is ~23,897 words - fits in a single context window. You may not need a graph.

## Summary
- 324 nodes · 344 edges · 23 communities (20 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.55)
- Token cost: 61,205 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `initApp()` - 8 edges
2. `startExam()` - 6 edges
3. `goToQuestion()` - 6 edges
4. `updateGutter()` - 5 edges
5. `loadLesson()` - 5 edges
6. `@media (max-width: 768px)` - 5 edges
7. `Honest-Limitations / Not-Real-Past-Papers Note` - 5 edges
8. `handleTextareaKeydown()` - 4 edges
9. `renderLessonList()` - 4 edges
10. `saveCurrentAnswer()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Agent Memory Index` --conceptually_related_to--> `Agent Memory Playbook`  [INFERRED]
  agent-memory/INDEX.md → agent-memory/PLAYBOOK.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Project Documentation Set (Vision + Design System + Overview)** — readme, product, design [INFERRED 0.75]

## Communities (23 total, 3 thin omitted)

### Community 0 - "Shared Style Tokens"
Cohesion: 0.02
Nodes (92): :root, .sidebar-title, .btn-solution:hover, .sidebar-title span, .sidebar-subtitle, .lesson-list, .lesson-item, .lesson-item:hover (+84 more)

### Community 1 - "Financial Accounting 1 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 2 - "Financial Accounting 2 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 3 - "Auditing 1 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 4 - "Auditing 2 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 5 - "Law Module UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 6 - "Taxation Module UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 7 - "Exam Engine Logic"
Cohesion: 0.17
Nodes (18): buildQuestionPool(), confirmSubmitExam(), EXAM_STATE, formatTime(), getSelectedSubjectIds(), goNext(), goPrev(), goToQuestion() (+10 more)

### Community 8 - "Lesson Runner Engine"
Cohesion: 0.19
Nodes (16): applySolution(), escapeHtml(), handleTextareaKeydown(), initApp(), loadLesson(), renderLessonList(), resetCourse(), runSandboxCode() (+8 more)

### Community 9 - "Exam Screen UI"
Cohesion: 0.11
Nodes (17): #exam-answer, #exam-minutes, #exam-progress-label, #exam-question-body, #exam-screen, #exam-subject-tag, #exam-timer, #finish-btn (+9 more)

### Community 10 - "Product & Design Docs"
Cohesion: 0.31
Nodes (6): Dark-Theme Study Portal Design Direction, Style Token Drift (shared/style.css vs index.html), CPA Exam Study Portal (Product Vision), Timed Mixed Mock Exam Engine (shared/exam-engine.js), Honest-Limitations / Not-Real-Past-Papers Note, Lesson Runner Engine (shared/engine.js)

### Community 11 - "Responsive Layout Breakpoints"
Cohesion: 0.40
Nodes (5): @media (max-width: 768px), body, .sidebar, .sidebar.show, .menu-toggle

### Community 14 - "Workspace Layout Breakpoints"
Cohesion: 0.67
Nodes (3): @media (max-width: 1100px), .workspace, .panel-left

## Knowledge Gaps
- **250 isolated node(s):** `#sidebar`, `#lesson-list`, `#progress-label`, `#progress-bar-fill`, `#menu-toggle` (+245 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@media (max-width: 768px)` connect `Responsive Layout Breakpoints` to `Shared Style Tokens`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Why does `@media (max-width: 1100px)` connect `Workspace Layout Breakpoints` to `Shared Style Tokens`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `initApp()` (e.g. with `handleTextareaKeydown()` and `syncGutterScroll()`) actually correct?**
  _`initApp()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `#sidebar`, `#lesson-list`, `#progress-label` to the rest of the system?**
  _251 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Shared Style Tokens` be split into smaller, more focused modules?**
  _Cohesion score 0.021505376344086023 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 1 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 2 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._