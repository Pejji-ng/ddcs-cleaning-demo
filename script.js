// Deng Details Cleaning Services - Demo Interactions

(function() {
    'use strict';

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobMenu = document.getElementById('mob-menu');
    const nav = document.getElementById('nav');

    if (navToggle && mobMenu) {
        navToggle.addEventListener('click', () => {
            mobMenu.classList.toggle('active');
            nav.classList.toggle('menu-open');
        });

        // Close on link click
        mobMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobMenu.classList.remove('active');
                nav.classList.remove('menu-open');
            });
        });
    }

    // Cookie consent
    const consent = document.getElementById('cookie-consent');
    const accept = document.getElementById('cookie-accept');
    const STORAGE_KEY = 'deng-details-cookie-consent-v1';

    if (consent && !localStorage.getItem(STORAGE_KEY)) {
        // Delay slightly so page paints first
        setTimeout(() => { consent.hidden = false; }, 800);
    }

    if (accept) {
        accept.addEventListener('click', () => {
            localStorage.setItem(STORAGE_KEY, 'accepted-' + Date.now());
            if (consent) consent.hidden = true;
        });
    }

    // Smooth scroll for in-page anchors (extra easing on top of CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id === '#' || id.length < 2) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
