# Solar Gulf Shipping — Completion Checklist

Source: https://solargulfshipping.com
Repository: pixelrisemedia1/Solargulfshipping.com
Status: IN PROGRESS — unchecked items are not verified complete.
Rule: Check an item only after comparing against the source or testing the public deployment and recording evidence in the commit/issue/notes.

## 1. Routes and source pages
- [ ] Home
- [ ] OAuth consent / authorization page (confirm whether publicly reachable or internal only)

## 2. Images, video, documents and other media
- [ ] assets/containers.webp — verify it matches the source hero/container image and exact crop
- [ ] assets/logo.webp — verify logo artwork, transparency, sizing and header/footer variants
- [ ] assets/office.webp — verify source office/company image, crop and page placement
- [ ] Inventory all source hero, service, fleet, port, office, team, certificate and decorative images; current repo only lists three image files

## 3. Site-specific content and functionality
- [ ] Rebuild the full shipping-company home composition and every source section in original order
- [ ] Verify service descriptions, routes/regions, shipping capabilities, stats, trust claims and CTA wording against source
- [ ] Check quote/contact flow, phone/email links, social links and any shipment tracking/account destination
- [ ] Confirm whether OAuth consent is a source feature, and reproduce only if actually required by a live public flow
- [ ] Check any source logos/partner marks/certification badges and their approved usage

## Shared production acceptance checks
- [ ] Verify source route inventory against the live source and archived export; record date and evidence for each route.
- [ ] Compare each page at matching desktop, tablet and mobile viewports; record unresolved visual differences.
- [ ] Audit every image, logo, icon, video, poster, caption, document and embedded asset; verify local/independent URL, dimensions, crop, alt text and successful public loading.
- [ ] Confirm no Base44 media URLs, SDK/runtime, API, auth, storage, form or database dependency remains in the copied site or its public requests.
- [ ] Verify every navigation destination, CTA, form, menu, carousel, modal, filter and document link; no dead controls or fake success states.
- [ ] Verify accurate title/description/social metadata, favicon, headings, canonical URL plan, robots/sitemap when appropriate and not-found behavior.
- [ ] Check keyboard use, focus visibility, contrast, labels, alt text, reduced-motion, mobile touch targets and responsive reflow.
- [ ] Check spelling, dates, claims, addresses, phone numbers, email addresses, legal content and document versions against approved source material.
- [ ] Check browser console, failed network requests, broken links, 404s, image loading and performance on desktop/mobile.
- [ ] Verify GitHub Actions deployment succeeds; open the live deployed copy in a fresh session and directly load/refresh every route.
- [ ] Record final verification date, deployed commit, public URL, and any remaining limitation. Custom domain/DNS is intentionally deferred until requested.

## Verified audit notes — 2026-11-27
- [x] Inspected source homepage and its visible media: logo, office-building photo, container photo, and repeated footer logo. The source image files are already represented in the repository's local assets folder.
- [x] Wired the office and container local images into the deployed page, added accessible labels, and added the local footer logo; GitHub Pages workflow succeeded and the live copy loads both panels.
- [ ] Compare panel dimensions/crops, exact colors, typography, spacing, scroll animation and full-page screenshots against the source; image crop fidelity is still open.
- [ ] Confirm whether a separate OAuth consent route is required; it was not visible in source homepage navigation.
