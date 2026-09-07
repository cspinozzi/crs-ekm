# Fingerprints

Every site you build with **scrollcraft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| crs-ekm-split | Split stage | No bar. Fixed divider is the chrome: two side labels (Scattered / Governed), shield mark, page progress as a fill along the seam. On phones it becomes a fixed bottom bar | 50/50 split established on screen one: scrub push-in (owned still) on the night column, type on paper, both headlines readable at once | scrub · flow · pin(peak) · flow · pin+count · flow+reveal · pin(collapse). 7 acts, 11.6vh at 1440×900, 12.8vh at 390×844 | Collapse: the divider travels to the left edge, paper takes the full width, CTA + POC + small print inside the stage, nothing after it | The filing: eight problem fragments cross the seam and shelve themselves in eight empty rows; the seam tips when the shelf is full | Low-key cinematic (owned photograph, rendered push-in) against paper | 3000 |


---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Split stage** is taken (crs-ekm-split): two grounds held for the whole page, resolved by a collapse.
- **The divider as chrome** (labels + progress fill on the seam, no bar) is taken.
- **A half-column scrub hero with type on the other half** is taken.
- **A close that collapses one column into the other** is taken.
- **The filing** (fragments migrating across a seam into slots) is taken.
- Act band: 7 acts at 11.6vh (desktop).

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scrollcraft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
