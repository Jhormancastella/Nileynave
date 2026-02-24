(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    function setMenuOpen(isOpen) {
      if (!hamburger || !menu) return;
      hamburger.classList.toggle('active', isOpen);
      menu.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    if (hamburger && menu) {
      hamburger.setAttribute('aria-expanded', 'false');

      hamburger.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('active');
        setMenuOpen(isOpen);
      });

      document.querySelectorAll('.menu a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
      });

      document.addEventListener('click', (event) => {
        if (!menu.classList.contains('active')) return;
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
          setMenuOpen(false);
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.classList.contains('active')) {
          setMenuOpen(false);
          hamburger.focus();
        }
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function onAnchorClick(event) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });

    if (navbar) {
      const onScroll = () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    function adjustBodyPadding() {
      if (navbar) {
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
      }
    }

    window.addEventListener('load', adjustBodyPadding);
    window.addEventListener('resize', adjustBodyPadding);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    });

    function normalizePathname(pathname) {
      const clean = pathname.split('?')[0].split('#')[0];
      const file = clean.substring(clean.lastIndexOf('/') + 1);
      return file || 'index.html';
    }

    function normalizeHref(href) {
      if (!href) return '';
      if (href.startsWith('#')) return href;
      return href.split('?')[0].split('#')[0].split('/').pop() || 'index.html';
    }

    function setActiveLink() {
      const currentFile = normalizePathname(window.location.pathname);
      const currentHash = window.location.hash;

      document.querySelectorAll('.menu a').forEach((link) => {
        link.classList.remove('active');

        const href = link.getAttribute('href') || '';
        const normalizedHref = normalizeHref(href);

        if (href.startsWith('#')) {
          if (currentHash && href === currentHash) {
            link.classList.add('active');
          }
          return;
        }

        if (normalizedHref === currentFile) {
          link.classList.add('active');
        }
      });
    }

    setActiveLink();
    window.addEventListener('hashchange', setActiveLink);

    console.log('Nileynave listo para navegar.');
  });
})();
