# LS Medical Group — Page Topology

- **Source URL:** https://lsmedical.com.my/
- **Site key:** `lsmedical-com-my-17d4a969`
- **Page key:** `root-8a5edab2`
- **Destination route:** `/` (fresh-template root clone)
- **Stack of origin:** WordPress + "Lumendi" (Salient) theme + WPBakery page builder

## Section order (top → bottom)

| # | Section | Interaction model | Source container id |
|---|---------|-------------------|---------------------|
| 1 | Header | static (transparent overlay, hover dropdowns, mobile hamburger) | `header-outer` |
| 2 | Hero | static (single-slide full-screen nectar slider) | `SecHomeBanner` |
| 3 | About ("LS Medical Group" intro) | static | `fws_6a87b060a98b2` |
| 4 | About cards (3 departments) | static (hover lift) | `fws_6a87b060a9d38` |
| 5 | Founder | static | `fws_6a87b060aa20c` |
| 6 | Services (heading + 3 cards) | static (hover lift) | `fws_6a87b060aabcc` / `fws_6a87b060aad73` |
| 7 | Doctors (3 groups, modal per doctor) | click-driven (doctor modal) | `fws_6a87b060ab3cf` |
| 8 | Growing Network | static | `fws_6a87b060ac214` |
| 9 | Store locator (map) | static (placeholder map in clone) | `fws_6a87b060ac3d5` |
| 10 | Our Clinics (tabbed) | click-driven (tab switch) | `clinics` |
| 11 | Appointment (form) | static form (client-only, no backend) | `appointment` |
| 12 | Footer | static | `footer-outer` |
| 13 | WhatsApp floating widget | click-driven (expand panel) | `wa__btn_popup` |

## Layout notes
- Content max-width: `1425px` with `padding: 0 90px` (desktop).
- Full-width WPBakery rows use negative `margin-left` + `padding` to span the viewport.
- Header is transparent and overlays the hero (`position: absolute`).

## Component mapping
Components live under `src/components/sites/lsmedical-com-my-17d4a969/root-8a5edab2/`:
`Header`, `HeroSection`, `AboutSection`, `FounderSection`, `ServicesSection`,
`DoctorsSection`, `NetworkSection`, `StoreLocatorSection`, `ClinicsSection`,
`AppointmentSection`, `Footer`, `WhatsAppWidget` (+ `data.ts`).
