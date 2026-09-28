# Minera del Litoral S.R.L. — Sitio web

Sitio institucional one-page para **Minera del Litoral S.R.L.** (Colón, Entre Ríos):
transporte de cargas generales, materiales de construcción, cadena de frío, vehículos,
logística y transporte internacional.

## Stack

| Herramienta | Uso |
| --- | --- |
| [Vite 6](https://vite.dev) | Build tool y dev server |
| [React 19](https://react.dev) | UI |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos y design system (`@theme`) |
| [Framer Motion 12](https://motion.dev) | Animaciones de entrada y microinteracciones |
| [lucide-react](https://lucide.dev) | Iconografía |
| [@emailjs/browser](https://www.emailjs.com) | Envío del formulario de contacto |
| [react-swipeable](https://github.com/FormidableLabs/react-swipeable) | Gestos del carrusel de la galería |

## Puesta en marcha

```bash
npm install
npm run dev      # entorno de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # sirve el build
npm run lint     # ESLint
```

Requiere Node 20+.

## Estructura

```
src/
├─ App.jsx                     # Composición de la página (Navbar → Hero → secciones → Footer)
├─ index.css                   # Design system: tokens de color, tipografías, utilidades y componentes
├─ data/site.js                # ✏️ TODO EL CONTENIDO: marca, contacto, servicios, galería, valores
├─ hooks/
│  ├─ useScrollSpy.js          # Detecta la sección visible para resaltar el menú
│  └─ useLockBodyScroll.js     # Bloquea el scroll con el menú móvil abierto
└─ Components/
   ├─ Navbar/                  # Header fijo con blur, barra de progreso y menú móvil
   ├─ Banner/                  # Hero a pantalla completa + cinta de especialidades
   ├─ Servicios/               # Grilla de servicios destacados
   ├─ Nosotros/                # Sección institucional + valores + galería (carrusel)
   ├─ Contacto/                # Datos de contacto, mapa y formulario validado
   ├─ Footer/                  # Enlaces, contacto y redes
   ├─ FloatingActions/         # Botón de WhatsApp + volver arriba
   └─ UI/                      # Reveal (animación al hacer scroll) y SectionHeading
```

## Cómo editar el contenido

Casi todo se cambia en **`src/data/site.js`**: datos de la marca, teléfono/email/dirección,
servicios, valores institucionales, fotos de la galería y opciones del formulario.
Los componentes no contienen textos relevantes "hardcodeados".

## Formulario de contacto (EmailJS)

1. Copiá `.env.example` a `.env`.
2. Completá `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY`
   (si no se definen, se usan los valores por defecto declarados en `src/data/site.js`).
3. El formulario envía las variables `user_name`, `user_email`, `user_phone`, `service` y `message`.
   Si querés que teléfono y servicio lleguen al email, agregá esas variables a la plantilla de EmailJS.

## Diseño y accesibilidad

- **Design system** en `src/index.css`: paleta `steel` (azul industrial), `gold` (acentuación)
  y `ember` (fuego del logo), más utilidades propias (`container-x`, `card-surface`, `bg-grid`…).
- **Responsive mobile-first**: grillas de 1 → 2 → 3/4 columnas y navegación con panel desplegable.
- **Accesibilidad**: enlace "saltar al contenido", `aria-*` en menús y formularios, foco visible,
  textos alternativos reales en las fotos y soporte de `prefers-reduced-motion`.
- **Rendimiento**: imágenes optimizadas (`fleet-sunset-1920.jpg` 212 KB, `camion-minera-1600.jpg` 359 KB),
  favicon liviano (`favicon-128.png` 10 KB), `loading="lazy"` fuera del hero y `preload` de la imagen LCP.

## Assets en `public/`

- `fleet-sunset-1920.jpg` / `fleet-sunset-1280.jpg` — hero (derivadas de la imagen original de 7,5 MB).
- `camion-minera-1600.jpg` — sección Nosotros (versión optimizada del original).
- `1.jpeg` … `4.jpeg` — galería.
- `Flux_…png` — logo del header/footer · `favicon-128.png` — favicon.
- `logo-rojo.png` (1,7 MB) y `vecteezy_…jpg` (7,5 MB) quedan como originales de origen: si no se
  reutilizan, conviene eliminarlos para aligerar el repositorio.
