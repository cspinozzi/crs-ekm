# crs-ekm-split · build report

Branch `exploration-v2` · route `/ekm` · local URL http://localhost:3000/ekm

**The brief was self-authored, not interviewed.** The eight questions were put to the human; they delegated ("ok dale"). Answers were written in the brand's voice from the live page's copy and assets. See [BRIEF.md](BRIEF.md).

## Grammar

**Split stage.** Two grounds held for the whole page: night (scattered knowledge) on the left, paper (governed knowledge) on the right, hard edge, no drift. The divider is the chrome (two labels, the shield mark, progress as a fill along the seam; a fixed bottom bar on phones). The hero establishes the 50/50 split with both headlines readable at once. The close is the collapse: the seam travels to the left edge and the paper column takes the screen with the one CTA inside it.

Why the other seven lost: filmic one-shot (one owned still, no footage, no key; the argument is a comparison, not a ride), chaptered editorial (the current site already reads as a document; it also forbids the media-column hero), live surface (no real EKM surface; a painted dashboard is banned), continuous world (needs generated flight legs; not a journey through a place), typographic poster (throws away the photograph, the thirteen commands and the record), gallery (nothing here is a range of objects), rhythmic cutlist (wrong pulse for a zero-defect services brand).

## Signature move: the filing

Eight fragments, each a real place program knowledge was found to live (from the case studies), lie scattered on the night side of the peak act. As the act's `--sc-p` advances they cross the seam one by one, un-rotate and land in eight empty rows on the paper side; each row marks itself filled. When the shelf is full the seam tips from 50% to 46%, the first movement of the divider on the page. Coded in `src/app/ekm/scrollcraft-mount.tsx` off the engine's published `--sc-p`; positions are measured from the DOM so the same code files top-to-bottom on a phone. Under reduced motion the fragments are already filed. The engine is untouched.

## Fingerprint gate

Registry was empty (first build in this workspace): nothing to clear. Row appended to `scrollcraft/FINGERPRINTS.md`; "What is taken" lists the grammar, the divider chrome, the half-column scrub hero, the collapse close and the filing.

## Journey, curve, peak

```
1  Recognition  scrub push-in on the owned still (night) · h1, tagline, CTA on paper
2  Unease       the Government's own words on the night side · the SOF enterprise's need on paper (still, by design)
3  Clarity      THE PEAK · the filing · 3.4vh, the largest span by a visible margin
4  Rigor        six task areas as a two-sided ledger
5  Weight       five customers' sentences (night) · real numbers counting up (paper)
6  Reach        four networks and fourteen tools · the thirteen commands wipe in
7  Resolve      the collapse · POC, Contact CRS, the hiring event line, small print, nothing after it
```

Tell-someone sentence: *it's the site where the mess on the dark half files itself into the shelf on the light half as you scroll, and at the end the divider gives way and the shelf takes over the whole screen.*

## Score

| # | Beat | Device | Span |
|---|---|---|---|
| 1 | Recognition | `scrub` (push-in rendered from the owned photograph), greet cues, kinetic h1 | 1.3 |
| 2 | Unease | `flow` + `in` stagger | flow |
| 3 | Clarity (peak) | `pin` + bespoke filing on `--sc-p` | 3.4 |
| 4 | Rigor | `flow` + `in` ledger rows | flow |
| 5 | Weight | `pin` + `count` + overlapping quote cues (one per fifth of the act) | 2.4 |
| 6 | Reach | `flow` + `reveal` (left wipe on the command list) | flow |
| 7 | Resolve | `pin` + divider collapse on `--sc-p`, greet-and-hold heading | 1.3 |

Five device families, no family twice in a row, one scrub, no `pan` / `spotlight` / `magnet` / `drift` (all banned by the grammar). 11.6 viewport-heights at 1440×900, 12.8 at 390×844.

## Assets

Nothing generated. Hero clip rendered with ffmpeg from the owned still (crop to the operator, 12% push-in with a slight drift, 5s, 30fps), encoded with the skill's dense-GOP `encode.sh`: `public/scrollcraft/hero.mp4` (864×1080, 1.1 MB), `hero-m.mp4` (576×720, 0.7 MB), poster from the clip's first frame. Logo, twelve agency seals and the portrait are the site's own files.

## Verification (scrollcraft harness, real Chrome)

| Run | Result |
|---|---|
| Desktop 1440×900 | no dead scroll · clip keeps moving whenever on screen · all cues reach full opacity · contrast over media clears 4.5:1 at the worst frame · 0 console errors · 0 failed requests |
| Mobile 390×844 | same, all clean |
| Reduced motion | no dead scroll · no clip fetched (poster holds, filing shown settled) · contrast clean |

Contact sheets: `scrollcraft/lab/{desktop,mobile,reduced}/sheet.png` (ignored by git; regenerate with the commands in `scrollcraft/skill/references/verify.md` pointed at http://localhost:3000/ekm).

Fixed during the passes: an author `position: relative` that silently overrode the engine's sticky stage (the page ran unpinned on the first run); the split's fixed layer now publishes `data-sc-verify-state`; quote and result cues re-centred on the harness's sample points so every cue peaks; on phones the two halves are `minmax(0,1fr)` rows so they stay halves, the mark moved into the bottom bar, and the close cue sits on the heading only.

## Feel check (cold, against the desktop sheet)

Felt, one word per act: still · heavy · order · method · proof · list · settled.
Intended: recognition · unease · clarity · rigor · weight · reach · resolve.

Six of seven land. Act 6 reads as "list" rather than "reach": its texture (dense caps and a grid) is close to act 4's ledger, even though act 5 sits between them and the wipe gives it a different entrance. Left as is for this pass; the candidate fix is to make the command grid a map-like arrangement rather than a grid. The peak is the largest visual change on the sheet and holds the most scroll room; the act before it is still; the last screen stands with content on it.

## Not verified

- A real phone. Headless Chrome cannot reproduce iOS video decode, Low Power Mode or touch scrolling; the hero clip must be checked on an actual iPhone. If it shows a frozen frame, deploy `scrollcraft/skill/references/device-diag.html` beside the site first.
- Keyboard: focus order follows the DOM (hero CTA, peak shelf is inert, POC links, CTA, footer). The hero cues use greet-and-hold, a deliberate exception to "only the last act may hold": in a split stage the copy scrolls away with its own painted stage, and the harness graded it clean.

## Hard-rule check

No scroll cue, no section counters, one eyebrow on the whole page (hero), no em dashes in rendered copy, no invented numbers (every counter is a figure the site publishes), no full-frame overlay (a band scrim under the hero copy only), `transform`/`opacity`/`clip-path` only, real markup throughout, the engine untouched.
