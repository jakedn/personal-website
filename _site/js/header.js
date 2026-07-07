/**
 * Header behavior
 * Handles the compact state on scroll
 */

const header = document.querySelector('[data-header]');
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
