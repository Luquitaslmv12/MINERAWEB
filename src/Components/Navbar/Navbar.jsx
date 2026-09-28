import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { brand, contact, navLinks, whatsappLink } from "../../data/site";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useScrollSpy from "../../hooks/useScrollSpy";

/** Constantes a nivel de módulo (referencias estables para los hooks). */
const SECTION_IDS = navLinks.map((link) => link.id);
const PANEL_ID = "menu-movil";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const activeId = useScrollSpy(SECTION_IDS);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 24);
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-steel-950/85 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-steel-950/90 via-steel-950/50 to-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-3 lg:h-20">
        {/* Marca */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-2.5 rounded-full py-2 lg:gap-3"
          aria-label={`${brand.legal} — volver al inicio`}
        >
          <img
            src={brand.logo}
            alt=""
            width="500"
            height="500"
            className="h-10 w-10 object-contain drop-shadow-[0_6px_18px_rgba(247,187,31,0.35)] lg:h-12 lg:w-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-extrabold tracking-[0.2em] text-white uppercase sm:text-base">
              Minera
            </span>
            <span className="text-[0.6rem] font-semibold tracking-[0.3em] text-gold-300 uppercase sm:text-[0.65rem]">
              del Litoral
            </span>
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav aria-label="Secciones del sitio" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-steel-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Acciones rápidas */}
        <div className="flex items-center gap-2 lg:gap-3">
          <a
            href={`tel:+${contact.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-steel-300 transition hover:text-white xl:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-xs font-semibold text-steel-950 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 sm:inline-flex"
          >
            Cotizar ahora
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls={PANEL_ID}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Progreso de lectura */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-gold-400 via-gold-300 to-ember-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={PANEL_ID}
            key="panel-movil"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/10 bg-steel-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Secciones del sitio (móvil)" className="container-x flex flex-col gap-5 py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ id, label, icon: Icon }) => {
                  const isActive = activeId === id;

                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-base font-medium transition ${
                          isActive
                            ? "border-gold-400/40 bg-gold-400/10 text-white"
                            : "border-white/10 bg-white/5 text-steel-200 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-gold-300" aria-hidden="true" />
                          {label}
                        </span>
                        <ArrowRight className="h-4 w-4 text-steel-400" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-col gap-3 border-t border-white/10 pt-5">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="btn-whatsapp w-full"
                >
                  Escribir por WhatsApp
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:+${contact.phoneRaw}`}
                    onClick={closeMenu}
                    className="btn-outline px-4 py-3 text-xs"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Llamar
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    onClick={closeMenu}
                    className="btn-outline px-4 py-3 text-xs"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
