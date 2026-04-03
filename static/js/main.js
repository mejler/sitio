// ========== LANGUAGE ==========
// Priority: 1) saved user choice  2) browser language  3) English fallback
function detectLang() {
  const saved = localStorage.getItem('site-lang');
  if (saved) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browser.startsWith('es') ? 'es' : 'en';
}
function setLang(l) {
  localStorage.setItem('site-lang', l);
  document.documentElement.setAttribute('data-lang', l);
  document.querySelectorAll('.lang-toggle').forEach(b => b.textContent = l === 'en' ? 'ES' : 'EN');
}
function toggleLang() {
  const c = document.documentElement.getAttribute('data-lang');
  setLang(c === 'en' ? 'es' : 'en');
}
setLang(detectLang());

// ========== NAV SCROLL ==========
const nb = document.getElementById('navbar');
if (nb && !nb.classList.contains('solid')) {
  window.addEventListener('scroll', () => nb.classList.toggle('scrolled', window.scrollY > 60));
}

// ========== MOBILE MENU ==========
const nt = document.getElementById('navToggle');
const nr = document.getElementById('navRight');
if (nt && nr) {
  function openMenu() { nr.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { nr.classList.remove('open'); document.body.style.overflow = ''; }
  nt.addEventListener('click', () => nr.classList.contains('open') ? closeMenu() : openMenu());
  nr.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  nr.addEventListener('click', e => { if (e.target === nr) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nr.classList.contains('open')) closeMenu(); });
}

// ========== SCROLL REVEAL ==========
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
