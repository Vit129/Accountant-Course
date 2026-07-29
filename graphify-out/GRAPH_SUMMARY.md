# Graph Summary — Accountant-Learning
_Auto-generated from GRAPH_REPORT.md · do not edit manually_
_Regen: `graphify update .`_

## Summary
- 324 nodes · 344 edges · 23 communities (20 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.55)
- Token cost: 0 input · 0 output


## Graph Freshness
- Built from commit: `d774f67f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).


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


## Cross-Cutting Nodes (span the most distinct areas of the codebase)
A high-degree node isn't always architecturally central - a widely-used
utility/config file can rack up more edges than a real coupler while only
ever touching one area. This ranks by how many DIFFERENT communities a
node's neighbors span, not by raw edge count.
1. `@media (max-width: 768px)` - bridges 1 areas (5 edges)
2. `@media (max-width: 1100px)` - bridges 1 areas (3 edges)


## Surprising Connections (you probably didn't know these)
- `Agent Memory Index` --conceptually_related_to--> `Agent Memory Playbook`  [INFERRED]
  agent-memory/INDEX.md → agent-memory/PLAYBOOK.md


_Full map → GRAPH_REPORT.md · query: `graphify query "..."`_
