if (window.lucide) {
  window.lucide.createIcons();
}

const header = document.querySelector('.site-header');
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.18,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

const syncHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();
