// ── NAVBAR SCROLL ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
});

// ── ACTIVE NAV LINK ──
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
navLinks.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 25);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ── RESULTS TAB ──
window.switchTab = function(tabId) {
  document.querySelectorAll('.rtab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.result-panel').forEach(p => p.style.display = 'none');
  document.getElementById('tab-' + tabId)?.classList.add('active');
  document.getElementById('panel-' + tabId).style.display = 'block';
};

// ── ADMISSION FORM ──
window.submitForm = function(e) {
  e.preventDefault();
  const form = document.getElementById('admissionForm');
  const success = document.getElementById('formSuccess');
  form.style.display = 'none';
  success.style.display = 'block';
};

// ── NOTICE MODAL ──
window.openNotice = function(title, body) {
  const modal = document.getElementById('noticeModal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent = body;
  modal.style.display = 'flex';
};
window.closeModal = function() {
  document.getElementById('noticeModal').style.display = 'none';
};
document.getElementById('noticeModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu?.classList.remove('open');
    }
  });
});
