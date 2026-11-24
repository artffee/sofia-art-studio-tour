/* ==========================================================================
   History Trivia · 10 multiple-choice questions on Sofia and art history.
   Every answer was checked (Nov 2026) against the sources linked under it.
   No claims about the tour venues, the artist or prices.
   Best score: localStorage 'ivosart-trivia-best'.
   ========================================================================== */
(() => {
  const IVO = window.IVO, root = document.getElementById('triv');
  if (!IVO || !root) return;
  const { reduce } = IVO;
  const $ = s => root.querySelector(s);
  const fmt = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');
  const W = 'https://en.wikipedia.org/wiki/';

  /* a[0] is always the correct answer; the order is shuffled on screen */
  const Q = [
    { tag: 's',
      q: { en: 'What is Sofia’s motto?', bg: 'Какъв е девизът на София?' },
      a: [{ en: '“Ever growing, never ageing”', bg: '„Расте, но не старее“' },
          { en: '“Old stones, new stories”', bg: '„Стари камъни, нови истории“' },
          { en: '“Slow and steady”', bg: '„Бавно, но славно“' },
          { en: '“Wine first, then art”', bg: '„Първо виното, после изкуството“' }],
      x: { en: '“Raste, no ne staree”: ever growing, never ageing. A fitting motto for a city people have lived in since at least 7000 BC.',
           bg: '„Расте, но не старее“. Подходящо за град, в който живеят хора поне от 7000 г. пр.н.е.' },
      src: [['Wikipedia: Sofia', W + 'Sofia']] },
    { tag: 's',
      q: { en: 'Where does the name “Sofia” come from?', bg: 'Откъде идва името „София“?' },
      a: [{ en: 'The Saint Sofia Church', bg: 'От църквата „Света София“' },
          { en: 'A medieval queen called Sofia', bg: 'От средновековна царица на име София' },
          { en: 'A river that runs through the city', bg: 'От река, която минава през града' },
          { en: 'A Roman goddess of mineral springs', bg: 'От римска богиня на минералните извори' }],
      x: { en: 'From the Saint Sofia Church, one of the oldest churches in the city. “Sophia” is Greek for wisdom. Before that, the city was Serdica and later Sredets.',
           bg: 'От църквата „Света София“, една от най-старите в града. На гръцки „софия“ означава „мъдрост“. Преди това градът се е казвал Сердика, а после Средец.' },
      src: [['Wikipedia: Sofia (name)', W + 'Sofia#Names'], ['Wikipedia: Saint Sofia Church', W + 'Hagia_Sophia_Church,_Sofia']] },
    { tag: 's',
      q: { en: 'Which building is considered the oldest in Sofia?', bg: 'Коя сграда се смята за най-старата в София?' },
      a: [{ en: 'The Rotunda of St George', bg: 'Ротондата „Свети Георги“' },
          { en: 'Alexander Nevsky Cathedral', bg: 'Катедралата „Свети Александър Невски“' },
          { en: 'The Ivan Vazov National Theatre', bg: 'Народният театър „Иван Вазов“' },
          { en: 'Banya Bashi Mosque', bg: 'Баня баши джамия' }],
      x: { en: 'The red-brick Rotunda of St George, built in the early 4th century as Roman baths. A stretch of Roman street still runs behind it. Its frescoes were painted over when it became a mosque and only uncovered in the 20th century: good art knows how to wait.',
           bg: 'Червената тухлена ротонда „Свети Георги“, построена в началото на IV век като римска баня. Зад нея още се вижда отсечка от римска улица. Стенописите ѝ са замазани, когато става джамия, и са разкрити чак през XX век – доброто изкуство умее да чака.' },
      src: [['Wikipedia: Church of St George, Sofia', W + 'Church_of_St._George,_Sofia']] },
    { tag: 's',
      q: { en: 'In what year were the famous frescoes of Boyana Church painted?', bg: 'През коя година са рисувани прочутите стенописи в Боянската църква?' },
      a: [{ en: '1259', bg: '1259' }, { en: '1059', bg: '1059' }, { en: '1459', bg: '1459' }, { en: '1659', bg: '1659' }],
      x: { en: '1259. UNESCO calls them one of the most important collections of medieval paintings, and Boyana Church has been on the World Heritage List since 1979. Not bad for a little church on the edge of town.',
           bg: 'През 1259 г. ЮНЕСКО ги нарича една от най-важните колекции средновековна живопис, а църквата е в списъка на световното наследство от 1979 г. Никак не е зле за църквица в покрайнините на града.' },
      src: [['UNESCO: Boyana Church', 'https://whc.unesco.org/en/list/42/']] },
    { tag: 's',
      q: { en: 'Alexander Nevsky Cathedral was built in honour of…', bg: 'Катедралата „Свети Александър Невски“ е построена в чест на…' },
      a: [{ en: 'Russian soldiers who died in the Russo-Turkish War of 1877–78', bg: 'руските войници, загинали в Руско-турската война от 1877–1878 г.' },
          { en: 'Emperor Constantine the Great', bg: 'император Константин Велики' },
          { en: 'The builders of Roman Serdica', bg: 'строителите на римската Сердика' },
          { en: 'The first book printed in Bulgarian', bg: 'първата печатна книга на български' }],
      x: { en: 'The Russian soldiers who died in the war that freed Bulgaria from Ottoman rule. Alexander Nevsky himself was a Russian prince. Most of the cathedral went up between 1904 and 1912, and its gold-plated dome rises 45 m.',
           bg: 'На руските войници, загинали във войната, която освобождава България от османска власт. Самият Александър Невски е руски княз. Катедралата е строена главно между 1904 и 1912 г., а позлатеният ѝ купол е висок 45 м.' },
      src: [['Wikipedia: Alexander Nevsky Cathedral, Sofia', W + 'Alexander_Nevsky_Cathedral,_Sofia']] },
    { tag: 's',
      q: { en: 'What is the name of Vitosha’s highest peak, up above Sofia?', bg: 'Как се казва най-високият връх на Витоша, над София?' },
      a: [{ en: 'Cherni Vrah (“Black Peak”)', bg: 'Черни връх' }, { en: 'Musala', bg: 'Мусала' }, { en: 'Vihren', bg: 'Вихрен' }, { en: 'Botev', bg: 'Ботев' }],
      x: { en: 'Cherni Vrah, 2,290 m. The others are real peaks too, but in Rila, Pirin and the Balkan Range. On 27 August 1895 the writer Aleko Konstantinov led about 300 people to the top, a date still celebrated as the birthday of the Bulgarian tourist movement.',
           bg: 'Черни връх, 2290 м. Другите също са истински върхове, но в Рила, Пирин и Стара планина. На 27 август 1895 г. Алеко Константинов извежда около 300 души до върха и тази дата се смята за рождения ден на туристическото движение в България.' },
      src: [['Wikipedia: Cherni Vrah', W + 'Cherni_Vrah']] },
    { tag: 'a',
      q: { en: 'Which Bulgarian-born artist wrapped the Reichstag in Berlin in silver fabric?', bg: 'Кой роден в България художник опакова Райхстага в Берлин в сребрист плат?' },
      a: [{ en: 'Christo', bg: 'Кристо (Христо Явашев)' }, { en: 'Andy Warhol', bg: 'Анди Уорхол' }, { en: 'Yves Klein', bg: 'Ив Клайн' }, { en: 'Banksy', bg: 'Банкси' }],
      x: { en: 'Christo, born in Gabrovo in 1935, who studied at the Sofia Academy of Fine Arts. With Jeanne-Claude he wrapped the Reichstag in 1995, after 24 years of lobbying. Now that is patience.',
           bg: 'Кристо, роден в Габрово през 1935 г., учил в Художествената академия в София. Заедно с Жан-Клод опакова Райхстага през 1995 г. след 24 години убеждаване. Ето това е търпение.' },
      src: [['Wikipedia: Christo and Jeanne-Claude', W + 'Christo_and_Jeanne-Claude']] },
    { tag: 'a',
      q: { en: 'Jules Pascin, the “Prince of Montparnasse” in Paris, was born in which Bulgarian town?', bg: 'Жул Паскин, „принцът на Монпарнас“ в Париж, е роден в кой български град?' },
      a: [{ en: 'Vidin', bg: 'Видин' }, { en: 'Plovdiv', bg: 'Пловдив' }, { en: 'Varna', bg: 'Варна' }, { en: 'Burgas', bg: 'Бургас' }],
      x: { en: 'Vidin, on the Danube, in 1885. His real name was Julius Pincas, and “Pascin” is an anagram of it, adopted so his father’s name stayed off his cheeky magazine drawings.',
           bg: 'Във Видин, на Дунава, през 1885 г. Истинското му име е Юлиус Пинкас, а „Паскин“ е анаграма, която приема, за да не стои фамилията на баща му под дръзките му рисунки в списанията.' },
      src: [['Wikipedia: Jules Pascin', W + 'Jules_Pascin']] },
    { tag: 'a',
      q: { en: 'Ultramarine, the blue of the Virgin Mary’s robes in Renaissance paintings, was made from…', bg: 'Ултрамаринът – синьото на дрехите на Богородица в ренесансовите картини – се е правел от…' },
      a: [{ en: 'Ground lapis lazuli', bg: 'стрит лапис лазули' }, { en: 'Crushed sapphires', bg: 'натрошени сапфири' }, { en: 'Indigo leaves', bg: 'листа от индиго' }, { en: 'Blue Venetian glass', bg: 'синьо венецианско стъкло' }],
      x: { en: 'Ground lapis lazuli, mined in what is now Afghanistan. The name means “beyond the sea”, and at times it was valued as highly as gold. A cheap synthetic version only arrived in 1826.',
           bg: 'От стрит лапис лазули, добиван в днешен Афганистан. Името означава „отвъд морето“, а понякога пигментът е струвал колкото златото. Евтин синтетичен вариант се появява чак през 1826 г.' },
      src: [['Wikipedia: Ultramarine', W + 'Ultramarine']] },
    { tag: 'a',
      q: { en: 'In 1911 the Mona Lisa vanished from the Louvre. Who actually stole it?', bg: 'През 1911 г. „Мона Лиза“ изчезва от Лувъра. Кой всъщност я открадва?' },
      a: [{ en: 'Vincenzo Peruggia, a Louvre employee', bg: 'Винченцо Перуджа, служител в Лувъра' }, { en: 'Pablo Picasso', bg: 'Пабло Пикасо' }, { en: 'The poet Guillaume Apollinaire', bg: 'поетът Гийом Аполинер' }, { en: 'Arsène Lupin', bg: 'Арсен Люпен' }],
      x: { en: 'Vincenzo Peruggia, a Louvre worker who had helped build the painting’s glass case. The poet Apollinaire was arrested and Picasso was questioned, but both were cleared. The painting came back in 1914, more famous than ever.',
           bg: 'Винченцо Перуджа, служител в Лувъра, помагал да се направи стъклената витрина на картината. Поетът Аполинер е арестуван, а Пикасо – разпитан, но и двамата са оправдани. Картината се връща през 1914 г., по-известна от всякога.' },
      src: [['Wikipedia: Mona Lisa (1911 theft)', W + 'Mona_Lisa#1911_theft']] }
  ];

  const L = {
    en: { s: 'Sofia', a: 'Art history', count: 'Question {n} of {t}', score: 'Score {s}', next: 'Next question', see: 'See my score',
      right: 'Correct!', wrong: 'Not quite. The answer is: {a}', sources: 'Sources', opt: 'Answer {l}: {a}',
      finalK: 'Final score', rankK: 'Your rank', best: 'Best score: {b} / {t}', newBest: 'New best score: {b} / {t}!', again: 'Play again', shuffle: 'Shuffle questions',
      done: 'Round over. You scored {s} out of {t}. Rank: {r}.', qLive: 'Question {n} of {t}: {q}',
      ranks: [['Apprentice Cog', 'Every great machine starts with one small gear. A little more oil and you will be humming.'],
              ['Brass Navigator', 'You know your way around the old city. A few more turns of the dial and you are steering.'],
              ['Steam Curator', 'Sharp eye, steady hand. The frescoes approve.'],
              ['Chief Engineer', 'Nearly flawless. One valve hissed, the rest purred.'],
              ['Captain of the Nautilus', 'A perfect ten. Even Captain Nemo would hand you the wheel.']] },
    bg: { s: 'София', a: 'История на изкуството', count: 'Въпрос {n} от {t}', score: 'Точки: {s}', next: 'Следващ въпрос', see: 'Виж резултата',
      right: 'Вярно!', wrong: 'Не съвсем. Верният отговор е: {a}', sources: 'Източници', opt: 'Отговор {l}: {a}',
      finalK: 'Краен резултат', rankK: 'Вашият ранг', best: 'Най-добър резултат: {b} / {t}', newBest: 'Нов рекорд: {b} / {t}!', again: 'Играй отново', shuffle: 'Разбъркай въпросите',
      done: 'Край на рунда. Имате {s} от {t}. Ранг: {r}.', qLive: 'Въпрос {n} от {t}: {q}',
      ranks: [['Чирак-зъбчатка', 'Всяка голяма машина започва с едно малко колело. Още малко масло и ще забръмчите.'],
              ['Месингов навигатор', 'Ориентирате се в стария град. Още няколко завъртания и поемате руля.'],
              ['Парен уредник', 'Остро око, стабилна ръка. Стенописите одобряват.'],
              ['Главен инженер', 'Почти безупречно. Един клапан изсъска, останалото мърка.'],
              ['Капитан на „Наутилус“', 'Перфектна десетица. Дори капитан Немо би ви дал руля.']] }
  };
  const lg = () => (IVO.lang() === 'bg' ? 'bg' : 'en');
  const tx = (k, o) => fmt(L[lg()][k], o || {});
  const N = Q.length, LET = ['A', 'B', 'C', 'D'];
  const KEY = 'ivosart-trivia-best', SHUF = 'ivosart-trivia-shuffle';
  const store = { get: k => { try { return localStorage.getItem(k); } catch (_) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} } };
  const shuffled = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const rankOf = s => (s >= 10 ? 4 : s === 9 ? 3 : s >= 7 ? 2 : s >= 4 ? 1 : 0);

  const el = { dots: $('#trivDots'), count: $('#trivCount'), score: $('#trivScore'), card: $('#trivCard'), tag: $('#trivTag'), q: $('#trivQ'), opts: $('#trivOpts'),
    reveal: $('#trivReveal'), verdict: $('#trivVerdict'), exp: $('#trivExp'), src: $('#trivSrc'), srcSum: $('#trivSrcSum'), next: $('#trivNext'),
    end: $('#trivEnd'), finalK: $('#trivFinalK'), final: $('#trivFinal'), rankK: $('#trivRankK'), rank: $('#trivRank'), rankTxt: $('#trivRankTxt'), best: $('#trivBest'),
    again: $('#trivAgain'), live: $('#trivLive'), shuf: $('#trivShuffle'), shufLbl: $('#trivShufLbl') };

  let S;
  const newRound = () => {
    const order = el.shuf.checked ? shuffled([...Array(N).keys()]) : [...Array(N).keys()];
    S = { order, i: 0, score: 0, picked: null, opt: shuffled([0, 1, 2, 3]), results: [], over: false, newBest: false };
  };
  const speak = m => { el.live.textContent = ''; requestAnimationFrame(() => { el.live.textContent = m; }); };

  function renderDots() {
    el.dots.innerHTML = Q.map((_, k) => `<li class="${S.results[k] === true ? 'is-right' : S.results[k] === false ? 'is-wrong' : k === S.i && !S.over ? 'is-now' : ''}"></li>`).join('');
  }
  function render(announce) {
    const l = lg();
    el.shufLbl.textContent = tx('shuffle');
    el.srcSum.textContent = tx('sources');
    el.again.textContent = tx('again');
    renderDots();
    el.score.textContent = tx('score', { s: S.score });
    el.card.hidden = S.over; el.end.hidden = !S.over; el.count.hidden = S.over;
    if (S.over) return renderEnd();
    const q = Q[S.order[S.i]];
    el.count.textContent = tx('count', { n: S.i + 1, t: N });
    el.tag.textContent = tx(q.tag);
    el.q.textContent = q.q[l];
    el.opts.innerHTML = S.opt.map((ai, k) => {
      const cls = S.picked === null ? '' : ai === 0 ? ' is-right' : ai === S.picked ? ' is-wrong' : ' is-dim';
      return `<button type="button" class="triv__opt${cls}" data-a="${ai}" ${S.picked !== null ? 'disabled' : ''} aria-label="${tx('opt', { l: LET[k], a: q.a[ai][l] }).replace(/"/g, '&quot;')}"><b aria-hidden="true">${LET[k]}</b><span>${q.a[ai][l]}</span></button>`;
    }).join('');
    el.reveal.hidden = S.picked === null;
    if (S.picked !== null) {
      const ok = S.picked === 0;
      el.verdict.textContent = ok ? tx('right') : tx('wrong', { a: q.a[0][l] });
      el.verdict.className = 'triv__verdict ' + (ok ? 'is-right' : 'is-wrong');
      el.exp.textContent = q.x[l];
      el.src.innerHTML = q.src.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join('');
      el.next.textContent = S.i === N - 1 ? tx('see') : tx('next');
    }
    if (announce) speak(tx('qLive', { n: S.i + 1, t: N, q: q.q[l] }));
  }
  function renderEnd() {
    const best = +(store.get(KEY) || 0), r = L[lg()].ranks[rankOf(S.score)];
    el.finalK.textContent = tx('finalK');
    el.final.textContent = `${S.score} / ${N}`;
    el.rankK.textContent = tx('rankK');
    el.rank.textContent = r[0]; el.rankTxt.textContent = r[1];
    el.best.textContent = tx(S.newBest ? 'newBest' : 'best', { b: best, t: N });
    el.end.dataset.rank = rankOf(S.score);
  }

  function pick(ai) {
    if (S.picked !== null || S.over) return;
    S.picked = ai;
    const ok = ai === 0;
    if (ok) S.score++;
    S.results[S.i] = ok;
    render();
    const btn = el.opts.querySelector(`[data-a="${ai}"]`);
    if (btn) {
      const r = btn.getBoundingClientRect();
      if (ok && IVO.burst && !reduce) IVO.burst(r.left + r.width / 2, r.top + r.height / 2, { n: 18, power: 7 });
      if (!ok && !reduce) { el.opts.classList.remove('is-shake'); void el.opts.offsetWidth; el.opts.classList.add('is-shake'); }
    }
    speak(el.verdict.textContent + ' ' + el.exp.textContent);
    el.next.focus({ preventScroll: true });
    keepVisible(el.next);
  }
  function next() {
    if (S.i < N - 1) {
      S.i++; S.picked = null; S.opt = shuffled([0, 1, 2, 3]);
      render(true);
      el.q.focus({ preventScroll: true });
      keepVisible(root, true);
    } else {
      S.over = true;
      const best = +(store.get(KEY) || 0);
      if (S.score > best) { store.set(KEY, String(S.score)); S.newBest = best > 0 || S.score > 0; }
      render();
      el.end.classList.remove('is-play'); void el.end.offsetWidth; el.end.classList.add('is-play');
      if (S.score >= 7 && IVO.burst && !reduce) { const r = el.final.getBoundingClientRect(); IVO.burst(r.left + r.width / 2, r.top + r.height / 2, { n: 40, power: 11 }); }
      el.end.focus({ preventScroll: true });
      keepVisible(root, true);
      speak(tx('done', { s: S.score, t: N, r: L[lg()].ranks[rankOf(S.score)][0] }));
    }
  }
  /* keep the card in view below the fixed header without jumping around */
  function keepVisible(node, top) {
    const navH = (document.querySelector('.nav') || {}).offsetHeight || 64;
    const r = node.getBoundingClientRect();
    const behavior = reduce ? 'instant' : 'smooth';
    if (top && (r.top < navH + 8 || r.top > innerHeight * .5)) scrollBy({ top: r.top - navH - 12, behavior });
    else if (!top && r.bottom > innerHeight - 12) scrollBy({ top: r.bottom - innerHeight + 96, behavior });
  }

  el.opts.addEventListener('click', e => { const b = e.target.closest('.triv__opt'); if (b) pick(+b.dataset.a); });
  root.addEventListener('keydown', e => {
    if (S.over || S.picked !== null || e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    const k = e.key.toUpperCase(), idx = '1234'.includes(k) ? +k - 1 : LET.indexOf(k);
    if (idx >= 0 && idx < 4) { e.preventDefault(); pick(S.opt[idx]); }
  });
  el.next.addEventListener('click', next);
  el.again.addEventListener('click', () => { newRound(); render(true); el.q.focus({ preventScroll: true }); keepVisible(root, true); });
  el.shuf.checked = store.get(SHUF) === '1';
  el.shuf.addEventListener('change', () => { store.set(SHUF, el.shuf.checked ? '1' : '0'); if (S.i === 0 && S.picked === null && !S.over) { newRound(); render(); } });
  document.addEventListener('langchange', () => render());

  newRound(); render();
  window.IVO_trivia = { get state() { return S; }, Q, rankOf, pick, next };
})();
