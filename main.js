/* ── OVERGEN — main.js ── */

// Terminal typewriter for hero tagline
function typewriter(el, text, speed = 28) {
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed + Math.random() * 20);
    }
  };
  tick();
}

// Subtle nav shadow on scroll
function initNav() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40
      ? 'rgba(182,255,78,0.14)'
      : 'rgba(182,255,78,0.08)';
  }, { passive: true });
}

// Stagger cards on intersection
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

// Stack item random glow on hover
function initStackGlow() {
  document.querySelectorAll('.stack-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.boxShadow = '0 0 24px rgba(182,255,78,0.12)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.boxShadow = '';
    });
  });
}

// Current year in footer
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initStackGlow();
  setYear();

  const taglineEl = document.getElementById('hero-tagline-text');
  if (taglineEl) {
    const full = taglineEl.dataset.text;
    setTimeout(() => typewriter(taglineEl, full, 24), 600);
  }
});
