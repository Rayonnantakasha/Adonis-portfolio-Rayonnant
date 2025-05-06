
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('shadow-xs');
  } else {
    header.classList.remove('shadow-xs');
  }
});

// Scroll to top OR to custom target
// Afficher/Masquer le bouton scroll-top
window.addEventListener('scroll', () => {
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }
});

// Scroll en haut avec animation
document.querySelector('.scroll-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // optionnel : pour ne pas répéter
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

