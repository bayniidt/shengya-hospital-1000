# Artifact Manifest

Downloaded assets are stored under `public/sites/lsmedical-com-my-17d4a969/root-8a5edab2/images/`.

Download script: `scripts/download-assets-lsmedical-com-my-17d4a969-root-8a5edab2.mjs`

## Counts
- Total assets downloaded: 66 files (after de-duplicating `%22`-suffixed duplicates).
- Images (all recovered from the live site — no generated fallbacks used): 66.
- Videos: 0 (origin has none on this page).
- Fonts: loaded via `next/font/google` (Roboto + Abhaya Libre).

## Notable assets
- Hero background: `LS-Aesthetic-Doctor-Group-Photo-2026-2-scaled.jpeg`
- Section backgrounds: `our-services-section-bg-1.jpg`, `white-textured-background.png`,
  `our-doctor-section-bg.jpg`
- Logo: `ls-main-logo.png` (+ 3 favicon crops)
- Department/service cards: `ls-medi-group-*.jpg`, `ls-home-services-*.jpg`
- Founder: `dr-neik-founder-third.png`
- Doctor portraits: `od-circle-*.png` / `od-cirle-*.png` (30), plus 2 full-body images.
- Clinic photos: `ls-aestehtic-*.jpg`, `ls-family-*.jpg`, `ls-dental-*.png`, etc.
- Map pin icon: `ico-google-map.png`

## Limitations / gaps
- Store locator (origin: SuperStoreFinder + Google Maps JS) is represented by a static
  Google Maps `iframe` embed placeholder — the live store-search/map pins are out of scope.
- Appointment form is client-only; the origin posts to a server endpoint (not replicated).
- Doctor modals have decorative social links (`#`) matching the origin's placeholder hrefs.
