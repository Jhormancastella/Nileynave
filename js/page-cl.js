(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const filtrosRapidos = document.querySelectorAll('.filtro-rapido');
    const libros = document.querySelectorAll('.libro-card');

    filtrosRapidos.forEach((filtro) => {
      filtro.addEventListener('click', function onFilterClick() {
        filtrosRapidos.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');

        const categoria = this.dataset.categoria;

        libros.forEach((libro) => {
          libro.style.display = (categoria === 'todas' || libro.dataset.categoria === categoria) ? 'block' : 'none';
        });
      });
    });

    const contadores = document.querySelectorAll('.estadistica-numero');

    function parseNumericValue(text) {
      const cleaned = text.replace(/[^\d.,]/g, '').replace(/,/g, '');
      const value = Number.parseInt(cleaned, 10);
      return Number.isNaN(value) ? 0 : value;
    }

    function formatValue(value, original) {
      if (original.includes('%')) return `${value}%`;
      return value.toLocaleString('es-ES');
    }

    function animarContadores() {
      contadores.forEach((contador) => {
        const original = contador.textContent.trim();
        const target = parseNumericValue(original);
        if (target <= 0) return;

        const durationMs = 1200;
        const frameMs = 16;
        const steps = Math.max(1, Math.floor(durationMs / frameMs));
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          contador.textContent = formatValue(Math.floor(current), original);
        }, frameMs);
      });
    }

    const statsSection = document.querySelector('.estadisticas');
    if (!statsSection) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animarContadores();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(statsSection);
    } else {
      animarContadores();
    }
  });
})();
