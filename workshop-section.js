(() => {
  const TICKET_URL = 'https://redtickets.uy/evento/Cambia-Tu-Mente-Crea-Nuevos-Resultados/31703/';

  ['workshop.css', 'workshop-v2.css'].forEach((href) => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = href;
      document.head.appendChild(stylesheet);
    }
  });

  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  const siteNav = document.querySelector('.site-nav');
  const navCta = document.querySelector('.nav-cta');
  const heroActions = document.querySelector('.hero-actions');

  if (!header || !hero) return;

  document.body.classList.add('has-featured-workshop');

  // Remove the hero phrase that does not belong in the final narrative.
  Array.from(document.querySelectorAll('.art-slide')).forEach((slide) => {
    const text = slide.textContent || '';
    if (text.includes('La capacidad') || text.includes('The capability')) slide.remove();
  });

  if (siteNav && !siteNav.querySelector('a[href="#workshop"]')) {
    const workshopNavLink = document.createElement('a');
    workshopNavLink.href = '#workshop';
    workshopNavLink.innerHTML = '<span data-copy="es">Taller abierto</span><span data-copy="en">Open workshop</span>';
    siteNav.prepend(workshopNavLink);
    workshopNavLink.addEventListener('click', () => {
      document.querySelector('#site-menu')?.classList.remove('is-open');
      document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    });
  }

  if (navCta) {
    navCta.href = '#workshop';
    navCta.removeAttribute('target');
    navCta.removeAttribute('rel');
    navCta.innerHTML = '<span data-copy="es">Ver taller</span><span data-copy="en">View workshop</span>';
  }

  const announcement = document.createElement('div');
  announcement.className = 'workshop-announcement';
  announcement.innerHTML = `
    <div class="container workshop-announcement__inner">
      <div class="workshop-announcement__message">
        <span class="workshop-announcement__dot" aria-hidden="true"></span>
        <strong data-copy="es">Taller abierto · 11 y 12 de setiembre</strong>
        <strong data-copy="en">Open workshop · September 11–12</strong>
        <span class="workshop-announcement__title" data-copy="es">Cambia tu mente, crea nuevos resultados</span>
        <span class="workshop-announcement__title" data-copy="en">Change Your Mind, Create New Results</span>
      </div>
      <a href="#workshop">
        <span data-copy="es">Conocer el taller</span>
        <span data-copy="en">Explore the workshop</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>`;
  header.insertAdjacentElement('afterend', announcement);

  if (heroActions) {
    heroActions.innerHTML = `
      <a class="button button-primary" href="#workshop">
        <span data-copy="es">Conocer el taller abierto</span>
        <span data-copy="en">Explore the open workshop</span>
        <span aria-hidden="true">↓</span>
      </a>
      <a class="button button-secondary" href="https://calendly.com/maghastudio/30min" target="_blank" rel="noopener">
        <span data-copy="es">Empezar una conversación</span>
        <span data-copy="en">Start a conversation</span>
      </a>`;
  }

  const workshop = document.createElement('section');
  workshop.className = 'featured-workshop';
  workshop.id = 'workshop';
  workshop.innerHTML = `
    <div class="container">
      <div class="featured-workshop__shell">
        <div class="featured-workshop__poster">
          <div class="featured-workshop__poster-index">
            <span>OPEN / 01</span>
            <span>MONTEVIDEO</span>
          </div>

          <div class="featured-workshop__event">
            <div class="featured-workshop__date">
              <strong>11—12</strong>
              <span data-copy="es">SETIEMBRE 2026</span>
              <span data-copy="en">SEPTEMBER 2026</span>
            </div>
            <div class="featured-workshop__capacity">
              <strong>20</strong>
              <span data-copy="es">CUPOS</span>
              <span data-copy="en">SPOTS</span>
            </div>
          </div>

          <div class="featured-workshop__poster-title">
            <small data-copy="es">TALLER PRESENCIAL ABIERTO</small>
            <small data-copy="en">OPEN IN-PERSON WORKSHOP</small>
            <strong data-copy="es">CAMBIA<br>TU MENTE.</strong>
            <strong data-copy="en">CHANGE<br>YOUR MIND.</strong>
            <span class="featured-workshop__results" data-copy="es">CREA NUEVOS<br>RESULTADOS.</span>
            <span class="featured-workshop__results" data-copy="en">CREATE NEW<br>RESULTS.</span>
          </div>

          <div class="featured-workshop__poster-foot">
            <span>NEUROCHANGE<span>SOLUTIONS</span></span>
            <i aria-hidden="true"></i>
          </div>
        </div>

        <div class="featured-workshop__content">
          <div class="featured-workshop__date-banner">
            <strong data-copy="es">11 y 12 de setiembre de 2026</strong>
            <strong data-copy="en">September 11–12, 2026</strong>
            <span>9:00—17:00</span>
          </div>

          <p class="eyebrow" data-copy="es">TALLER PRESENCIAL ABIERTO · SOLO 20 CUPOS</p>
          <p class="eyebrow" data-copy="en">OPEN IN-PERSON WORKSHOP · ONLY 20 SPOTS</p>

          <h2 data-copy="es">Entender el cambio es el comienzo. <em>Entrenarlo</em> es lo que produce resultados.</h2>
          <h2 data-copy="en">Understanding change is the beginning. <em>Training it</em> is what produces results.</h2>

          <p class="featured-workshop__intro" data-copy="es">Una experiencia presencial intensiva basada en neurociencia aplicada al cambio. El programa ayuda a reconocer patrones automáticos de pensamiento, comportamiento y emoción, y a practicar una respuesta nueva.</p>
          <p class="featured-workshop__intro" data-copy="en">An intensive in-person experience based on neuroscience applied to change. The program helps participants recognize automatic patterns of thought, behavior and emotion, and practice a new response.</p>

          <div class="featured-workshop__steps">
            <article>
              <span>01</span>
              <div>
                <strong data-copy="es">Entender</strong><strong data-copy="en">Understand</strong>
                <p data-copy="es">Cómo se forman los hábitos y por qué repetimos respuestas aunque queramos cambiar.</p>
                <p data-copy="en">How habits form and why we repeat responses even when we want to change.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <strong data-copy="es">Identificar</strong><strong data-copy="en">Identify</strong>
                <p data-copy="es">El patrón que hoy limita el cambio que querés crear.</p>
                <p data-copy="en">The pattern currently limiting the change you want to create.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong data-copy="es">Entrenar</strong><strong data-copy="en">Train</strong>
                <p data-copy="es">Herramientas concretas para pensar, sentir y actuar de una manera diferente.</p>
                <p data-copy="en">Concrete tools to think, feel and act differently.</p>
              </div>
            </article>
          </div>

          <div class="featured-workshop__details">
            <div>
              <small data-copy="es">CUPOS</small><small data-copy="en">CAPACITY</small>
              <strong data-copy="es">Solo 20 personas</strong><strong data-copy="en">Only 20 people</strong>
            </div>
            <div>
              <small data-copy="es">LUGAR</small><small data-copy="en">LOCATION</small>
              <strong>Punta Carretas · Montevideo</strong>
            </div>
            <div>
              <small data-copy="es">FORMATO</small><small data-copy="en">FORMAT</small>
              <strong data-copy="es">Presencial · 2 días</strong><strong data-copy="en">In person · 2 days</strong>
            </div>
          </div>

          <div class="featured-workshop__actions">
            <a class="button featured-workshop__ticket" href="${TICKET_URL}" target="_blank" rel="noopener">
              <span data-copy="es">Comprar entrada en RedTickets</span>
              <span data-copy="en">Buy ticket on RedTickets</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a class="featured-workshop__corporate" href="#neuroscience">
              <span data-copy="es">Ver formato para organizaciones</span>
              <span data-copy="en">See the corporate format</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p class="featured-workshop__note" data-copy="es">Venta y emisión de entradas gestionadas por RedTickets.</p>
          <p class="featured-workshop__note" data-copy="en">Ticket sales and issuance are managed by RedTickets.</p>
        </div>
      </div>
    </div>`;
  hero.insertAdjacentElement('afterend', workshop);

  const mobileBar = document.createElement('div');
  mobileBar.className = 'workshop-mobile-bar';
  mobileBar.innerHTML = `
    <span data-copy="es">Taller abierto · 11–12 set.</span>
    <span data-copy="en">Open workshop · Sep 11–12</span>
    <a href="${TICKET_URL}" target="_blank" rel="noopener">
      <span data-copy="es">Entradas</span><span data-copy="en">Tickets</span> ↗
    </a>`;
  document.body.appendChild(mobileBar);
})();