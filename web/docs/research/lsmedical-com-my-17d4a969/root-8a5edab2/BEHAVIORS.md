# Behaviors

Interaction sweep results (desktop 1440 / mobile 390). No smooth-scroll library detected
(no `.lenis` / Locomotive Scroll). Scrolling is native; `html { scroll-behavior: smooth }` added.

## Scroll
- Header is transparent and overlays the hero; it does **not** shrink/change on scroll in the
  captured page (theme `data-header-resize="0"`).
- Sections are static flow content (no scroll-snap, no parallax-driven section transitions in
  the rebuilt clone). The origin used parallax background layers on about/doctors sections.

## Click
- **Header** — dropdown sub-menus on hover/focus; mobile hamburger toggles a slide-down menu.
- **Doctors** — each `.doctor-item` opens a centered modal (name/role/social + circular photo).
  `INTERACTION MODEL: click-driven` (modal open/close).
- **Our Clinics** — three pill tabs (LS AESTHETIC / LS FAMILY / LS DENTAL) switch the visible
  card panel. `INTERACTION MODEL: click-driven` (active pill purple, inactive grey `#ADADAD`).
- **WhatsApp widget** — floating button expands a contact panel with 3 chat links.
- **Appointment form** — static (client-only, no backend). Submit is prevented.

## Hover
- Nav links: white → purple (`#9B2372`) with opacity transition (0.2s linear).
- Cards (`.medical-group-item` / clinic items): lift `translate(0,-4px)` + layered shadow
  (0.3s ease-out).
- `.btn` / `.btn-purple`: opacity .8.
- Doctor portraits + names: opacity .8.

## Responsive
- Desktop 1440: 3-col cards, full nav.
- ≤1000px: nav collapses to hamburger, logo 50px, footer stacks, section title 32px.
- ≤680px: hero buttons stack, single column layout, section padding 50px/20px.
