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
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

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

  // Botón Anterior
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isTransitioning) return;
      goToSlide(currentIndex - 1, true);
      resetAutoplay();
    });
  }

  // Botón Siguiente
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isTransitioning) return;
      goToSlide(currentIndex + 1, true);
      resetAutoplay();
    });
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
    if (e.target.closest('button, a, input, select, textarea, [role="button"], #hero-dots, #hero-prev, #hero-next')) {
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
// 1. SEDES & HORARIOS (DYNAMIC TABS)
// ----------------------------------------------------------------------------
function initVenueTabs() {
  const tabs = document.querySelectorAll('.venue-tab');
  const venueTitle = document.getElementById('venue-title');
  const venueStatus = document.getElementById('venue-status');
  const venueAddress = document.getElementById('venue-address');
  const venueMapsLink = document.getElementById('venue-maps-link');
  const venueSchedulesContainer = document.getElementById('venue-schedules-container');

  if (!tabs.length || !venueTitle) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const venueKey = tab.dataset.venue;
      const venue = VENUES_DATA[venueKey];
      if (!venue) return;

      // Update active tab styles (minimalist, no glow)
      tabs.forEach(t => {
        t.classList.remove('bg-primary-container', 'text-white');
        t.classList.add('bg-surface-container-low', 'border', 'border-white/5', 'text-on-surface-variant');
      });
      tab.classList.remove('bg-surface-container-low', 'border', 'border-white/5', 'text-on-surface-variant');
      tab.classList.add('bg-primary-container', 'text-white');

      // Animate container out/in
      const container = document.getElementById('venue-details-card');
      if (container) {
        container.style.opacity = '0.4';
        container.style.transform = 'translateY(4px)';
        container.style.transition = 'all 0.25s ease';
      }

      setTimeout(() => {
        // Update content
        venueTitle.textContent = venue.name;
        venueStatus.textContent = venue.statusBadge;
        venueAddress.textContent = venue.address;
        if (venueMapsLink) venueMapsLink.href = venue.mapsUrl;

        // Status badge colors
        if (venue.statusColor === 'amber') {
          venueStatus.className = 'px-2 py-0.5 rounded text-[10px] font-label-caps uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20';
        } else {
          venueStatus.className = 'px-2 py-0.5 rounded text-[10px] font-label-caps uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/20';
        }

        // Render schedules
        if (venueSchedulesContainer) {
          venueSchedulesContainer.innerHTML = venue.schedules.map(sch => `
            <div class="flex flex-col p-5 rounded-lg border border-white/5 bg-surface-container-lowest/60 hover:border-white/10 transition-colors">
              <div class="flex items-center justify-between mb-3 text-xs">
                <span class="font-label-caps text-primary text-[10px] uppercase tracking-wider">${sch.badge}</span>
                <span class="text-on-surface-variant font-label-caps text-[10px] px-2 py-0.5 rounded bg-white/5">${sch.slots}</span>
              </div>
              <span class="font-title-md text-base text-on-surface font-semibold">${sch.days}</span>
              <span class="font-headline-sm text-xl text-on-surface font-bold mt-1 mb-4">${sch.hours}</span>
              <div class="space-y-1.5 mt-auto pt-3 border-t border-white/5 text-on-surface-variant font-body-sm text-xs">
                ${sch.details.map(item => `<div class="flex items-center gap-2"><span>• ${item}</span></div>`).join('')}
              </div>
            </div>
          `).join('');
        }

        if (container) {
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        }
      }, 150);
    });
  });
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
      const isOpen = !content.classList.contains('hidden');

      // Close all other items
      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent && otherContent !== content) {
          otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
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

  window.addEventListener('scroll', () => {
    updateHeaderOnScroll();
    updateScrollProgress();

    // Scrollspy active state
    const scrollY = window.scrollY;
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-on-surface-variant');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('text-primary');
          link.classList.remove('text-on-surface-variant');
        }
      });
    }
  }, { passive: true });

  // Verificación inicial al cargar la página
  updateHeaderOnScroll();
  updateScrollProgress();
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
  initVenueTabs();
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

