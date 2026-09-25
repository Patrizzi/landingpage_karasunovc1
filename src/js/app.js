import { VENUES_DATA } from './data/venues.js';

document.addEventListener('DOMContentLoaded', () => {
  initVenueTabs();
  initMobileMenu();
  initFaqAccordion();
  initScrollEffects();
});

/* ==========================================================================
   1. SEDES & HORARIOS (DYNAMIC TABS)
   ========================================================================== */
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
        venueMapsLink.href = venue.mapsUrl;

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

/* ==========================================================================
   2. MENÚ MÓVIL RESPONSIVE (DRAWER)
   ========================================================================== */
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

/* ==========================================================================
   3. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
   ========================================================================== */
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

/* ==========================================================================
   4. SCROLL EFFECTS & NAVBAR SCROLLSPY
   ========================================================================== */
function initScrollEffects() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[data-path]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('bg-[#101010]/95', 'shadow-lg');
        header.classList.remove('bg-[#121212]/90');
      } else {
        header.classList.remove('bg-[#101010]/95', 'shadow-lg');
        header.classList.add('bg-[#121212]/90');
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
