/* ==========================================================================
   Sofia Open Art Studio Tour · interactive layer
   Mini paint studio · illustrated route · candle mode · booking builder ·
   glimpse tilt · scroll progress · cello note
   Uses window.IVO (exported by script.js) and the CONFIG block in script.js.
   ========================================================================== */
(() => {
  const IVO = window.IVO;
  if (!IVO) return;
  const { t, reduce } = IVO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const buzz = ms => { if (navigator.vibrate) try { navigator.vibrate(ms); } catch (_) {} };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ------------------------------------------------------------------------
     1. Scroll progress (brush stroke)
     ------------------------------------------------------------------------ */
  const bar = $('#progressBar');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max, 0, 1) : 0})`;
      updateMap();
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  /* ------------------------------------------------------------------------
     2. Mini paint studio
     ------------------------------------------------------------------------ */
  const cv = $('#studioCanvas');
  const studio = {};
  if (cv) {
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    const easel = cv.parentElement, empty = $('#studioEmpty');
    const undoBtn = $('#studioUndo');
    let dpr = 2, W = 0, H = 0;
    let colour = $('.swatch.is-on')?.dataset.c || '#e0263f', brush = 'm';
    let drawing = false, last = null, mid = null, travelled = 0, painted = false;
    const stack = [];
    const SIZES = { s: 3, m: 9, l: 18, splat: 9, drip: 7 };

    const fit = () => {
      const r = easel.getBoundingClientRect();
      const nw = Math.round(r.width), nh = Math.round(r.width * 3 / 4);
      if (!nw || (nw === W && nh === H)) return;
      let keep = null;
      if (W && H) { keep = document.createElement('canvas'); keep.width = cv.width; keep.height = cv.height; keep.getContext('2d').drawImage(cv, 0, 0); }
      W = nw; H = nh; dpr = Math.min(3, Math.max(Math.min(devicePixelRatio || 1, 2), 1000 / W)); cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      if (keep) ctx.drawImage(keep, 0, 0, W, H);
      stack.length = 0; undoBtn.disabled = true;
    };
    fit();
    new ResizeObserver(() => fit()).observe(easel);

    const snapshot = () => {
      try { stack.push(ctx.getImageData(0, 0, cv.width, cv.height)); } catch (_) { return; }
      if (stack.length > 20) stack.shift();
      undoBtn.disabled = false;
    };
    const markPainted = () => { if (!painted) { painted = true; empty?.classList.add('is-gone'); } };
    const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

    const drip = (x, y, w) => {
      const len = 18 + Math.random() * 55, width = Math.max(2, w * (.35 + Math.random() * .3));
      const draw = k => {
        ctx.save(); ctx.fillStyle = colour; ctx.globalAlpha = .9;
        ctx.fillRect(x - width / 2, y, width, len * k);
        ctx.beginPath(); ctx.arc(x, y + len * k, width * .75, 0, 7); ctx.fill(); ctx.restore();
      };
      if (reduce) return draw(1);
      const t0 = performance.now();
      const step = now => { const k = Math.min(1, (now - t0) / 700); draw(k * k * (3 - 2 * k)); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    };
    const dab = (x, y) => {
      if (brush === 'splat') { IVO.splat(ctx, x, y, 8 + Math.random() * 12, colour); return; }
      const w = SIZES[brush];
      ctx.save(); ctx.fillStyle = colour; ctx.globalAlpha = .95;
      ctx.beginPath(); ctx.arc(x, y, w / 2, 0, 7); ctx.fill(); ctx.restore();
      if (brush === 'drip') drip(x, y, w);
    };
    const segment = (a, b, c) => {               // smooth quadratic segment with bristle texture
      const w = SIZES[brush];
      ctx.save(); ctx.strokeStyle = colour;
      ctx.globalAlpha = .95; ctx.lineWidth = w;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(b[0], b[1], c[0], c[1]); ctx.stroke();
      if (w >= 9) {
        ctx.globalAlpha = .28; ctx.lineWidth = Math.max(1, w * .18);
        for (const o of [-.32, .3]) {
          ctx.beginPath(); ctx.moveTo(a[0] + o * w, a[1] + o * w * .5);
          ctx.quadraticCurveTo(b[0] + o * w, b[1] + o * w * .5, c[0] + o * w, c[1] + o * w * .5); ctx.stroke();
        }
      }
      ctx.restore();
    };

    cv.addEventListener('pointerdown', e => {
      if (e.button > 0) return;
      e.preventDefault();
      cv.setPointerCapture(e.pointerId);
      snapshot(); drawing = true; travelled = 0;
      last = pos(e); mid = last;
      dab(last[0], last[1]); markPainted(); buzz(6);
    });
    cv.addEventListener('pointermove', e => {
      if (!drawing) return;
      e.preventDefault();
      const p = pos(e), d = Math.hypot(p[0] - last[0], p[1] - last[1]);
      if (d < 1.5) return;
      travelled += d;
      if (brush === 'splat') {
        if (travelled > 26) { travelled = 0; IVO.splat(ctx, p[0], p[1], 6 + Math.random() * 10, colour); }
        last = p; return;
      }
      const m = [(last[0] + p[0]) / 2, (last[1] + p[1]) / 2];
      segment(mid, last, m);
      if (brush === 'drip' && travelled > 34 && Math.random() < .35) { travelled = 0; drip(p[0], p[1], SIZES.drip); }
      mid = m; last = p;
    });
    const end = () => { drawing = false; last = mid = null; };
    cv.addEventListener('pointerup', end);
    cv.addEventListener('pointercancel', end);
    cv.addEventListener('lostpointercapture', end);
    // stop the page from scrolling / zooming while painting on touch screens
    cv.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
    cv.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

    const pick = (group, btn) => {
      $$(group).forEach(b => { const on = b === btn; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', String(on)); });
    };
    $$('.swatch').forEach(b => b.addEventListener('click', () => { colour = b.dataset.c; pick('.swatch', b); buzz(4); }));
    $$('.brushbtn').forEach(b => b.addEventListener('click', () => { brush = b.dataset.b; pick('.brushbtn', b); buzz(4); }));
    // arrow keys inside the radio groups
    [['.studio__palette', '.swatch'], ['.studio__brushes', '.brushbtn']].forEach(([g, item]) => {
      $(g)?.addEventListener('keydown', e => {
        if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
        e.preventDefault();
        const items = $$(item), i = items.findIndex(b => b.classList.contains('is-on'));
        const n = items[(i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length];
        n.click(); n.focus();
      });
    });

    undoBtn.addEventListener('click', () => {
      const img = stack.pop(); if (!img) return;
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.putImageData(img, 0, 0); ctx.restore();
      undoBtn.disabled = !stack.length;
    });
    $('#studioClear').addEventListener('click', () => {
      snapshot(); ctx.clearRect(0, 0, W, H);
      painted = false; empty?.classList.remove('is-gone'); IVO.toast('studio.cleared', 1400);
    });

    const exportPNG = () => {
      const out = document.createElement('canvas');
      out.width = cv.width; out.height = cv.height;
      const o = out.getContext('2d'), s0 = out.width / 1000 * 2;
      o.fillStyle = '#f2ece0'; o.fillRect(0, 0, out.width, out.height);       // the fresh canvas
      o.globalAlpha = .05; o.strokeStyle = '#5a6470';                       // faint linen weave
      for (let x = 0; x < out.width; x += 4 * s0) { o.beginPath(); o.moveTo(x, 0); o.lineTo(x, out.height); o.stroke(); }
      for (let y = 0; y < out.height; y += 4 * s0) { o.beginPath(); o.moveTo(0, y); o.lineTo(out.width, y); o.stroke(); }
      o.globalAlpha = 1;
      o.drawImage(cv, 0, 0);
      // signature corner
      const s = out.width / 1000, pw = 300 * s, ph = 70 * s, px = out.width - pw - 18 * s, py = out.height - ph - 18 * s;
      o.fillStyle = 'rgba(14,16,19,.9)'; o.fillRect(px, py, pw, ph);
      o.strokeStyle = '#c9ced6'; o.lineWidth = 1.5 * s; o.strokeRect(px + 5 * s, py + 5 * s, pw - 10 * s, ph - 10 * s);
      o.fillStyle = '#e8ebef'; o.textAlign = 'center'; o.textBaseline = 'middle';
      o.font = `500 ${21 * s}px Cinzel, Georgia, serif`;
      o.fillText('IVOSART · Studio Walk', px + pw / 2, py + ph * .4);
      o.fillStyle = '#c9ccd1'; o.font = `italic ${18 * s}px "Cormorant Garamond", Georgia, serif`;
      o.fillText('Sofia', px + pw / 2, py + ph * .74);
      return out;
    };
    $('#studioSave').addEventListener('click', e => {
      const out = exportPNG();
      out.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob), a = document.createElement('a');
        a.href = url; a.download = 'ivosart-studio-walk-masterpiece.png';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        IVO.toast('studio.saved'); IVO.burst(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2, { n: 30, power: 10 });
      }, 'image/png');
    });
    studio.export = exportPNG;
  }

  /* ------------------------------------------------------------------------
     3. Illustrated route map
     ------------------------------------------------------------------------ */
  const map = $('#routeMap');
  const reveal = map && $('.map__reveal', map);
  const mapStops = map ? $$('.map__stop', map) : [];
  function updateMap() {
    if (!map) return;
    let p = 1;
    if (!reduce) {
      const r = map.getBoundingClientRect();
      p = clamp((innerHeight * .82 - r.top) / (innerHeight * .55), 0, 1);
    }
    reveal.style.strokeDashoffset = String(1 - p);
    mapStops.forEach(s => s.classList.toggle('is-lit', p >= +s.dataset.at - .02));
  }
  updateMap();
  if (map) {
    const card = $('#mapCard'), thumb = $('#mapThumb');
    const STOPS = [
      { k: () => `${t('map.door')} I`, n: () => 'Art Gallery Captain Nemo', d: () => t('route.s1'), img: 'assets/photos/captain-nemo-staircase' },
      { k: () => `${t('map.door')} II`, n: () => 'A02x Studio', d: () => t('route.s2'), img: null },
      { k: () => `${t('map.door')} III`, n: () => t('route.s3t'), d: () => t('route.s3'), img: 'assets/photos/punto-cellist-shishman' },
      { k: () => t('finale.kicker'), n: () => t('map.finName'), d: () => t('finale.text'), img: null }
    ];
    let open = -1;
    const fill = () => {
      if (open < 0) return;
      const s = STOPS[open];
      $('#mapKicker').textContent = s.k(); $('#mapName').textContent = s.n(); $('#mapLine').textContent = s.d();
      thumb.innerHTML = s.img
        ? `<picture><source type="image/webp" srcset="${s.img}.webp"><img src="${s.img}.jpg" alt="" width="120" height="150" loading="lazy" decoding="async"></picture>`
        : `<span class="map__thumb-paint map__thumb-paint--${open}" aria-hidden="true"></span><small>${open === 1 ? t('photo.soon') : ''}</small>`;
    };
    const show = i => {
      open = i; fill(); card.hidden = false;
      mapStops.forEach((s, k) => s.classList.toggle('is-active', k === i));
      card.classList.remove('is-in'); void card.offsetWidth; card.classList.add('is-in');
      buzz(5);
    };
    mapStops.forEach((s, i) => {
      s.addEventListener('click', () => show(i));
      s.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); } });
    });
    $('#mapClose').addEventListener('click', () => { card.hidden = true; open = -1; mapStops.forEach(s => s.classList.remove('is-active')); });
    $('#mapGo').addEventListener('click', () => {
      const target = open === 3 ? $('#studio') : $$('.stop')[open];
      if (!target) return;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      if (open < 3) setTimeout(() => IVO.openDoor(open), reduce ? 0 : 500);
    });
    document.addEventListener('langchange', fill);
  }

  /* ------------------------------------------------------------------------
     4. Captain Nemo Night candle mode
     ------------------------------------------------------------------------ */
  const veil = $('#candleVeil'), exitBtn = $('#candleExit');
  const root = document.documentElement;
  let candle = false, cx = innerWidth / 2, cy = innerHeight * .45, raf = 0;
  const place = () => { raf = 0; veil.style.setProperty('--cx', cx + 'px'); veil.style.setProperty('--cy', cy + 'px'); };
  const follow = (x, y) => { cx = x; cy = y; if (!raf) raf = requestAnimationFrame(place); };
  const onMove = e => follow(e.clientX, e.clientY);
  const onTouch = e => { const p = e.touches[0]; if (p) follow(p.clientX, p.clientY); };
  function setCandle(on, from) {
    candle = on;
    root.classList.toggle('candle', on && !reduce);
    root.classList.toggle('candle-dim', on && reduce);
    $$('.js-candle').forEach(b => b.setAttribute('aria-pressed', String(on)));
    exitBtn.hidden = !on;
    if (on) {
      if (from && from.getBoundingClientRect) { const r = from.getBoundingClientRect(); follow(r.left + r.width / 2, r.top + r.height / 2); }
      else follow(innerWidth / 2, innerHeight * .45);
      if (!reduce) { addEventListener('pointermove', onMove, { passive: true }); addEventListener('touchstart', onTouch, { passive: true }); addEventListener('touchmove', onTouch, { passive: true }); }
      IVO.toast('candle.on', 3200);
    } else {
      removeEventListener('pointermove', onMove); removeEventListener('touchstart', onTouch); removeEventListener('touchmove', onTouch);
      if (from !== 'esc' && from && from.focus) from.focus({ preventScroll: true });
    }
  }
  $$('.js-candle').forEach(b => b.addEventListener('click', () => setCandle(!candle, b)));
  exitBtn.addEventListener('click', () => setCandle(false, $('.candle-switch')));
  addEventListener('keydown', e => { if (e.key === 'Escape' && candle) setCandle(false, 'esc'); });
  window.IVO_candle = setCandle;

  /* ------------------------------------------------------------------------
     5. Booking request builder
     ------------------------------------------------------------------------ */
  const form = $('#builder');
  if (form) {
    const TIERS = { walk: { name: 'Studio Walk', price: '€40', max: 8 }, night: { name: 'Captain Nemo Night', price: '€75', max: 6 } };
    const dateIn = $('#bkDate'), guestsOut = $('#bkGuests'), nameIn = $('#bkName'), noteIn = $('#bkNote');
    const preview = $('#bkPreview'), err = $('#bkErr'), waBtn = $('#bkWa'), mailBtn = $('#bkMail');
    let guests = 2;
    const pad = n => String(n).padStart(2, '0');
    const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
    dateIn.min = today();
    const tier = () => TIERS[form.tier.value] || TIERS.walk;
    const fmtDate = v => {
      if (!v) return t('bk.dateTbd');
      const [y, m, d] = v.split('-').map(Number);
      return new Date(y, m - 1, d).toLocaleDateString(IVO.lang() === 'bg' ? 'bg-BG' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    };
    const build = () => {
      const tr = tier(), tl = form.tlang.value === 'bg' ? t('bk.bg') : t('bk.en');
      const lines = [
        t('bk.msg.hello'), '', t('bk.msg.intro'),
        `• ${t('bk.msg.evening')}: ${tr.name} (${tr.price}, ${t('bk.msg.price')})`,
        `• ${t('bk.msg.date')}: ${fmtDate(dateIn.value)}`,
        `• ${t('bk.msg.guests')}: ${guests}`,
        `• ${t('bk.msg.lang')}: ${tl}`,
        `• ${t('bk.msg.name')}: ${nameIn.value.trim() || '…'}`
      ];
      if (noteIn.value.trim()) lines.push(`• ${t('bk.msg.note')}: ${noteIn.value.trim()}`);
      lines.push('', t('bk.msg.thanks'));
      const subject = t('bk.msg.subject').replace('{tier}', tr.name).replace('{date}', dateIn.value || t('bk.dateTbd'));
      return { text: lines.join('\n'), subject };
    };
    const setGuests = n => {
      const max = tier().max;
      guests = clamp(n, 1, max);
      guestsOut.textContent = guests;
      $('[data-step="-1"]', form).disabled = guests <= 1;
      $('[data-step="1"]', form).disabled = guests >= max;
      $('#bkMax').textContent = t('bk.max').replace('{n}', max);
    };
    const channelState = () => {
      const waOn = !!CONFIG.whatsapp, mailOn = !!CONFIG.email;
      waBtn.classList.toggle('is-todo', !waOn); mailBtn.classList.toggle('is-todo', !mailOn);
      waBtn.setAttribute('aria-disabled', String(!waOn)); mailBtn.setAttribute('aria-disabled', String(!mailOn));
      $('span', waBtn).textContent = waOn ? t('bk.wa') : t('bk.waTodo');
      $('span', mailBtn).textContent = mailOn ? t('bk.mail') : t('bk.mailTodo');
      [[waBtn, waOn], [mailBtn, mailOn]].forEach(([b, on]) => { if (!on) { b.href = '#contact'; b.removeAttribute('target'); } });
      // Channels not provided yet are hidden; the first available one becomes the primary button.
      waBtn.hidden = !waOn; mailBtn.hidden = !mailOn;
      mailBtn.classList.toggle('btn--primary', !waOn); mailBtn.classList.toggle('btn--ghost', waOn);
    };
    const refresh = () => { setGuests(guests); preview.textContent = build().text; channelState(); };
    const validate = () => {
      err.textContent = '';
      if (!dateIn.value || dateIn.value < dateIn.min) { err.textContent = t('bk.errDate'); dateIn.focus(); return false; }
      if (!nameIn.value.trim()) { err.textContent = t('bk.errName'); nameIn.focus(); return false; }
      return true;
    };
    const clearErr = () => { err.textContent = ''; };   // a fixed field shouldn't keep an old error
    form.addEventListener('input', () => { clearErr(); refresh(); });
    form.addEventListener('change', () => { clearErr(); refresh(); });
    form.addEventListener('submit', e => e.preventDefault());
    $$('.stepper button', form).forEach(b => b.addEventListener('click', () => { setGuests(guests + +b.dataset.step); refresh(); buzz(4); }));
    waBtn.addEventListener('click', e => {
      if (!CONFIG.whatsapp) { e.preventDefault(); err.textContent = t('bk.todoErr'); return; }
      if (!validate()) { e.preventDefault(); return; }
      waBtn.href = IVO.wa(build().text); waBtn.target = '_blank'; waBtn.rel = 'noopener';
    });
    mailBtn.addEventListener('click', e => {
      if (!CONFIG.email) { e.preventDefault(); err.textContent = t('bk.todoErr'); return; }
      if (!validate()) { e.preventDefault(); return; }
      const m = build(); mailBtn.href = IVO.mailto(m.subject, m.text);
    });
    $('#bkCopy').addEventListener('click', async () => {
      const txt = build().text;
      try { await navigator.clipboard.writeText(txt); }
      catch (_) { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (__) {} ta.remove(); }
      err.textContent = ''; IVO.toast('bk.copied');
    });
    // ticket "Book" buttons (when they only scroll here) preselect the evening
    document.addEventListener('click', e => {
      const b = e.target.closest('.js-book[data-tier]');
      if (!b || b.getAttribute('href') !== '#contact') return;
      form.tier.value = /Night/.test(b.dataset.tier) ? 'night' : 'walk';
      refresh();
    });
    document.addEventListener('langchange', refresh);
    refresh();
    window.IVO_builder = { build, setGuests, refresh, validate, get guests() { return guests; } };
  }

  /* ------------------------------------------------------------------------
     6. Glimpses tilt: mouse on desktop, gyro on phones (permission only where required)
     ------------------------------------------------------------------------ */
  const cards = $$('.glimpse__btn');
  if (!reduce && cards.length) {
    if (IVO.finePointer) {
      cards.forEach(c => {
        c.addEventListener('pointermove', e => {
          const r = c.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
          c.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg'); c.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
          c.style.setProperty('--gx', ((x + .5) * 100).toFixed(1) + '%'); c.style.setProperty('--gy', ((y + .5) * 100).toFixed(1) + '%');
        });
        c.addEventListener('pointerleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
      });
    } else if ('DeviceOrientationEvent' in window) {
      const grid = $('#glimpses-list');
      let base = null, inView = false, pend = 0, gx = 0, gy = 0;
      new IntersectionObserver(([en]) => { inView = en.isIntersecting; if (!inView) base = null; }).observe(grid);
      const onTilt = e => {
        if (!inView || e.beta == null) return;
        if (!base) base = { b: e.beta, g: e.gamma };
        gx = clamp((e.gamma - base.g) / 25, -1, 1); gy = clamp((e.beta - base.b) / 25, -1, 1);
        if (!pend) pend = requestAnimationFrame(() => {
          pend = 0;
          grid.style.setProperty('--ry', (gx * 7).toFixed(2) + 'deg'); grid.style.setProperty('--rx', (-gy * 5).toFixed(2) + 'deg');
          grid.style.setProperty('--gx', (50 + gx * 40).toFixed(1) + '%'); grid.style.setProperty('--gy', (50 + gy * 40).toFixed(1) + '%');
        });
      };
      const start = () => addEventListener('deviceorientation', onTilt, { passive: true });
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {        // iOS: ask only on a tap
        const ask = $('#tiltAsk'); ask.hidden = false;
        ask.addEventListener('click', () => DeviceOrientationEvent.requestPermission().then(s => { if (s === 'granted') { start(); ask.hidden = true; } }).catch(() => { ask.hidden = true; }));
      } else start();                                                               // Android: no permission needed
    }
  }

  /* ------------------------------------------------------------------------
     7. The cellist: a short synthesized cello-like note, only on tap
     ------------------------------------------------------------------------ */
  let actx = null, noteI = 0;
  const NOTES = [98.0, 130.81, 146.83, 196.0, 164.81, 110.0];      // G2 C3 D3 G3 E3 A2
  function cello(btn) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
    } catch (_) { return; }
    const f = NOTES[noteI++ % NOTES.length], now = actx.currentTime, dur = 1.6;
    const out = actx.createGain(); out.gain.value = 0;
    const lp = actx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 1.2;
    lp.frequency.setValueAtTime(500, now); lp.frequency.linearRampToValueAtTime(1500, now + .18); lp.frequency.exponentialRampToValueAtTime(900, now + dur);
    const body = actx.createBiquadFilter(); body.type = 'peaking'; body.frequency.value = 260; body.gain.value = 6; body.Q.value = 1.4;
    const vib = actx.createOscillator(), vibAmt = actx.createGain();
    vib.frequency.value = 5.4; vibAmt.gain.setValueAtTime(0, now); vibAmt.gain.linearRampToValueAtTime(f * .012, now + .45);
    vib.connect(vibAmt);
    const oscs = [[-5, 'sawtooth', .5], [5, 'sawtooth', .5], [0, 'triangle', .35]].map(([cents, type, g]) => {
      const o = actx.createOscillator(), og = actx.createGain();
      o.type = type; o.frequency.value = f; o.detune.value = cents; og.gain.value = g;
      vibAmt.connect(o.frequency); o.connect(og); og.connect(lp); return o;
    });
    lp.connect(body); body.connect(out); out.connect(actx.destination);
    out.gain.setValueAtTime(0, now);
    out.gain.linearRampToValueAtTime(.22, now + .12);               // bow attack
    out.gain.linearRampToValueAtTime(.17, now + .5);
    out.gain.setValueAtTime(.17, now + dur - .6);
    out.gain.exponentialRampToValueAtTime(.0008, now + dur);        // release
    [...oscs, vib].forEach(o => { o.start(now); o.stop(now + dur + .05); });
    if (btn) { btn.classList.remove('is-playing'); void btn.offsetWidth; btn.classList.add('is-playing'); }
    buzz(10);
  }
  $$('.js-cello').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); cello(b); }));
  $$('.js-cello').forEach(b => b.addEventListener('pointerup', e => e.stopPropagation()));
  document.addEventListener('lbrender', e => {
    const lbBtn = $('.lightbox__cello'); if (lbBtn) lbBtn.hidden = !/punto-cellist/.test(e.detail.src);
  });

  /* ------------------------------------------------------------------------
     8. "Did you know?" fun-facts deck
     Tap to flip (paint splash on the back), "Another one" draws a random unseen
     fact, ‹ › step through, swipe the card sideways on touch screens.
     Text: I18N keys ff.{n}q / ff.{n}a / ff.tag.* in script.js.

     FACT_SOURCES (checked Nov 2026; also listed in README.md):
      1  Serdica / "my Rome" / 7000 BC  https://en.wikipedia.org/wiki/Serdica
                                        https://en.wikipedia.org/wiki/Sofia
      2  Motto "Raste, no ne staree"    https://en.wikipedia.org/wiki/Sofia
      3  49 springs, free mineral taps  https://en.wikipedia.org/wiki/Sofia
                                        https://en.wikipedia.org/wiki/Sofia_Central_Mineral_Baths
                                        https://www.lonelyplanet.com/points-of-interest/drinking-fountains/1307470
      4  Vitosha, first Balkan nature park (1934)  https://en.wikipedia.org/wiki/Vitosha
      5  Shishman St. namesake          https://bg.wikipedia.org/wiki/Цар_Иван_Шишман_(улица_в_София)
                                        https://www.slav.uni-sofia.bg/exist/apps/sofia-togava/pages/show.html?directory=places&document=Car_Shishman_ulica.xml
                                        https://sosofia.com/en/places/shishman-and-the-church-of-the-holy-seven-apostles/
      6  Cyrillic, third EU script 2007 https://en.wikipedia.org/wiki/Cyrillic_script
                                        http://europa.eu/rapid/press-release_SPEECH-07-330_en.pdf
      7  Maron's Thracian wine, Odyssey https://en.wikipedia.org/wiki/Maron_(mythology)
                                        https://en.wikipedia.org/wiki/Bulgarian_wine
      8  Mavrud legend                  https://en.wikipedia.org/wiki/Mavrud
      9  Melnik, smallest town, wine    https://en.wikipedia.org/wiki/Melnik,_Bulgaria
     10  Pollock, household paint/floor https://en.wikipedia.org/wiki/Jackson_Pollock
     11  Mummy brown, Burne-Jones       https://en.wikipedia.org/wiki/Mummy_brown
     12  Nemo = "no one", Nautilus organ https://en.wikipedia.org/wiki/Captain_Nemo
                                        https://en.wikipedia.org/wiki/Nautilus_(fictional_submarine)
     ------------------------------------------------------------------------ */
  const FACTS = ['sofia', 'sofia', 'sofia', 'sofia', 'shishman', 'abc', 'wine', 'wine', 'wine', 'art', 'paint', 'nemo'];
  const card = $('#factCard');
  if (card) {
    const N = FACTS.length, splash = $('#factSplash');
    const el = id => document.getElementById(id);
    let i = 0, flipped = false, bag = [], busy = false;
    const pad = n => String(n).padStart(2, '0');
    const fill = () => {
      const tag = t('ff.tag.' + FACTS[i]), num = `${pad(i + 1)} / ${N}`;
      el('factTag').textContent = el('factTag2').textContent = tag;
      el('factNum').textContent = el('factNum2').textContent = num;
      el('factQ').textContent = t(`ff.${i + 1}q`);
      el('factA').textContent = flipped ? t(`ff.${i + 1}a`) : '';
      card.setAttribute('aria-label', `${tag} ${num}. ${flipped ? t(`ff.${i + 1}a`) : t(`ff.${i + 1}q`)}`);
    };
    const clearSplash = () => {
      if (!splash) return;
      const w = splash.offsetWidth, h = splash.offsetHeight, d = Math.min(devicePixelRatio || 1, 2);
      splash.width = Math.max(1, Math.round(w * d)); splash.height = Math.max(1, Math.round(h * d));
      splash.getContext('2d').setTransform(d, 0, 0, d, 0, 0);
    };
    const flip = (x, y) => {
      flipped = !flipped;
      card.classList.toggle('is-flipped', flipped);
      card.setAttribute('aria-pressed', String(flipped));
      fill();
      if (flipped) {
        buzz(8);
        const r = card.getBoundingClientRect();
        if (x == null) { x = r.left + r.width * (.25 + Math.random() * .5); y = r.top + r.height * (.3 + Math.random() * .4); }
        if (splash) {
          clearSplash();
          const c = splash.getContext('2d'), col = IVO.BOLD[Math.floor(Math.random() * 5)];
          // splash lands where the finger was (the back face reads left-to-right once flipped)
          IVO.splat(c, clamp(x - r.left, 30, r.width - 30), clamp(y - r.top, 30, r.height - 30), 18 + Math.random() * 12, col);
          if (Math.random() < .8) IVO.splat(c, r.width * Math.random(), r.height * (.75 + Math.random() * .2), 7 + Math.random() * 6, IVO.BOLD[Math.floor(Math.random() * IVO.BOLD.length)]);
        }
        IVO.burst(x, y, { n: 14, power: 6, size: 3 });
      }
    };
    const go = (next, dir) => {
      if (busy || next === i) return;
      const swap = () => {
        i = next; flipped = false;
        card.classList.remove('is-flipped'); card.setAttribute('aria-pressed', 'false');
        clearSplash(); fill();
      };
      if (reduce) { swap(); return; }
      busy = true;
      card.style.transform = '';
      card.classList.add(dir > 0 ? 'is-out-l' : 'is-out-r');
      setTimeout(() => {
        card.classList.remove('is-out-l', 'is-out-r');
        card.classList.add('is-instant', dir > 0 ? 'is-in-r' : 'is-in-l');
        swap();
        void card.offsetWidth;
        card.classList.remove('is-instant', 'is-in-r', 'is-in-l');
        setTimeout(() => { busy = false; }, 320);
      }, 230);
    };
    const another = () => {
      if (!bag.length) bag = [...Array(N).keys()].filter(k => k !== i).sort(() => Math.random() - .5);
      go(bag.pop(), 1);
    };
    // swipe / drag
    let sx = null, sy = 0, dx = 0, dragging = false, swallow = false;
    card.addEventListener('pointerdown', e => {
      if (e.button > 0 || busy) return;
      sx = e.clientX; sy = e.clientY; dx = 0; dragging = false;
    });
    card.addEventListener('pointermove', e => {
      if (sx == null) return;
      dx = e.clientX - sx;
      if (!dragging && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(e.clientY - sy)) { dragging = true; try { card.setPointerCapture(e.pointerId); } catch (_) {} }
      if (dragging && !reduce) card.style.transform = `translateX(${dx}px) rotate(${dx / 22}deg)`;
    });
    const end = () => {
      if (sx == null) return;
      if (dragging) {
        swallow = true;
        if (Math.abs(dx) > 60) go(dx < 0 ? (i + 1) % N : (i - 1 + N) % N, dx < 0 ? 1 : -1);
        else card.style.transform = '';
      }
      sx = null; dragging = false;
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', () => { sx = null; dragging = false; card.style.transform = ''; });
    card.addEventListener('click', e => {
      if (swallow) { swallow = false; return; }
      if (busy) return;
      flip(e.detail ? e.clientX : null, e.detail ? e.clientY : null);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go((i + 1) % N, 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go((i - 1 + N) % N, -1); }
    });
    $('#factNext')?.addEventListener('click', () => go((i + 1) % N, 1));
    $('#factPrev')?.addEventListener('click', () => go((i - 1 + N) % N, -1));
    $('#factShuffle')?.addEventListener('click', another);
    document.addEventListener('langchange', fill);
    fill();
    window.IVO_facts = { go: n => go(n, 1), flip: () => flip(), another, state: () => ({ i, flipped }) };
  }

  onScroll();
})();
