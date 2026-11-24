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
vercel.json  headers for Vercel (HTML/JS/CSS always revalidate; assets cache for 1 hour)
```

Run locally: `python3 -m http.server 8080` in this folder, then open http://localhost:8080.

Deploy: import the repo into Vercel (Framework preset: **Other**, no build command, output = root). It works as-is.

## Look and feel

The site uses a contemporary-gallery palette (`:root` in `styles.css`, block `v11 · PROFESSIONAL`):

- charcoal backgrounds `#0e1013` / `#14171b` / `#1b1f24`
- ivory text `#f4f3ef` (secondary `#c9ccd1`, muted `#9aa0a8`)
- platinum lines and icons `#c9ced6` / `#e8ebef`
- a single crimson accent `#c8102e` (hover `#a30c25`, `#f0596c` for accent text on dark), used for booking buttons and small highlights

The route door pictures are gunmetal duotones. The earlier brass/steampunk look is kept under the git tag `brass-theme`.

## Page order and Play zone

Hero → Route (with the paint studio, which previews the finale) → Glimpses → Tickets → The Artist → Practical → Contact / booking → **Play** (`#play`: Escape the Gallery, History Trivia, the ticket quiz, Fun facts) → footer. The games sit below booking so they never compete with "Book"; the menu's Play links and the desktop Explore ▾ dropdown jump straight to them.

## Caching and language switch

- `index.html` loads `styles.css`, `script.js`, `interactive.js`, `escape.js` and `trivia.js` with a `?v=YYYYMMDD` query. **Bump it on every release** so phones never mix an old script with new HTML. Door images in `styles.css` carry the same query.
- The page is marked `translate="no"` / `<meta name="google" content="notranslate">` so Chrome's auto-translate can't undo the BG switch.
- EN/BG switches live in the header (44px tap targets) and at the bottom of the phone menu. Stored choice: `localStorage` `ivosart-lang` (any value other than `en`/`bg` is ignored).

## Interactive bits (`interactive.js`)

- **Mini paint studio** (finale): 8 colours, small/medium/large, splatter and drip brushes, undo, clear, and "Save my masterpiece" PNG download with an IVOSART · Studio Walk signature.
- **Illustrated route map**: hand-drawn, not to scale, I → II → III → wine & canvas. The path draws itself as you scroll, and tapping a stop opens its card.
- **Candle mode**: the nav flame or "Preview it by candlelight" on the Night ticket dims the page to a flickering candle circle. Esc or the button turns it off; with reduced motion it is a plain dim.
- **Booking request builder** (contact): evening, date, guests (max 8 / 6), language, name, and note. It builds a WhatsApp or email message from `CONFIG`; until those are filled in, it shows "to be added".
- Small delights: brush-stroke scroll progress, gallery tilt (mouse or gyro), light haptics while painting, and tapping the cello plays a soft synthesized note.
- **Steampunk route doors**: each route stop is covered by a picture of a steampunk double door (`assets/doors/door-i|ii|iii.webp` with `.jpg` fallbacks). The picture is split across the two leaves, which swing open on the seam in 3D with shading and a breath of steam. The stop numeral is real HTML text "engraved" on the blank brass plate (`v7` in `styles.css`). The doors open on tap, Enter or Space, or when they scroll into view, and close on a second tap. With reduced motion they start open, as before.
  **The door images are AI-generated decorative art, not photos of the venues.** To swap one, keep it 3:4 with the seam at the horizontal middle, then adjust `--py` (plate centre as a fraction of the image height) and `--fs` (numeral size) for that door in `styles.css`.
- **"Did you know?" deck** (between Glimpses and Tickets): 12 fun facts in EN/BG. Tap a card to flip it with a paint splash, use "Another one" for a random fact, step with ‹ ›, or swipe the card. With reduced motion it fades instead of flipping.

- **"Escape the Gallery" mini escape room** (`escape.js`, between the fun facts and Tickets): three quick puzzles, one per stop. Each one drops a brass key with a digit, and the three digits open the vault.
  - I · Porthole door: tap the two portholes and the gear cluster → key **7**.
  - II · Paint mixing: mix green (blue + yellow), orange (red + yellow), purple (red + blue) → key **2**.
  - III · Treasure order: ring → clock → lamp → cello → key **5**.
  - Vault: set the dials to **7 2 5**. You get spinning gears and steam, and "Now see it for real" scrolls to the booking form.
  - It has two hint levels per puzzle, Reset and a timer. Progress is saved in `localStorage` (`ivosart-escape`). It works with touch and keyboard (arrow keys on tabs and dials), and with reduced motion it skips the animations. All riddles are invented and make no factual claims.

- **Navigation**: the desktop nav (from 1280px) has Route, **Escape Room** (key icon, "New" tag), an **Explore ▾** dropdown (Quiz, Paint studio, Fun facts, Glimpses, Route map), Tickets, The Artist and Contact. Below 1280px the burger menu shows the main links with line icons, then a compact "Play & explore" group that fits one phone screen. Menu links close the menu and land just below the fixed header. A small "Can you escape the gallery?" teaser at the end of the route links to the game.

- **History Trivia** (`trivia.js`, after the escape room): 10 multiple-choice questions on Sofia and art history, shown one at a time with 4 shuffled options. You get instant right/wrong feedback, a short explanation and a Sources toggle with links, plus progress dots and a final score with a brass rank (Apprentice Cog → Captain of the Nautilus). It has Play again, Book the tour and an optional "Shuffle questions" switch, and the best score is saved in `localStorage` (`ivosart-trivia-best`). Keyboard: 1–4 or A–D picks an answer. It's linked from the menu's Play & explore group and the desktop Explore dropdown.

## History trivia · sources

Each answer was checked in Nov 2026. The text and links live in `trivia.js`.

| # | Question → answer | Source |
|---|---|---|
| 1 | Sofia's motto → "Raste, no ne staree" (Ever growing, never ageing) | https://en.wikipedia.org/wiki/Sofia |
| 2 | Origin of the name → the Saint Sofia Church (Greek sophia = wisdom); earlier Serdica, then Sredets | https://en.wikipedia.org/wiki/Sofia · https://en.wikipedia.org/wiki/Hagia_Sophia_Church,_Sofia |
| 3 | Oldest building in Sofia → Rotunda of St George (early 4th c., Roman baths; frescoes uncovered in the 20th c.) | https://en.wikipedia.org/wiki/Church_of_St._George,_Sofia |
| 4 | Boyana Church frescoes painted in → 1259 (World Heritage since 1979) | https://whc.unesco.org/en/list/42/ |
| 5 | Alexander Nevsky Cathedral honours → Russian soldiers who died in the Russo-Turkish War of 1877–78 (built mostly 1904–1912; dome 45 m) | https://en.wikipedia.org/wiki/Alexander_Nevsky_Cathedral,_Sofia |
| 6 | Vitosha's highest peak → Cherni Vrah, 2,290 m (Aleko Konstantinov's climb with ~300 people on 27 Aug 1895) | https://en.wikipedia.org/wiki/Cherni_Vrah |
| 7 | Bulgarian-born artist who wrapped the Reichstag → Christo (born Gabrovo 1935, studied at the Sofia Academy of Fine Arts; Reichstag 1995 after 24 years) | https://en.wikipedia.org/wiki/Christo_and_Jeanne-Claude |
| 8 | Jules Pascin, "Prince of Montparnasse", born in → Vidin, 1885 ("Pascin" is an anagram of Pincas) | https://en.wikipedia.org/wiki/Jules_Pascin |
| 9 | Ultramarine was made from → ground lapis lazuli (Afghanistan; at times as valuable as gold; synthetic from 1826) | https://en.wikipedia.org/wiki/Ultramarine |
| 10 | Who stole the Mona Lisa in 1911 → Vincenzo Peruggia, a Louvre employee (Apollinaire arrested, Picasso questioned, both cleared; returned 1914) | https://en.wikipedia.org/wiki/Mona_Lisa |

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
  email: 'usivaylo@gmail.com',        // set (Nov 2026)
  whatsapp: '',                       // still to come: international digits only, e.g. '359888123456'
  instagram: 'artgallerycaptainnemo', // set: https://www.instagram.com/artgallerycaptainnemo/
  bookingUrl: '',                     // still to come: online booking page (FareHarbor, Bokun, GetYourGuide, Calendly...)
  defaultLang: 'en'
};
```

Empty values are hidden cleanly (no "to be added" text). With no `bookingUrl`, every Book button (header, hero,
menu, sticky bar, ticket cards, trivia, escape-room "Now see it for real") scrolls to the booking request builder in
Contact; ticket buttons preselect their evening. The builder sends the prefilled request by email (and shows a
WhatsApp button once `whatsapp` is set). Adding `bookingUrl` brings back a "Book online" button and points every Book
button at that page. The static HTML in the Contact section mirrors the email and Instagram values for visitors without
JavaScript. No payments are wired.

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
