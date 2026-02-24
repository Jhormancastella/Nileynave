(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const filtroCategoria = document.getElementById('filtroCategoria');
    const filtroPrivacidad = document.getElementById('filtroPrivacidad');
    const filtroPrecio = document.getElementById('filtroPrecio');
    const btnLimpiarFiltros = document.getElementById('btnLimpiarFiltros');
    const herramientas = document.querySelectorAll('.herramienta-card');

    if (!filtroCategoria || !filtroPrivacidad || !filtroPrecio || !btnLimpiarFiltros) return;

    function filtrarHerramientas() {
      const categoria = filtroCategoria.value;
      const privacidad = filtroPrivacidad.value;
      const precio = filtroPrecio.value;

      herramientas.forEach((herramienta) => {
        const cumpleCategoria = categoria === 'todas' || herramienta.dataset.categoria === categoria;
        const cumplePrivacidad = privacidad === 'todos' || herramienta.dataset.privacidad === privacidad;
        const cumplePrecio = precio === 'todos' || herramienta.dataset.precio === precio;

        herramienta.style.display = (cumpleCategoria && cumplePrivacidad && cumplePrecio) ? 'block' : 'none';
      });
    }

    filtroCategoria.addEventListener('change', filtrarHerramientas);
    filtroPrivacidad.addEventListener('change', filtrarHerramientas);
    filtroPrecio.addEventListener('change', filtrarHerramientas);

    btnLimpiarFiltros.addEventListener('click', () => {
      filtroCategoria.value = 'todas';
      filtroPrivacidad.value = 'todos';
      filtroPrecio.value = 'todos';
      filtrarHerramientas();
    });

    filtrarHerramientas();
  });
})();
