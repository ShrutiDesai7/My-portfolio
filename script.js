// Smooth scrolling for navbar links and active state

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));

  // Smooth scroll
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active link switching on scroll
  window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY + 120;
    sections.forEach((section, idx) => {
      if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        links.forEach(l => l.classList.remove('active'));
        links[idx].classList.add('active');
      }
    });
  });
});
