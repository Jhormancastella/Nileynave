(() => {
  'use strict';

  const THEME_KEY = 'tema';

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
  }

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function setTheme(theme) {
    document.body.setAttribute('data-tema', theme);
    const icon = document.querySelector('#temaToggle .tema-icono');
    if (icon) {
      icon.textContent = theme === 'claro' ? '🌙' : '☀️';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('temaToggle');
    if (!toggle) return;

    const initialTheme = getSavedTheme() || getSystemTheme();
    setTheme(initialTheme);

    toggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-tema') || 'claro';
      const next = current === 'claro' ? 'oscuro' : 'claro';

      setTheme(next);
      localStorage.setItem(THEME_KEY, next);

      toggle.style.transform = 'scale(0.9)';
      setTimeout(() => {
        toggle.style.transform = 'scale(1)';
      }, 150);
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (event) => {
      if (!getSavedTheme()) {
        setTheme(event.matches ? 'oscuro' : 'claro');
      }
    });
  });
})();
