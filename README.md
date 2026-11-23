# Sofia Open Art Studio Tour · IVOSART Studio Walk

Website for a guided small-group art walk in Sofia, Bulgaria, led by painter Ivaylo (IVOSART):
**Art Gallery Captain Nemo → A02x Studio → Punto Art Bazaar on Shishman Street**, ending with a glass of
Bulgarian wine and your own small abstract painting to take home.

Two tickets: **Studio Walk** (€40, 2.5 hours, up to 8 guests) and **Captain Nemo Night** (€75, 3 hours,
up to 6 guests, by candlelight). English and Bulgarian (EN/BG toggle in the nav).

Live: https://sofia-art-studio-tour.vercel.app

Dark-luxury, Gothic Futurist design with real venue photos, a "Glimpses" gallery with a tap-to-enlarge lightbox, and playful bits: tap/drag on the hero and the finale to throw paint,
route cards behind doors that swing open, a "Which evening are you?" quiz, paint bursts on Book buttons,
and an easter egg on the logo.

## Tech

Plain static HTML / CSS / JS. No build step, no dependencies (fonts come from Google Fonts).

```
index.html   page structure + SEO / Open Graph tags
styles.css   all styling
script.js    CONFIG block, EN/BG translations, animations and interactions
assets/      favicon, app icons, social preview image (og-image.jpg), photos/
vercel.json  optional headers for Vercel
```

Run locally: `python3 -m http.server 8080` in this folder, then open http://localhost:8080.

Deploy: import the repo into Vercel (Framework preset: **Other**, no build command, output = root). It works as-is.

## Interactive bits (`interactive.js`)

- **Mini paint studio** (finale): 8 colours, small/medium/large, splatter and drip brushes, undo, clear, and "Save my masterpiece" PNG download with an IVOSART · Studio Walk signature.
- **Illustrated route map**: hand-drawn, not to scale, I → II → III → wine & canvas. The path draws itself as you scroll, and tapping a stop opens its card.
- **Candle mode**: the nav flame or "Preview it by candlelight" on the Night ticket dims the page to a flickering candle circle. Esc or the button turns it off; with reduced motion it is a plain dim.
- **Booking request builder** (contact): evening, date, guests (max 8 / 6), language, name, and note. It builds a WhatsApp or email message from `CONFIG`; until those are filled in, it shows "to be added".
- Small delights: brush-stroke scroll progress, gallery tilt (mouse or gyro), light haptics while painting, and tapping the cello plays a soft synthesized note.
- **"Did you know?" deck** (between Glimpses and Tickets): 12 fun facts in EN/BG. Tap a card to flip it with a paint splash, use "Another one" for a random fact, step with ‹ ›, or swipe the card. With reduced motion it fades instead of flipping.

## Fun facts · sources

Each fact was checked in Nov 2026. The text lives in `script.js` (I18N keys `ff.*`), and the same list is in a comment in `interactive.js` (§8).

| # | Fact | Sources |
|---|------|---------|
| 1 | Constantine: "Serdica is my Rome"; people here since at least 7000 BC | https://en.wikipedia.org/wiki/Serdica · https://en.wikipedia.org/wiki/Sofia |
| 2 | Motto "Raste, no ne staree" (Ever growing, never ageing) | https://en.wikipedia.org/wiki/Sofia |
| 3 | 49 mineral and thermal springs; free warm mineral-water taps by the Central Mineral Baths | https://en.wikipedia.org/wiki/Sofia · https://en.wikipedia.org/wiki/Sofia_Central_Mineral_Baths · https://www.lonelyplanet.com/points-of-interest/drinking-fountains/1307470 |
| 4 | Vitosha became the first nature park in the Balkans in 1934 | https://en.wikipedia.org/wiki/Vitosha |
| 5 | Shishman St. is named after Tsar Ivan Shishman, last ruler of the Tarnovo Tsardom; it is one of Sofia's liveliest streets | https://bg.wikipedia.org/wiki/Цар_Иван_Шишман_(улица_в_София) · https://www.slav.uni-sofia.bg/exist/apps/sofia-togava/pages/show.html?directory=places&document=Car_Shishman_ulica.xml · https://sosofia.com/en/places/shishman-and-the-church-of-the-holy-seven-apostles/ |
| 6 | Cyrillic became the EU's third official script when Bulgaria joined in 2007 | https://en.wikipedia.org/wiki/Cyrillic_script · http://europa.eu/rapid/press-release_SPEECH-07-330_en.pdf |
| 7 | Odysseus got the Cyclops drunk on Maron's Thracian wine (Odyssey); winemaking here goes back to the Thracians | https://en.wikipedia.org/wiki/Maron_(mythology) · https://en.wikipedia.org/wiki/Bulgarian_wine |
| 8 | Legend of Mavrud, Khan Krum and the lion | https://en.wikipedia.org/wiki/Mavrud |
| 9 | Melnik (pop. about 385) is Bulgaria's smallest town and known for strong wine since at least 1346 | https://en.wikipedia.org/wiki/Melnik,_Bulgaria |
| 10 | Pollock poured household paint onto canvases laid on the floor | https://en.wikipedia.org/wiki/Jackson_Pollock |
| 11 | Mummy brown was made from mummies; Burne-Jones reportedly buried his tube in 1881 | https://en.wikipedia.org/wiki/Mummy_brown |
| 12 | "Nemo" is Latin for "no one" (after Odysseus's "Nobody"); the Nautilus has an organ Nemo plays in the evenings | https://en.wikipedia.org/wiki/Captain_Nemo · https://en.wikipedia.org/wiki/Nautilus_(fictional_submarine) |

## Things to fill in

### 1. Contact and booking (top of `script.js`)

```js
const CONFIG = {
  email: '',       // e.g. 'hello@your-domain.com'
  whatsapp: '',    // international digits only, e.g. '359888123456'
  instagram: '',   // Captain Nemo Instagram handle, without @
  bookingUrl: '',  // online booking page (FareHarbor, Bokun, GetYourGuide, Calendly...)
  defaultLang: 'en'
};
```

Empty values show a visible "to be added" placeholder on the site. Book buttons use `bookingUrl`, otherwise a
pre-filled email, otherwise WhatsApp, otherwise they scroll to the Contact section. No payments are wired.

### 2. Photos

Real photos live in `assets/photos/` as JPG + WebP pairs (served with `<picture>`, WebP first):

| File | Used in |
| --- | --- |
| `captain-nemo-staircase` | Route stop I (Art Gallery Captain Nemo), Glimpses, Captain Nemo Night ticket backdrop, social preview image |
| `punto-cellist-shishman` | Route stop III (Punto Art Bazaar, Shishman St.), Glimpses. The parked car's licence plate is blurred. |
| `bazaar-interior` | Glimpses ("Treasures on every shelf") |
| `silver-rings` | Glimpses ("Silver, skulls and secrets") |

Still open (search `index.html` for `PHOTO SLOT`):

- **A02x Studio** (route stop II): replace the `<canvas class="frame__art">` with the `<picture>` snippet in the comment,
  delete the "Photo coming soon" label and add `door-frame--photo` to the button. The door animation keeps working.
- **Portrait of Ivaylo** (The Artist section): replace the frame `<div>` with the `<img>` line in the comment.

To add more photos to Glimpses, copy one `<li class="glimpse">` block in `index.html`, point it at the new files,
give it a new `data-index`, and add its caption / alt text to both languages in `I18N` (`gl.c*`, `alt.*`) in `script.js`.
The crop of each photo in its frame is set with `object-position` in `styles.css` (look for `.stop--nemo`, `.g--stair`, etc.).

### 3. Domain

The site is live at https://sofia-art-studio-tour.vercel.app. It is the Vercel project `sofia-art-studio-tour`, and every push to `main` deploys automatically.
If you add a custom domain later, swap that base URL in the canonical, `og:url`, `og:image` and `twitter:image` tags in the `<head>` of `index.html`.

### Text and translations

All visible text lives in the `I18N` object in `script.js` (`en` and `bg`). Edit both languages together.
