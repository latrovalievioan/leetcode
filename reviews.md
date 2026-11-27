# Review Tracker

Spaced recall: each problem gets a quick question at +1, +3 and +7 days. Mark a recall `✓` once done.

| Problem | Pattern | Key insight | Mistake | Solved | +1 day | +3 days | +7 days |
|---|---|---|---|---|---|---|---|
| Final Prices With a Special Discount (1475) | Monotonic stack (next smaller-or-equal) | Stack holds items still waiting for a discount; prices increase bottom→top; a new price resolves waiting items from the top | Reversed pop condition at first and missed that equal prices count | 2026-11-26 | ✓ | 2026-11-29 | 2026-12-03 |
| Daily Temperatures (739) | Monotonic stack (next strictly greater) | Stack holds unresolved days, temps non-increasing bottom→top; each pop resolves a day with `i - top`; prefill 0 for days never resolved | Recited "each element pushed/popped once" without understanding why it's O(n) (amortized/aggregate counting) | 2026-11-27 | 2026-11-28 | 2026-11-30 | 2026-12-04 |

## Recall questions

- **1475, +1:** When exactly do you pop, and why store indices instead of prices?
- **1475, +3:** Why is a while loop inside a for loop still O(n) here?
- **1475, +7:** Solve LeetCode 739 (Daily Temperatures). Which direction is the stack monotonic, and what does each pop answer?
- **739, +1:** In your own words, why is a `while` inside a `for` still O(n) here? Count total pushes and pops.
- **739, +3:** State the full stack invariant (order + meaning). Why does prefilling `result` with 0 replace the cleanup loop?
- **739, +7:** Solve LeetCode 496 (Next Greater Element I). How do you adapt the stack when the queries come from a different array?
