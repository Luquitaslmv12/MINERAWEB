import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Route } from "lucide-react";
import { brand, trustItems, whatsappLink } from "../../data/site";

const HERO_IMAGE = {
  src: "/fleet-sunset-1920.jpg",
  srcSet: "/fleet-sunset-1280.jpg 1280w, /fleet-sunset-1920.jpg 1920w",
};

const MARQUEE_WORDS = [
  "Cargas generales",
  "Materiales de construcción",
  "Cadena de frío",
  "Maquinaria y vehículos",
  "Logística integral",
  "Mercosur",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Banner() {
  const shouldReduceMotion = useReducedMotion();
  const introProps = shouldReduceMotion ? {} : { initial: "hidden", animate: "visible" };

  return (
    <>
      <section
        id="inicio"
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28 lg:pb-24"
      >
        {/* Imagen de fondo (LCP) */}
        <img
          src={HERO_IMAGE.src}
          srcSet={HERO_IMAGE.srcSet}
          sizes="100vw"
          alt="Flota de camiones de Minera del Litoral alineados en la ruta al atardecer"
          width="1920"
          height="1044"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Capas de color y textura */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-steel-950 via-steel-950/85 to-steel-900/70" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-radial-gold" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-radial-ember" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(75%_60%_at_50%_35%,black,transparent)]"
          aria-hidden="true"
        />

        <div className="container-x relative">
          <motion.div variants={containerVariants} {...introProps} className="max-w-3xl">
            <motion.span variants={itemVariants} className="eyebrow">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Colón, Entre Ríos · Argentina
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {brand.name} <span className="text-gradient">S.R.L.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg/relaxed text-steel-200 sm:text-xl/relaxed">
              {brand.slogan}. Transportamos tu mercadería a todo el país y al Mercosur con unidades
              preparadas y seguimiento real del viaje.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Cotizar por WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#servicios" className="btn-outline w-full sm:w-auto">
                Ver servicios
                <Route className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* Pilares de confianza */}
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {trustItems.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : 0.55 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-surface rounded-2xl p-5 transition-colors duration-300 hover:border-gold-400/30"
              >
                <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
                <p className="mt-4 font-display text-sm font-bold text-white">{title}</p>
                <p className="mt-1.5 text-sm/relaxed text-steel-300">{description}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Indicador de scroll */}
        <a
          href="#servicios"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-steel-400 transition-colors duration-300 hover:text-gold-300 lg:flex"
        >
          <span className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase">Deslizá</span>
          <ChevronDown className="h-5 w-5 animate-bounce-soft" aria-hidden="true" />
        </a>
      </section>

      {/* Cinta de especialidades */}
      <div
        className="relative overflow-hidden border-y border-white/10 bg-steel-900/40 py-4"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center gap-10 text-xs font-semibold tracking-[0.3em] text-steel-400 uppercase sm:text-sm"
            >
              {word}
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400/70" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
