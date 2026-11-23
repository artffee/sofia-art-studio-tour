/* ==========================================================================
   Escape the Gallery · a tiny escape-room mini game inside the tour page
   I   Captain Nemo:  tap the three round things on the door (both portholes + gears)
   II  A02x Studio:   mix the three secondary colours (green, orange, purple)
   III Punto Bazaar:  tap the treasures in order: ring → clock → lamp → cello
   Vault:             set the dials to the digits stamped on keys I, II, III (7 2 5)
   All riddles are invented and playful. Progress: localStorage 'ivosart-escape'.
   ========================================================================== */
(() => {
  const IVO = window.IVO, root = document.getElementById('esc');
  if (!IVO || !root) return;
  const { t, reduce } = IVO;
  const $ = (s, r = root) => r.querySelector(s);
  const $$ = (s, r = root) => [...r.querySelectorAll(s)];
  const fmt = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');
  const buzz = ms => { if (navigator.vibrate) try { navigator.vibrate(ms); } catch (_) {} };
  const DIGITS = [7, 2, 5];
  const MIXES = [['green', ['blue', 'yellow'], '#2f9e4f'], ['orange', ['red', 'yellow'], '#ee7a1c'], ['purple', ['red', 'blue'], '#7d3fb3']];
  const ORDER = ['ring', 'clock', 'lamp', 'cello'];
  const KEY = 'ivosart-escape';
  const fresh = () => ({ solved: [false, false, false], found: [], round: 0, start: null, end: null, won: false, tab: 0, hints: [0, 0, 0, 0] });
  let S = fresh();
  try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (_) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (_) {} };
  let seq = 0, dials = [0, 0, 0], picked = new Set();

  const msgEl = $('#escMsg');
  const say = (k, o = {}, cls = '') => {
    msgEl.textContent = ''; msgEl.className = 'esc__msg' + (cls ? ' is-' + cls : '');
    requestAnimationFrame(() => { msgEl.textContent = fmt(t(k), o); });
  };
  const shake = el => { if (reduce || !el) return; el.classList.remove('is-shake'); void el.offsetWidth; el.classList.add('is-shake'); };
  const startClock = () => { if (!S.start) { S.start = Date.now(); save(); } };
  const elapsed = () => S.start ? Math.floor(((S.end || Date.now()) - S.start) / 1000) : 0;
  const mmss = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const timeEl = $('#escTime');
  setInterval(() => { if (S.start && !S.end) timeEl.textContent = mmss(elapsed()); }, 1000);

  /* ---------- tabs ---------- */
  const tabs = $$('.esc__tab'), panels = [0, 1, 2, 3].map(i => $('#escP' + i)), win = $('#escWin');
  const show = (i, focus) => {
    S.tab = i; save();
    tabs.forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
    panels.forEach((p, k) => { p.hidden = S.won || k !== i; });
    win.hidden = !S.won;
    $('#escHint').hidden = S.won;
    if (focus) tabs[i].focus();
  };
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => { if (S.won) { S.won = false; } show(i); });
    b.addEventListener('keydown', e => {
      const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (d) { e.preventDefault(); const n = (i + d + 4) % 4; show(n, true); }
      if (e.key === 'Home') { e.preventDefault(); show(0, true); }
      if (e.key === 'End') { e.preventDefault(); show(3, true); }
    });
  });

  /* ---------- keys + render ---------- */
  const render = () => {
    $$('.esc__key').forEach((k, i) => {
      const got = S.solved[i];
      k.classList.toggle('is-got', got);
      k.querySelector('b').textContent = got ? DIGITS[i] : '?';
      k.setAttribute('aria-label', fmt(t('esc.keyN'), { n: ['I', 'II', 'III'][i], s: got ? fmt(t('esc.keyGot'), { d: DIGITS[i] }) : t('esc.keyMissing') }));
    });
    tabs.forEach((b, i) => b.classList.toggle('is-done', i < 3 ? S.solved[i] : S.won));
    // I
    $$('.esc__spot').forEach(b => { const on = S.found.includes(b.dataset.spot) || (S.solved[0] && 'ok' in b.dataset); b.classList.toggle('is-found', on); b.setAttribute('aria-pressed', String(on)); });
    $('#escFound').textContent = S.solved[0] ? 3 : S.found.length;
    // II
    const r = Math.min(S.round, 2), m = MIXES[r];
    $('#escRound').textContent = S.solved[1] ? 3 : S.round;
    $('#escTargetName').textContent = t('esc.c.' + m[0]);
    $('#escTarget').style.setProperty('--c', m[2]);
    $('#escTarget').classList.toggle('is-done', S.solved[1]);
    $$('.esc__pot').forEach(b => { const on = picked.has(b.dataset.c); b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
    // III
    $('#escSeq').textContent = S.solved[2] ? 4 : seq;
    $$('.esc__item').forEach(b => b.classList.toggle('is-on', S.solved[2] || ORDER.indexOf(b.dataset.item) < seq));
    // vault
    const ready = S.solved.every(Boolean);
    $('#escVaultText').textContent = t(ready ? 'esc.vaultReady' : 'esc.vaultLocked');
    $('#escVault').classList.toggle('is-ready', ready);
    $('#escOpen').disabled = !ready;
    $$('.esc__dval').forEach((d, i) => { d.textContent = dials[i]; d.setAttribute('aria-valuenow', dials[i]); d.setAttribute('aria-disabled', String(!ready)); d.tabIndex = ready ? 0 : -1; });
    $$('.esc__dbtn').forEach(b => { b.disabled = !ready; });
    timeEl.textContent = mmss(elapsed());
    $('#escWinTime').textContent = mmss(elapsed());
  };
  const giveKey = i => {
    S.solved[i] = true; save(); render();
    say('esc.m.key', { d: DIGITS[i] }, 'win');
    const k = $$('.esc__key')[i]; k.classList.add('is-new'); setTimeout(() => k.classList.remove('is-new'), 1400);
    const r = k.getBoundingClientRect(); IVO.burst(r.left + r.width / 2, r.top + r.height / 2, { n: 18, power: 6, size: 3, col: '#d4b062' });
    buzz([12, 40, 12]);
  };

  /* ---------- I · round things ---------- */
  $$('.esc__spot').forEach(b => b.addEventListener('click', () => {
    if (S.solved[0]) return say('esc.m.solved');
    startClock();
    if ('ok' in b.dataset) {
      if (!S.found.includes(b.dataset.spot)) { S.found.push(b.dataset.spot); save(); buzz(8); }
      render();
      if (S.found.length >= 3) giveKey(0); else say('esc.m.good', {}, 'ok');
    } else { shake(b); say('esc.m.nope', {}, 'bad'); }
  }));

  /* ---------- II · mixing ---------- */
  $$('.esc__pot').forEach(b => b.addEventListener('click', () => {
    if (S.solved[1]) return say('esc.m.solved');
    startClock();
    const c = b.dataset.c;
    if (picked.has(c)) picked.delete(c); else { if (picked.size >= 2) picked.delete([...picked][0]); picked.add(c); }
    buzz(6); render();
  }));
  $('#escMix').addEventListener('click', () => {
    if (S.solved[1]) return say('esc.m.solved');
    startClock();
    if (picked.size !== 2) return say('esc.m.mixPick', {}, 'bad');
    const m = MIXES[S.round], ok = m[1].every(c => picked.has(c));
    picked.clear();
    if (!ok) { shake($('#escTarget')); render(); return say('esc.m.mixBad', {}, 'bad'); }
    const tg = $('#escTarget').getBoundingClientRect();
    IVO.burst(tg.left + tg.width / 2, tg.top + tg.height / 2, { n: 14, power: 5, size: 3, col: m[2] });
    const name = t('esc.c.' + m[0]);
    S.round++; save();
    if (S.round >= 3) giveKey(1); else { render(); say('esc.m.mixOk', { c: name.toLowerCase() }, 'ok'); }
  });

  /* ---------- III · order ---------- */
  $$('.esc__item').forEach(b => b.addEventListener('click', () => {
    if (S.solved[2]) return say('esc.m.solved');
    startClock();
    if (b.dataset.item === ORDER[seq]) {
      seq++; buzz(8);
      if (seq >= 4) { seq = 0; giveKey(2); } else { render(); say('esc.m.seqOk', {}, 'ok'); }
    } else { seq = 0; render(); shake($('.esc__items')); say('esc.m.seqBad', {}, 'bad'); }
  }));

  /* ---------- vault ---------- */
  const setDial = (i, d) => { dials[i] = (dials[i] + d + 10) % 10; render(); buzz(4); };
  $$('.esc__dbtn').forEach(b => b.addEventListener('click', () => setDial(+b.dataset.d, +b.dataset.step)));
  $$('.esc__dval').forEach(el => el.addEventListener('keydown', e => {
    const i = +el.dataset.d;
    if (el.getAttribute('aria-disabled') === 'true') return;
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { e.preventDefault(); setDial(i, 1); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { e.preventDefault(); setDial(i, -1); }
    else if (/^[0-9]$/.test(e.key)) { e.preventDefault(); dials[i] = +e.key; render(); }
  }));
  $('#escOpen').addEventListener('click', () => {
    if (!S.solved.every(Boolean)) return say('esc.m.locked', {}, 'bad');
    if (dials.join('') !== DIGITS.join('')) { shake($('#escVault')); return say('esc.m.wrongCode', {}, 'bad'); }
    S.end = S.end || Date.now(); S.won = true; save();
    $('#escVault').classList.add('is-open');
    setTimeout(() => {
      render(); show(3);
      win.classList.remove('is-play'); void win.offsetWidth; win.classList.add('is-play');
      win.focus({ preventScroll: true });
      const r = win.getBoundingClientRect();
      IVO.burst(r.left + r.width / 2, r.top + 60, { n: 40, power: 10 });
      buzz([20, 60, 20, 60, 40]);
      msgEl.textContent = '';
    }, reduce ? 0 : 900);
  });

  /* ---------- hints / reset / win buttons ---------- */
  const HINTS = [['esc.h1a', 'esc.h1b'], ['esc.h2a', 'esc.h2b'], ['esc.h3a', 'esc.h3b'], ['esc.h4a', 'esc.h4b']];
  $('#escHint').addEventListener('click', () => {
    const i = S.tab;
    if (i === 3 && !S.solved.every(Boolean)) return say('esc.h0', {}, 'hint');
    const n = Math.min(S.hints[i] || 0, 1);
    S.hints[i] = n + 1; save();
    say(HINTS[i][n], { code: DIGITS.join(' ') }, 'hint');
  });
  const reset = () => {
    S = fresh(); seq = 0; dials = [0, 0, 0]; picked.clear(); save();
    $('#escVault').classList.remove('is-open'); win.classList.remove('is-play');
    render(); show(0); say('esc.m.reset');
  };
  $('#escReset').addEventListener('click', reset);
  $('#escAgain').addEventListener('click', () => { reset(); tabs[0].focus(); });
  $('#escReal').addEventListener('click', e => {
    const c = document.getElementById('contact'); if (!c) return;
    e.preventDefault(); c.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#contact');
  });

  document.addEventListener('langchange', render);
  if (S.won) $('#escVault').classList.add('is-open');
  render(); show(Math.max(0, Math.min(3, S.tab | 0)));
  window.IVO_escape = { state: () => JSON.parse(JSON.stringify(S)), seq: () => seq, dials: () => dials.slice(), reset };
})();
