# Graph Summary — Accountant-Learning
_Auto-generated from GRAPH_REPORT.md · do not edit manually_
_Regen: `graphify update .`_

## Summary
- 722 nodes · 726 edges · 45 communities (34 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output


## Graph Freshness
- Built from commit: `21a20ea5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).


## God Nodes (most connected - your core abstractions)
1. `LESSONS` - 28 edges
2. `LESSONS` - 26 edges
3. `LESSONS` - 24 edges
4. `LESSONS` - 22 edges
5. `LESSONS` - 20 edges
6. `LESSONS` - 20 edges
7. `LESSONS` - 20 edges
8. `LESSONS` - 19 edges
9. `LESSONS` - 16 edges
10. `initApp()` - 9 edges


## Cross-Cutting Nodes (span the most distinct areas of the codebase)
A high-degree node isn't always architecturally central - a widely-used
utility/config file can rack up more edges than a real coupler while only
ever touching one area. This ranks by how many DIFFERENT communities a
node's neighbors span, not by raw edge count.
1. `@media (max-width: 768px)` - bridges 1 areas (5 edges)
2. `@media (max-width: 1100px)` - bridges 1 areas (3 edges)


## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.


_Full map → GRAPH_REPORT.md · query: `graphify query "..."`_
