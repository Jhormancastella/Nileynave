# Nileynave

Directorio web estático de recursos digitales, con enfoque en privacidad, creatividad y conocimiento libre.

## Estructura actual

- `index.html`: portada y acceso a categorías.
- `NE.html`: navegación esencial y filtros.
- `CL.html`: biblioteca y filtros rápidos.
- `CSF.html`: recursos creativos y modal de tutoriales.
- `style.css`: estilos globales.
- `main.js`: navegación común (navbar, menú móvil, enlaces activos, scroll).
- `js/theme.js`: modo claro/oscuro compartido.
- `js/page-ne.js`: lógica específica de Navegación Esencial.
- `js/page-cl.js`: lógica específica de Conocimiento Libre.
- `js/page-csf.js`: lógica específica de Creatividad sin Fronteras.

## Mejoras aplicadas

- Menú móvil accesible con botón real y atributos ARIA.
- Enlaces externos endurecidos con `rel="noopener noreferrer"`.
- Lógica de tema centralizada en un único archivo.
- Lógica específica de cada página separada en módulos JS.
- Corrección del contador en `CL.html` para valores como `1,247` y `100%`.
- `.gitignore` agregado para higiene del repositorio.

## Ejecutar en local

No requiere build. Abre `index.html` directamente o usa un servidor estático:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Próximos pasos recomendados

- Mover CSS inline de cada página a archivos por página (`css/pages/*.css`).
- Agregar validación automática (ESLint/Stylelint/HTMLHint).
- Agregar pruebas E2E para menú, filtros y tema.
