/**
 * ============================================================================
 * KARASUNO VOLEY CLUB - APPLICATION LOGIC
 * ============================================================================
 * Compatible con Microsoft Edge, Chrome, Safari, Firefox y dispositivos móviles.
 * Funciona tanto en servidores locales (HTTP/HTTPS) como en apertura directa de archivo (file://).
 */

// ----------------------------------------------------------------------------
// DATA: SEDES Y HORARIOS
// ----------------------------------------------------------------------------
const VENUES_DATA = {
  norte: {
    id: "norte",
    name: "SEDE SMP - LIMA NORTE",
    statusBadge: "Activa Hoy",
    statusColor: "emerald",
    address: "Jr. Filadelfia 2958, SMP (Referencia: Av. Perú cruce con Universitaria)",
    mapsUrl: "https://maps.google.com/?q=Jr.+Filadelfia+2958+San+Martin+de+Porres",
    schedules: [
      {
        badge: "TURNO NOCTURNO",
        slots: "6 Cupos",
        days: "Lunes y Martes",
        hours: "6:00 PM – 8:00 PM",
        details: [
          "Categoría Mixto Juvenil / Adultos",
          "Cancha Principal Techada"
        ]
      },
      {
        badge: "SÁBADO INTENSIVO",
        slots: "4 Cupos",
        days: "Sábado",
        hours: "2:00 PM – 4:00 PM",
        details: [
          "Tecnificación & Ataque Mixto",
          "Cancha 1 (Piso Amortiguado)"
        ]
      },
      {
        badge: "DOMINGO COMPETITIVO",
        slots: "Últimos cupos",
        days: "Domingo",
        hours: "9:00 AM – 11:00 AM",
        details: [
          "Entrenamiento Intensivo & Partidos",
          "Todas las categorías"
        ]
      }
    ]
  },
  sur: {
    id: "sur",
    name: "SEDE CHORRILLOS - LIMA SUR",
    statusBadge: "Matrículas Abiertas",
    statusColor: "emerald",
    address: "Av. Defensores del Morro 1420, Chorrillos (Ref. Complejo Deportivo Huaylas)",
    mapsUrl: "https://maps.google.com/?q=Av.+Defensores+del+Morro+1420+Chorrillos",
    schedules: [
      {
        badge: "TURNO NOCHE SUR",
        slots: "5 Cupos",
        days: "Miércoles y Viernes",
        hours: "7:00 PM – 9:00 PM",
        details: [
          "Fundamentos Técnicos & Mixto Adultos",
          "Coliseo Sur Techado con Iluminación LED"
        ]
      },
      {
        badge: "SÁBADO MAÑANA",
        slots: "8 Cupos",
        days: "Sábado",
        hours: "9:00 AM – 11:00 AM",
        details: [
          "Iniciación Juvenil & Técnica Básica",
          "Cancha Polideportiva Especializada"
        ]
      },
      {
        badge: "DOMINGO SMASH",
        slots: "3 Cupos",
        days: "Domingo",
        hours: "11:00 AM – 1:00 PM",
        details: [
          "Táctica de Ataque & Saque en Potencia",
          "Entrenamiento con Máquina de Balones"
        ]
      }
    ]
  },
  centro: {
    id: "centro",
    name: "SEDE JESÚS MARÍA - LIMA CENTRO",
    statusBadge: "Cupos Limitados",
    statusColor: "amber",
    address: "Av. Arnaldo Márquez 1822, Jesús María (Ref. A dos cuadras de Plaza San José)",
    mapsUrl: "https://maps.google.com/?q=Av.+Arnaldo+Marquez+1822+Jesus+Maria",
    schedules: [
      {
        badge: "TARDE FORMATIVA",
        slots: "4 Cupos",
        days: "Martes y Jueves",
        hours: "5:00 PM – 7:00 PM",
        details: [
          "Iniciación Técnica & Jóvenes Promesas",
          "Cancha Techada Parquet Deportivo"
        ]
      },
      {
        badge: "TURNO NOCHE ÉLITE",
        slots: "Últimos 2 Cupos",
        days: "Martes y Jueves",
        hours: "7:00 PM – 9:00 PM",
        details: [
          "Nivel Avanzado & Pre-Competitivo Mixto",
          "Simulacros de Partido con Arbitraje FPV"
        ]
      },
      {
        badge: "SÁBADO TARDE",
        slots: "5 Cupos",
        days: "Sábado",
        hours: "4:00 PM – 6:30 PM",
        details: [
          "Mixto Adultos & Liga Interna Karasuno",
          "Cancha Principal Climatizada"
        ]
      }
    ]
  },
  este: {
    id: "este",
    name: "SEDE SAN JUAN - LIMA ESTE",
    statusBadge: "Nueva Sede",
    statusColor: "emerald",
    address: "Av. Próceres de la Independencia 2450, SJL (Ref. Frente a Estación Los Postes - Línea 1)",
    mapsUrl: "https://maps.google.com/?q=Av.+Proceres+de+la+Independencia+2450+San+Juan+de+Lurigancho",
    schedules: [
      {
        badge: "TURNO MAÑANA ESTE",
        slots: "7 Cupos",
        days: "Lunes y Miércoles",
        hours: "8:30 AM – 10:30 AM",
        details: [
          "Acondicionamiento Físico & Saque Control",
          "Cancha Múltiple Techada de Alto Tráfico"
        ]
      },
      {
        badge: "TURNO NOCHE ESTE",
        slots: "4 Cupos",
        days: "Lunes y Miércoles",
        hours: "7:30 PM – 9:30 PM",
        details: [
          "Equipo Mixto Competitivo Nocturno",
          "Entrenador Nivel 2 Certificado"
        ]
      },
      {
        badge: "SÁBADO MAÑANA",
        slots: "6 Cupos",
        days: "Sábado",
        hours: "10:30 AM – 12:30 PM",
        details: [
          "Iniciación & Tecnificación Integral",
          "Cancha Techada con Césped Sintético / Goma"
        ]
      }
    ]
  }
};

// ----------------------------------------------------------------------------
// 0. HERO CAROUSEL / SLIDER HORIZONTAL (BUCLE INFINITO CON CLONES & DRAG)
// ----------------------------------------------------------------------------
function initHeroCarousel() {
  const heroSection = document.getElementById('hero');
  const track = document.getElementById('hero-track');
  const dots = document.querySelectorAll('.hero-dot');

  if (!track || !heroSection) return;

  const originalSlides = Array.from(track.querySelectorAll('.hero-slide:not(.hero-slide-clone)'));
  const originalCount = originalSlides.length;
  if (originalCount === 0) return;

  // Limpiar posibles clones previos (en caso de reinicialización)
  track.querySelectorAll('.hero-slide-clone').forEach(el => el.remove());

  // Clonar último slide al principio y primer slide al final
  const cloneLast = originalSlides[originalCount - 1].cloneNode(true);
  cloneLast.classList.add('hero-slide-clone');
  cloneLast.setAttribute('aria-hidden', 'true');

  const cloneFirst = originalSlides[0].cloneNode(true);
  cloneFirst.classList.add('hero-slide-clone');
  cloneFirst.setAttribute('aria-hidden', 'true');

  track.insertBefore(cloneLast, originalSlides[0]);
  track.appendChild(cloneFirst);

  const allSlides = track.querySelectorAll('.hero-slide');
  const totalSlidesCount = allSlides.length; // originalCount + 2

  // Dimensionamiento dinámico del track y de cada slide para bucle perfecto
  track.style.width = `${totalSlidesCount * 100}%`;
  allSlides.forEach(slide => {
    slide.style.width = `${100 / totalSlidesCount}%`;
    const img = slide.querySelector('img');
    if (img && img.src) {
      const preload = new Image();
      preload.src = img.src;
      img.setAttribute('draggable', 'false');
    }
  });

  // Índice actual en el track (1 = Primer slide real)
  let currentIndex = 1;
  let isTransitioning = false;
  let transitionFallbackTimer = null;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 5000; // 5 segundos
  const TRANSITION_DURATION = 500; // 500ms

  // Mapear el índice del track al índice lógico (0, 1, 2) de los dots
  function getLogicalIndex(idx) {
    if (idx === 0) return originalCount - 1; // clon del último
    if (idx === totalSlidesCount - 1) return 0; // clon del primero
    return idx - 1;
  }

  function updateDots(logicalIdx) {
    dots.forEach((dot, idx) => {
      if (idx === logicalIdx) {
        dot.className = 'hero-dot w-8 h-2 rounded-full bg-primary-container transition-all cursor-pointer';
      } else {
        dot.className = 'hero-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer';
      }
    });
  }

  function setTrackPosition(index) {
    const percent = -(index * (100 / totalSlidesCount));
    track.style.transform = `translateX(${percent}%)`;
  }

  // Mover a un slide con o sin animación
  function goToSlide(targetIndex, animate = true) {
    currentIndex = targetIndex;
    updateDots(getLogicalIndex(currentIndex));

    if (animate) {
      isTransitioning = true;
      track.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1)`;

      // Fallback por si el evento transitionend es interrumpido
      clearTimeout(transitionFallbackTimer);
      transitionFallbackTimer = setTimeout(() => {
        if (isTransitioning) {
          handleTransitionEnd();
        }
      }, TRANSITION_DURATION + 50);
    } else {
      track.style.transition = 'none';
      isTransitioning = false;
    }

    setTrackPosition(currentIndex);
  }

  // Reinicio silencioso al llegar a los extremos clonados
  function handleTransitionEnd() {
    clearTimeout(transitionFallbackTimer);
    if (!isTransitioning) return;
    isTransitioning = false;

    if (currentIndex === 0) {
      // Llegó al clon del último -> Salto silencioso al último slide real
      track.style.transition = 'none';
      currentIndex = originalCount;
      setTrackPosition(currentIndex);
      void track.offsetWidth; // Forzar reflow para aplicar el salto de inmediato
    } else if (currentIndex === totalSlidesCount - 1) {
      // Llegó al clon del primero -> Salto silencioso al primer slide real
      track.style.transition = 'none';
      currentIndex = 1;
      setTrackPosition(currentIndex);
      void track.offsetWidth; // Forzar reflow para aplicar el salto de inmediato
    }
  }

  track.addEventListener('transitionend', (e) => {
    if (e.target !== track || e.propertyName !== 'transform') return;
    handleTransitionEnd();
  });

  // Autoplay continuo de 5 segundos
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isTransitioning && !isDragging && !isMouseDown) {
        goToSlide(currentIndex + 1, true);
      }
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Puntos / Dots
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isTransitioning) return;
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSlide(idx + 1, true);
        resetAutoplay();
      }
    });
  });

  // --------------------------------------------------------------------------
  // INTERACCIÓN DRAG & SWIPE EN TIEMPO REAL (ESCRITORIO Y PANTALLAS TÁCTILES)
  // --------------------------------------------------------------------------
  let isMouseDown = false;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  function getPositionX(e) {
    return e.type.includes('mouse')
      ? e.clientX
      : (e.touches && e.touches[0] ? e.touches[0].clientX : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0));
  }

  function dragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    if (e.target.closest('button, a, input, select, textarea, [role="button"], #hero-dots')) {
      return;
    }

    // Si estaba en medio de una transición, completamos el salto antes de arrastrar
    if (isTransitioning) {
      handleTransitionEnd();
    }

    isMouseDown = true;
    isDragging = false;
    startX = getPositionX(e);
    currentX = startX;
    stopAutoplay();
  }

  function dragMove(e) {
    if (!isMouseDown) return;
    currentX = getPositionX(e);
    const diffX = currentX - startX;

    if (!isDragging && Math.abs(diffX) > 6) {
      isDragging = true;
      track.style.transition = 'none';
      heroSection.classList.remove('cursor-grab');
      heroSection.classList.add('cursor-grabbing');
    }

    if (isDragging) {
      const heroWidth = heroSection.offsetWidth;
      const baseOffset = -(currentIndex * heroWidth);
      const currentTranslate = baseOffset + diffX;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }
  }

  function dragEnd() {
    if (!isMouseDown) return;
    isMouseDown = false;

    heroSection.classList.remove('cursor-grabbing');
    heroSection.classList.add('cursor-grab');

    if (isDragging) {
      const diffX = currentX - startX;
      const threshold = heroSection.offsetWidth * 0.15; // 15% del ancho

      if (diffX < -threshold) {
        goToSlide(currentIndex + 1, true);
      } else if (diffX > threshold) {
        goToSlide(currentIndex - 1, true);
      } else {
        goToSlide(currentIndex, true);
      }
    }

    isDragging = false;
    resetAutoplay();
  }

  // Eventos Mouse y Touch
  heroSection.addEventListener('mousedown', dragStart);
  window.addEventListener('mousemove', dragMove);
  window.addEventListener('mouseup', dragEnd);
  heroSection.addEventListener('mouseleave', () => {
    if (isMouseDown) dragEnd();
  });

  heroSection.addEventListener('touchstart', dragStart, { passive: true });
  heroSection.addEventListener('touchmove', dragMove, { passive: true });
  heroSection.addEventListener('touchend', dragEnd);

  // Redimensionamiento de ventana
  window.addEventListener('resize', () => {
    if (!isDragging) {
      goToSlide(currentIndex, false);
    }
  });

  // Inicializar en el primer slide real (índice 1) sin animación
  goToSlide(1, false);

  // Iniciar autoplay de 5 segundos
  startAutoplay();
}

// ----------------------------------------------------------------------------
// 1. SEDES & HORARIOS (CAROUSEL DE TARJETAS COMPLETAS CON ARRASTRE Y DOTS)
// ----------------------------------------------------------------------------
function initVenuesCarousel() {
  const slider = document.getElementById('venues-slider');
  const track = document.getElementById('venues-track');
  const tabs = document.querySelectorAll('#venue-tabs .venue-tab');
  const dots = document.querySelectorAll('#venues-dots .venue-dot');
  const prevBtn = document.getElementById('venues-prev');
  const nextBtn = document.getElementById('venues-next');

  if (!track || !slider) return;

  const slides = track.querySelectorAll('.venue-card, .venue-details-card');
  const maxIndex = slides.length - 1;
  if (maxIndex < 0) return;

  let currentIndex = 0;
  let isTransitioning = false;
  const TRANSITION_DURATION = 500;

  // Actualiza los estilos visuales de las pestañas y centra la activa
  function updateTabs(idx, shouldScroll = true) {
    tabs.forEach((tab, i) => {
      const isActive = (i === idx);
      if (isActive) {
        tab.className = 'venue-tab shrink-0 snap-center px-5 py-2.5 rounded-full font-label-caps text-xs uppercase bg-primary-container text-white transition-colors cursor-pointer font-bold';
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.className = 'venue-tab shrink-0 snap-center px-5 py-2.5 rounded-full font-label-caps text-xs uppercase bg-surface-container-low border border-white/5 text-on-surface-variant hover:text-white hover:bg-surface-container transition-colors cursor-pointer';
        tab.setAttribute('aria-selected', 'false');
      }
    });

    // Centrado automático del tab activo con scroll suave en vista móvil
    const activeTab = tabs[idx];
    if (activeTab && shouldScroll) {
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  // Sincronización opcional de dots si están presentes en el DOM
  function updateDots(idx) {
    if (!dots || !dots.length) return;
    dots.forEach((dot, i) => {
      if (i === idx) {
        dot.className = 'venue-dot w-8 h-2 rounded-full bg-primary-container transition-all cursor-pointer';
      } else {
        dot.className = 'venue-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer';
      }
    });
  }

  // Desplazamiento del track del carrusel hacia el índice objetivo
  function goToSlide(targetIndex, animate = true, shouldScrollTab = true) {
    currentIndex = Math.max(0, Math.min(targetIndex, maxIndex));
    updateTabs(currentIndex, shouldScrollTab);
    updateDots(currentIndex);

    if (animate) {
      isTransitioning = true;
      track.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1)`;
    } else {
      track.style.transition = 'none';
      isTransitioning = false;
    }

    const percent = -(currentIndex * 100);
    track.style.transform = `translateX(${percent}%)`;
  }

  track.addEventListener('transitionend', (e) => {
    if (e.target !== track || e.propertyName !== 'transform') return;
    isTransitioning = false;
  });

  // Event Listeners: Clic en Tabs de sedes (Controlador oficial de paginación)
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = tab.getAttribute('data-index') !== null
        ? parseInt(tab.getAttribute('data-index'), 10)
        : index;
      if (!isNaN(idx)) {
        goToSlide(idx, true, true);
      }
    });
  });

  // Flechas Anterior y Siguiente
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentIndex > 0) goToSlide(currentIndex - 1, true, true);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentIndex < maxIndex) goToSlide(currentIndex + 1, true, true);
    });
  }

  // Clic en Puntos (Dots) si están presentes
  if (dots && dots.length) {
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(idx)) goToSlide(idx, true, true);
      });
    });
  }

  // --------------------------------------------------------------------------
  // INTERACCIÓN DRAG & SWIPE EN TIEMPO REAL (ESCRITORIO Y DISPOSITIVOS TÁCTILES)
  // --------------------------------------------------------------------------
  let isMouseDown = false;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  function getPositionX(e) {
    return e.type.includes('mouse')
      ? e.clientX
      : (e.touches && e.touches[0] ? e.touches[0].clientX : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0));
  }

  function dragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
      return;
    }

    isMouseDown = true;
    isDragging = false;
    startX = getPositionX(e);
    currentX = startX;
    track.style.transition = 'none';
  }

  function dragMove(e) {
    if (!isMouseDown) return;
    currentX = getPositionX(e);
    const diffX = currentX - startX;

    if (!isDragging && Math.abs(diffX) > 6) {
      isDragging = true;
      track.classList.remove('cursor-grab');
      track.classList.add('cursor-grabbing');
    }

    if (isDragging) {
      const sliderWidth = slider.offsetWidth;
      const baseOffset = -(currentIndex * sliderWidth);
      // Resistencia elástica en los límites
      let adjustedDiffX = diffX;
      if ((currentIndex === 0 && diffX > 0) || (currentIndex === maxIndex && diffX < 0)) {
        adjustedDiffX = diffX * 0.25;
      }
      const currentTranslate = baseOffset + adjustedDiffX;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }
  }

  function dragEnd() {
    if (!isMouseDown) return;
    isMouseDown = false;

    track.classList.remove('cursor-grabbing');
    track.classList.add('cursor-grab');

    if (isDragging) {
      const diffX = currentX - startX;
      const threshold = slider.offsetWidth * 0.15; // 15% del ancho del slide

      if (diffX < -threshold && currentIndex < maxIndex) {
        goToSlide(currentIndex + 1, true, true);
      } else if (diffX > threshold && currentIndex > 0) {
        goToSlide(currentIndex - 1, true, true);
      } else {
        goToSlide(currentIndex, true, true);
      }
    }

    isDragging = false;
  }

  track.addEventListener('mousedown', dragStart);
  window.addEventListener('mousemove', dragMove);
  window.addEventListener('mouseup', dragEnd);

  track.addEventListener('touchstart', dragStart, { passive: true });
  track.addEventListener('touchmove', dragMove, { passive: true });
  track.addEventListener('touchend', dragEnd);

  // Redimensionamiento de ventana
  window.addEventListener('resize', () => {
    if (!isDragging) {
      goToSlide(currentIndex, false, false);
    }
  });

  // Inicializar en la primera sede sin salto vertical en la carga inicial
  goToSlide(0, false, false);
}

// ----------------------------------------------------------------------------
// 2. MENÚ MÓVIL RESPONSIVE (DRAWER)
// ----------------------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  function toggleMenu() {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      menu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  function closeMenu() {
    menu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  toggleBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
}

// ----------------------------------------------------------------------------
// 3. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
// ----------------------------------------------------------------------------
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isClosed = content.classList.contains('grid-rows-[0fr]');

      // Cerrar los demás items (Acordeón único)
      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent && otherContent !== content) {
          otherContent.classList.remove('grid-rows-[1fr]', 'opacity-100');
          otherContent.classList.add('grid-rows-[0fr]', 'opacity-0');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Alternar el item actual
      if (isClosed) {
        content.classList.remove('grid-rows-[0fr]', 'opacity-0');
        content.classList.add('grid-rows-[1fr]', 'opacity-100');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.remove('grid-rows-[1fr]', 'opacity-100');
        content.classList.add('grid-rows-[0fr]', 'opacity-0');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 4. SCROLL EFFECTS & NAVBAR SCROLLSPY
// ----------------------------------------------------------------------------
function initScrollEffects() {
  const header = document.querySelector('header');
  const stripe = document.getElementById('header-stripe');
  const progressBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[data-path]');

  function updateHeaderOnScroll() {
    const scrollY = window.scrollY;
    if (!header) return;

    if (scrollY > 50) {
      header.classList.add(
        'bg-surface-container-lowest/95',
        'backdrop-blur-md',
        'shadow-lg'
      );
      header.classList.remove('bg-transparent');
      if (stripe) {
        stripe.classList.remove('opacity-0');
        stripe.classList.add('opacity-100');
      }
    } else {
      header.classList.remove(
        'bg-surface-container-lowest/95',
        'backdrop-blur-md',
        'shadow-lg'
      );
      header.classList.add('bg-transparent');
      if (stripe) {
        stripe.classList.remove('opacity-100');
        stripe.classList.add('opacity-0');
      }
    }
  }

  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = scrolled + '%';
  }

  function updateScrollspy() {
    const scrollY = window.scrollY;
    const offset = 250; // Margen natural de cálculo (200px - 300px)
    let currentId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    // Asegurar que si el usuario llega al final de la página se resalte la última sección (contacto)
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) currentId = lastSection.getAttribute('id');
    }

    if (currentId) {
      navLinks.forEach(link => {
        const targetHref = link.getAttribute('href');
        if (targetHref === `#${currentId}`) {
          link.classList.add('text-primary', 'drop-shadow-lg');
          link.classList.remove('text-white/90', 'text-on-surface-variant');
        } else {
          link.classList.remove('text-primary', 'drop-shadow-lg');
          link.classList.add('text-white/90');
        }
      });
    }
  }

  window.addEventListener('scroll', () => {
    updateHeaderOnScroll();
    updateScrollProgress();
    updateScrollspy();
  }, { passive: true });

  // Verificación inicial al cargar la página
  updateHeaderOnScroll();
  updateScrollProgress();
  updateScrollspy();
}

// ----------------------------------------------------------------------------
// 6. WIDGET FLOTANTE DE WHATSAPP (CIERRE DE BURBUJA)
// ----------------------------------------------------------------------------
function initWhatsAppWidget() {
  const closeBtn = document.getElementById('close-whatsapp-bubble');
  const bubble = document.getElementById('whatsapp-bubble');

  if (closeBtn && bubble) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      bubble.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
      setTimeout(() => {
        bubble.classList.add('hidden');
      }, 300);
    });
  }
}

// ----------------------------------------------------------------------------
// INICIALIZACIÓN ROBUSTA (COMPATIBLE CON CUALQUIER NAVEGADOR Y PROTOCOLO)
// ----------------------------------------------------------------------------
function initApp() {
  initHeroCarousel();
  initVenuesCarousel();
  initMobileMenu();
  initFaqAccordion();
  initScrollEffects();
  initWhatsAppWidget();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

