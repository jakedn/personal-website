/**
 * Header behavior
 * Handles the compact state on scroll and mobile menu toggle
 */

const header = document.querySelector('[data-header]');
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
const scrollThreshold = 100;

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--solid');
      header.classList.remove('header--transparent');
    } else {
      header.classList.remove('header--solid');
      header.classList.add('header--transparent');
    }
  }, { passive: true });
}

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    
    navToggle.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('hidden');
    
    if (iconMenu && iconClose) {
      iconMenu.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    }
    
    // Prevent body scroll when menu is open
    document.body.classList.toggle('overflow-hidden');
  });
}
