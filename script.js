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
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  addEventListener('resize', () => { if (innerWidth >= 1024) setMenu(false); });

  const links = $$('.nav__links a');
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['tour', 'route', 'tickets', 'artist', 'contact'].forEach(id => { const s = document.getElementById(id); if (s) secObs.observe(s); });

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
        goneHint();
      }
      last = null;
    };
    area.addEventListener('pointerup', up);
    area.addEventListener('pointercancel', () => { down = false; last = null; });
    area.addEventListener('pointerleave', () => { if (finePointer) { down = false; last = null; } });
  }
  attachPainter($('.hero'), $('#heroPaint'), $('#heroHint'));
  attachPainter($('.finale'), $('#finalePaint'));
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
})();
