# Design Tokens

Extracted from `getComputedStyle()` + the theme's custom CSS (`style.css` lines 19260+).

## Colors
| Token | Value | Usage |
|-------|-------|-------|
| Purple (primary) | `#9B2372` | `.purple-text`, tabs, buttons, links |
| Purple (alt) | `#90278E` | bullet dots, `.color-purple` |
| Purple (light) | `#D6A1D0` | doctor `p.desc` |
| Purple (dark) | `#510D50` | gradient start |
| Purple (darkest) | `#210D40` | gradient end, footer copyright |
| Yellow | `#FFF027` | doctor separator labels |
| Grey (inactive tab) | `#ADADAD` | `.inactive` tabs |
| Body text | `#414141` | default heading/body color |
| Light bg (network) | `#FFF9F9` | `.our-growing-network` |
| Light bg (clinics) | `#F3F1F5` | `.our-clinics` |
| Footer widgets | `#000` | `#footer-widgets` |

## Gradients
- Purple: `linear-gradient(180deg, #510D50 0%, #210D40 100%)` — founder, appointment bg, doctor modal.

## Typography
- Body/paragraphs/lists: **Roboto**, 16px, weight 300, line-height 1.8em.
- Headings h2/h4/h5: **Abhaya Libre** (serif), letter-spacing 0, text-transform inherit.
- h3: **Roboto**.
- `.section-title`: 40px Abhaya Libre, weight 700.
- Nav links: Roboto 18px/25.2px, weight 400.
- Hero h2: 70px (Abhaya Libre), `text-shadow: 2px 2px 5px #000`.
- Hero h3: Roboto 400, white, `letter-spacing: 1px`, `text-shadow: 2px 2px 5px #000`.
- Card h4 titles: Poppins (falls back to Roboto).

## Buttons
- `.btn`: padding 10px 20px, radius 7px, Roboto 16px weight 600, line-height 1.1em.
- `.btn-purple`: white text, `#9B2372` bg, hover opacity .8.
- Hero buttons: min-width 180px; ghost = 3px white border; solid = white bg / `#595959` text, hover `#9B2372`.

## Shadows
`.box-shadow` (layered soft shadow):
`rgba(45,45,45,.05) 0 2px 2px, rgba(49,49,49,.05) 0 4px 4px, rgba(42,42,42,.05) 0 8px 8px, rgba(32,32,32,.05) 0 16px 16px, rgba(49,49,49,.05) 0 32px 32px, rgba(35,35,35,.05) 0 64px 64px`.

## Fonts (Google Fonts)
- `Roboto: 100,300,400,500,700,900`
- `Abhaya Libre: 400,500,600,700,800`
