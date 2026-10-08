export function initScroll() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let vh = window.innerHeight;

  const bar = document.getElementById('bar');
  const par = document.getElementById('par');
  const st = document.getElementById('statement');
  const box = document.getElementById('stagebox');
  const board = document.getElementById('dboard');
  const spans = st ? st.querySelectorAll('.w') : [];

  function onScroll() {
    const y = window.scrollY;
    vh = window.innerHeight;

    if (bar) {
      const scrollMax = Math.max(1, document.documentElement.scrollHeight - vh);
      bar.style.setProperty('--sp', String(y / scrollMax));
    }

    if (reduce) {
      spans.forEach((s) => s.classList.add('lit'));
      return;
    }

    if (par && y < vh * 1.2) {
      const p = y / vh;
      par.style.transform = `translateY(${y * 0.25}px) scale(${1 - p * 0.25})`;
      par.style.opacity = String(Math.max(0, 1 - p * 1.1));
    }

    if (st && spans.length > 0) {
      const a = st.getBoundingClientRect();
      const prog = (vh * 0.8 - a.top) / (a.height + vh * 0.35);
      const n = Math.floor(Math.max(0, Math.min(1, prog)) * spans.length * 1.15);
      spans.forEach((s, i) => {
        s.classList.toggle('lit', i < n);
      });
    }

    if (box && board) {
      const r = box.getBoundingClientRect();
      const t = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.85)));
      board.style.setProperty('--t', String(t));
    }
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(onScroll);
  }, { passive: true });

  onScroll();
}
