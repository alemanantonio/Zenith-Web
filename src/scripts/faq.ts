export function initFaq() {
  document.querySelectorAll('.qa button').forEach((b) => {
    b.addEventListener('click', () => {
      const q = b.parentElement;
      if (!q) return;
      const isOpen = q.classList.toggle('open');
      b.setAttribute('aria-expanded', String(isOpen));
    });
  });
}
