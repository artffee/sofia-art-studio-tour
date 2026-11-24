/* ==========================================================================
   >>> EDIT HERE <<<  CONTACT & BOOKING PLACEHOLDERS
   Fill these in and every button / contact card on the site updates itself.
   Leave a value as '' and the site shows a visible "to be added" placeholder
   (booking buttons then fall back to email → WhatsApp → the Contact section).
   ========================================================================== */
const CONFIG = {
  email: '',          // e.g. 'hello@your-domain.com'                 (PLACEHOLDER)
  whatsapp: '',       // international digits only, e.g. '359888123456' (PLACEHOLDER)
  instagram: '',      // Captain Nemo Instagram handle, without @      (PLACEHOLDER)
  bookingUrl: '',     // online booking page (FareHarbor, Bokun, GetYourGuide, Calendly…) (PLACEHOLDER)
  defaultLang: 'en'   // 'en' or 'bg'
};

/* ==========================================================================
   Translations (EN / BG). Proper names stay as-is.
   ========================================================================== */
const I18N = {
  en: {
    'candle.toggle': 'Candle mode', 'candle.try': 'Preview it by candlelight', 'candle.exit': 'Blow out the candle',
    'candle.on': 'Candle mode. Move your finger or cursor to light the way.',
    'map.title': 'Illustrated route, not to scale', 'map.shishman': 'Shishman St.', 'map.fin': 'Wine & canvas',
    'map.note': 'Not to scale. Drawn with a brush, not a GPS. Tap a stop.', 'map.go': 'Take me there',
    'map.s0aria': 'Door I: Art Gallery Captain Nemo', 'map.s1aria': 'Door II: A02x Studio', 'map.s2aria': 'Door III: Punto Art Bazaar, Shishman St.', 'map.s3aria': 'Finale: wine and your own canvas',
    'map.door': 'Door', 'map.finName': 'Wine & a fresh canvas',
    'studio.kicker': 'Mini paint studio', 'studio.title': 'Warm up before the real canvas',
    'studio.sub': 'Pick a colour, pick a brush, make a glorious mess. Then keep it.', 'studio.empty': 'Paint here',
    'studio.aria': 'Your painting', 'studio.colours': 'Colours', 'studio.brushes': 'Brushes',
    'studio.undo': 'Undo', 'studio.clear': 'Clear', 'studio.save': 'Save my masterpiece',
    'studio.saved': 'Saved. Frame it, obviously.', 'studio.cleared': 'Fresh canvas.',
    'col.crimson': 'Crimson', 'col.cobalt': 'Cobalt blue', 'col.teal': 'Teal', 'col.magenta': 'Magenta', 'col.ochre': 'Ochre', 'col.gold': 'Gold', 'col.ink': 'Ink black', 'col.bone': 'Bone white',
    'br.s': 'Small', 'br.m': 'Medium', 'br.l': 'Large', 'br.splat': 'Splatter', 'br.drip': 'Drip',
    'tilt.ask': 'Tilt the photos with your phone',
    'cello.aria': 'Play a cello note', 'cello.hint': 'Tap ♪ on the photo to hear the cellist.',
    'bk.kicker': 'Booking request', 'bk.evening': '1 · Choose your evening',
    'bk.walkMeta': '€40 as listed · up to 8 guests · 2.5 hours', 'bk.nightMeta': '€75 as listed · up to 6 guests · 3 hours',
    'bk.date': '2 · Preferred date', 'bk.guests': '3 · Guests', 'bk.max': 'Up to {n} guests for this evening',
    'bk.less': 'One fewer guest', 'bk.more': 'One more guest',
    'bk.lang': '4 · Tour language', 'bk.en': 'English', 'bk.bg': 'Bulgarian',
    'bk.name': '5 · Your name', 'bk.note': 'Note (optional)', 'bk.notePh': 'Birthday, couple, team event…',
    'bk.preview': 'Your message, ready to send',
    'bk.wa': 'Send via WhatsApp', 'bk.mail': 'Send via email', 'bk.copy': 'Copy message', 'bk.copied': 'Copied. Paste it wherever you like.',
    'bk.waTodo': 'WhatsApp · to be added', 'bk.mailTodo': 'Email · to be added',
    'bk.todoErr': 'This contact is still to be added. Copy the message for now.',
    'bk.errDate': 'Please pick a date (today or later).', 'bk.errName': 'Please add your name.',
    'bk.fine': 'This only prepares a message for you to send. No payment is taken here.',
    'bk.msg.hello': 'Hello Ivaylo,', 'bk.msg.intro': 'I\u2019d like to request a booking for the Sofia Open Art Studio Tour:',
    'bk.msg.evening': 'Evening', 'bk.msg.price': 'listed price', 'bk.msg.date': 'Preferred date', 'bk.msg.guests': 'Guests',
    'bk.msg.lang': 'Tour language', 'bk.msg.name': 'Name', 'bk.msg.note': 'Note', 'bk.msg.thanks': 'Thank you!',
    'bk.msg.subject': 'Booking request · {tier} · {date}', 'bk.dateTbd': '(not chosen yet)',

    'gl.kicker': 'Glimpses', 'gl.title': 'A peek behind the doors', 'gl.sub': 'Tap any photo to see it big.', 'gl.swipe': 'Swipe for more',
    "esc.kicker": "Mini game",
    "esc.title": "Escape the Gallery",
    "esc.sub": "Three doors, three puzzles, three brass keys. About three minutes.",
    "esc.keysAria": "Brass keys",
    "esc.keyN": "Key {n}: {s}",
    "esc.keyMissing": "not found yet",
    "esc.keyGot": "found, stamped {d}",
    "esc.time": "Time",
    "esc.tabsAria": "Puzzles",
    "esc.vault": "Vault",
    "esc.vaultName": "The vault",
    "esc.p1": "The captain trusts only round things: two that look out to sea and one that turns. Tap all three.",
    "esc.found": "found",
    "esc.s.portL": "Left porthole",
    "esc.s.portR": "Right porthole",
    "esc.s.gears": "Gear cluster",
    "esc.s.latch": "Iron latch",
    "esc.s.handL": "Left handle",
    "esc.s.handR": "Right handle",
    "esc.p2": "Someone drank the studio’s secondary colours! Pick two paints and mix the colour on the canvas.",
    "esc.mixTo": "Mix",
    "esc.mixBtn": "Mix it",
    "esc.mixed": "mixed",
    "esc.c.red": "Red",
    "esc.c.yellow": "Yellow",
    "esc.c.blue": "Blue",
    "esc.c.green": "Green",
    "esc.c.orange": "Orange",
    "esc.c.purple": "Purple",
    "esc.p3": "The bazaar’s treasures open in order: first what you wear on a finger, then what keeps time, then what gives light, and last what makes music.",
    "esc.inOrder": "in order",
    "esc.i.cello": "Cello",
    "esc.i.ring": "Ring",
    "esc.i.lamp": "Lamp",
    "esc.i.clock": "Clock",
    "esc.vaultLocked": "The vault needs all three brass keys. Solve doors I, II and III first.",
    "esc.vaultReady": "Each brass key is stamped with a digit. Set the dials in order I, II, III, then open the vault.",
    "esc.dial1": "Dial 1",
    "esc.dial2": "Dial 2",
    "esc.dial3": "Dial 3",
    "esc.up": "Up",
    "esc.down": "Down",
    "esc.open": "Open the vault",
    "esc.winKicker": "Vault open",
    "esc.winTitle": "You escaped the gallery!",
    "esc.yourTime": "Your time",
    "esc.winText": "The real doors are even better, with wine and a canvas waiting behind the last one.",
    "esc.real": "Now see it for real",
    "esc.again": "Play again",
    "esc.hint": "Hint",
    "esc.reset": "Reset",
    "esc.m.good": "Yes! That’s one.",
    "esc.m.nope": "Not that one. Look for something round.",
    "esc.m.key": "A brass key drops out, stamped {d}!",
    "esc.m.mixOk": "Perfect {c}!",
    "esc.m.mixPick": "Pick exactly two paints first.",
    "esc.m.mixBad": "That made a muddy mess. Try another pair.",
    "esc.m.seqOk": "Click… that one fits.",
    "esc.m.seqBad": "The lock clunks shut. Start again from the first treasure.",
    "esc.m.locked": "The vault is still locked. Find all three keys first.",
    "esc.m.wrongCode": "The dials grind but nothing moves. Check the digits on your keys.",
    "esc.m.reset": "Fresh start. The doors are locked again.",
    "esc.m.solved": "This door is already solved. Try another one.",
    "esc.h1a": "Look for circles on the door.",
    "esc.h1b": "Tap the two portholes and the gears in the middle.",
    "esc.h2a": "Each secondary colour is made from two primary colours.",
    "esc.h2b": "Green = blue + yellow, orange = red + yellow, purple = red + blue.",
    "esc.h3a": "Start with the ring.",
    "esc.h3b": "Ring, then clock, then lamp, then cello.",
    "esc.h4a": "Look at the digits stamped on your keys at the top.",
    "esc.h4b": "Set the dials to {code}.",
    "esc.h0": "Solve doors I, II and III to collect the keys.",
    "ff.kicker": "Did you know?",
    "ff.title": "Fun facts for the walk",
    "ff.sub": "Sofia, wine, paint and one famous captain. Tap a card to flip it.",
    "ff.tap": "Tap to flip",
    "ff.back": "Tap to flip back",
    "ff.another": "Another one",
    "ff.prev": "Previous fact",
    "ff.next": "Next fact",
    "ff.swipe": "Swipe the card for another",
    "ff.sources": "Sources",
    "ff.srcnote": "Checked against Wikipedia and other reputable sources. The full list is in the project README.",
    "ff.hint": "Press to reveal the answer. Use the buttons below or swipe for another fact.",
    "ff.flipped": "Answer shown",
    "ff.tag.sofia": "Sofia",
    "ff.tag.shishman": "Shishman St.",
    "ff.tag.abc": "Cyrillic",
    "ff.tag.wine": "Bulgarian wine",
    "ff.tag.art": "Abstract art",
    "ff.tag.paint": "Paint trivia",
    "ff.tag.nemo": "Captain Nemo",
    "ff.1q": "Which city did a Roman emperor call “my Rome”?",
    "ff.1a": "This one! Constantine the Great said “Serdica is my Rome”, and Serdica is Sofia’s ancient name. People have lived here since at least 7000 BC.",
    "ff.2q": "What is Sofia’s official motto?",
    "ff.2a": "“Raste, no ne staree”: Ever growing, never ageing. After a few thousand years, the city is still proving it.",
    "ff.3q": "Where in Sofia does hot water flow from the street for free?",
    "ff.3a": "Right in the centre. Sofia has 49 mineral and thermal springs, and beside the Central Mineral Baths locals fill bottles with warm spring water from public taps, day and night.",
    "ff.4q": "Which mountain on Sofia’s doorstep made history in 1934?",
    "ff.4a": "Vitosha. In 1934 it became the very first nature park in the Balkans.",
    "ff.5q": "Who is Shishman Street named after?",
    "ff.5a": "Tsar Ivan Shishman, the last ruler of the medieval Tarnovo Tsardom. Today it’s one of Sofia’s liveliest streets, full of local design, vintage shops and little bars.",
    "ff.6q": "How many alphabets does the European Union officially use?",
    "ff.6a": "Three: Latin, Greek and, since Bulgaria joined in 2007, Cyrillic.",
    "ff.7q": "What did Odysseus use to get the Cyclops drunk?",
    "ff.7a": "Dark, sweet wine from Thrace, a gift from Maron, priest of Apollo at Ismarus, in Homer’s Odyssey. Winemaking in these lands goes back to the Thracians.",
    "ff.8q": "Which Bulgarian grape is named after a lion-slayer?",
    "ff.8a": "Mavrud! Legend says Khan Krum had the vineyards destroyed, until a brave young man called Mavrud killed an escaped lion and the vines were planted again.",
    "ff.9q": "Bulgaria’s smallest town is famous for… what?",
    "ff.9a": "Wine! Melnik, home to about 385 people, has been known for its strong wine since at least 1346.",
    "ff.10q": "What paint did Jackson Pollock drip onto his canvases?",
    "ff.10a": "Ordinary household paint, poured and splashed onto canvases laid flat on the studio floor so he could work from every side.",
    "ff.11q": "Which paint colour was made from real Egyptian mummies?",
    "ff.11a": "Mummy brown! When the painter Edward Burne-Jones learned the truth in 1881, he reportedly gave his tube a ceremonial burial in the garden.",
    "ff.12q": "What does “Nemo” actually mean?",
    "ff.12a": "“No one” in Latin, a nod to Odysseus, who told the Cyclops his name was “Nobody”. Jules Verne’s Captain Nemo even kept an organ aboard the Nautilus to play in the evenings.",
    'gl.c1': 'Art Gallery Captain Nemo', 'gl.c2': 'Treasures on every shelf', 'gl.c3': 'Punto Art Bazaar, Shishman St.', 'gl.c4': 'Silver, skulls and secrets',
    'alt.stair': 'Glowing blue glass staircase with brass edges inside Art Gallery Captain Nemo, walls covered in gears and machine parts',
    'alt.cello': 'Copper robot sculpture playing a white cello outside Punto Art Bazaar on Shishman Street',
    'alt.interior': 'A shop seen from a mezzanine: olive green wall with clocks and framed pictures, jewellery cases, shelves and a steampunk lamp',
    'alt.rings': 'Wooden display box of ornate silver rings: skulls, a lion, a diving helmet and red stones',
    'lb.close': 'Close', 'lb.prev': 'Previous photo', 'lb.next': 'Next photo', 'lb.hint': 'Swipe to browse · tap to close',

    'hero.hintTouch': 'Tap the dark. Throw some paint.', 'hero.hintMouse': 'Click & drag to throw paint',
    'route.sub': 'Tap a door to knock.', 'door.knock': 'Knock, knock', 'door.aria': 'Open or close the door',
    'finale.hint': 'Go on, tap the canvas. Practice run.',
    'tickets.sub': 'Both end with paint on your hands and wine in your glass.',
    'quiz.kicker': '60-second quiz', 'quiz.title': 'Which evening are you?',
    'quiz.q1': 'Pick your lighting.', 'quiz.q1a': 'Just show me the art', 'quiz.q1b': 'Candlelight, obviously',
    'quiz.q2': 'Your ideal crowd?', 'quiz.q2a': 'Up to 8. The more, the merrier', 'quiz.q2b': 'Up to 6. Keep it intimate',
    'quiz.q3': 'How long do you want to paint?', 'quiz.q3a': 'A quick abstract, then wine', 'quiz.q3b': 'A longer session, please',
    'quiz.rWalk': 'You\u2019re a Studio Walk.', 'quiz.rWalkWhy': 'All three stops with the artist, a glass of Bulgarian wine and your own finished artwork. €40 · 2.5 hours · up to 8 guests.',
    'quiz.rNight': 'You\u2019re a Captain Nemo Night.', 'quiz.rNightWhy': 'The full tour by candlelight, wine, a longer painting session and a signed original small print to keep. €75 · 3 hours · up to 6 guests.',
    'quiz.go': 'Show me my ticket', 'quiz.again': 'Take it again',
    'faq.q7': 'Will I really leave with a painting?', 'faq.a7': 'Yes. You paint your own small abstract piece and carry it home. On Captain Nemo Night you also keep a signed original small print.',
    'egg.1': 'Steady hand.', 'egg.2': 'Bold choice of colour.', 'egg.3': 'Okay, Pollock. Save some paint for the studio.',
    'skip': 'Skip to content',
    'nav.tour': 'The Tour', 'nav.route': 'Route', 'nav.tickets': 'Tickets', 'nav.artist': 'The Artist', 'nav.contact': 'Contact',
    'nav.escape': 'Escape Room', 'nav.new': 'New', 'nav.more': 'Explore', 'nav.playk': 'Play & explore', 'nav.quiz': 'Quiz', 'nav.paint': 'Paint studio', 'nav.facts': 'Fun facts', 'nav.glimpses': 'Glimpses', 'nav.map': 'Route map', 'nav.trivia': 'History trivia',
    'triv.kicker': 'Brass brain teaser', 'triv.title': 'History Trivia', 'triv.sub': 'Ten questions on Sofia and art history. Every answer checked, every source linked.',
    'esc.teaser': 'Can you escape the gallery?', 'esc.teaserBtn': 'Try the escape room',
    'cta.book': 'Book the tour', 'cta.route': 'Peek at the route',
    'hero.kicker': 'Sofia, Bulgaria · Small groups · English & Bulgarian',
    'hero.title': 'Inside Sofia\u2019s <span>Hidden</span> Art Studios',
    'hero.sub': 'Skip the museums. Walk with a working painter through his gallery, his studio and the art bazaar on Shishman Street, then paint your own piece to take home.',
    'facts.hn': '2.5', 'facts.hours': 'hours', 'facts.doors': 'doors', 'facts.guests': 'guests', 'facts.from': 'from',
    'photo.soon': 'Photo coming soon', 'photo.portrait': 'Portrait coming soon',
    'route.kicker': 'The Route · 2.5 hours',
    'route.title': 'Three doors most visitors never open',
    'route.s1': 'A dark-luxury, Gothic Futurist gallery. See original works and hear the story behind the brand.',
    'route.s2': 'The working studio: paint, canvases and unfinished pieces. Watch how abstract expressionism is actually made.',
    'route.s3t': 'Punto Art Bazaar, Shishman St.',
    'route.s3': 'Pepi Arbov\u2019s art bazaar on one of Sofia\u2019s most charming streets, full of handmade work by Bulgarian artists.',
    'finale.kicker': 'The Finale · your turn',
    'finale.text': 'A glass of Bulgarian wine, a fresh canvas, and you paint your own small abstract piece to carry home.',
    'tickets.kicker': 'Tickets', 'tickets.title': 'Choose your evening',
    't1.l1': 'All three stops with the artist', 't1.l2': 'Art materials included', 't1.l3': 'A glass of Bulgarian wine', 't1.l4': 'Your own finished artwork',
    't1.meta': 'Up to 8 guests · 2.5 hours', 't1.cta': 'Book Studio Walk',
    't2.tag': 'After Dark',
    't2.l1': 'The full tour by candlelight', 't2.l2': 'Gothic Futurist atmosphere in the studio', 't2.l3': 'Wine and a longer painting session', 't2.l4': 'A signed original small print to keep',
    't2.meta': 'Up to 6 guests · 3 hours', 't2.cta': 'Book Captain Nemo Night',
    'tickets.note': 'Private groups, couples and corporate team events on request.',
    'artist.kicker': 'The Artist (and your guide)',
    'artist.title': 'Ivaylo, the painter behind <span>IVOSART</span>',
    'artist.p1': 'Ivaylo is the abstract expressionist painter behind IVOSART and the founder of Art Gallery Captain Nemo.',
    'artist.p2': 'This is not a guide reading from a script. You walk with the artist himself: through his gallery, into the studio where the work is made, and on to the art bazaar on Shishman Street. Every visit is led personally, in English or Bulgarian.',
    'practical.kicker': 'Practical info', 'practical.title': 'The small print (it\u2019s short)',
    'practical.inc': 'Includes', 'practical.incv': 'Studio access, all art materials, wine, your own artwork',
    'practical.dur': 'Duration', 'practical.durv': '2.5 hours',
    'practical.grp': 'Group', 'practical.grpv': 'Up to 8',
    'practical.lng': 'Languages', 'practical.lngv': 'English & Bulgarian',
    'faq.title': 'Good questions',
    'faq.q1': 'How long is the adventure?', 'faq.a1': 'The Studio Walk takes 2.5 hours. Captain Nemo Night takes 3 hours.',
    'faq.q2': 'Will it be a crowd?', 'faq.a2': 'Never. Up to 8 guests on the Studio Walk and up to 6 on Captain Nemo Night.',
    'faq.q3': 'Do I need to speak Bulgarian?', 'faq.a3': 'Not at all. Tours run in English and Bulgarian, and every visit is led personally by Ivaylo.',
    'faq.q4': 'What\u2019s in the price?', 'faq.a4': 'Studio access, all art materials, wine and your own finished artwork. Captain Nemo Night adds the candlelit atmosphere, a longer painting session and a signed original small print to keep.',
    'faq.q5': 'Where exactly do we go?', 'faq.a5': 'Three stops: Art Gallery Captain Nemo, the A02x Studio and Punto Art Bazaar on Shishman Street, ending with your own painting.',
    'faq.q6': 'Can I bring my whole team?', 'faq.a6': 'Yes. Private groups, couples and corporate team events are available on request. Write to us for private dates and group bookings.',
    'contact.kicker': 'Contact', 'contact.title': 'Ready to step inside?',
    'contact.sub': 'Book online, or write for private dates and group bookings.',
    'contact.online': 'Book online', 'contact.write': 'Write for private dates',
    'ch.email': 'Email', 'ch.todo': 'to be added',
    'foot.line': 'Art Gallery Captain Nemo · A02x Studio · Punto Art Bazaar · Sofia, Bulgaria',
    'bar.from': 'From', 'bar.meta': '2.5 h · up to 8', 'bar.book': 'Book',
    'mail.subject': 'Sofia Studio Tour booking', 'mail.body': 'Hello Ivaylo,\n\nI would like to book: {tier}\nPreferred date(s):\nNumber of guests:\nLanguage (English / Bulgarian):\n\nThank you!',
    'mail.private': 'Private date / group booking',
    'meta.title': 'Sofia Open Art Studio Tour · IVOSART Studio Walk · Art Gallery Captain Nemo'
  },
  bg: {
    'candle.toggle': 'Режим на свещи', 'candle.try': 'Вижте я на свещи', 'candle.exit': 'Духнете свещта',
    'candle.on': 'Режим на свещи. Движете пръст или курсор, за да осветите пътя.',
    'map.title': 'Илюстриран маршрут, не е в мащаб', 'map.shishman': 'ул. „Шишман“', 'map.fin': 'Вино и платно',
    'map.note': 'Не е в мащаб. Рисувано с четка, не с GPS. Докоснете спирка.', 'map.go': 'Заведи ме там',
    'map.s0aria': 'Врата I: Art Gallery Captain Nemo', 'map.s1aria': 'Врата II: A02x Studio', 'map.s2aria': 'Врата III: Punto Art Bazaar, ул. „Шишман“', 'map.s3aria': 'Финал: вино и вашето собствено платно',
    'map.door': 'Врата', 'map.finName': 'Вино и ново платно',
    'studio.kicker': 'Мини ателие', 'studio.title': 'Загрейте преди истинското платно',
    'studio.sub': 'Изберете цвят, изберете четка и направете великолепна бъркотия. После я запазете.', 'studio.empty': 'Рисувайте тук',
    'studio.aria': 'Вашата картина', 'studio.colours': 'Цветове', 'studio.brushes': 'Четки',
    'studio.undo': 'Назад', 'studio.clear': 'Изчисти', 'studio.save': 'Запази шедьовъра ми',
    'studio.saved': 'Запазено. Сложете го в рамка, разбира се.', 'studio.cleared': 'Ново платно.',
    'col.crimson': 'Пурпурно', 'col.cobalt': 'Кобалтово синьо', 'col.teal': 'Тюркоазено', 'col.magenta': 'Маджента', 'col.ochre': 'Охра', 'col.gold': 'Златно', 'col.ink': 'Мастилено черно', 'col.bone': 'Костено бяло',
    'br.s': 'Малка', 'br.m': 'Средна', 'br.l': 'Голяма', 'br.splat': 'Пръски', 'br.drip': 'Стичане',
    'tilt.ask': 'Наклонете снимките с телефона си',
    'cello.aria': 'Изсвири нота на виолончело', 'cello.hint': 'Докоснете ♪ върху снимката, за да чуете челиста.',
    'bk.kicker': 'Заявка за резервация', 'bk.evening': '1 · Изберете вечерта',
    'bk.walkMeta': 'Обявена цена €40 · до 8 гости · 2,5 часа', 'bk.nightMeta': 'Обявена цена €75 · до 6 гости · 3 часа',
    'bk.date': '2 · Желана дата', 'bk.guests': '3 · Брой гости', 'bk.max': 'До {n} гости за тази вечер',
    'bk.less': 'Един гост по-малко', 'bk.more': 'Един гост повече',
    'bk.lang': '4 · Език на тура', 'bk.en': 'Английски', 'bk.bg': 'Български',
    'bk.name': '5 · Вашето име', 'bk.note': 'Бележка (по желание)', 'bk.notePh': 'Рожден ден, двойка, фирмено събитие…',
    'bk.preview': 'Вашето съобщение, готово за изпращане',
    'bk.wa': 'Изпрати през WhatsApp', 'bk.mail': 'Изпрати по имейл', 'bk.copy': 'Копирай съобщението', 'bk.copied': 'Копирано. Поставете го където пожелаете.',
    'bk.waTodo': 'WhatsApp · предстои', 'bk.mailTodo': 'Имейл · предстои',
    'bk.todoErr': 'Този контакт предстои да бъде добавен. Засега копирайте съобщението.',
    'bk.errDate': 'Моля, изберете дата (днес или по-късно).', 'bk.errName': 'Моля, добавете името си.',
    'bk.fine': 'Това само подготвя съобщение, което да изпратите. Тук не се извършва плащане.',
    'bk.msg.hello': 'Здравей, Ивайло,', 'bk.msg.intro': 'Бих искал(а) да заявя резервация за арт тура из ателиетата на София:',
    'bk.msg.evening': 'Вечер', 'bk.msg.price': 'обявена цена', 'bk.msg.date': 'Желана дата', 'bk.msg.guests': 'Гости',
    'bk.msg.lang': 'Език на тура', 'bk.msg.name': 'Име', 'bk.msg.note': 'Бележка', 'bk.msg.thanks': 'Благодаря!',
    'bk.msg.subject': 'Заявка за резервация · {tier} · {date}', 'bk.dateTbd': '(още не е избрана)',

    'gl.kicker': 'Мигове', 'gl.title': 'Надникнете зад вратите', 'gl.sub': 'Докоснете снимка, за да я видите на цял екран.', 'gl.swipe': 'Плъзнете за още',
    "esc.kicker": "Мини игра",
    "esc.title": "Избягай от галерията",
    "esc.sub": "Три врати, три загадки, три месингови ключа. Около три минути.",
    "esc.keysAria": "Месингови ключове",
    "esc.keyN": "Ключ {n}: {s}",
    "esc.keyMissing": "още не е намерен",
    "esc.keyGot": "намерен, с цифра {d}",
    "esc.time": "Време",
    "esc.tabsAria": "Загадки",
    "esc.vault": "Трезор",
    "esc.vaultName": "Трезорът",
    "esc.p1": "Капитанът вярва само на кръгли неща: две, които гледат към морето, и едно, което се върти. Докоснете и трите.",
    "esc.found": "намерени",
    "esc.s.portL": "Ляв илюминатор",
    "esc.s.portR": "Десен илюминатор",
    "esc.s.gears": "Зъбни колела",
    "esc.s.latch": "Желязно резе",
    "esc.s.handL": "Лява дръжка",
    "esc.s.handR": "Дясна дръжка",
    "esc.p2": "Някой е изпил вторичните цветове на ателието! Изберете две бои и смесете цвета от платното.",
    "esc.mixTo": "Смесете",
    "esc.mixBtn": "Смеси",
    "esc.mixed": "смесени",
    "esc.c.red": "Червено",
    "esc.c.yellow": "Жълто",
    "esc.c.blue": "Синьо",
    "esc.c.green": "Зелено",
    "esc.c.orange": "Оранжево",
    "esc.c.purple": "Лилаво",
    "esc.p3": "Съкровищата на базара се отключват по ред: първо това, което се носи на пръста, после това, което отмерва времето, после това, което дава светлина, и накрая това, което свири.",
    "esc.inOrder": "подред",
    "esc.i.cello": "Виолончело",
    "esc.i.ring": "Пръстен",
    "esc.i.lamp": "Лампа",
    "esc.i.clock": "Часовник",
    "esc.vaultLocked": "Трезорът иска и трите месингови ключа. Първо решете врати I, II и III.",
    "esc.vaultReady": "На всеки месингов ключ има цифра. Наредете дисковете в реда I, II, III и отворете трезора.",
    "esc.dial1": "Диск 1",
    "esc.dial2": "Диск 2",
    "esc.dial3": "Диск 3",
    "esc.up": "Нагоре",
    "esc.down": "Надолу",
    "esc.open": "Отвори трезора",
    "esc.winKicker": "Трезорът е отворен",
    "esc.winTitle": "Избягахте от галерията!",
    "esc.yourTime": "Вашето време",
    "esc.winText": "Истинските врати са още по-хубави, а зад последната ви чакат вино и платно.",
    "esc.real": "Вижте го на живо",
    "esc.again": "Играй отново",
    "esc.hint": "Подсказка",
    "esc.reset": "Отначало",
    "esc.m.good": "Да! Това е едно.",
    "esc.m.nope": "Не е това. Търсете нещо кръгло.",
    "esc.m.key": "Изпада месингов ключ с цифра {d}!",
    "esc.m.mixOk": "Чудесно {c}!",
    "esc.m.mixPick": "Първо изберете точно две бои.",
    "esc.m.mixBad": "Получи се кална каша. Опитайте друга двойка.",
    "esc.m.seqOk": "Щрак… това пасва.",
    "esc.m.seqBad": "Ключалката щраква обратно. Започнете отново от първото съкровище.",
    "esc.m.locked": "Трезорът още е заключен. Първо намерете трите ключа.",
    "esc.m.wrongCode": "Дисковете скърцат, но нищо не помръдва. Проверете цифрите на ключовете.",
    "esc.m.reset": "Започваме отначало. Вратите отново са заключени.",
    "esc.m.solved": "Тази врата вече е решена. Опитайте друга.",
    "esc.h1a": "Търсете кръгове по вратата.",
    "esc.h1b": "Докоснете двата илюминатора и зъбните колела в средата.",
    "esc.h2a": "Всеки вторичен цвят се получава от два основни.",
    "esc.h2b": "Зелено = синьо + жълто, оранжево = червено + жълто, лилаво = червено + синьо.",
    "esc.h3a": "Започнете с пръстена.",
    "esc.h3b": "Пръстен, после часовник, после лампа, после виолончело.",
    "esc.h4a": "Вижте цифрите на ключовете горе.",
    "esc.h4b": "Наредете дисковете на {code}.",
    "esc.h0": "Решете врати I, II и III, за да съберете ключовете.",
    "ff.kicker": "Знаете ли, че…?",
    "ff.title": "Любопитни факти за разходката",
    "ff.sub": "София, вино, бои и един прочут капитан. Докоснете карта, за да я обърнете.",
    "ff.tap": "Докоснете, за да обърнете",
    "ff.back": "Докоснете, за да върнете",
    "ff.another": "Още един",
    "ff.prev": "Предишен факт",
    "ff.next": "Следващ факт",
    "ff.swipe": "Плъзнете картата за следващ",
    "ff.sources": "Източници",
    "ff.srcnote": "Проверени в Уикипедия и други надеждни източници. Пълният списък е в README файла на проекта.",
    "ff.hint": "Натиснете, за да видите отговора. Използвайте бутоните отдолу или плъзнете за друг факт.",
    "ff.flipped": "Отговорът е показан",
    "ff.tag.sofia": "София",
    "ff.tag.shishman": "ул. „Шишман“",
    "ff.tag.abc": "Кирилица",
    "ff.tag.wine": "Българско вино",
    "ff.tag.art": "Абстрактно изкуство",
    "ff.tag.paint": "За боите",
    "ff.tag.nemo": "Капитан Немо",
    "ff.1q": "Кой град един римски император нарича „моят Рим“?",
    "ff.1a": "Точно този! Константин Велики казва „Сердика е моят Рим“, а Сердика е древното име на София. Тук живеят хора поне от 7000 г. пр.н.е.",
    "ff.2q": "Какъв е девизът на София?",
    "ff.2a": "„Расте, но не старее“. И вече няколко хилядолетия градът го доказва.",
    "ff.3q": "Къде в София топла вода тече от улицата безплатно?",
    "ff.3a": "В самия център. София има 49 минерални и термални извора, а до Централната минерална баня хората пълнят бутилки с топла изворна вода от обществени чешми денем и нощем.",
    "ff.4q": "Коя планина на прага на София влиза в историята през 1934 г.?",
    "ff.4a": "Витоша. През 1934 г. тя става първият природен парк на Балканите.",
    "ff.5q": "На кого е кръстена улица „Шишман“?",
    "ff.5a": "На цар Иван Шишман, последния владетел на средновековното Търновско царство. Днес е от най-оживените улици в София, с местен дизайн, винтидж магазинчета и малки барове.",
    "ff.6q": "Колко азбуки използва официално Европейският съюз?",
    "ff.6a": "Три: латиница, гръцка азбука и, откакто България се присъедини през 2007 г., кирилица.",
    "ff.7q": "С какво Одисей напива циклопа?",
    "ff.7a": "С тъмно, сладко вино от Тракия, подарък от Марон, жрец на Аполон в Исмар, в „Одисея“ на Омир. Винарството по тези земи води началото си от траките.",
    "ff.8q": "Кой български сорт грозде носи името на победител на лъв?",
    "ff.8a": "Мавруд! Според легендата хан Крум заповядал да унищожат лозята, докато смелият младеж Мавруд не убил избягал лъв (в някои разкази – ламя) и лозите не били засадени отново.",
    "ff.9q": "С какво е прочут най-малкият град в България?",
    "ff.9a": "С вино! Мелник, с около 385 жители, е известен със силното си вино поне от 1346 г.",
    "ff.10q": "Каква боя Джаксън Полок е разливал по платната си?",
    "ff.10a": "Обикновена битова боя, която лее и пръска върху платна, проснати на пода в ателието, за да рисува от всички страни.",
    "ff.11q": "Коя боя се е правела от истински египетски мумии?",
    "ff.11a": "„Мумийно кафяво“! Когато художникът Едуард Бърн-Джоунс научава истината през 1881 г., той, както се разказва, тържествено погребва тубичката си в градината.",
    "ff.12q": "Какво всъщност означава „Немо“?",
    "ff.12a": "„Никой“ на латински – препратка към Одисей, който казва на циклопа, че се казва „Никой“. А капитан Немо на Жул Верн дори има орган на борда на „Наутилус“, на който свири вечер.",
    'gl.c1': 'Art Gallery Captain Nemo', 'gl.c2': 'Съкровища на всеки рафт', 'gl.c3': 'Punto Art Bazaar, ул. „Шишман“', 'gl.c4': 'Сребро, черепи и тайни',
    'alt.stair': 'Светещо синьо стъклено стълбище с месингови ръбове в Art Gallery Captain Nemo, стените са покрити със зъбни колела и машинни части',
    'alt.cello': 'Медна скулптура на робот, който свири на бяло виолончело пред Punto Art Bazaar на улица „Шишман“',
    'alt.interior': 'Магазин, гледан от мецанин: маслиненозелена стена с часовници и картини в рамки, витрини с бижута, рафтове и стиймпънк лампа',
    'alt.rings': 'Дървена витрина с изящни сребърни пръстени: черепи, лъв, водолазен шлем и червени камъни',
    'lb.close': 'Затвори', 'lb.prev': 'Предишна снимка', 'lb.next': 'Следваща снимка', 'lb.hint': 'Плъзнете за още · докоснете, за да затворите',

    'hero.hintTouch': 'Докоснете тъмното. Хвърлете боя.', 'hero.hintMouse': 'Кликнете и плъзнете, за да хвърлите боя',
    'route.sub': 'Докоснете врата, за да почукате.', 'door.knock': 'Чук-чук', 'door.aria': 'Отвори или затвори вратата',
    'finale.hint': 'Хайде, докоснете платното. За загрявка.',
    'tickets.sub': 'И двете завършват с боя по ръцете и вино в чашата.',
    'quiz.kicker': 'Тест за 60 секунди', 'quiz.title': 'Коя вечер сте вие?',
    'quiz.q1': 'Изберете осветлението.', 'quiz.q1a': 'Просто ми покажете изкуството', 'quiz.q1b': 'На свещи, разбира се',
    'quiz.q2': 'Каква компания предпочитате?', 'quiz.q2a': 'До 8 души. Колкото повече, толкова по-весело', 'quiz.q2b': 'До 6 души. По-уютно',
    'quiz.q3': 'Колко време искате да рисувате?', 'quiz.q3a': 'Бърза абстракция, после вино', 'quiz.q3b': 'По-дълга сесия, моля',
    'quiz.rWalk': 'Вие сте Studio Walk.', 'quiz.rWalkWhy': 'И трите спирки с художника, чаша българско вино и вашата завършена творба. €40 · 2,5 часа · до 8 гости.',
    'quiz.rNight': 'Вие сте Captain Nemo Night.', 'quiz.rNightWhy': 'Целият тур на свещи, вино, по-дълга сесия по рисуване и подписан оригинален малък отпечатък за спомен. €75 · 3 часа · до 6 гости.',
    'quiz.go': 'Покажи ми билета', 'quiz.again': 'Опитай пак',
    'faq.q7': 'Наистина ли ще си тръгна с картина?', 'faq.a7': 'Да. Рисувате своя малка абстрактна творба и я отнасяте у дома. На Captain Nemo Night получавате и подписан оригинален малък отпечатък.',
    'egg.1': 'Твърда ръка.', 'egg.2': 'Смел избор на цвят.', 'egg.3': 'Добре, Полък. Оставете малко боя и за ателието.',
    'skip': 'Към съдържанието',
    'nav.tour': 'Турът', 'nav.route': 'Маршрут', 'nav.tickets': 'Билети', 'nav.artist': 'Художникът', 'nav.contact': 'Контакт',
    'nav.escape': 'Ескейп стая', 'nav.new': 'Ново', 'nav.more': 'Още', 'nav.playk': 'Играй и разгледай', 'nav.quiz': 'Тест', 'nav.paint': 'Мини ателие', 'nav.facts': 'Любопитни факти', 'nav.glimpses': 'Мигове', 'nav.map': 'Карта на маршрута', 'nav.trivia': 'Викторина',
    'triv.kicker': 'Месингова главоблъсканица', 'triv.title': 'Исторически въпроси', 'triv.sub': 'Десет въпроса за София и историята на изкуството. Всеки отговор е проверен, всеки източник е посочен.',
    'esc.teaser': 'Ще избягате ли от галерията?', 'esc.teaserBtn': 'Към ескейп стаята',
    'cta.book': 'Резервирай тура', 'cta.route': 'Надникни в маршрута',
    'hero.kicker': 'София, България · Малки групи · Английски и български',
    'hero.title': 'Скритите <span>арт</span> ателиета на София',
    'hero.sub': 'Забравете музеите. Разходете се с действащ художник из неговата галерия, ателието му и арт базара на улица „Шишман“, а после нарисувайте своя собствена творба, която да отнесете у дома.',
    'facts.hn': '2,5', 'facts.hours': 'часа', 'facts.doors': 'врати', 'facts.guests': 'гости', 'facts.from': 'от',
    'photo.soon': 'Снимката предстои', 'photo.portrait': 'Портретът предстои',
    'route.kicker': 'Маршрутът · 2,5 часа',
    'route.title': 'Три врати, които повечето посетители никога не отварят',
    'route.s1': 'Тъмна и луксозна галерия в стил готически футуризъм. Разгледайте оригинални творби и чуйте историята зад марката.',
    'route.s2': 'Действащото ателие: бои, платна и недовършени картини. Вижте как всъщност се създава абстрактният експресионизъм.',
    'route.s3t': 'Punto Art Bazaar, ул. „Шишман“',
    'route.s3': 'Арт базарът на Пепи Арбов на една от най-очарователните улици в София, пълен с ръчно изработени творби на български художници.',
    'finale.kicker': 'Финалът · ваш ред е',
    'finale.text': 'Чаша българско вино, ново платно и вие рисувате своя малка абстрактна творба, която да отнесете у дома.',
    'tickets.kicker': 'Билети', 'tickets.title': 'Изберете своята вечер',
    't1.l1': 'И трите спирки заедно с художника', 't1.l2': 'Художествените материали са включени', 't1.l3': 'Чаша българско вино', 't1.l4': 'Вашата завършена творба',
    't1.meta': 'До 8 гости · 2,5 часа', 't1.cta': 'Резервирай Studio Walk',
    't2.tag': 'След мрака',
    't2.l1': 'Целият тур на свещи', 't2.l2': 'Готическо-футуристична атмосфера в ателието', 't2.l3': 'Вино и по-дълга сесия по рисуване', 't2.l4': 'Подписан оригинален малък отпечатък за спомен',
    't2.meta': 'До 6 гости · 3 часа', 't2.cta': 'Резервирай Captain Nemo Night',
    'tickets.note': 'Частни групи, двойки и корпоративни тиймбилдинг събития — по заявка.',
    'artist.kicker': 'Художникът (и вашият водач)',
    'artist.title': 'Ивайло, художникът зад <span>IVOSART</span>',
    'artist.p1': 'Ивайло е художникът абстрактен експресионист зад IVOSART и основател на Art Gallery Captain Nemo.',
    'artist.p2': 'Това не е екскурзовод, който чете заучен текст. Вървите заедно със самия художник: през неговата галерия, в ателието, където се раждат творбите, и до арт базара на улица „Шишман“. Всяко посещение се води лично от него, на английски или на български.',
    'practical.kicker': 'Практична информация', 'practical.title': 'Дребният шрифт (кратък е)',
    'practical.inc': 'Включено', 'practical.incv': 'Достъп до ателието, всички материали, вино, вашата творба',
    'practical.dur': 'Продължителност', 'practical.durv': '2,5 часа',
    'practical.grp': 'Група', 'practical.grpv': 'До 8 души',
    'practical.lng': 'Езици', 'practical.lngv': 'Английски и български',
    'faq.title': 'Добри въпроси',
    'faq.q1': 'Колко трае приключението?', 'faq.a1': 'Studio Walk продължава 2,5 часа. Captain Nemo Night продължава 3 часа.',
    'faq.q2': 'Ще има ли тълпа?', 'faq.a2': 'Никога. До 8 гости за Studio Walk и до 6 за Captain Nemo Night.',
    'faq.q3': 'Трябва ли да говоря български?', 'faq.a3': 'Изобщо не. Турът се води на английски и на български, а всяко посещение се води лично от Ивайло.',
    'faq.q4': 'Какво включва цената?', 'faq.a4': 'Достъп до ателието, всички художествени материали, вино и вашата завършена творба. Captain Nemo Night добавя атмосфера на свещи, по-дълга сесия по рисуване и подписан оригинален малък отпечатък за спомен.',
    'faq.q5': 'Къде точно отиваме?', 'faq.a5': 'Три спирки: Art Gallery Captain Nemo, A02x Studio и Punto Art Bazaar на улица „Шишман“, а накрая рисувате своя собствена картина.',
    'faq.q6': 'Мога ли да доведа целия си екип?', 'faq.a6': 'Да. Частни групи, двойки и корпоративни тиймбилдинг събития — по заявка. Пишете ни за частни дати и групови резервации.',
    'contact.kicker': 'Контакт', 'contact.title': 'Готови ли сте да влезете?',
    'contact.sub': 'Резервирайте онлайн или ни пишете за частни дати и групови резервации.',
    'contact.online': 'Резервирай онлайн', 'contact.write': 'Пиши за частна дата',
    'ch.email': 'Имейл', 'ch.todo': 'предстои',
    'foot.line': 'Art Gallery Captain Nemo · A02x Studio · Punto Art Bazaar · София, България',
    'bar.from': 'От', 'bar.meta': '2,5 ч · до 8 гости', 'bar.book': 'Резервирай',
    'mail.subject': 'Резервация – Арт тур в София', 'mail.body': 'Здравей, Ивайло,\n\nБих искал(а) да резервирам: {tier}\nЖелана дата:\nБрой гости:\nЕзик (английски / български):\n\nБлагодаря!',
    'mail.private': 'Частна дата / групова резервация',
    'meta.title': 'Арт тур из ателиетата на София · IVOSART Studio Walk · Art Gallery Captain Nemo'
  }
};

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = CONFIG.defaultLang;
  try { lang = localStorage.getItem('ivosart-lang') || lang; } catch (e) {}
  if (!I18N[lang]) lang = 'en';
  const t = (k) => (I18N[lang][k] ?? I18N.en[k] ?? '');

  /* ---------- Links built from CONFIG ---------- */
  const mailto = (subject, body) => CONFIG.email
    ? `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : '';
  const wa = (text) => CONFIG.whatsapp
    ? `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}` : '';

  function bookHref(tier) {
    const tierName = tier || 'Studio Walk / Captain Nemo Night';
    if (CONFIG.bookingUrl) return CONFIG.bookingUrl;
    const body = t('mail.body').replace('{tier}', tierName);
    return mailto(`${t('mail.subject')} — ${tierName}`, body) || wa(body) || '#contact';
  }

  function wireLinks() {
    $$('.js-book').forEach(a => {
      const href = bookHref(a.dataset.tier);
      a.href = href;
      if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; } else { a.removeAttribute('target'); }
    });
    $$('.js-write').forEach(a => {
      a.href = mailto(`${t('mail.subject')} — ${t('mail.private')}`, '') || wa(t('mail.private')) || '#contact';
      if (a.href.startsWith('https:')) { a.target = '_blank'; a.rel = 'noopener'; }
    });
    const ch = {
      email: CONFIG.email && { href: `mailto:${CONFIG.email}`, v: CONFIG.email },
      whatsapp: CONFIG.whatsapp && { href: wa(''), v: '+' + CONFIG.whatsapp.replace(/\D/g, '') },
      instagram: CONFIG.instagram && { href: `https://instagram.com/${CONFIG.instagram.replace(/^@/, '')}`, v: '@' + CONFIG.instagram.replace(/^@/, '') }
    };
    $$('.channel').forEach(a => {
      const c = ch[a.dataset.channel];
      const v = $('.channel__v', a);
      if (c) {
        a.href = c.href; v.textContent = c.v; a.classList.remove('is-placeholder');
        if (c.href.startsWith('https:')) { a.target = '_blank'; a.rel = 'noopener'; }
      } else {
        a.href = '#contact'; a.classList.add('is-placeholder');
        v.textContent = `[ ${a.dataset.channel.toUpperCase()} — ${t('ch.todo')} ]`;
      }
    });
  }

  /* ---------- Language ---------- */
  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { const v = t(el.dataset.i18n); if (v) el.textContent = v; });
    $$('[data-i18n-html]').forEach(el => { const v = t(el.dataset.i18nHtml); if (v) el.innerHTML = v; });
    $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $$('[data-i18n-alt]').forEach(el => { const v = t(el.dataset.i18nAlt); if (v) el.alt = v; });
    $$('[data-i18n-ph]').forEach(el => { const v = t(el.dataset.i18nPh); if (v) el.placeholder = v; });
    document.dispatchEvent(new CustomEvent('langchange'));
    $$('.lang__btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.title = t('meta.title');
    try { localStorage.setItem('ivosart-lang', lang); } catch (e) {}
    wireLinks();
  }
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hintTxt = $('#heroHint [data-i18n]');
  if (hintTxt && finePointer) hintTxt.dataset.i18n = 'hero.hintMouse';
  $$('.lang__btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(lang);

  /* ---------- Nav: scrolled state, mobile menu, active link ---------- */
  const nav = $('.nav'), burger = $('.burger'), menu = $('#menu');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    menu.hidden = !open;
    menu.classList.toggle('is-in', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); setMore(false); } });
  addEventListener('resize', () => { if (innerWidth >= 1280) setMenu(false); });

  /* "Explore" dropdown on desktop */
  const moreBtn = $('.nav__morebtn'), moreMenu = $('#moreMenu');
  function setMore(open, focusFirst) {
    if (!moreBtn) return;
    moreBtn.setAttribute('aria-expanded', String(open));
    moreMenu.hidden = !open;
    if (open && focusFirst) moreMenu.querySelector('a').focus();
  }
  moreBtn?.addEventListener('click', () => setMore(moreBtn.getAttribute('aria-expanded') !== 'true'));
  moreBtn?.addEventListener('keydown', e => { if (e.key === 'ArrowDown') { e.preventDefault(); setMore(true, true); } });
  moreMenu?.addEventListener('keydown', e => {
    const items = [...moreMenu.querySelectorAll('a')], i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    if (e.key === 'Escape') { setMore(false); moreBtn.focus(); }
  });
  document.addEventListener('click', e => { if (moreBtn && !e.target.closest('.nav__more')) setMore(false); });
  $('.nav__more')?.addEventListener('focusout', e => { if (!e.currentTarget.contains(e.relatedTarget)) setMore(false); });

  /* In-page jumps from the nav, menu and teasers: close menus, land below the fixed header */
  const absTop = el => { let y = 0; for (let n = el; n; n = n.offsetParent) y += n.offsetTop; return y; };
  function jump(id) {
    const el = document.getElementById(id); if (!el) return;
    const target = () => Math.max(0, absTop(el) - nav.offsetHeight - 14);
    const behavior = reduce ? 'instant' : 'smooth';
    scrollTo({ top: target(), behavior });
    history.replaceState(null, '', '#' + id);
    let done = false;
    const settle = () => {
      if (done) return; done = true;
      if (Math.abs(target() - scrollY) > 6) scrollTo({ top: target(), behavior: 'instant' });
      if (!el.hasAttribute('tabindex') && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    };
    if ('onscrollend' in window && !reduce) addEventListener('scrollend', settle, { once: true });
    setTimeout(settle, reduce ? 30 : 1400);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('.nav__links a[href^="#"], #menu a[href^="#"], a.js-jump');
    if (!a || e.defaultPrevented) return;
    const id = a.getAttribute('href').slice(1);
    if (!id || !document.getElementById(id)) return;
    e.preventDefault();
    setMenu(false); setMore(false);
    requestAnimationFrame(() => jump(id));
  });

  const links = $$('.nav__links a');
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['tour', 'route', 'escape', 'trivia', 'tickets', 'artist', 'contact'].forEach(id => { const s = document.getElementById(id); if (s) secObs.observe(s); });

  /* ---------- Reveal on scroll ---------- */
  if (reduce || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('is-in'));
  } else {
    const rObs = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); rObs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach(el => rObs.observe(el));
    requestAnimationFrame(() => $$('.hero .reveal').forEach(el => el.classList.add('is-in')));
  }

  /* ---------- Sticky mobile booking bar ---------- */
  const bar = $('#bookbar'), hero = $('.hero'), contact = $('#contact');
  let pastHero = false, atContact = false;
  const updBar = () => {
    const on = pastHero && !atContact;
    bar.classList.toggle('is-on', on);
    bar.setAttribute('aria-hidden', String(!on));
    $('.btn', bar).tabIndex = on ? 0 : -1;
  };
  new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting; updBar(); }, { threshold: 0.15 }).observe(hero);
  new IntersectionObserver(([e]) => { atContact = e.isIntersecting; updBar(); }, { threshold: 0.05 }).observe(contact);

  $('#year').textContent = new Date().getFullYear();

  /* ==========================================================================
     Procedural abstract-expressionist paintings (canvas). Seeded, so each
     canvas always paints the same composition. Decorative only, not photos.
     ========================================================================== */
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let x = Math.imul(seed ^ seed >>> 15, 1 | seed); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; }

  // Bold studio colours bursting through the gold-on-black
  const BOLD = ['#e0263f', '#2f5bea', '#17b3a3', '#e0359b', '#eaa21a', '#d4b062', '#f1ebe0'];
  const PALETTES = {
    hero:    ['#d4b062', '#e0263f', '#2f5bea', '#e0359b', '#17b3a3', '#eaa21a', '#8a2a1c', '#e9cf8e'],
    finale:  ['#e0263f', '#d4b062', '#e0359b', '#2f5bea', '#eaa21a', '#f1ebe0'],
    portrait:['#d4b062', '#2f5bea', '#e0263f', '#e9cf8e'],
    contact: ['#d4b062', '#e0263f', '#17b3a3', '#2f5bea', '#e9cf8e'],
    gallery: ['#d4b062', '#e0263f', '#8a2a1c', '#e9cf8e', '#2f5bea'],
    studio:  ['#2f5bea', '#e0359b', '#eaa21a', '#17b3a3', '#e0263f', '#f1ebe0'],
    bazaar:  ['#eaa21a', '#17b3a3', '#e0263f', '#d4b062', '#e0359b']
  };

  function paint(canvas, seed, pal, opts = {}) {
    if (!canvas) return;
    const r = rng(seed);
    const pick = () => pal[Math.floor(Math.pow(r(), 1.35) * pal.length)]; // earlier colours weigh more
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = Math.max(320, Math.round(rect.width)), h = Math.max(240, Math.round(rect.height));
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    const c = canvas.getContext('2d');
    c.scale(dpr, dpr);
    const S = Math.max(w, h), base = opts.angle ?? -.5;
    const g = c.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#0c0a09'); g.addColorStop(.5, '#15110e'); g.addColorStop(1, '#090807');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.lineCap = 'round'; c.lineJoin = 'round';

    const path = (x, y, a, len, segs, wob) => {
      const pts = [];
      for (let s = 0; s <= segs; s++) { pts.push([x, y, a]); a += (r() - .5) * wob; x += Math.cos(a) * len / segs; y += Math.sin(a) * len / segs; }
      return pts;
    };
    // 1. blurred colour fields (underpainting)
    c.filter = `blur(${Math.round(S * .02)}px)`;
    for (let i = 0; i < (opts.fields ?? 10); i++) {
      const pts = path(r() * w, r() * h, base + (r() - .5) * 1.6, S * (.3 + r() * .5), 10, .25);
      c.beginPath(); pts.forEach(([x, y], k) => k ? c.lineTo(x, y) : c.moveTo(x, y));
      c.strokeStyle = hexA(pick(), .14 + r() * .16); c.lineWidth = S * (.05 + r() * .1); c.stroke();
    }
    c.filter = 'none';
    // 2. loaded brush strokes with dense, overlapping bristles
    const strokes = opts.strokes ?? 60;
    for (let i = 0; i < strokes; i++) {
      const col = pick(), big = r() < .35;
      const a0 = base + (r() - .5) * 1.8;
      const len = S * (big ? .22 + r() * .38 : .06 + r() * .16);
      const width = big ? S * (.025 + r() * .045) : 3 + r() * 12;
      const pts = path(r() * w * 1.1 - w * .05, r() * h * 1.1 - h * .05, a0, len, 16, .22);
      const n = big ? 22 : 9, alpha = (big ? .07 : .12) + r() * .14;
      for (let b = 0; b < n; b++) {
        const off = (b / (n - 1) - .5) * width, dry = r();       // dry-brush: some bristles stop early
        const stop = Math.floor(pts.length * (dry < .3 ? .45 + r() * .4 : 1));
        c.beginPath();
        for (let k = 0; k < stop; k++) {
          const [px, py, pa] = pts[k];
          const taper = 1 - Math.pow(k / pts.length, 3) * .6;
          const nx = px + Math.cos(pa + Math.PI / 2) * off * taper, ny = py + Math.sin(pa + Math.PI / 2) * off * taper;
          k ? c.lineTo(nx, ny) : c.moveTo(nx, ny);
        }
        c.strokeStyle = hexA(col, alpha * (.6 + r() * .8));
        c.lineWidth = Math.max(1, width / n * (1.6 + r() * 1.4));
        c.stroke();
      }
    }
    // 3. gold calligraphic gestures
    for (let i = 0; i < (opts.gold ?? 4); i++) {
      const pts = path(r() * w, r() * h, base - .4 + (r() - .5), S * (.25 + r() * .3), 30, .3);
      for (let pass = 0; pass < 2; pass++) {
        c.beginPath(); pts.forEach(([x, y], k) => k ? c.lineTo(x, y) : c.moveTo(x, y));
        c.strokeStyle = pass ? hexA('#f3dc9e', .55) : hexA('#d4b062', .18);
        c.lineWidth = pass ? 1 + r() * 1.5 : 6 + r() * 6; c.stroke();
      }
    }
    // 4. splatter
    for (let i = 0; i < (opts.splat ?? 220); i++) {
      c.fillStyle = hexA(pick(), .25 + r() * .5);
      c.beginPath(); c.arc(r() * w, r() * h, r() < .9 ? .4 + r() * 1.4 : 2 + r() * 4, 0, 7); c.fill();
    }
    // 5. drips
    for (let i = 0; i < (opts.drips ?? 6); i++) {
      const x = r() * w, y = r() * h * .6, l = 40 + r() * 160;
      const dg = c.createLinearGradient(0, y, 0, y + l), col = pick();
      dg.addColorStop(0, hexA(col, .45)); dg.addColorStop(1, hexA(col, 0));
      c.fillStyle = dg; c.fillRect(x, y, 1.2 + r() * 2, l);
    }
  }
  function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a.toFixed(3)})`; }

  const paintAll = () => {
    paint($('#heroArt'), 1977, PALETTES.hero, { strokes: innerWidth < 720 ? 45 : 70, angle: -.7 });
    paint($('#finaleArt'), 305, PALETTES.finale, { strokes: 55, washes: 5, angle: -.2 });
    paint($('#portraitArt'), 42, PALETTES.portrait, { strokes: 26, washes: 4, splat: 90, gold: 3, drips: 3 });
    paint($('#contactArt'), 1300, PALETTES.contact, { strokes: 50, washes: 6 });
    $$('.door-frame .frame__art').forEach(cv => paint(cv, +cv.dataset.seed, PALETTES[cv.dataset.pal], { strokes: 34, fields: 6, splat: 160, gold: 3, angle: -.4 }));
    $$('.paint-layer').forEach(sizeLayer);
  };
  paintAll();
  let rw = innerWidth, rt;
  addEventListener('resize', () => { if (Math.abs(innerWidth - rw) < 80) return; rw = innerWidth; clearTimeout(rt); rt = setTimeout(paintAll, 250); });
  if (document.fonts) document.fonts.ready.then(() => document.documentElement.classList.add('fonts-ready'));

  /* ==========================================================================
     PLAYFUL LAYER
     ========================================================================== */
  const R = Math.random;
  const pickBold = () => BOLD[Math.floor(R() * 5)];               // the five saturated ones mostly
  const anyColour = () => BOLD[Math.floor(R() * BOLD.length)];

  // --- a single splat drawn onto any 2D context -----------------------------
  function splat(c, x, y, s, col) {
    c.save();
    c.fillStyle = col; c.strokeStyle = col; c.lineCap = 'round';
    c.globalAlpha = .9;
    c.beginPath();
    const n = 14;
    for (let i = 0; i <= n; i++) {
      const a = i / n * Math.PI * 2, rad = s * (.55 + R() * .5);
      const px = x + Math.cos(a) * rad, py = y + Math.sin(a) * rad;
      i ? c.quadraticCurveTo(x + Math.cos(a - .2) * rad * 1.15, y + Math.sin(a - .2) * rad * 1.15, px, py) : c.moveTo(px, py);
    }
    c.fill();
    const arms = 6 + Math.floor(R() * 6);
    for (let i = 0; i < arms; i++) {
      const a = R() * Math.PI * 2, len = s * (1 + R() * 2.2);
      c.lineWidth = 1 + R() * s * .18; c.globalAlpha = .75;
      c.beginPath(); c.moveTo(x + Math.cos(a) * s * .5, y + Math.sin(a) * s * .5);
      c.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); c.stroke();
      c.beginPath(); c.arc(x + Math.cos(a) * len, y + Math.sin(a) * len, 1.5 + R() * s * .14, 0, 7); c.fill();
    }
    for (let i = 0; i < 18; i++) {
      const a = R() * Math.PI * 2, d = s * (1 + R() * 3.2);
      c.globalAlpha = .4 + R() * .5;
      c.beginPath(); c.arc(x + Math.cos(a) * d, y + Math.sin(a) * d, .6 + R() * 2.6, 0, 7); c.fill();
    }
    if (R() < .7) {                                                   // a drip
      const dx = x + (R() - .5) * s, l = s * (1.5 + R() * 3);
      const g = c.createLinearGradient(0, y, 0, y + l);
      g.addColorStop(0, col); g.addColorStop(1, 'transparent');
      c.globalAlpha = .8; c.fillStyle = g; c.fillRect(dx, y, 2 + R() * 3, l);
    }
    c.restore();
  }

  // --- paint layers (hero + finale) -----------------------------------------
  function sizeLayer(cv) {
    const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    const W = Math.round(r.width * d), H = Math.round(r.height * d);
    if (cv.width === W && cv.height === H) return;
    cv.width = W; cv.height = H;
    const c = cv.getContext('2d'); c.setTransform(d, 0, 0, d, 0, 0);
  }

  // --- FX layer: flying droplets that land as stains -------------------------
  const fx = $('#fx'), fc = fx.getContext('2d');
  let parts = [], running = false;
  function sizeFx() { const d = Math.min(devicePixelRatio || 1, 1.5); fx.width = innerWidth * d; fx.height = innerHeight * d; fc.setTransform(d, 0, 0, d, 0, 0); }
  sizeFx(); addEventListener('resize', sizeFx);
  function loop() {
    fc.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => {
      p.vx *= .985; p.vy = p.vy * .985 + p.g; p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0) { if (p.land) land(p); return false; }
      fc.globalAlpha = Math.min(1, p.life * 1.6); fc.fillStyle = p.col;
      fc.beginPath();
      const sp = Math.hypot(p.vx, p.vy), ang = Math.atan2(p.vy, p.vx);
      fc.ellipse(p.x, p.y, p.r + sp * .35, p.r, ang, 0, 7); fc.fill();
      return true;
    });
    fc.globalAlpha = 1;
    if (parts.length) requestAnimationFrame(loop); else running = false;
  }
  function kick() { if (!running) { running = true; requestAnimationFrame(loop); } }
  function land(p) {                                                  // stain the canvas it fell on
    const cv = p.land, r = cv.getBoundingClientRect();
    if (p.x < r.left || p.x > r.right || p.y < r.top || p.y > r.bottom) return;
    const c = cv.getContext('2d');
    c.globalAlpha = .85; c.fillStyle = p.col;
    c.beginPath(); c.arc(p.x - r.left, p.y - r.top, p.r * 1.1, 0, 7); c.fill(); c.globalAlpha = 1;
  }
  function burst(x, y, opts = {}) {
    if (reduce) return;
    const n = opts.n ?? 26, col = opts.col, power = opts.power ?? 9;
    for (let i = 0; i < n; i++) {
      const a = R() * Math.PI * 2, v = power * (.35 + R() * .9);
      parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - power * .25, g: opts.g ?? .32,
        r: 1.5 + R() * (opts.size ?? 4.5), col: col || anyColour(), life: 1, decay: .012 + R() * .02, land: opts.land });
    }
    kick();
  }

  // --- interactive painting on hero + finale --------------------------------
  function attachPainter(area, cv, hint) {
    if (!area || !cv) return;
    let down = false, last = null, col = pickBold(), moved = 0, lastTrail = 0;
    const local = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const skip = e => e.target.closest('a,button,input,label,summary');
    const goneHint = () => hint && hint.classList.add('is-gone');
    area.addEventListener('pointerdown', e => {
      if (skip(e) || e.button > 0) return;
      sizeLayer(cv);
      down = true; moved = 0; col = pickBold(); last = local(e);
    });
    area.addEventListener('pointermove', e => {
      if (down && last) {
        const p = local(e), c = cv.getContext('2d');
        const d = Math.hypot(p[0] - last[0], p[1] - last[1]); moved += d;
        if (d < 2) return;
        c.save(); c.lineCap = 'round'; c.strokeStyle = col;
        for (let b = 0; b < 4; b++) {                                   // bristles
          const o = (b - 1.5) * 3;
          c.globalAlpha = .35 + R() * .45; c.lineWidth = Math.max(2, 14 - d * .25) * (.4 + R() * .5);
          c.beginPath(); c.moveTo(last[0] + o, last[1] + o * .4); c.lineTo(p[0] + o, p[1] + o * .4); c.stroke();
        }
        c.restore();
        if (R() < .06) splat(c, p[0], p[1], 3 + R() * 4, col);
        last = p; goneHint();
      } else if (finePointer && !reduce && !skip(e)) {                 // subtle desktop trail
        const now = performance.now();
        if (now - lastTrail > 28) {
          lastTrail = now;
          parts.push({ x: e.clientX, y: e.clientY, vx: (R() - .5) * .8, vy: R() * .6, g: .03, r: 1 + R() * 2.2,
            col: BOLD[Math.floor(now / 400) % 5], life: .7, decay: .025, land: null });
          kick();
        }
      }
    });
    const up = e => {
      if (!down) return; down = false;
      if (moved < 12 && last) {                                        // a tap: throw a splat
        const s = 12 + R() * 22, c = cv.getContext('2d');
        splat(c, last[0], last[1], s, col);
        burst(e.clientX, e.clientY, { n: 16, col, power: 7, land: cv, size: 3.5 });
        if (navigator.vibrate) try { navigator.vibrate(8); } catch (_) {}
        goneHint();
      }
      last = null;
    };
    area.addEventListener('pointerup', up);
    area.addEventListener('pointercancel', () => { down = false; last = null; });
    area.addEventListener('pointerleave', () => { if (finePointer) { down = false; last = null; } });
  }
  attachPainter($('.hero'), $('#heroPaint'), $('#heroHint'));
  // the hint politely leaves after a while even if nobody paints
  setTimeout(() => $('#heroHint')?.classList.add('is-gone'), 14000);

  // --- paint burst on every Book button -------------------------------------
  document.addEventListener('click', e => {
    const b = e.target.closest('.js-book, #quizGo');
    if (b) {
      const x = e.clientX || b.getBoundingClientRect().left + b.offsetWidth / 2;
      const y = e.clientY || b.getBoundingClientRect().top + b.offsetHeight / 2;
      burst(x, y, { n: 34, power: 11 });
    }
  });

  // --- easter egg: the logo throws paint everywhere --------------------------
  let eggs = 0, toastT;
  const toast = $('#toast');
  $('.brand').addEventListener('click', e => {
    eggs++;
    const b = $('.brand'); b.classList.remove('is-splash'); void b.offsetWidth; b.classList.add('is-splash');
    const hp = $('#heroPaint');
    for (let i = 0; i < 4 + eggs; i++) {
      setTimeout(() => burst(innerWidth * (.1 + R() * .8), innerHeight * (.2 + R() * .6), { n: 22, power: 10, land: hp }), i * 90);
    }
    if (reduce && hp) { sizeLayer(hp); const c = hp.getContext('2d'); for (let i = 0; i < 4; i++) splat(c, R() * hp.clientWidth, R() * hp.clientHeight * .6, 16, pickBold()); }
    const k = eggs >= 3 ? 'egg.3' : eggs === 2 ? 'egg.2' : 'egg.1';
    toast.textContent = t(k); toast.classList.add('is-on');
    clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('is-on'), 2600);
  });

  // --- route doors ----------------------------------------------------------
  const doors = $$('.door-frame');
  const setDoor = (d, open) => { d.classList.toggle('is-open', open); d.setAttribute('aria-expanded', String(open)); };
  window.IVO_openDoor = i => { const d = doors[i]; if (d && !d.classList.contains('is-open')) { d.classList.add('is-knock'); setTimeout(() => setDoor(d, true), reduce ? 0 : 300); } };
  if (reduce) doors.forEach(d => setDoor(d, true));
  else {
    const dObs = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) {
        const d = en.target, i = doors.indexOf(d);
        d.classList.add('is-knock');
        setTimeout(() => setDoor(d, true), 650 + (innerWidth >= 720 ? i * 260 : 0));
        dObs.unobserve(d);
      }
    }), { threshold: .6 });
    doors.forEach(d => dObs.observe(d));
  }
  doors.forEach(d => d.addEventListener('click', e => {
    const open = !d.classList.contains('is-open');
    d.classList.remove('is-knock'); void d.offsetWidth;
    if (open) { d.classList.add('is-knock'); setTimeout(() => setDoor(d, true), 300); burst(e.clientX, e.clientY, { n: 14, power: 6, size: 3 }); }
    else setDoor(d, false);
  }));

  // --- "Which evening are you?" quiz -----------------------------------------
  const quiz = $('#quiz');
  if (quiz) {
    const qs = $$('.quiz__q', quiz), dots = $$('.quiz__dots i', quiz), res = $('.quiz__result', quiz);
    let answers = [], result = null;
    const show = i => qs.forEach((q, k) => { q.hidden = k !== i; q.classList.toggle('is-on', k === i); });
    const renderResult = () => {
      if (!result) return;
      $('.quiz__verdict', res).textContent = t(result === 'night' ? 'quiz.rNight' : 'quiz.rWalk');
      $('.quiz__why', res).textContent = t(result === 'night' ? 'quiz.rNightWhy' : 'quiz.rWalkWhy');
      $('#quizGo').href = result === 'night' ? '#ticket-night' : '#ticket-walk';
    };
    qs.forEach((q, i) => $$('button', q).forEach(b => b.addEventListener('click', e => {
      answers[i] = b.dataset.v; dots[i].classList.add('is-done');
      burst(e.clientX, e.clientY, { n: 10, power: 5, size: 2.5 });
      if (i < qs.length - 1) show(i + 1);
      else {
        qs.forEach(q => { q.hidden = true; });
        result = answers.filter(v => v === 'night').length >= 2 ? 'night' : 'walk';
        renderResult(); res.hidden = false;
      }
    })));
    $('.quiz__again', quiz).addEventListener('click', () => {
      answers = []; result = null; res.hidden = true; dots.forEach(d => d.classList.remove('is-done')); show(0);
    });
    $('#quizGo').addEventListener('click', e => {
      e.preventDefault();
      const tk = $(result === 'night' ? '#ticket-night' : '#ticket-walk');
      tk.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      $$('.ticket').forEach(x => x.classList.remove('is-picked'));
      setTimeout(() => tk.classList.add('is-picked'), 400);
    });
    document.addEventListener('langchange', renderResult);
  }

  /* ==========================================================================
     Glimpses lightbox: tap to open; tap / Esc / swipe down to close;
     swipe sideways, arrow keys or the ‹ › buttons to browse.
     ========================================================================== */
  const lb = $('#lightbox');
  if (lb) {
    const items = $$('.glimpse__btn');
    const img = $('#lbImg'), webp = $('#lbWebp'), cap = $('#lbCap'), count = $('#lbCount');
    let cur = 0, opener = null, sx = 0, sy = 0, moved = false;
    const render = () => {
      const b = items[cur];
      webp.srcset = b.dataset.src + '.webp';
      img.src = b.dataset.src + '.jpg'; img.width = +b.dataset.w; img.height = +b.dataset.h;
      img.alt = t(b.dataset.alt); cap.textContent = t(b.dataset.cap);
      count.textContent = `${cur + 1} / ${items.length}`;
      document.dispatchEvent(new CustomEvent('lbrender', { detail: { index: cur, src: b.dataset.src } }));
    };
    const go = d => {
      cur = (cur + d + items.length) % items.length;
      if (reduce) return render();
      lb.classList.add('is-swapping');
      setTimeout(() => { render(); lb.classList.remove('is-swapping'); }, 180);
    };
    const open = i => {
      cur = i; opener = document.activeElement; render();
      lb.hidden = false; document.body.style.overflow = 'hidden';
      $('.lightbox__close', lb).focus({ preventScroll: true });
    };
    const close = () => {
      if (lb.hidden) return;
      lb.hidden = true; document.body.style.overflow = '';
      if (opener) opener.focus({ preventScroll: true });
    };
    items.forEach((b, i) => b.addEventListener('click', () => open(i)));
    $('.lightbox__close', lb).addEventListener('click', e => { e.stopPropagation(); close(); });
    $('.lightbox__nav--prev', lb).addEventListener('click', e => { e.stopPropagation(); go(-1); });
    $('.lightbox__nav--next', lb).addEventListener('click', e => { e.stopPropagation(); go(1); });
    lb.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; moved = false; });
    lb.addEventListener('pointerup', e => {
      if (e.target.closest('.lightbox__nav, .lightbox__close')) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { moved = true; go(dx < 0 ? 1 : -1); }
      else if (Math.abs(dy) > 60) { moved = true; close(); }
    });
    lb.addEventListener('click', e => {
      if (e.target.closest('.lightbox__nav, .lightbox__close')) return;
      if (!moved) close();
      moved = false;
    });
    addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab') {                                       // keep focus inside
        const f = $$('button', lb); const i = f.indexOf(document.activeElement);
        e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
    document.addEventListener('langchange', () => { if (!lb.hidden) render(); });
  }

  /* Small API for interactive.js */
  window.IVO = { t, burst, splat, reduce, finePointer, BOLD, mailto, wa, toast: (k, ms = 2600) => {
    toast.textContent = t(k); toast.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('is-on'), ms); },
    lang: () => lang, openDoor: i => window.IVO_openDoor(i) };
})();
