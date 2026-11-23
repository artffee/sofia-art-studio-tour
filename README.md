# Sofia Open Art Studio Tour · IVOSART Studio Walk

Website for a guided small-group art walk in Sofia, Bulgaria, led by painter Ivaylo (IVOSART):
**Art Gallery Captain Nemo → A02x Studio → Punto Art Bazaar on Shishman Street**, ending with a glass of
Bulgarian wine and your own small abstract painting to take home.

Two tickets: **Studio Walk** (€40, 2.5 hours, up to 8 guests) and **Captain Nemo Night** (€75, 3 hours,
up to 6 guests, by candlelight). English and Bulgarian (EN/BG toggle in the nav).

Dark-luxury, Gothic Futurist design with playful bits: tap/drag on the hero and the finale to throw paint,
route cards behind doors that swing open, a "Which evening are you?" quiz, paint bursts on Book buttons,
and an easter egg on the logo.

## Tech

Plain static HTML / CSS / JS. No build step, no dependencies (fonts come from Google Fonts).

```
index.html   page structure + SEO / Open Graph tags
styles.css   all styling
script.js    CONFIG block, EN/BG translations, animations and interactions
assets/      favicon, app icons, social preview image (og-image.jpg)
vercel.json  optional headers for Vercel
```

Run locally: `python3 -m http.server 8080` in this folder, then open http://localhost:8080.

Deploy: import the repo into Vercel (Framework preset: **Other**, no build command, output = root). It works as-is.

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

Search `index.html` for `PHOTO SLOT`. There are four:

- Art Gallery Captain Nemo, A02x Studio, Punto Art Bazaar (route cards): replace the `<canvas class="frame__art">`
  with the `<img>` line given in the comment, and delete the "Photo coming soon" label. The door animation keeps working.
- Portrait of Ivaylo (The Artist section): replace the frame `<div>` with the `<img>` line in the comment.

Put the images in `assets/photos/`.

### 3. Domain

When the site has a live address, add the canonical / `og:url` tags and make the `og:image` URL absolute
(see the comment in the `<head>` of `index.html`).

### Text and translations

All visible text lives in the `I18N` object in `script.js` (`en` and `bg`). Edit both languages together.
