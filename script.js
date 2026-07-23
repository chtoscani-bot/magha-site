(() => {
  const body = document.body;
  const languageButtons = document.querySelectorAll('[data-set-language]');
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  const menuLinks = document.querySelectorAll('#site-menu a');
  const slides = Array.from(document.querySelectorAll('.art-slide'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setLanguage(language) {
    const selected = language === 'en' ? 'en' : 'es';
    body.dataset.language = selected;
    document.documentElement.lang = selected;

    languageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.setLanguage === selected));
    });

    try {
      window.localStorage.setItem('magha-language', selected);
    } catch (_) {
      // The site remains fully usable when storage is unavailable.
    }
  }

  let savedLanguage = 'es';
  try {
    savedLanguage = window.localStorage.getItem('magha-language') || 'es';
  } catch (_) {
    savedLanguage = 'es';
  }
  setLanguage(savedLanguage);

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLanguage));
  });

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (slides.length > 1 && !reduceMotion) {
    let currentSlide = 0;
    window.setInterval(() => {
      slides[currentSlide].classList.remove('is-active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('is-active');
    }, 4300);
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => observer.observe(element));
  }
})();
