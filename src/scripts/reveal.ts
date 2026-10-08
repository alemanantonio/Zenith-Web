export function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.rv, .lm, .pr, .plan').forEach((el) => {
    io.observe(el);
  });
}
