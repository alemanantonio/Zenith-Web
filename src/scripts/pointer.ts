export function initPointer() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const hero = document.querySelector('.hero') as HTMLElement | null;
  if (hero) {
    hero.addEventListener('pointermove', (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
      hero.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  }

  document.querySelectorAll<HTMLElement>('.pi').forEach((c) => {
    c.addEventListener('pointermove', (e: MouseEvent) => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      c.style.setProperty('--ry', `${(x - 0.5) * 8}deg`);
      c.style.setProperty('--rx', `${(0.5 - y) * 8}deg`);
      c.style.setProperty('--gx', `${x * 100}%`);
      c.style.setProperty('--gy', `${y * 100}%`);
    });

    c.addEventListener('pointerleave', () => {
      c.style.setProperty('--rx', '0deg');
      c.style.setProperty('--ry', '0deg');
    });
  });

  const m = document.querySelector('.mag') as HTMLElement | null;
  const b = document.getElementById('btn') as HTMLElement | null;
  if (m && b) {
    m.addEventListener('pointermove', (e: MouseEvent) => {
      const r = m.getBoundingClientRect();
      b.style.setProperty('--bx', `${(e.clientX - r.left - r.width / 2) * 0.22}px`);
      b.style.setProperty('--by', `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
    });

    m.addEventListener('pointerleave', () => {
      b.style.setProperty('--bx', '0px');
      b.style.setProperty('--by', '0px');
    });
  }
}
