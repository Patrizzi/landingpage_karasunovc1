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
// 0. HERO CAROUSEL / SLIDER (CATEGORÍAS DEPORTIVAS)
// ----------------------------------------------------------------------------
function initHeroCarousel() {
  const heroSection = document.getElementById('hero');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (!slides || slides.length === 0 || !heroSection) return;

  let currentSlide = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 5000; // 5 segundos

  // Pre-cargar imágenes para transiciones inmediatas sin parpadeo
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img && img.src) {
      const preload = new Image();
      preload.src = img.src;
      img.setAttribute('draggable', 'false');
    }
  });

  // Función para cambiar de slide
  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    // Actualizar visibilidad de slides con transición CSS inline infalible
    slides.forEach((slide, idx) => {
      slide.style.transition = 'opacity 0.8s ease-in-out';
      if (idx === currentSlide) {
        slide.style.opacity = '1';
        slide.style.zIndex = '5';
        slide.style.pointerEvents = 'auto';
        slide.classList.remove('opacity-0', 'pointer-events-none');
        slide.classList.add('opacity-100');
      } else {
        slide.style.opacity = '0';
        slide.style.zIndex = '1';
        slide.style.pointerEvents = 'none';
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    // Actualizar estilo visual de los dots
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.className = 'hero-dot w-8 h-2 rounded-full bg-primary-container transition-all cursor-pointer';
      } else {
        dot.className = 'hero-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer';
      }
    });
  }

  // Autoplay continuo cada 5 segundos
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Reinicia el temporizador de 5 segundos tras interacción manual
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Botón Anterior
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToSlide(currentSlide - 1);
      resetAutoplay();
    });
  }

  // Botón Siguiente
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToSlide(currentSlide + 1);
      resetAutoplay();
    });
  }

  // Puntos / Dots
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSlide(idx);
        resetAutoplay();
      }
    });
  });

  // --------------------------------------------------------------------------
  // ARRASTRE CON EL MOUSE (MOUSE DRAG / SWIPE)
  // --------------------------------------------------------------------------
  let isMouseDown = false;
  let isDragging = false;
  let mouseStartX = 0;
  let mouseCurrentX = 0;

  heroSection.classList.add('cursor-grab');

  heroSection.addEventListener('mousedown', (e) => {
    // Solo botón principal izquierdo (botón 0)
    if (e.button !== 0) return;
    // Ignorar si el clic fue en botones, enlaces o elementos interactivos
    if (e.target.closest('button, a, input, [role="button"], #hero-dots, #hero-prev, #hero-next')) {
      return;
    }

    isMouseDown = true;
    isDragging = false;
    mouseStartX = e.clientX;
    mouseCurrentX = e.clientX;
    heroSection.classList.remove('cursor-grab');
    heroSection.classList.add('cursor-grabbing');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    mouseCurrentX = e.clientX;
    const diff = mouseCurrentX - mouseStartX;
    if (Math.abs(diff) > 8) {
      isDragging = true;
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isMouseDown) return;
    isMouseDown = false;
    heroSection.classList.remove('cursor-grabbing');
    heroSection.classList.add('cursor-grab');

    if (isDragging) {
      const diff = mouseCurrentX - mouseStartX;
      const DRAG_THRESHOLD = 40; // Mínimo 40px para activar el cambio
      if (Math.abs(diff) > DRAG_THRESHOLD) {
        if (diff < 0) {
          goToSlide(currentSlide + 1); // Arrastre izquierda -> siguiente
        } else {
          goToSlide(currentSlide - 1); // Arrastre derecha -> anterior
        }
        resetAutoplay();
      }
    }
    isDragging = false;
  });

  // --------------------------------------------------------------------------
  // GESTOS TÁCTILES (TOUCH SWIPE)
  // --------------------------------------------------------------------------
  let touchStartX = 0;
  let touchCurrentX = 0;

  heroSection.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchCurrentX = touchStartX;
    }
  }, { passive: true });

  heroSection.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length === 1) {
      touchCurrentX = e.touches[0].clientX;
    }
  }, { passive: true });

  heroSection.addEventListener('touchend', () => {
    const diff = touchCurrentX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        goToSlide(currentSlide + 1); // Swipe izquierda -> siguiente
      } else {
        goToSlide(currentSlide - 1); // Swipe derecha -> anterior
      }
      resetAutoplay();
    }
  });

  // Estado inicial
  goToSlide(0);

  // Iniciar carrusel automático de 5 segundos
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
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[data-path]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('bg-surface-container-lowest/95', 'shadow-lg');
        header.classList.remove('bg-surface-container-lowest/90');
      } else {
        header.classList.remove('bg-surface-container-lowest/95', 'shadow-lg');
        header.classList.add('bg-surface-container-lowest/90');
      }
    }

    // Scrollspy active state
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
  });
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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
