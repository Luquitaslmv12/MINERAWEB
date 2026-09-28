import { ArrowRight, Check } from "lucide-react";
import { services } from "../../data/site";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

export default function Servicios() {
  return (
    <section id="servicios" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-gold opacity-70" aria-hidden="true" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que"
          highlight="movemos"
          description="Transporte de cargas generales, materiales de obra, cadena de frío, vehículos y logística de distribución, con coordinación de punta a punta."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map(({ icon: Icon, title, description, highlights }, index) => (
            <Reveal as="li" key={title} delay={index * 0.06} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/[0.07] lg:p-7">
                <span
                  className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-ember-500/10 text-gold-300 ring-1 ring-gold-400/25 transition-transform duration-500 group-hover:scale-105 group-hover:text-gold-200">
                  <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm/relaxed text-steel-300">{description}</p>

                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-steel-200/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal direction="up" className="mt-14">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-gold-400/25 bg-gradient-to-r from-gold-400/10 via-white/5 to-ember-500/10 p-7 sm:flex-row sm:items-center lg:p-9">
            <div>
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                ¿Tu carga necesita otra solución?
              </h3>
              <p className="mt-2 max-w-xl text-sm/relaxed text-steel-200">
                Contanos qué necesitás mover y te armamos una propuesta con tiempos y disponibilidad.
              </p>
            </div>
            <a href="#contacto" className="btn-primary w-full shrink-0 sm:w-auto">
              Pedir una cotización
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
