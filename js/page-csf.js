(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria-creativa');
    const recursos = document.querySelectorAll('.recurso-card');

    if (!categorias.length || !recursos.length) return;

    function filtrarRecursos(categoriaSeleccionada) {
      recursos.forEach((recurso) => {
        recurso.style.display = (categoriaSeleccionada === 'todas' || recurso.dataset.categoria === categoriaSeleccionada)
          ? 'block'
          : 'none';
      });
    }

    categorias.forEach((categoria) => {
      categoria.addEventListener('click', function onCategoryClick() {
        categorias.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
        filtrarRecursos(this.dataset.categoria || 'todas');
      });
    });

    const categoriaInicial = document.querySelector('.categoria-creativa.active');
    filtrarRecursos(categoriaInicial ? categoriaInicial.dataset.categoria : 'todas');
  });
})();
