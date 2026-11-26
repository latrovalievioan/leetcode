# Review Tracker

Spaced recall: each problem gets a quick question at +1, +3 and +7 days. Mark a recall `✓` once done.

| Problem | Pattern | Key insight | Mistake | Solved | +1 day | +3 days | +7 days |
|---|---|---|---|---|---|---|---|
| Final Prices With a Special Discount (1475) | Monotonic stack (next smaller-or-equal) | Stack holds items still waiting for a discount; prices increase bottom→top; a new price resolves waiting items from the top | Reversed pop condition at first and missed that equal prices count | 2026-11-26 | 2026-11-27 | 2026-11-29 | 2026-12-03 |

## Recall questions

- **1475, +1:** When exactly do you pop, and why store indices instead of prices?
- **1475, +3:** Why is a while loop inside a for loop still O(n) here?
- **1475, +7:** Solve LeetCode 739 (Daily Temperatures). Which direction is the stack monotonic, and what does each pop answer?
