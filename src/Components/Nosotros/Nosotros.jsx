import { useCallback, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { aboutImage, brand, contact, gallery, values, whatsappLink } from "../../data/site";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const AUTOPLAY_MS = 4500;
const GAP = 20; // debe coincidir con el `gap-5` del track

export default function Nosotros() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef(null);
  const firstSlideRef = useRef(null);

  const total = gallery.length;
  const maxIndex = Math.max(0, total - perView);

  /** Mide cuántas tarjetas entran en pantalla para mover el carrusel con precisión. */
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const slide = firstSlideRef.current;
    if (!viewport || !slide) return;

    const width = slide.offsetWidth;
    setSlideWidth(width);
    setPerView(Math.max(1, Math.min(total, Math.round((viewport.offsetWidth + GAP) / (width + GAP)))));
  }, [total]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback((next) => setIndex(Math.min(Math.max(next, 0), maxIndex)), [maxIndex]);

  // Autoplay con pausa al interactuar o al cambiar de pestaña
  useEffect(() => {
    if (isPaused || shouldReduceMotion || maxIndex === 0) return undefined;

    const timer = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion, maxIndex]);

  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goTo(index + 1),
    onSwipedRight: () => goTo(index - 1),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  };

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-gold-400/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:bg-white/5";

  return (
    <section id="nosotros" className="relative overflow-hidden border-t border-white/5 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-ember opacity-60" aria-hidden="true" />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Imagen de la empresa */}
          <Reveal direction="right" className="relative">
            <div className="relative overflow-hidden rounded-4xl border border-white/10">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                width={aboutImage.width}
                height={aboutImage.height}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover sm:aspect-16/11"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-steel-950/85 via-steel-950/10 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="card-surface absolute -bottom-6 left-5 flex items-center gap-4 rounded-2xl p-4 sm:left-8 sm:max-w-xs">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/30">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">{brand.legal}</p>
                <p className="text-xs text-steel-300">{contact.address}</p>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Nosotros"
              title="Transporte con"
              highlight="respaldo local"
              description="Con base en Colón, Entre Ríos, movemos cargas generales, materiales de obra y mercadería que tiene que llegar en tiempo y forma."
            />

            <p className="mt-6 text-sm/relaxed text-steel-300 sm:text-base/relaxed">
              Cuidamos cada etapa del viaje: revisión de la unidad, sujeción de la carga, seguimiento en
              ruta y confirmación de entrega. Cuando necesitás saber dónde está tu carga, hablás
              directamente con quien la coordina.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn-primary w-full sm:w-auto">
                Solicitar una cotización
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappLink("¡Hola! Quisiera consultar disponibilidad para un viaje.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto"
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>

        <ul className="mt-20 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }, valueIndex) => (
            <Reveal as="li" key={title} delay={valueIndex * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-gold-400/30 hover:bg-white/[0.06]">
                <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
                <h3 className="font-display text-base font-bold">{title}</h3>
                <p className="text-sm/relaxed text-steel-300">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Galería */}
      <div id="galeria" className="mt-20 scroll-mt-24 border-t border-white/5 pt-16 lg:mt-24 lg:pt-20">
        <div className="container-x">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Galería"
              title="Unidades y operaciones"
              highlight="en ruta"
              description="Un repaso del trabajo diario: cargas, predio y viajes por la región."
            />

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
                aria-label="Foto anterior"
                className={arrowClass}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                disabled={index >= maxIndex}
                aria-label="Foto siguiente"
                className={arrowClass}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={viewportRef}
            {...swipeHandlers}
            role="group"
            aria-roledescription="carrusel"
            aria-label="Galería de fotos de unidades y operaciones"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="mt-10 overflow-hidden rounded-3xl"
          >
            <ul
              className="flex gap-5 transition-transform duration-700 ease-out"
              style={{ transform: `translate3d(-${index * (slideWidth + GAP)}px, 0, 0)` }}
            >
              {gallery.map((image, imageIndex) => (
                <li
                  key={image.src}
                  ref={imageIndex === 0 ? firstSlideRef : null}
                  className="w-[85%] shrink-0 sm:w-[58%] lg:w-[39%] xl:w-[31%]"
                >
                  <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-steel-900">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-steel-950/90 via-steel-950/20 to-transparent"
                      aria-hidden="true"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 font-display text-sm font-semibold text-white">
                      {image.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2.5">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Ir a la posición ${dotIndex + 1} de la galería`}
                aria-current={dotIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  dotIndex === index ? "w-8 bg-gold-400" : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
