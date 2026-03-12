// Global Media Group — Main JS

// ── Nav scroll effect ──────────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(184, 149, 42, 0.35)';
  } else {
    nav.style.borderBottomColor = 'rgba(184, 149, 42, 0.2)';
  }
});

// ── Fade-in on scroll ──────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.brand-card, .pillar, .about__text, .mission__stat'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
