import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { brand, contact, navLinks, services, socials } from "../../data/site";

const SOCIAL_ICONS = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin };

export default function Footer() {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-steel-950" role="contentinfo">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-12">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={brand.logo}
                alt=""
                width="500"
                height="500"
                loading="lazy"
                decoding="async"
                className="h-12 w-12 object-contain"
              />
              <div className="leading-none">
                <p className="font-display text-base font-extrabold tracking-[0.18em] text-white uppercase">
                  Minera
                </p>
                <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-gold-300 uppercase">
                  del Litoral
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm/relaxed text-steel-400">{brand.description}</p>

            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ label, href, network }) => {
                const Icon = SOCIAL_ICONS[network];

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-steel-300 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/40 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h2 className="font-display text-xs font-bold tracking-[0.22em] text-white uppercase">Servicios</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#servicios" className="text-sm text-steel-400 transition hover:text-gold-300">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto y navegación */}
          <div>
            <h2 className="font-display text-xs font-bold tracking-[0.22em] text-white uppercase">Contacto</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-steel-400">
              <li>
                <a
                  href={`tel:+${contact.phoneRaw}`}
                  className="flex items-start gap-3 transition hover:text-gold-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 transition hover:text-gold-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition hover:text-gold-300"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                  {contact.address}
                </a>
              </li>
            </ul>

            <nav aria-label="Navegación del sitio" className="mt-7">
              <h3 className="font-display text-xs font-bold tracking-[0.22em] text-white uppercase">
                Navegación
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-steel-400">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="transition hover:text-gold-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs text-steel-500 sm:text-left">
            © {new Date().getFullYear()} {brand.legal}. Todos los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-steel-300 transition hover:border-gold-400/40 hover:text-white"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
