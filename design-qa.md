> **Superseded (exploration-v3).** This QA documented the pixel-accurate clone of
> `getcrs.com/ekm`. The `exploration-v3` branch restyles the page to match the
> UI, typography and interactions of the rest of getcrs.com (Satoshi, black /
> cream / red palette, outlined buttons, full-screen menu, Lenis smooth scroll),
> so the geometry comparisons below no longer apply. Copy is unchanged.

# Design QA — CRS EKM clone

## Final result

**passed**

The `/ekm` implementation was compared directly against the authenticated production page at `https://getcrs.com/ekm` in the same browser, at matching viewport sizes and carousel states.

## Source truth

- Live authenticated reference: `https://getcrs.com/ekm`
- Captured HTML: `/private/tmp/crs-ekm-source.html`
- Captured CSS: `/private/tmp/crs-ekm-source.css`
- Desktop reference: `/private/tmp/crs-ekm-reference-desktop-stable.png`
- Mobile reference, quote 1 active: `/private/tmp/crs-ekm-reference-mobile-quote1.png`
- Mobile menu reference: `/private/tmp/crs-ekm-reference-mobile-menu-top-390.png`

## Final comparison inputs

- Desktop side-by-side, source left / local right: `/private/tmp/crs-ekm-compare-desktop-final.png`
- Mobile side-by-side, source left / local right: `/private/tmp/crs-ekm-compare-mobile-quote1-final.png`
- Local mobile menu: `/private/tmp/crs-ekm-local-mobile-menu-final-v2.png`

## Viewports and geometry

| Viewport | Reference page height | Local page height | Result |
| --- | ---: | ---: | --- |
| Desktop, 1440 × 900, DPR 1 | 8631 px | 8631 px | Match |
| Tablet, 1000 × 900, DPR 1 | 10612 px | 10613 px | Within fractional browser rounding |
| Mobile, 390 × 844, DPR 1 | 15701 px | 15702 px | Within fractional browser rounding |

Desktop section boundaries align within 0.04 px. Mobile section boundaries align within 1 px after the full 15,700 px document. The page has no horizontal overflow at desktop or mobile widths.

## States checked

- Default desktop page with testimonial quote 1 active.
- Default mobile page with testimonial quote 1 active.
- Mobile navigation expanded: 306 px header height, correct brand offset, close icon, links, and CTA.
- Testimonial dot 3 selected: active state and quote content update correctly.
- Sticky header and hash navigation at mobile width.

## Interaction checks

- `/` redirects to `/ekm`.
- Mobile menu opens and closes with correct `aria-expanded` state.
- Mobile menu navigation closes before scrolling, so `#capabilities` lands at the top of the viewport instead of being displaced by the collapsing menu.
- All 35 anchors have valid destinations; site-wide destinations remain linked to `getcrs.com` rather than recreating unrelated pages.
- Case-study actions open the production PDFs.
- Email, telephone, LinkedIn, career, contact, and section links are present.
- The testimonial carousel advances automatically and responds to all seven pagination controls.

## Iteration history

1. Reconstructed the page from authenticated DOM, computed styles, copy, assets, and responsive measurements.
2. Replaced approximate typography with the exact local Barlow and Barlow Condensed files used by the source.
3. Corrected desktop section heights, line wrapping, button dimensions, contract card rhythm, case-study panels, locations, contact rail, and footer.
4. Rebuilt mobile-specific metric cards, contract facts, case-study stacks, contact layout, footer mark, and menu behavior from measured source geometry.
5. Corrected tablet overflow in mission, partner, testimonial, and contact sections.
6. Re-ran full-page visual comparisons and interaction checks.

## Engineering validation

- `pnpm exec eslint src` — passed
- `pnpm exec tsc --noEmit --incremental false` — passed
- `pnpm exec next build --webpack` — passed
- Fresh browser reload — no error overlay and no broken loaded images

The only intentionally non-static visual difference is the horizontal partner-logo ticker phase, which advances continuously on both the source and the clone.
