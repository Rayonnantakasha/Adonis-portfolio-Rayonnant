
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

  //Menu

  const toggleButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeButton = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function closeMenu() {
    mobileMenu.classList.add('-translate-y-full');
    mobileMenu.classList.remove('translate-y-0');
  }

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-y-full');
    mobileMenu.classList.add('translate-y-0');
  });

  closeButton.addEventListener('click', closeMenu);

  // Fermer le menu quand on clique sur un lien
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  //Gestion du formulaire
  const form = document.getElementById('contact-form')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form) // Récupère les données du formulaire
    // Convertit FormData en objet JSON
    const data = Object.fromEntries(formData.entries())

    // Envoie les données à Formspree
    const response = await fetch('https://formspree.io/f/xyzjrzdr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    // Vérifie si la réponse est OK
    if (response.ok) {
      alert('Message envoyé !')
      form.reset()
    } else {
      alert('Erreur lors de l’envoi')
    }
  })